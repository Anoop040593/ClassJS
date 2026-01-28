const startBtn = document.getElementById("start")
const minInput = document.getElementById("min")
const resetBtn = document.getElementById("reset")
const hrsInput = document.getElementById("hr")
const pauseBtn = document.getElementById("pause")
const continueBtn = document.getElementById("continue")
const secInput = document.getElementById("sec");

let prevTimer = 0;
let timerId;
let timeInSeconds;
let prevInSecs;
let timeRem;


function updateUI() { // did not do it on my own. That sucks
    if(timeInSeconds === 0) return;
    const hours = Math.floor(timeInSeconds / 3600);
    const mins = Math.floor((timeInSeconds % 3600)/60);
    const seconds = timeInSeconds % 60;

    hrsInput.value = hours;
    minInput.value = mins;
    secInput.value = seconds;
}
startBtn.addEventListener("click", function() {
    let hrs = hrsInput.value || 0;
    let mins = minInput.value || 0;
    let sec = secInput.value || 0;

    timeInSeconds = Number(hrs) * 3600 + Number(mins) * 60 + Number(sec);
    updateUI();
    timer(timeInSeconds);
})

function timer(timeRemaining) {
    if(timeRemaining === 0)  return;
    timerId = setTimeout(() => {
        timeInSeconds = --timeRemaining; //this part is weird
        updateUI();
        timer(timeRemaining);
    }, 1000)
}

resetBtn.addEventListener("click", function() {
    prevInSecs = 0;
    hrsInput.value= "";
    minInput.value= "";
    secInput.value= "";
    clearTimeout(timerId);
})

pauseBtn.addEventListener("click", function() {
    clearTimeout(timerId);
    prevInSecs = timeInSeconds;
})

continueBtn.addEventListener("click", function() {
    timer(prevInSecs);
})


