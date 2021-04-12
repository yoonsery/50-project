const $fill = document.querySelector('.fill');
const $empties = document.querySelectorAll('.empty');

// $fill에는 dragStart, dragEnd 함수가 필요
$fill.addEventListener('dragstart', dragStart);
$fill.addEventListener('dragend', dragEnd);

// $empties.forEach((empty) => {
//   empty;
// });

function dragStart() {
  console.log('drag start');
}

function dragEnd() {
  console.log('drag end');
}

function dragOver() {
  console.log('drag over');
}

function dragEnter() {
  console.log('drag enter');
}

function dragLeave() {
  console.log('drag leave');
}

function dragDrop() {
  console.log('drag drop');
}
