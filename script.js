let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 0;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const laps = document.getElementById('laps');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

function start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function stop() {
    clearInterval(tInterval);
    running = false;
}

function reset() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = "00:00:00";
    lapCounter = 0;
    laps.innerHTML = "";
}

function lap() {
    if (running) {
        const lapTime = display.innerHTML;
        const lapElement = document.createElement('li');
        lapElement.innerText = `Lap ${++lapCounter}: ${lapTime}`;
        laps.appendChild(lapElement);
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}
