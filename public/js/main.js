const topSongsButton = document.getElementById("topSongsButton");
const topArtistsButton = document.getElementById("topArtistsButton");
const recentSongsButton = document.getElementById("recentSongsButton");
const caixaMusica = document.getElementById("caixa-musica");
const caixaArtista = document.getElementById("caixa-artista"); 
const caixaRecente = document.getElementById("caixa-musica-recente");

topSongsButton.onclick = function() {
    if (caixaMusica.style.display != 'block') {
        caixaMusica.style.display = 'block';
        caixaArtista.style.display = 'none';
        caixaRecente.style.display = 'none'; 
        
    } else {
        caixaMusica.style.display = 'none';
    } 
};

topArtistsButton.onclick = function() {
    if (caixaArtista.style.display != 'block') {
        caixaArtista.style.display = 'block';
        caixaMusica.style.display = 'none';
        caixaRecente.style.display = 'none';
    } else {
        caixaArtista.style.display = 'none';
    }
}; 

recentSongsButton.onclick = function() {
    if (caixaRecente.style.display != 'block') {
        caixaRecente.style.display = 'block';
        caixaMusica.style.display = 'none';
        caixaArtista.style.display = 'none';
    } else {
        caixaRecente.style.display = 'none';
    }
}
