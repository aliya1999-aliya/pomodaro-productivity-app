let timer;
let timeLeft = 25 * 60; // seconds
let isRunning = false;

const timerDisplay = document.getElementById("timer");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up! 🎉");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

function setMode(mode) {
    clearInterval(timer);
    isRunning = false;

    if (mode === "pomodoro") {
        timeLeft = 25 * 60;
    } else if (mode === "short") {
        timeLeft = 5 * 60;
    } else if (mode === "long") {
        timeLeft = 15 * 60;
    }

    updateDisplay();
}

updateDisplay();
