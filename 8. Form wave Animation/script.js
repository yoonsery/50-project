const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerText  // e,m,a,i,l 로 쪼갬
    .split('') // array로 쪼개서 가져옴
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // <span>E</span>...
    .join('') // 다시 스트링으로 가져옴
});
