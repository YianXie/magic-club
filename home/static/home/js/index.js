let cardActived;

function getAllParents(element) {
    const parents = [];
    let currentElement = element;

    while (currentElement) {
        parents.unshift(currentElement);
        currentElement = currentElement.parentElement;
    }

    return parents;
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            if (cardActived && cardActived !== card) {
                cardActived.classList.remove("active");
            }
            cardActived = card;
            card.classList.toggle("active");
        });
        card.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    });
    document.querySelector(".volume-controller").addEventListener("click", function () {
        const video = document.querySelector(".promotion-video");
        if (video.muted) {
            this.src = "../../static/home/icons/volume-on.svg";
            video.muted = false;
        } else {
            this.src = "../../static/home/icons/volume-off.svg";
            video.muted = true;
        }
    });
});

document.addEventListener("click", function (e) {
    const parents = getAllParents(e.target);
    for (const parent of parents) {
        if (parent.classList.contains("card")) {
            return;
        }
    }

    if (!cardActived) return;
    cardActived.classList.remove("active");
});