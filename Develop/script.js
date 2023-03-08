// Calling all DOM!
const searchButton = document.querySelector("#city-name");
const submit = document.querySelector("#submit");
const fiveDayForecast = document.querySelector("#five-day");
const apiKey = "af61749fac48e55f7ab09b69b235d6e9";
const todaysDate = dayjs().format("MMMM DD, YYYY");
const todayEl = document.getElementById("today");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");
var searchedCities = document.querySelector(".searched-cities");
const futureDate1 = document.querySelector(".future-date1");
const futureDate2 = document.querySelector(".future-date2");
const futureDate3 = document.querySelector(".future-date3");
const futureDate4 = document.querySelector(".future-date4");
const futureDate5 = document.querySelector(".future-date5");
const futureTemp = document.querySelector(".future-temp");
const today = dayjs();
const nextDay = [];
var searched = [];

// Get and parse the already searched cities
function init() {
  var savedCities = JSON.parse(localStorage.getItem("searched"));

  if (savedCities !== null) {
    searched = savedCities;
    console.log(searched);
  }
  searchedCities.textContent = "";

  for (let i = 0; i < searched.length; i++) {
    var city = searched[i];
    var div = document.createElement("div");
    div.textContent = city;
    div.classList.add(
      "card",
      "bg-light",
      "text-dark",
      "mt-2",
      "mb-2",
      "p-2",
      "text-center",
      "br-2"
    );

    console.log(city);
    searchedCities.appendChild(div);
  }
  var card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      getApiCity(this.textContent);
    });
  }
}

// On click search for the city
submit.addEventListener("click", function (event) {
  event.preventDefault();
  var city = searchButton.value.trim();
  if (city === "") {
    return;
  }
  getApiCity(city);
  searched.push(city);
  searchButton.value = "";
  localStorage.setItem("searched", JSON.stringify(searched));
  init();
});

// A function to get the API data from the searched city
function getApiCity(cityName) {
  for (let i = document.images.length; i-- > 0; ) {
    document.images[i].parentNode.removeChild(document.images[i]);
  }
  console.log(cityName);
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

  for (let i = 0; i <= 5; i++) {
    let tomorrow = dayjs(today).add(i, "day");
    nextDay.push(tomorrow.format("MMMM DD, YYYY"));
  }
  futureDate1.textContent = nextDay[1];
  futureDate2.textContent = nextDay[2];
  futureDate3.textContent = nextDay[3];
  futureDate4.textContent = nextDay[4];
  futureDate5.textContent = nextDay[5];
  console.log(nextDay);

  // Fetch the current weather and add additional elements of data
  fetch(currentWeatherUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      todayEl.textContent = `${cityName}  (${todaysDate})`;
      temp.textContent = `${data.main.temp} °F`;
      wind.textContent = `${data.wind.speed} MPH`;
      humidity.textContent = `${data.main.humidity}%`;

      var iconCode = data.weather[0].icon;
      var image = document.createElement("img");
      image.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + iconCode + ".png"
      );
      condition.textContent = "";
      condition.append(image);

      // call the 5 day forecast
      var foreCastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

      fetch(foreCastURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var index = 1;

          for (let i = 5; i < data.list.length; i = i + 8) {
            console.log(data.list[i]);
            var weatherIcon = document.querySelector(".weather-icon" + index);
            weatherIcon.textContent = "";
            console.log(data);

            var fiveDayIcon = data.list[i].weather[0].icon;
            var image1 = document.createElement("img");
            image1.setAttribute(
              "src",
              "https://openweathermap.org/img/wn/" + fiveDayIcon + "@2x.png"
            );

            // Append the weather with its appropriate badge
            
            weatherIcon.append(image1);
            var futureTemp1 = document.querySelector(".future-temp" + index);
            var futureWind1 = document.querySelector(".future-wind" + index);
            var futureHumidity1 = document.querySelector(
              ".future-humidity" + index
            );
            futureTemp1.textContent = `Temp: ${data.list[i].main.temp} °F`;
            futureWind1.textContent = `Wind: ${data.list[i].wind.speed} MPH`;
            futureHumidity1.textContent = `Humidity: ${data.list[i].main.humidity}%`;
            index++;
          }
        });
    });
}
