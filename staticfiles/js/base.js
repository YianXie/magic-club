function updatePadding() {
    const padding = document.querySelector("header").offsetHeight;
    document.querySelector("main").style.paddingTop = padding + "px";
}

window.addEventListener("resize", updatePadding);
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").addEventListener("scroll", function (e) {
        const main = document.querySelector("main");
        const footerShowCondition = main.scrollTop + main.clientHeight >= main.scrollHeight - 1;

        document.querySelector("nav").classList.toggle("highlight", main.scrollTop >= 200);
        document.querySelector("footer").classList.toggle("show", footerShowCondition);
    });
    updatePadding();
});
