const topSongsButton = document.getElementById("topSongsButton");
const topArtistsButton = document.getElementById("topArtistsButton");
const recentSongsButton = document.getElementById("recentSongsButton");
const ConfigurarPlayerButton = document.getElementById("ConfigurarPlayerButton");
const muteButton = document.getElementById("muteButton");
const nextButton = document.getElementById("nextButton");
const pauseButton = document.getElementById("pauseButton");
const prevButton = document.getElementById("prevButton");
const caixaMusica = document.getElementById("caixa-musica");
const caixaArtista = document.getElementById("caixa-artista"); 
const caixaRecente = document.getElementById("caixa-musica-recente");
const playingMusica = document.getElementById("playing-musica"); 
const ImagemPausePlay = document.getElementById("imagem-pause-play");

topSongsButton.onclick = function() {
    if (caixaMusica.style.display != 'block') {
        caixaMusica.style.display = 'block';
        caixaArtista.style.display = 'none';
        caixaRecente.style.display = 'none';
        caixaPlayer.style.display = 'none'; 
        
    } else {
        caixaMusica.style.display = 'none';
    } 
};

topArtistsButton.onclick = function() {
    if (caixaArtista.style.display != 'block') {
        caixaArtista.style.display = 'block';
        caixaMusica.style.display = 'none';
        caixaRecente.style.display = 'none';
        caixaPlayer.style.display = 'none';
    } else {
        caixaArtista.style.display = 'none';
    }
};  

recentSongsButton.onclick = function() {
    if (caixaRecente.style.display != 'block') {
        caixaRecente.style.display = 'block';
        caixaMusica.style.display = 'none';
        caixaArtista.style.display = 'none';
        caixaPlayer.style.display = 'none';
    } else {
        caixaRecente.style.display = 'none';
    }
}

muteButton.onclick = function() {
    var url = 'http://localhost:8888/mute';
    window.location.href = url;
}

pauseButton.onclick = function() {
    var url = 'http://localhost:8888/pause';
    window.location.href = url;
}

nextButton.onclick = function() {
    var url = 'http://localhost:8888/next';
    window.location.href = url;
}

prevButton.onclick = function() {
    var url = 'http://localhost:8888/prev';
    window.location.href = url;
}
ConfigurarPlayerButton.onclick = function() {
    var url = 'http://localhost:8888/config';
    window.location.href = url;
}


