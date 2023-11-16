
let jokeContent = document.querySelector('.joke-text');

function getRandomJokes() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
        }).then((response) => {
        return response.json();
    })
        .then((data) => {
            jokeContent.innerHTML = data.joke;
            // console.log(data.joke);
        });
};

const newJoke = document.querySelector('.new-joke-btn');
newJoke.addEventListener('click', getRandomJokes);
