const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const text = 'We Love Drinking Coffee!';

let index = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.textContent = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
