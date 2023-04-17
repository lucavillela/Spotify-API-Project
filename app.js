const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const port = 8888;
const scopes = [
    //'ugc-image-upload',
    //'user-read-playback-state',
    //'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    //'app-remote-control',
    'user-read-email',
    'user-read-private',
    //'playlist-read-collaborative',
    //'playlist-modify-public',
    //'playlist-read-private',
    //'playlist-modify-private',
    //'user-library-modify',
    'user-library-read',
    'user-top-read',
    //'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read'
    //'user-follow-modify'
];

var spotifyApi = new SpotifyWebApi({
    clientId: "< CLIENT_ID >",
    clientSecret: "< CLIENT_SECRET >",
    redirectUri: "http://localhost:8888/callback",
});

const app = express();

app.use(express.static('public'));
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/js", express.static(__dirname + '/public/js'));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('', (req, res) => {
    res.render("login");
});

app.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
});  

app.get('/callback', (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;
  
    if (error) {
      console.error('Callback Error:', error);
      res.send(`Callback Error: ${error}`);
      return;
    }
   
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];
  
        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);
  
        console.log('access_token:', access_token);
        console.log('refresh_token:', refresh_token);
  
        console.log(
          `Token obtido com sucesso. Expira em: ${expires_in} s.`
        );
   
        setInterval(async () => {
          const data = await spotifyApi.refreshAccessToken();
          access_token = data.body['access_token'];
  
          console.log('O token foi atualizado');
          console.log('access_token:', access_token);
          spotifyApi.setAccessToken(access_token);
        }, expires_in / 2 * 1000);

        res.redirect('/main');
      })
      .catch(error => {
        console.error('Erro ao obter Tokens:', error);
        res.send(`Erro ao obter os Tokens: ${error}`);
      });
});

app.get('/main', (req, res) => {
  Promise.all([
    spotifyApi.getMyTopArtists({limit: 20}),
    spotifyApi.getMyTopTracks({limit: 20}),
    spotifyApi.getMyRecentlyPlayedTracks({
      limit: 20
    })
  ])
  .then(function([artistData, trackData, recentlyPlayedData]) {
    let artistas = artistData.body.items.map(artist => artist.name).join(', ');
    let musicas = trackData.body.items.map(track => `${track.name} - ${track.artists[0].name}`).join(', ');
    let musicasRecentes = recentlyPlayedData.body.items.map(item => `${item.track.name} - ${item.track.artists[0].name}`).join(', ');
    res.render("main", {artistas: artistas, musicas: musicas, musicasRecentes: musicasRecentes});
  }, function(err) {
    console.error(err);
    res.send("Algo deu errado!");
  }); 
});
   
app.listen(port, () => console.info("Site rodando no http://localhost:8888"));
