const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionCard = document.getElementById("questionCard");
const resultCard = document.getElementById("resultCard");

function moveNoButton() {
    const x = Math.random() * 200;
    const y = Math.random() * 80;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
    questionCard.style.display = "none";
    resultCard.style.display = "block";
});

for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(heart);
}
