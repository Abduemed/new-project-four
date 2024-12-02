let timerInterval;
let elapsedTime = 0; // Time in milliseconds
let isRunning = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = formatTime(elapsedTime);
}

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    const startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
});

document.getElementById('reset').addEventListener('click', () => {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
});
