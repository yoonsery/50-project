const $textarea = document.getElementById('textarea');
const $tagsElement = document.getElementById('tags');

$textarea.focus();

$textarea.addEventListener('keyup', (e) =>{
  createTags(e.target.value);
})

function createTags(input) {
  // console.log(input);

  // split , put in array
  const tags = input.split(',')
  .filter(tag => tag.trim() !== '')  //공백이 아니라면 그 값을 리턴할 거야, filter에 컨디션 걸어서 그에 맞는 필터값 리턴, 만약 배열에 빈문자열이 있다면 빈문자열 요소를 없앰
  .map(tag => tag.trim());  // 문자열 스트링에 공백있는 걸 없앰
  // console.log(tags);

  $tagsElement.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag; // 텍스트로 입력된 각각의 배열들
    $tagsElement.appendChild(tagEl);

  });


}
