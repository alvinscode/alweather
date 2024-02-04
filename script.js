document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".top-banner form");
    const input = form.querySelector("input");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const inputVal = input.value;
        const apiKey = "7484bd62b5msh3c98473954829bep1b1702jsnb8e2af696548";
        const url = `https://the-weather-api.p.rapidapi.com/api/weather/${inputVal}`;

        fetch(url, {
            headers: {
                "X-RapidAPI-Key": apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const responseData = data.data;
            const { expected_temp, city, current_weather, humidity, bg_image, temp } = responseData;
            const image = bg_image;
        
            const list = document.querySelector(".cities");
            const msg = document.querySelector(".msg");
        
            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
                <h2 class="city-name" data-name="${city}">
                    <span>${city}</span>
                </h2>
                <div class="city-temp">${Math.round(temp)}
                    <sup>°C</sup>
                </div>
                <figure>
                    <img class="city-icon smaller-image" src="${(image)}">
                    <figcaption>${current_weather}</figcaption>
                </figure>
                `;
            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            const msg = document.querySelector(".msg");
            msg.textContent = "Please search for a valid city.";
        });

    msg.textContent = "";
    form.reset();
    input.focus();
    });
    
});