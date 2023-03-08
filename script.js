const launch = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);

// DOING - establish previous figs to compare within each loop
// to see if the tiles need flicking
let prevDays;
let prevHours;
let prevMinutes;
let p;

function showTime() {
  const bottoms = document.querySelectorAll('.bottom');
  bottoms.forEach((bottom) => {
    bottom.classList.add('darker');

    setTimeout(() => {
      bottom.classList.remove('darker');
    }, 100);
  });

  const top = document.querySelector('.top');
  top.classList.remove('flip');

  // const bottom = document.querySelector('.bottom');
  // bottom.classList.add('darker');

  const now = new Date();
  const difference = launch.getTime() - now.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(difference / (1000 * 60)) % 60;
  const seconds = Math.ceil(difference / 1000) % 60;

  document.querySelector('#days').innerHTML = `${days} days`;
  document.querySelector('#hours').innerHTML = `${hours} hours`;
  document.querySelector('#minutes').innerHTML = `${minutes} minutes`;
  document.querySelector('#seconds-top').innerText = `${seconds}`;
  document.querySelector('#seconds-bottom').innerText = `${seconds}`;

  setTimeout(() => {
    const top = document.querySelector('.top');
    top.classList.add('flip');
  }, 900);
}

showTime();

setInterval(() => {
  showTime();
}, 1000);
