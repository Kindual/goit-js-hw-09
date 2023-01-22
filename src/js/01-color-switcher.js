const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerToSwitchColor = null;
// let switching = false;


btnStart.addEventListener('click', () => {
    // if (switching) {
    //     return;
    // }

    btnDisabled(btnStart);
    btnDisabled(btnStop);
    timerToSwitchColor = setInterval(colorSwitch, 1000);
    // switching = true;

    console.log('switcher start');
});

btnStop.addEventListener('click', () => {
    // if (switching === false) {
    //     return;
    // }

    btnDisabled(btnStart);
    btnDisabled(btnStop);

    clearInterval(timerToSwitchColor);
    // switching = false;

    console.log('switcher stopped');
})

function colorSwitch() {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function btnDisabled(btn) {
    btn.disabled = !btn.disabled;
}
btnDisabled(btnStop);

