const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

async function loadTestimonials() {
  const data = await fetch('./data/data.json');
  const result = await data.json();
  return result;
}

let idx = 1;
loadTestimonials() //
  .then((result) => {
    setInterval(() => updateTestimonial(result), 10000);
  });

function updateTestimonial(item) {
  const { name, position, photo, text } = item[idx];

  testimonial.textContent = text;
  userImage.src = photo;
  username.textContent = name;
  role.textContent = position;

  idx++;

  if (idx > item.length - 1) {
    idx = 0;
  }
}
