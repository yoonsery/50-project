const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// Using async / await
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();

  jokeElement.innerText = data.joke;
}

// Using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then(data => {
//       jokeElement.innerText = data.joke;
//     });
// }
