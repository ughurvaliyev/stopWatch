document.addEventListener('DOMContentLoaded', (event) => {
  let intervalId;
  let startTime;
  let elapsedTime = 0;
  let running = false;

  const hourElement = document.querySelector('.hour');
  const minuteElement = document.querySelector('.minute');
  const secondElement = document.querySelector('.second');
  const splitSecondElement = document.querySelector('.splitSecond');

  const btnStart = document.querySelector('.btnStart');
  const btnStop = document.querySelector('.btnStop');
  const btnReset = document.querySelector('.btnReset');
  const btnLoop = document.querySelector('.btnLoop');

  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }

  function updateDisplay() {
      const totalMilliseconds = elapsedTime + (running ? Date.now() - startTime : 0);
      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const splitSeconds = Math.floor((totalMilliseconds % 1000) / 10);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      hourElement.textContent = formatTime(hours);
      minuteElement.textContent = formatTime(minutes);
      secondElement.textContent = formatTime(seconds);
      splitSecondElement.textContent = formatTime(splitSeconds);
  }

  btnStart.addEventListener('click', () => {
      if (!running) {
          running = true;
          startTime = Date.now();
          intervalId = setInterval(updateDisplay, 10);

      }
      btnReset.disabled=true
  });

  btnStop.addEventListener('click', () => {
      if (running) {
          running = false;
          elapsedTime += Date.now() - startTime;
          clearInterval(intervalId);
      }
      btnReset.disabled=false
  });

  btnReset.addEventListener('click', () => {
      running = false;
      clearInterval(intervalId);
      elapsedTime = 0;
      updateDisplay();
    loopList.innerHTML=""
  });

  btnLoop.addEventListener('click', () => {
      if (running || elapsedTime > 0) {
          const currentTime = `${hourElement.textContent}:${minuteElement.textContent}:${secondElement.textContent}:${splitSecondElement.textContent}`;
          console.log('Loop Time:', currentTime);

          const loopElement = document.createElement('p');
          loopElement.textContent = currentTime;
          loopList.appendChild(loopElement);
      }
  });

  updateDisplay();
});
