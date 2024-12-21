$("#menubar").slideToggle(10);

function myFunction(x) {
    document.getElementById('nav').classList.toggle("on");
    $('#shop').fadeToggle(500)
    x.classList.toggle("change");
    $('#menubar').animate({ width: 'toggle' });
    $('#nav').css('background-color', 'rgba(0, 0, 0, 0.0)')
    setTimeout(() => {
        $('.on').css('background-color', 'black')
    }, 1000);
}

document.getElementById('body').addEventListener('wheel', function lol() {
    if (document.getElementById('nav').classList.contains("on")) {
        myFunction(document.getElementById('menu'))
    }
})