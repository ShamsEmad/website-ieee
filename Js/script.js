"use strict";
// Start Heroes Tab
let techBtn = document.querySelector(".btn.tech");
let nontechBtn = document.querySelector(".btn.nontech");
let techTab = document.querySelector(".tech-tab");
let nontechTab = document.querySelector(".nontech-tab");

techBtn.addEventListener("click", function () {
  nontechBtn.style.backgroundColor = "#eee";
  nontechBtn.style.color = "#0f2167";
  techBtn.style.backgroundColor = "#0f2167";
  techBtn.style.color = "white";
  nontechTab.classList.add("hide");
  techTab.classList.remove("hide");
});
nontechBtn.addEventListener("click", function () {
  nontechBtn.style.backgroundColor = "#0f2167";
  nontechBtn.style.color = "white";
  techBtn.style.backgroundColor = "#eee";
  techBtn.style.color = "#0f2167";
  nontechTab.classList.remove("hide");
  techTab.classList.add("hide");
});
// Start End Tab
