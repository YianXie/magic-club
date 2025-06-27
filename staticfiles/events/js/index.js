document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".event-filters").querySelectorAll("span").forEach(e => {
        e.addEventListener("click", function () {
            if (e.classList.contains("active")) return;

            // Remove active class from the currently active element
            document.querySelector("span.active").classList.remove("active");
            e.classList.add("active");

            const mode = e.textContent;
            document.querySelectorAll("div.event-item").forEach(div => {
                div.style.display = "flex";
                if (mode === "All") return;
                if (!div.classList.contains(mode.toLowerCase())) {
                    div.style.display = "none";
                }
            });
        });
    })
});