const range = document.querySelector('#range');

range.addEventListener('input', (e) => {
  const value = e.target.value;
  const label = document.querySelector('.label');

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');
  const num_range_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  const max = +e.target.max;

  const left = value * (num_range_width / max) - num_label_width / 2;

  label.textContent = value;
  label.style.left = `${left}px`;
});
