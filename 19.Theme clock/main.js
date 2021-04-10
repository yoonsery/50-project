const $toggle = document.querySelector('.toggle');
const $hourEl = document.querySelector('.hour');
const $minuteEl = document.querySelector('.minute');
const $secondEl = document.querySelector('.second');
const $timeEl = document.querySelector('.time');
const $dateEl = document.querySelector('.date');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

$toggle.addEventListener('click', () => {
  const $html = document.querySelector('html');
  $toggle.textContent = $html.classList.toggle('dark')
    ? 'Light mode'
    : 'Dark mode';
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  $hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock * 60 + minutes,
    0,
    720,
    0,
    360
  )}deg)`;
  $minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  $secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  $timeEl.textContent = `${hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  $dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

  $hourEl.style.transition = `${hours === 0 ? 'none' : 'all 0.5s ease-in'}`;

  $minuteEl.style.transition = `${minutes === 0 ? 'none' : 'all 0.5s ease-in'}`;

  $secondEl.style.transition = `${seconds === 0 ? 'none' : 'all 0.5s ease-in'}`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
