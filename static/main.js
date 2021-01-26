"use strict";
// console.log("In dev mode");

// This code automatically insert and update the current yeat in the footer area

// const currentYear = document.querySelector(".currentYear");
// const Year = new Date().getFullYear();
// currentYear.innerHTML = Year;

// code to toggle dropdown for mobile nav




// code to display active tabs

// function showActiveTab(e) {
//     // get all tabs and remove active class
//     let tabContents;

//     // remove the active class from tab contents
//     tabContents = document.getElementsByClassName("nav_li");
//     for (i = 0; i < tabContents; i++) {
//         tabContents[i].className = tabContents[i].className.replace(" active", "")
//     }

//     e.currentTarget.className += " active";

// }


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