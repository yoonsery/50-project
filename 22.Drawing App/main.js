const $canvas = document.getElementById('canvas');
const ctx = $canvas.getContext('2d');

let size = 20;
let color = 'black';
let isPressed = false;
let x;
let y;

$canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

$canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

$canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    // 마우스 빠르게 움직이면 동그라미 찍히지 않고 선으로 연결되게 drawLine 추가
    drawLine(x, y, x2, y2);
    // 부채꼴 모양처럼 면으로 뒤덮이는거 방지하기 위해 x = x2 넣어줌
    x = x2;
    y = y2;
    // 선이 생기긴 하는데 선이 원의 지름보다 작아서 면봉처럼 보이는 현상
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2; // 선이 그으면 선이 원의 지름보다 작아서 면봉처럼 보이는데 ark에서 반지름을 설정해줬으니 * 2하면 된다
  ctx.stroke();
}
