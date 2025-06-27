const missionStatement = "Magic club aims to spark the child-like curiosity of its members and spread the art of magic through the medium of entertaining and exciting performances.";
const missionStatementCitation = "— Mission Statement";
let cardActived;
let videoMuted = true;

function getAllParents(element) {
    const parents = [];
    let currentElement = element;

    while (currentElement) {
        parents.unshift(currentElement);
        currentElement = currentElement.parentElement;
    }

    return parents;
}

function switchVideoMute(e) {
    videoMuted ? e.src = "/static/home/images/volume-on.svg" : e.src = "/static/home/images/volume-off.svg";
    document.querySelector(".promotion-video").muted = !videoMuted;
    videoMuted = !videoMuted;
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(async () => {
        // Re-enable scroll
        document.body.style.overflow = 'auto';

        // Letter effect
        const blockQuote = document.querySelector("blockquote");
        const blockQuoteCitation = document.querySelector(".citation");
        for (const letter of missionStatement) {
            blockQuote.textContent += letter;
            await sleep(7.5); // wait for 0.0075 second
        }
        for (const letter of missionStatementCitation) {
            blockQuoteCitation.textContent += letter;
            await sleep(7.5); // wait for 0.0075 second
        }
    }, 2500);
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