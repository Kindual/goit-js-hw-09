import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const flatpickrEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timerId = null;
let activeTimer = false;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() > new Date().getTime()) {
            onBtn();
            return;
        }
        offBtn();
        window.alert('Please choose a date in the future')
    },
};

const dateSelected = flatpickr(flatpickrEl, options);
startBtn.addEventListener('click', () => {
    if(activeTimer) {
        console.log("timer is active");
        return;
    }
    timerId = setInterval(timer, 1000);
});

function timer() {
    const time = dateSelected.selectedDates[0].getTime() - new Date().getTime();
    const timeYDHS = convertMs(time);
    
    if (time <= 0) {
        clearInterval(timerId);
        activeTimer = false;
        return;
    }
    
    activeTimer = true;

    daysEl.textContent = addLeadingZero(timeYDHS.days);
    hoursEl.textContent = addLeadingZero(timeYDHS.hours);
    minutesEl.textContent = addLeadingZero(timeYDHS.minutes);
    secondsEl.textContent = addLeadingZero(timeYDHS.seconds);
    
    console.log(timeYDHS);
}

function addLeadingZero(el) {
    return `${el}`.padStart(2, '00');
    // maybe String(el);
}

offBtn();
function offBtn() {
    startBtn.setAttribute('disabled', 'disabled');
}

function onBtn() {
    startBtn.removeAttribute('disabled');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
