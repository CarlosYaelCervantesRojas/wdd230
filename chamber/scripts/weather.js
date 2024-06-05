const latLong = "lat=19.04&lon=-98.21&units=imperial";
const key = "6f0149a9dd659fc67ec655cf1715678d";
const current = `https://api.openweathermap.org/data/2.5/weather?${latLong}&appid=${key}`;
const forecast = `http://api.openweathermap.org/data/2.5/forecast?${latLong}&appid=${key}`;

const div = document.getElementById("current-weather");


async function getData(url) {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          throw Error(await response.text())
      }
  } catch (error) {
    console.log(error);
  }
}

async function displayCurrent() {
    const currentData = await getData(current);

    const header = document.createElement("h4");
    const article = document.createElement("article");
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    const p = document.createElement("p");

    header.textContent = "Today's weather";
    img.src = `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`;
    img.alt = currentData.weather[0].description;
    p.innerHTML = `${currentData.main.temp}&deg;F - ${currentData.weather[0].description}`;

    picture.appendChild(img);

    article.appendChild(header);
    article.appendChild(picture);
    article.appendChild(p);

    div.appendChild(article);

    displayForecast();
}

async function displayForecast() {
    const forecastData = await getData(forecast);

    const days = forecastData.list.filter((element) => {
        const time = new Date(element.dt_txt).getHours();
        return time == 15;
    }).slice(0,3);

    const forecastDiv = document.createElement("div");
    forecastDiv.id = "forecast";

    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    days.forEach(day => {
        const article = document.createElement("article");
        const header = document.createElement("h4");
        const p = document.createElement("p");

        const weekDay = new Date(day.dt_txt).getDay()
        
        header.textContent = `${week[weekDay]}`;
        p.innerHTML = `${day.main.temp}&deg;F - ${day.weather[0].description}`;

        article.appendChild(header);
        article.appendChild(p);
    
        forecastDiv.appendChild(article);
    });

    div.appendChild(forecastDiv);
}

displayCurrent();