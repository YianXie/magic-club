function updatePadding() {
    const padding = document.querySelector("header").offsetHeight;
    document.querySelector("main").style.paddingTop = padding + "px";
}

function showBurger() {
    event.stopPropagation();
    document.querySelector(".mobile-burger").classList.add("show");
    document.addEventListener("click", function handleClick(e) {
        if (!e.target.contains(document.querySelector(".mobile-burger"))) {
            document.querySelector(".mobile-burger").classList.remove("show");
            document.removeEventListener("click", handleClick);
        }
    });
}

window.addEventListener("resize", updatePadding);
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");

    main.addEventListener("scroll", function () {
        // After the user has scrolled to the bottom
        const footerShowCondition = main.scrollTop + main.clientHeight >= main.scrollHeight - 1;

        document.querySelector("nav").classList.toggle("highlight", main.scrollTop >= 200);
        document.querySelector("footer").classList.toggle("show", footerShowCondition);
    });

    // If there is nothing to scroll
    if (main.scrollHeight === main.offsetHeight) {
        document.querySelector("footer").classList.add("show");
    }

    updatePadding();
});
