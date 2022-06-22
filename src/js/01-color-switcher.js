function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");

startBtn.addEventListener("click", handleStart)
function handleStart() {
    setInterval(() =>body.style.backgroundColor = getRandomHexColor(), 1000)
}
