const display = document.getElementById("display");

const memeAnswers = {
    2: { name: "John Pork", img: "images/john_pork.jpg" },
    8: { name: "Grimace", img: "images/grimace.jpg" },
    69: { name: "Johnny Sins", img: "images/johnny_sins.jpg" }, 
    100: { name: "Skibidi Toilet", img: "images/skibidi.jpg" },
    42: { name: "Shrek", img: "images/shrek.jpg" },
    7: { name: "Quandale Dingle", img: "images/quandale.jpg" },
    200: { name: "Fusion", img: "images/fusion.png", audio: "audio/ambatakam.mp3"}
};

function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
}

function showMeme() {
    document.getElementById("meme-img").src = "images/wally.jpg";
    document.getElementById("meme-name").textContent = "Wally Bayola 🤫";
    document.getElementById("meme-modal").style.display = "flex";
}

function closeMeme() {
    document.getElementById("meme-modal").style.display = "none";
}

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    const result = eval(display.value);
    display.value = result;

    if (memeAnswers[result]) {
        const meme = memeAnswers[result];
        document.getElementById("meme-img").src = meme.img;
        document.getElementById("meme-name").textContent = meme.name;
        document.getElementById("meme-modal").style.display = "flex";
        playAudio(meme.audio);
    }
}