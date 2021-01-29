"use strict";
// console.log("In dev mode");

// This code automatically insert and update the current yeat in the footer area

// const currentYear = document.querySelector(".currentYear");
// const Year = new Date().getFullYear();
// currentYear.innerHTML = Year;

// code to toggle dropdown for mobile nav
const navToggler = document.querySelector(".navbar-toggler");
const mobileNav = document.querySelector(".mobile_nav_menu");
const navTogglerClose = document.querySelector(".navbar-toggler-close");

function openMobileNav() {
    mobileNav.style.display = "block";
    navToggler.style.display = "none";
    navTogglerClose.style.display = "block";
}

function closeMobileNav() {
    mobileNav.style.display = "none";
    navToggler.style.display = "block";
    navTogglerClose.style.display = "none";
}

navToggler.addEventListener("click", openMobileNav);
navTogglerClose.addEventListener("click", closeMobileNav);

// code to display skill level percentage automatically based on the number inputed

const s_progress_box = document.querySelector(".skill_progress_box");
let s_progress_count = document.querySelectorAll(".skill_progress_count");
(function increase_Skill_Count() {
    // loop through the s_progress_count
    for (let i = 0; i < s_progress_count.length; i++) {
        // increase the width using the s_progress_count innerHTML 
        s_progress_count[i].style.width = `${s_progress_count[i].innerHTML}`;
    }
})();