function zoomIn() {
    document.querySelector(".zoomed-bg").classList.add("show");
    event.stopPropagation();

    document.addEventListener("click", function zoomOut(e) {
        if (e.target.tagName !== "IMG") {
            document.querySelector(".zoomed-bg").classList.remove("show");
            document.removeEventListener("click", zoomOut);
        }
    });
}