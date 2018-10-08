document.addEventListener('DOMContentLoaded', function () {
    var pixels = document.getElementsByClassName('pixel')
    var brushColor = 'white'
    var paints = document.getElementsByClassName('paint')
    var current = document.getElementById('currentColor')

    function setPixelColor(event) {
        event.target.style.backgroundColor = brushColor
    }

    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', setPixelColor)
    }

    function changeBrushColor(event) {
        brushColor = event.target.className.split('')[1]
        current.style.backgroundColor = brushColor
    }
    for (var i = 0; i < paints.length; i++) {
        paints[i].addEventListener('click', changeBrushColor)
    }
})