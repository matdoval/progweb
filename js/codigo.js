function displayPicture(element){
    var frame = document.getElementById('frame');
    var texto = document.getElementById('texto');
    texto.innerHTML = element.alt;
    frame.style.backgroundImage="url('"+element.src+"')";
    element.style.opacity = 1.0;
}

function undisplayPicture(element){
    var frame = document.getElementById('frame');
    var texto = document.getElementById('texto');
    texto.innerHTML = "Passe o mouse em cima de uma imagem";
    frame.style.backgroundImage="none";
    element.style.opacity = 0.5;
}
