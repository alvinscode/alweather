const form = document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
    const apiKey = "7484bd62b5msh3c98473954829bep1b1702jsnb8e2af696548";
    const url = `https://the-weather-api.p.rapidapi.com/api/weather/${inputVal}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city.";
        });
})