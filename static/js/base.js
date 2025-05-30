let lastScrollY = 0;

function updatePadding() {
    const padding = document.querySelector("header").offsetHeight;
    document.querySelector("main").style.paddingTop = padding + "px";
}

window.addEventListener("resize", updatePadding);
document.addEventListener("DOMContentLoaded", updatePadding);
document.addEventListener("scroll", function () {
    const y = window.scrollY;
    document.querySelector("nav").classList.toggle("highlight", y >= 200);
});