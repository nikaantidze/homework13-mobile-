const hamburger = document.querySelector(".burger");
const menu = document.querySelector(".brgr-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})