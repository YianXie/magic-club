let actived;

document.addEventListener('DOMContentLoaded', function () {
    actived = document.querySelector(".event-filters").querySelector(".active");
    document.querySelector(".event-filters").querySelectorAll("span").forEach(e => {
        e.addEventListener("click", function () {
            if (actived === e) return;

            // Remove active class from the currently active element
            actived.classList.remove("active");
            actived = e;
            actived.classList.add("active");
        });
    })
});