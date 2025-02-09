import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const acceptButton = document.getElementById('acceptButton');
const rejectButton = document.getElementById('rejectButton');
const valentineImage = document.getElementById('valentineImage');
const valentineText = document.getElementById('valentineText');
const buttonContainer = document.getElementById('buttonContainer');

let rejectClickCount = 0;
let buttonHeight = 48;
let buttonWidth = 80;
let fontSize = 20;

const imagePaths = [
    "./images/image1.gif",
    "./images/image2.gif",
    "./images/image3.gif",
    "./images/image4.gif",
    "./images/image5.gif",
    "./images/image6.gif",
    "./images/image7.gif"
];

const rejectionTexts = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry..."
];

rejectButton.addEventListener('click', () => {
    if (rejectClickCount < rejectionTexts.length) {
        rejectClickCount++;
        valentineImage.src = imagePaths[Math.min(rejectClickCount, imagePaths.length - 1)];
        buttonHeight += 35;
        buttonWidth += 35;
        fontSize += 25;
        acceptButton.style.height = `${buttonHeight}px`;
        acceptButton.style.width = `${buttonWidth}px`;
        acceptButton.style.fontSize = `${fontSize}px`;
        rejectButton.textContent = rejectionTexts[Math.min(rejectClickCount, rejectionTexts.length - 1)];
    }
});

acceptButton.addEventListener('click', () => {
    valentineImage.src = './images/image7.gif';
    valentineText.textContent = "Yayyy!! :3";
    buttonContainer.style.display = 'none';
    confetti();
});