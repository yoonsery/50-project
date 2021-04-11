const $button = document.querySelector('.ripple');

$button.addEventListener('click', function (e) {
  // 클릭된 위치
  const x = e.clientX;
  const y = e.clientY;

  // 버튼이 위치한 고정된 값
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  // 버튼크기 내에서 클릭된 위치값 (왼쪽 위 모서리는 0, 오른쪽 아래는 버튼의 크키)
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = `${yInside}px`;
  circle.style.left = `${xInside}px`;

  this.appendChild(circle);

  // span 태그가 쌓이는 걸 0.5초 후에 지워주기
  setTimeout(() => circle.remove(), 500);
});
