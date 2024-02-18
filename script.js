document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".top-banner form");
    const input = form.querySelector("input");
    const msg = document.querySelector(".msg");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const inputVal = input.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${window.apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const tempKelvin = main.temp;
            const tempFahrenheit = (tempKelvin - 273.15) * 9/5 + 32
            const currentWeather = weather[0].main;
            const icon = weather[0].icon;
        
            const list = document.querySelector(".cities");
        
            const li = document.createElement("li");
            li.classList.add("city");
            const card = `
                <h2 data-name="${name}">
                    <span>${name}</span>
                </h2>
                <div>${Math.round(tempFahrenheit)}
                    <sup>°F</sup>
                </div>
                <figure>
                    <img src="https://openweathermap.org/img/wn/${icon}.png">
                    <figcaption>${currentWeather}</figcaption>
                </figure>
                `;
            li.innerHTML = card;
            list.appendChild(li);
        })
        .catch(() => {
            msg.innerHTML = "<p>Please search for a valid city or state.</p>";
        });

        msg.textContent = "";
        form.reset();
        input.focus();
    });
});
