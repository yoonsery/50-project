const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const inputNumber = document.querySelector('.image-number');
const loadImgBtn = document.querySelector('.load-image');
const btncontainer = document.querySelector('.button-container');
const rows = 5;

getImage(rows);

loadImgBtn.addEventListener('click', (e) => {
  container.innerHTML = ``;
  const rows = inputNumber.value / 3;
  getImage(rows);
  console.log(3, rows);
});

inputNumber.addEventListener('keydown', (e) => e.preventDefault());

function getImage(rows) {
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
  }
}

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}
