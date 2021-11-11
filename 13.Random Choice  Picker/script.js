const $textarea = document.getElementById('textarea');
const $tagsElement = document.getElementById('tags');

$textarea.focus();

// 한글로 입력하면 에러가 난당...왤까
$textarea.addEventListener('keyup', (e) => {
  if (e.isComposing) {
    return;
  }
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  // console.log(input);
  // split , put in array
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  //공백이 아니라면 그 값을 리턴할 거야, filter에 컨디션 걸어서 그에 맞는 필터값 리턴, 만약 배열에 빈문자열이 있다면 빈문자열 요소를 없앰
  // 문자열 스트링에 공백있는 걸 없앰
  // console.log(tags);

  $tagsElement.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag; // 텍스트로 입력된 각각의 배열들
    $tagsElement.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const $tag = document.querySelectorAll('.tag');
  return $tag[Math.floor(Math.random() * $tag.length)];
}

function highlightTag($tag) {
  $tag.classList.add('highlight');
}

function unHighlightTag($tag) {
  $tag.classList.remove('highlight');
}

// function pickMe () {
//   setTimeout(() => {
//     const randomTag = pickRandomTag();
//     highlightTag(randomTag);
//   }, 100)
// }
