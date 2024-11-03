function displayWeather(response) {
  let currentTemperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let city = document.querySelector("#main-heading");
  city.innerHTML = response.data.city;
  currentTemperature.innerHTML = Math.round(temperature);
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
