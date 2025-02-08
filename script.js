const messages = [
    "Are you sure?",
    "Really sure??",
    "Lock Kar Diya Jaaye?",
    "Hey I dont handle rejections well",
    "Just think about it!",
    "YOU CANNOT SAY NO",
    "SAY YES",
    "PLEASE SAY YES",
    "Okay fine :(",
    "Just kidding, say yes please!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
