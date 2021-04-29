const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let timeClicked = 0;

loveMe.addEventListener('dblclick', (e) => {
  createHeart(e);
  times.textContent = ++timeClicked;
});

function createHeart(e) {
  const heart = document.createElement('i');

  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.offsetX;
  const y = e.offsetY;

  heart.style.top = `${y}px`;
  heart.style.left = `${x}px`;

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}
