const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes(); // 스크롤 전에 실행해놓아도 되고 up to you~
function checkboxes() {
  const triggerBottom = (innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
