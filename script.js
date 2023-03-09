const launch = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);

// Days variables
const daysTop = document.querySelector('.top[unit=days]');
const daysTopWrapper = document.querySelector('.wrapper[unit=days]');
const daysBottom = document.querySelector('.bottom[unit=days]');
let prevDays = 14;

// Hours Variables
const hoursTop = document.querySelector('.top[unit=hours]');
const hoursTopWrapper = document.querySelector('.wrapper[unit=hours]');
const hoursBottom = document.querySelector('.bottom[unit=hours]');
let prevHours = 0;

// Minutes Variables
const minutesTop = document.querySelector('.top[unit=minutes]');
const minutesTopWrapper = document.querySelector('.wrapper[unit=minutes]');
const minutesBottom = document.querySelector('.bottom[unit=minutes]');
let prevMinutes = 0;

// Seconds Variables
const secondsTop = document.querySelector('.top[unit=seconds]');
const secondsTopWrapper = document.querySelector('.wrapper[unit=seconds]');
const secondsBottom = document.querySelector('.bottom[unit=seconds]');
let prevSeconds = 0;

function showTime() {
  // Calculate difference in time milliseconds from when timer script started
  const now = new Date();
  const difference = launch.getTime() - now.getTime();

  // Update days
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  if (days !== prevDays) {
    prevDays = days;
    daysTop.classList.add('drop');
    daysTopWrapper.classList.add('flip');

    setTimeout(() => {
      document.querySelector('#days-top').innerText = `${days}`;
      document.querySelector('#days-bottom').innerText = `${days}`;
      daysTop.classList.remove('drop');
      daysTopWrapper.classList.remove('flip');
      daysBottom.classList.add('darker');

      setTimeout(() => {
        daysBottom.classList.remove('darker');
      }, 100);
    }, 100);
  } else {
    document.querySelector('#days-top').innerText = `${days}`;
    document.querySelector('#days-bottom').innerText = `${days}`;
  }

  // Update hours
  const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
  if (prevHours !== hours) {
    prevHours = hours;
    hoursTop.classList.add('drop');
    hoursTopWrapper.classList.add('flip');

    setTimeout(() => {
      document.querySelector('#hours-top').innerText = `${hours}`;
      document.querySelector('#hours-bottom').innerText = `${hours}`;
      hoursTop.classList.remove('drop');
      hoursTopWrapper.classList.remove('flip');
      hoursBottom.classList.add('darker');

      setTimeout(() => {
        hoursBottom.classList.remove('darker');
      }, 100);
    }, 100);
  } else {
    document.querySelector('#hours-top').innerText = `${hours}`;
    document.querySelector('#hours-bottom').innerText = `${hours}`;
  }

  // Update minutes
  const minutes = Math.floor(difference / (1000 * 60)) % 60;
  if (prevMinutes !== minutes) {
    prevMinutes = minutes;
    minutesTopWrapper.classList.add('flip');
    minutesTop.classList.add('drop');

    setTimeout(() => {
      document.querySelector('#minutes-top').innerText = `${minutes}`;
      document.querySelector('#minutes-bottom').innerText = `${minutes}`;
      minutesTopWrapper.classList.remove('flip');
      minutesTop.classList.remove('drop');
      minutesBottom.classList.add('darker');

      setTimeout(() => {
        minutesBottom.classList.remove('darker');
      }, 100);
    }, 100);
  } else {
    document.querySelector('#minutes-top').innerText = `${minutes}`;
    document.querySelector('#minutes-bottom').innerText = `${minutes}`;
  }

  // Update seconds
  const seconds = Math.ceil(difference / 1000) % 60;
  if (seconds !== prevSeconds) {
    prevSeconds = seconds;
    secondsTopWrapper.classList.add('flip');
    secondsTop.classList.add('drop');

    setTimeout(() => {
      document.querySelector('#seconds-top').innerText = `${seconds}`;
      document.querySelector('#seconds-bottom').innerText = `${seconds}`;
      secondsTopWrapper.classList.remove('flip');
      secondsTop.classList.remove('drop');
      secondsBottom.classList.add('darker');

      setTimeout(() => {
        secondsBottom.classList.remove('darker');
      }, 100);
    }, 100);
  } else {
    document.querySelector('#seconds-top').innerText = `${seconds}`;
    document.querySelector('#seconds-bottom').innerText = `${seconds}`;
  }
}

// Run function on start and set interval for each second
showTime();
setInterval(() => {
  showTime();
}, 1000);
