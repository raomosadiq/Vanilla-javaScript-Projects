// function start() {
//     const milSecTxt = document.querySelector('#tens');
//     const secTxt = document.querySelector('#seconds')
//     let seconds = 0;
//     let milSeconds = 0;



//     setInterval(() => {
//         milSeconds += 1;
//         if (milSeconds === 1000) {
//             milSeconds = 0;
//             seconds += 1;
//         }
//         milSecTxt.textContent = milSeconds;
//         secTxt.textContent = seconds;

//         // console.log(milSecTxt.textContent);
//     }, 10);
// }

// const startWatch = document.querySelector('#button-start');
// startWatch.addEventListener('click', start);



document.addEventListener('DOMContentLoaded', function () {
    let tens = 0;
    let seconds = 0;
    let interval;

    const secondsElement = document.getElementById('seconds');
    const tensElement = document.getElementById('tens');
    const startButton = document.getElementById('button-start');
    const stopButton = document.getElementById('button-stop');
    const resetButton = document.getElementById('button-reset');

    function updateDisplay() {
        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
        tensElement.textContent = tens < 10 ? '0' + tens : tens;
    }

    function start() {
        interval = setInterval(() => {
            tens++;

            if (tens === 100) {
                tens = 0;
                seconds++;
            }

            updateDisplay();
        }, 10);

        toggleButtons(true);
    }

    function stop() {
        clearInterval(interval);
        toggleButtons(false);
    }

    function reset() {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        updateDisplay();
        toggleButtons(false);
    }

    function toggleButtons(isRunning) {
        startButton.disabled = isRunning;
        stopButton.disabled = !isRunning;
        resetButton.disabled = isRunning;
    }

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);
});
