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

document.querySelector('.menuBtn').addEventListener('click', menuToggle);

function menuToggle() {
    var isToggle = document.getElementById('menu');
    isToggle.className = (isToggle.className === 'active') ? "" : 'active'; // if true, do nothing, if false add class // toggle

    var scrollLock = document.querySelector('html');
    scrollLock.className = (scrollLock.className === 'noScroll') ? "" : 'noScroll'; // if true, do nothing, if false add class // toggle

    var logoColor = document.querySelector('.pmob a svg path');

    logoColor.className = (logoColor.className === 'isOpen') ? "" : 'isOpen'; // if true, do nothing, if false add class
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




// ...

var slideIndex = 1;

var intTimer;


window.addEventListener("load",function() {
    whatSlide(slideIndex);
    intTimer = setInterval(function(){nextSlide(1)}, 4000);
})

document.querySelector('.sliderBtn').addEventListener('click', nextSlide);

/// new plusSlides(n)

function nextSlide(x) { // next/prev

    if (x < 0) { // x cannot be 0
        whatSlide(slideIndex -= 1); // slideIndex = sI - 1; set slideIndex to 0 - see whatSlide for <1 reference. Enables rotation.
    } else {
        whatSlide(slideIndex += 1); // set slideIndex to 2; see whatSlide for reference
    }

    // timer / click

  if (x === -1){
    intTimer = setInterval(function(){nextSlide(x + 2)}, 4000);
  } else {
    intTimer = setInterval(function(){nextSlide(x + 1)}, 4000);
  }

}

function whatSlide(x) { // yeah, this obviously doesn't work any more. Kinda broke it.

    var slides = document.querySelector(".hSC"); // element container
    var slidesChildren = slides.children; // returns the children of slides

    var headerContainer = document.querySelector("span.hSC"); // array w headers
    var textContainer = document.querySelector("div.tSC"); // array w text bodies

    // if statements

    if (x > slidesChildren.length) {
        slideIndex = 1; // reset var slideIndex to 1
    }

    if (x < 1) {
        slideIndex = slidesChildren.length; // set var slideIndex to 3
    }


    if (x == 1) {

        headerContainer.style.transform = "translateY(calc(0em))";
        textContainer.style.transform = "translateY(calc(0em))";
    }

    if (x == 2) {

        headerContainer.style.transform = "translateY(calc(-1.25em))";
        textContainer.style.transform = "translateY(calc(-10em))";
    }

    if (x == 3) {

        headerContainer.style.transform = "translateY(calc(-2.5em))";
        textContainer.style.transform = "translateY(calc(-20em))";

    }
    console.log("Index = " + slideIndex + " , x == " + x + "!"); // should return values from 1 to 3.}
    console.log(slidesChildren[0] + slidesChildren[1] + slidesChildren[2]);
}

// reset progressBar on button click

// somehow breaks buttons, dunno why?

// https://codepen.io/Thogronen/pen/OJXZWdd


