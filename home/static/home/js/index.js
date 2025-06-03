const missionStatement = "Magic club aims to spark the child-like curiosity of its members and spread the art of magic through the medium of entertaining and exciting performances.";
const missionStatementCitation = "— Mission Statement";
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

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(async () => {
        const blockQuote = document.querySelector("blockquote");
        const blockQuoteCitation = document.querySelector(".citation");
        for (const letter of missionStatement) {
            blockQuote.textContent += letter;
            await sleep(7.5); // wait for 0.01 second
        }
        for (const letter of missionStatementCitation) {
            blockQuoteCitation.textContent += letter;
            await sleep(7.5);
        }
    }, 3000);
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
            this.src = "../../static/home/images/volume-on.svg";
            video.muted = false;
        } else {
            this.src = "../../static/home/images/volume-off.svg";
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