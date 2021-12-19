document.addEventListener('DOMContentLoaded', () => {
  const $start = document.querySelector('.start');
  const $minutes = document.querySelector('.minutes input');
  const $seconds = document.querySelector('.seconds input');
  const $settings = document.querySelector('.settings');

  const getTime = () => {
    const $minutes = document.querySelector('.minutes input');
    const $seconds = document.querySelector('.seconds input');
    return {
      minutes: parseInt($minutes.value, 10),
      seconds: parseInt($seconds.value, 10),
    };
  };

  const { minutes: defaultMinutes, seconds: defaultSeconds } = getTime();

  let minutes = defaultMinutes;
  let seconds = 0;
  let isRunning;
  let timer;

  const clearTimer = () => {
    clearInterval(timer);
    $start.innerText = isRunning ? 'pause' : 'Start';
  };

  const restvalues = () => {
    isRunning = false;
    $start.innerText = isRunning ? 'pause' : 'Start';
    $minutes.value = defaultMinutes;
    document.querySelector('.ring').classList.remove('ending');
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const startTimer = () => {
    timer = setInterval(async () => {
      if (seconds === 0) {
        minutes--;
        seconds = 60;
      }
      seconds--;
      $minutes.value = `${minutes}`.padStart(2, '0');
      $seconds.value = `${seconds}`.padStart(2, '0');
      if (seconds === 0 && minutes === 0) {
        document.querySelector('.ring').classList.toggle('ending');
        clearTimer();
        await sleep(100);
        alert('Time is up!');
        restvalues();
      }
    }, 1000);
  };

  $start.addEventListener('click', () => {
    ({ minutes, seconds } = getTime());
    isRunning = !isRunning;
    $start.innerText = isRunning ? 'pause' : 'Start';
    $seconds.setAttribute('disabled', true);
    $minutes.setAttribute('disabled', true);
    if (!isRunning) {
      clearTimer();
    } else {
      startTimer();
    }
  });

  $settings.addEventListener('click', () => {
    $seconds.toggleAttribute('disabled');
    $minutes.toggleAttribute('disabled');
    if (isRunning) {
      clearTimer();
    }
  });
});
