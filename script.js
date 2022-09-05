const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'abrir menu');
    } 
} 


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);







var btn = document.querySelector('#anual');
var container = document.querySelector('.cont');

    btn.addEventListener('click', function() {

        if(container.style.display  = 'block') {
            container2.style.display = 'none';
            container3.style.display = 'none';
        }
    })



var btn2 = document.querySelector('#semestral');
var container2 = document.querySelector('.cont-2');

    btn2.addEventListener('click', function() {

        if(container2.style.display  = 'block') {
            container.style.display = 'none';
            container3.style.display = 'none';
        } 
    })

var btn3 = document.querySelector('#mensal');
var container3 = document.querySelector('.cont-3');

    btn3.addEventListener('click', function() {

        if(container3.style.display  = 'block') {
            container.style.display = 'none';
            container2.style.display = 'none';
        } 
    })
