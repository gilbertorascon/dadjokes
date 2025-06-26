window.addEventListener('load', () => {

    const jokeButton = document.getElementById('joke_button');
    const jokeText = document.getElementById('joke_text');

    const updateJoke = async () => {
        const newJoke = await jokeCall();
        jokeText.innerText = newJoke;
        jokeText.classList.add('display');
    }

    const jokeCall = async () => {

        try {
            const url = "https://icanhazdadjoke.com/";
            const config = { headers: { Accept: 'application/json' } };
            const res = await fetch(url, config);
            const data = await res.json();
            const joke = data.joke;
            return joke;

        } catch (error) {
            console.log(`Error: ${error}`);
            return error;
        }
    }

    jokeButton.addEventListener('click', () => {
        updateJoke();
    })
})