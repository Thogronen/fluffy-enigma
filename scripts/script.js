// JavaScript Document

// menu drop - show TEMP, NEEDS ANIMATION

var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var a = window.pageYOffset || document.documentElement.scrollTop;
    if (a > lastScrollTop) {
        document.getElementById("top-nav").style.top = "-100%";
    } else {
        document.getElementById("top-nav").style.top = "0";
    }
    lastScrollTop = a;
});


// menu toggle

function menuToggle() {
   var element = document.getElementById("menuToggle");
   element.classList.toggle("hide");
}



//// Header 'Together'
// get the element to animate
var element = document.getElementById('together');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
function animate() {
    // is element in view?
    if (inView()) {
        // element is in view, add class to element
        element.classList.add('together_animate');
    }
}


//// Meet the humans
// get the element to animate
var element = document.getElementById('box');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
function animate() {
    // is element in view?
    if (inView()) {
        // element is in view, add class to element
        element.classList.add('animate');
    }
}



// OG

var slideIndex = 1;

var myTimer;

window.addEventListener("load",function() { // On load, do this:
    showSlides(slideIndex); // neemt de slide...
    myTimer = setInterval(function(){plusSlides(1)},
                          9000); // en neemt de volgende na 9s als je niets doet.
})

// nav control
function plusSlides(n){
  clearInterval(myTimer); // reset internal 9s timer
  if (n < 0){
    showSlides(slideIndex -= 1); // klik links voor de vorige slide
  } else {
   showSlides(slideIndex += 1); // en rechts voor de volgende in de groep.
  }

  if (n === -1){ // als n (type/waarde) gelijk zijn...
    myTimer = setInterval(function(){plusSlides(n + 2)}, 9000); // zet waarde naar 1 zodat je geen blanc krijgt en zet timer op 9s.
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 9000); // +1
  }
}


//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer); // reset internal 9s timer
  myTimer = setInterval(function(){plusSlides(n + 1)}, 9000); // zet timer op 9s na elke slide
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i; //nr
  var header = document.getElementsByClassName("headerChange"); // neemt element...
  var content = document.getElementsByClassName("contentChange");


  if (n > header.length) {slideIndex = 1} // zolang x meer is dan het item wat getoond word blijven we optellen..
  if (n < 1) {slideIndex = header.length} // en als we we te hoog (>3) gaan reset je de waarde naar 1.
  for (i = 0; i < header.length; i++) {
      header[i].style.display = "none"; // ... en past de stijl aan naar display:none;
      content[i].style.display = "none";
  }
  for (i = 0; i < header.length; i++) {
      header[i].className = header[i].className.replace(" active", ""); // vervang de classname door 'active' met bijbehorende eigenschappen
  }

  header[slideIndex-1].style.display = "block"; // en vervang display:none; door display:block;
  content[slideIndex-1].style.display = "block";
}

// https://css-tricks.com/restart-css-animation/
// https://medium.com/@mciastek/animate-on-scroll-with-intersection-observer-ea744cddb876

