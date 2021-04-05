const $counters = document.querySelectorAll('.counter');

$counters.forEach((counter) => {
  counter.textContent = '0';

  const updateCounter = () => {
    // const target = +counter.dataset.target;  // + 붙여주면 string이 number로 타입바뀜
    // console.log(typeof target, target); // number
    const target = +counter.getAttribute('data-target');
    const c = +counter.textContent;
    // console.log(typeof c, c); // number, 0

    const increment = target / 200;
    // console.log(increment);

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target; // 정해진 숫자 이상 넘어가는 거 방지 (target / 200)
    }
  };
  updateCounter();
  // counter.textContent = dataTarget;
});
