function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

let button; 

startBtn.addEventListener("click", handleStart)
function handleStart() {
  button = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000)
  startBtn.disabled = true;
}

stopBtn.addEventListener("click", handleStop)
function handleStop() {
  clearInterval(button)
  startBtn.disabled = false;
}



