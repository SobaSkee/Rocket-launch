const display = document.getElementById("display");
const rocket = document.querySelector(".rocket-content");
const launchText = document.querySelector(".container .text");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = true;

function start() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);

}


function update() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${seconds}:${milliseconds}`;

    if (elapsedTime >= 10000) {
        display.textContent = "10:00";
        isRunning = false;
        clearInterval(timer);

        const liftText = document.createElement('p');
        const booster1 = document.createElement('div');
        const booster2 = document.createElement('div');

        liftText.classList.add("lift-text");
        liftText.textContent = "Lift Off!";

        launchText.innerHTML = "Launch sequence ended.";
        
        booster1.classList.add("booster-1");
        booster2.classList.add("booster-2");

        display.parentNode.appendChild(liftText);

        rocket.appendChild(booster1);
        rocket.appendChild(booster2);
        rocket.classList.add("rocket-fly-off");
    }

}


document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("timer-container");
    const typingAnimationDur = 4000; // in ms so 4s

    // executes this function when the typingAnimationDur expires
    setTimeout(() => {
        timer.classList.add("show-timer-container");
        start();
    }, typingAnimationDur);
})
