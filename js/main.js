const body = document.body;
// Page Loader
const duration = 3000;
setTimeout(function(){
    body.classList.add('loaded');
}, duration);

// Hamburger Menu
const menu = document.querySelector('#menu');
menu.addEventListener('click', function(){
    body.classList.toggle('overlay');
    menu.classList.toggle('open');
    document.querySelector('#overlayMenu').classList.toggle('open');
});

// Header fixed on Scroll
var scrollpos = window.scrollY || document.documentElement.scrollTop;
const header = document.querySelector("#siteHeader");
window.addEventListener('scroll', function(){
    scrollpos = window.scrollY || document.documentElement.scrollTop;
    if(scrollpos > 100) 
        header.classList.add('sticky');
    else 
        header.classList.remove('sticky');
});

// Copyright Year
const year = new Date().getFullYear();
document.querySelector('#year').innerHTML = year;

// Custom Scroll
window.onscroll = function() {customScroll()};
function customScroll() {
  var winScroll = body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector("#myBar").style.height = scrolled + "%";
}