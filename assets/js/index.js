$(document).ready(function() {
    // -------- change text -------------//
    let texts = ['D', 'De', 'Del', 'Delt', 'Delta', 'Delta M', 'Delta Mi', 'Delta Min', 'Delta Mine', 'Delta Minec', 'Delta Minecr', 'Delta Minecra', 'Delta Minecraf', 'Delta Minecraft', 'Delta Minecraft S', 'Delta Minecraft Se', 'Delta Minecraft Ser', 'Delta Minecraft Serv', 'Delta Minecraft Serve', 'Delta Minecraft Server'];
    let number = 0;
    let html = document.getElementById('txt-rotate');

    function txtRotate() {
        number++;
        if (number >= texts.length) {
            texts.reverse();
            number = 0;
        }
        html.innerHTML = texts[number];
    }
    setInterval(txtRotate, 300);
    // -------- Slider ------------- //
    var index = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName('slider-img');
        var dots = document.getElementsByClassName('dots');
        var texts = document.getElementsByClassName('game-mod-description');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        for (i = 0; i < texts.length; i++) {
            texts[i].style.display = 'none';
        }
        index++;
        if (index > slides.length) {
            index = 1;
        }
        slides[index - 1].style.display = 'block';
        dots[index - 1].className += ' active';
        texts[index - 1].style.display = 'block';
        setTimeout(showSlides, 7000);
    }
});