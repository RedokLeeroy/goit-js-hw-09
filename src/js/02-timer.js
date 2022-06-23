import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("[data-start]");
const dayREF = document.querySelector("[data-days]"); 
const hourREF = document.querySelector("[data-hours]");
const minuteREF = document.querySelector("[data-minutes]");
const secondREF = document.querySelector("[data-seconds]"); 
let currtimeREF  = new Date().getTime();

startBtn.disabled = true; 
let selectedTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0];
    if(selectedDates[0].getTime() <= currtimeREF) {
        alert("Please choose a date in the future");
    }
    else {
        startBtn.disabled = false 
    }
  },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener("click", startHendler) 
function startHendler(event) {
    event.preventDefault()
    timeId = setInterval(()=>{
        let res = selectedTime.getTime() - new Date().getTime()
        const {days, hours, minutes, seconds} = convertMs(res)
        dayREF.textContent = `${days}`
        hourREF.textContent = `${hours}`
        minuteREF.textContent = `${minutes}`
        secondREF.textContent = `${seconds}`
        if(seconds < 1) {
            clearInterval(timeId)
            startBtn.disabled = false
        }
    },1000)

}

function convertMs(ms) {

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
