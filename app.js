document.addEventListener('DOMContentLoaded', function () {
    var pixels = document.getElementsByClassName('pixel')
    var brushColor = "white"
    var paints = document.getElementsByClassName('paint')
    var current = document.getElementById('currentColor')
    function setPixelColor(event) {
        event.target.style.backgroundColor = brushColor
    }
    console.log(brushColor)
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', setPixelColor)
    }
        function changeBrushColor(event) {
        brushColor = event.target.className.split(" ")[1]
        current.style.backgroundColor = brushColor
        console.log(event.target.className.split(" ")[1])
    }
    for (var i = 0; i < paints.length; i++) {
        paints[i].addEventListener('click', changeBrushColor)
    }
    // function setBrushColor() {
    //     var brushColor = document.getElementsByClassName('paint').backgroundColor
    // }

    // function setPixelColor()

    // for (var i = 0; i <= pixels.length; i++) {
    //     pixels[i].addEventListener('click', setBrushColor)
    //     console.log(brushColor)
    // }


    // for (var i = 0; i <= paints.length; i++) {

    // } 



    // current.style.backgroundColor = brushColor
    // function currentColor(event) {
    //     event.target.style.backgroundColor = brushColor
    // }

    // current.addEventListener('click', currentColor)

    // function changePixelColor(event) {
    //     event.target.style.backgroundColor = paintBrush
    // }


    // for (var i = 0; i <= pixels.length; i++) {
    //     function setPixelColor(event) {
    //         pixels[i].addEventListener('click', changePixelColor)
    //     }
    // }

})