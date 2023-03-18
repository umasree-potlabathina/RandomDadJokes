const jokeParagraph = document.getElementById('joke');

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
       method: "GET",
       headers: {
        Accept: "text/plain"
       }
    });

    const textDadJoke = await response.text();

    jokeParagraph.innerText = textDadJoke;
}

const button = document.getElementById("get-joke-button")
button.onclick = () => getDadJoke();


