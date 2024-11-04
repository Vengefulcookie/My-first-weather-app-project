function displayWeather(response) {
  let currentTemperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let currentCondition = document.querySelector("#description");
  let condition = response.data.condition.description;
  let currentHumidity = document.querySelector("#humidity");
  let humidity = `${response.data.temperature.humidity}%`;
  let currentWind = document.querySelector("#wind");
  let wind = `${response.data.wind.speed}km/h`;
  let currentCity = document.querySelector("#main-heading");
  let city = response.data.city;
  let currentIcon = document.querySelector("#weather-icon");
  let icon = `<img src = "${response.data.condition.icon_url}" class ="weather-emoji"/>`;
  let currentDaytime = document.querySelector("#daytime");
  let date = new Date(response.data.time * 1000);
  let daytime = currentDate(date);

  currentCondition.innerHTML = condition;
  currentHumidity.innerHTML = humidity;
  currentWind.innerHTML = wind;
  currentCity.innerHTML = city;
  currentIcon.innerHTML = icon;
  currentDaytime.innerHTML = daytime;
  currentTemperature.innerHTML = Math.round(temperature);
}
function currentDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes},`;
}
function searchCity(city) {
  let apiKey = "a9e857fe88f94odb09ad1fcdt90348f2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}
&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function startSearch(event) {
  event.preventDefault();
  let searchedInput = document.querySelector("#search-form-input");
  searchCity(searchedInput.value);
}

let searchForm = document.querySelector("#form-input");
searchForm.addEventListener("submit", startSearch);

searchCity("Durban");
