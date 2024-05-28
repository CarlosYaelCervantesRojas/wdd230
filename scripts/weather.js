const weatherInfo = document.getElementById("weather-info");

const currentTemp = document.createElement("p");
const weatherIcon = document.createElement("img");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=19.04&lon=-98.21&units=imperial&appid=6f0149a9dd659fc67ec655cf1715678d";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${(data.main.temp).toFixed(0)}&deg;F - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = (data.weather[0].description).toUpperCase();
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    
    weatherInfo.appendChild(weatherIcon);
    weatherInfo.appendChild(currentTemp);
}

apiFetch();