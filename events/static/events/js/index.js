document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".event-filters").querySelectorAll("span").forEach(e => {
        e.addEventListener("click", function () {
            // If it's already selected
            if (e.classList.contains("active")) return;

            // Remove active class from the currently active element
            document.querySelector("span.active").classList.remove("active");
            e.classList.add("active");

            // Change the content
            const mode = e.textContent;
            document.querySelectorAll(".event-item").forEach(el => {
                el.style.display = "flex";
                if (mode === "All") return;
                if (!el.classList.contains(mode.toLowerCase())) {
                    el.style.display = "none";
                }
            });
        });
    });
});
