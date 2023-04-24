var PlaylistUri = "";
var DeviceId = "";

let PlayButton = document.getElementById("Play");

function Teste(target) {
    target.style.border = "2px solid #1AA34A";
    PlaylistUri = target.id;
} 

function Teste2(target) {
    target.style.border = "2px solid #1AA34A";
    DeviceId = target.id;
}

PlayButton.onclick = function() {
    var url = `http://localhost:8888/play?playlist=${PlaylistUri}&device=${DeviceId}`;
    window.location.href = url;
}


