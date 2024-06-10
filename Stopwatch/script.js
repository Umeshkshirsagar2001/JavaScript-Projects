window.onload = function () {
    let minutes = 0, seconds = 0, tens = 0;
    const appendMinutes = document.querySelector('#minutes'),
          appendTens = document.querySelector('#tens'),
          appendSeconds = document.querySelector('#seconds'),
          startBtn = document.querySelector('#start'),
          stopBtn = document.querySelector('#stop'),
          resetBtn = document.querySelector('#reset');
    let Interval;

    const startTimer = () => {
        appendTens.innerHTML = (tens < 9 ? '0' : '') + ++tens;
        if (tens > 99) {
            tens = 0;
            appendTens.innerHTML = '00';
            appendSeconds.innerHTML = (seconds < 9 ? '0' : '') + ++seconds;
            if (seconds > 59) {
                seconds = 0;
                appendSeconds.innerHTML = '00';
                appendMinutes.innerHTML = (minutes < 9 ? '0' : '') + ++minutes;
            }
        }
    };

    startBtn.onclick = () => clearInterval(Interval) || (Interval = setInterval(startTimer, 10));
    stopBtn.onclick = () => clearInterval(Interval);
    resetBtn.onclick = () => {
        clearInterval(Interval);
        minutes = seconds = tens = 0;
        appendMinutes.innerHTML = appendSeconds.innerHTML = appendTens.innerHTML = '00';
    }
}