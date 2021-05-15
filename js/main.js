const body = document.body;
// Page Loader
const duration = 3000;
setTimeout(function(){
    body.classList.add('loaded');
}, duration);

// Hamburger Menu
const menu = document.querySelector('#menu');
menu.addEventListener('click', function(){
    body.classList.toggle('document-overlay');
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

//Lazy Loading Images
var lazyloadImages;    
if ("IntersectionObserver" in window) {
lazyloadImages = document.querySelectorAll(".lazy");
lazyloadImagesLength = lazyloadImages.length;
var imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
    if (entry.isIntersecting) {
        var image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove("lazy");
        imageObserver.unobserve(image);
    }
    });
});

for(let i=0; i<lazyloadImagesLength; i++){
    imageObserver.observe(lazyloadImages[i]);
}
} 
else {  
var lazyloadThrottleTimeout;
lazyloadImages = document.querySelectorAll(".lazy");
lazyloadImagesLength = lazyloadImages.length;

function lazyload () {
    if(lazyloadThrottleTimeout) {
    clearTimeout(lazyloadThrottleTimeout);
    }    

    lazyloadThrottleTimeout = setTimeout(function() {
    var scrollTop = window.pageYOffset;
    for(let i=0; i<lazyloadImagesLength; i++){
        if(lazyloadImages[i].offsetTop < (window.innerHeight + scrollTop)){
            lazyloadImages[i].src = lazyloadImages[i].dataset.src;
            lazyloadImages[i].classList.remove('lazy');
        }
    }
    if(lazyloadImages.length == 0) { 
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
    }
    }, 20);
}

document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);
}

var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);
if (isIE) {
  window.scroll(0,1);
}

//Form ELement Focus
const formElem = document.querySelectorAll('.form-control');
if (typeof(formElem) != 'undefined' && formElem != null){
    for(let i = 0; i<formElem.length; i++){
        formElem[i].addEventListener('click', function(){
            this.classList.add('active');
        });
    }
}
