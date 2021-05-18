const container = document.getElementById('container');
const colors = ['#D1BF91', '#60371E', '#A6341B', '#F9C743', '#C7C8C4'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(item) {
  const color = getRandomColor();
  item.style.background = color;
  item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(item) {
  item.style.background = '#1d1d1d';
  item.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
