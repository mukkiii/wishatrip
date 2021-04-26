//Hamburger Menu
const body = document.body;
const menu = document.querySelector('#menu');
menu.addEventListener('click', function(){
    body.classList.toggle('overlay');
    menu.classList.toggle('open');
    document.querySelector('#overlayMenu').classList.toggle('open');
});

//Header fixed on Scroll
var scrollpos = window.scrollY || document.documentElement.scrollTop;
const header = document.querySelector("#siteHeader");
window.addEventListener('scroll', function(){
    scrollpos = window.scrollY || document.documentElement.scrollTop;
    if(scrollpos > 100) 
        header.classList.add('sticky');
    else 
        header.classList.remove('sticky');
});