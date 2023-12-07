//accurate date and time info

let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
let year = now.getFullYear();
let days = [
  "Sunday",
  "MOnday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let month = now.getMonth();
let weekDay = document.querySelector("#day");
weekDay.innerHTML = `${day}`;
let daty = document.querySelector("#date");
daty.innerHTML = `${year}/${month}/${date}`;
let time = document.querySelector(".time");
time.innerHTML = `${hours}:${minutes}`;

// taking value from form when submitting
function showTemp(response) {
  console.log(response.data);
  let temperature = document.querySelector("#num");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("h1");
  city.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let windSpeed = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  windSpeed.innerHTML = `Wind : ${wind}km/h`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHtML = `Humidity : ${response.data.temperature.humidity}%`;
  let emoji = document.querySelector(".emoji");
  emoji.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;
  getForecast(response.data.city);
}
function getForecast(city) {
  let apiKey = "7b42b9t6bb43b5ffeoeffa05f6ea61d8";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {}

function revealing(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let name = document.querySelector("#city");
  console.log(name.value);
  h1.innerHTML = `${name.value}`;
  let cityName = name.value;
  let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
  let urlKey = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
  axios.get(urlKey).then(showTemp);
}
let form = document.querySelector("form");
form.addEventListener("submit", revealing);

// turn c into f
/*function conversion(event) {
  event.preventDefault();
  let celius = document.querySelector("#num");
  celius.innerHTML = 48;
}
let forenhight = document.querySelector("#forenhight");
forenhight.addEventListener("click", conversion);
// turn f into c
function convertCtof(event) {
  let celius = document.querySelector("#num");
  celius.innerHTML = 9;
}
let cliusSecond = document.querySelector("#celius");
cliusSecond.addEventListener("click", convertCtof);*/

//another api
//`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

/*function displayForecast(response) {
  let forecast = document.querySelector("#forecast");

  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `<div class="weather-forecast-day">
            ${formatDay(day.time + 86400)}
          </br>
            <img
              src="${day.condition.icon_url}"
              alt=""
              class="weather-forecast-date-icone"
            />
             <div>
              <span class="weather-forecast-temperature-max">${Math.round(
                day.temperature.maximum
              )}</span>
              <span class="weather-forecast-temperature-delineate"> | </span>
              <span class="weather-forecast-temperature-min">${Math.round(
                day.temperature.minimum
              )}</span>
             
             </div>
          </div>`;
    }
  });

  forecast.innerHTML = forecastHtml;
}*/
