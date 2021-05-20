const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');
const home = document.querySelector('home');
const work = document.querySelector('home');
const blog = document.querySelector('home');
const about = document.querySelector('home');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();
    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'));
}
