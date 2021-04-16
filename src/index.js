"use strict";


let hamburger = document.querySelector(".hamburger-menu");
let mobileNav = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
});

