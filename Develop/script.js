// const searchButton = document.querySelector('#city-name');
// const submit = document.querySelector('#submit');
// const fiveDayForecast = document.querySelector('.five-day');
// const key = "af61749fac48e55f7ab09b69b235d6e9";
// const todayEl = document.getElementById('today');
// const todayDate = dayjs().format('MMMM DD, YYYY');
// var temp = document.getElementById("temp");
// const wind = document.getElementById('wind');
// const humidity = document.getElementById('humidity');
// const condition = document.getElementById('condition');
// var searchedCity = document.querySelector('.searched-cities');
// var futureTemp = document.querySelector('.future-temp');
// const foreCastOne = document.querySelector('.future-date-one');
// const foreCastTwo = document.querySelector('.future-date-two');
// const foreCastThree = document.querySelector('.future-date-three');
// const foreCastFour = document.querySelector('.future-date-four');
// const foreCastFive = document.querySelector('.future-date-five');
// const today = dayjs()
// var nextDay = [];
// var searched = [];

// // Pull searched cities from local storage to create list
// function init() {
//   var savedCities = JSON.parse(localStorage.getItem("searched"));

//   if (savedCities !== null) {
//     searched = savedCities;
//     console.log(searched);
//   }
//   searchedCity.textContent = "";

//   for (let i = 0; i < searched.length; i++) {
//     var city = searched[i];
//     var div = document.createElement("div");
//     div.textContent = city;
//     div.classList.add(
//       "card",
//       "bg-light",
//       "text-dark",
//       "mt-3",
//       "mb-3",
//       "p-3",
//       "text-center"
//     );

//     console.log(city);
//     searchedCity.appendChild(div);
//   }
//   var card = document.querySelectorAll(".card");
//   for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener("click", function () {
//       getApiCity(this.textContent);
//     });
//   }
// };

// // Event listener to add searched cities to local storage
// submit.addEventListener("click", function (event) {
//   event.preventDefault();
//   var cityName = searchButton.value.trim();
//   if (cityName === "") {
//     return;
//   }
//   getApiCity(cityName);
//   searched.push(cityName);
//   searchButton.value = "";
//   localStorage.setItem("searched", JSON.stringify(searched));
//   init();
// });

// //Weather API function
// function getApiCity(cityName) {
//   for (let i = document.images.length; i-- > 0; ) {
//     document.images[i].parentNode.removeChild(document.images[i]);
//   }
//   console.log(cityName);
//   var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + key + '&units=imperial';

//   for (let i = 0; i <= 5; i++) {
//     let tomorrow = dayjs(today).add(i, "day");
//     nextDay.push(tomorrow.format("MMMM DD, YYYY"));
//   }
//   foreCastOne.textContent = nextDay[1];
//   foreCastTwo.textContent = nextDay[2];
//   foreCastThree.textContent = nextDay[3];
//   foreCastFour.textContent = nextDay[4];
//   foreCastFive.textContent = nextDay[5];
//   console.log(nextDay);
 

//   // Pull current weather from API
//   fetch(currentWeatherUrl)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })

//     .then(function (data) {
//       console.log(data);
//       todayEl.textContent = `${cityName}  (${todayDate})`;
//       temp.textContent = `${data.main.temp} °F`;
//       wind.textContent = `${data.wind.speed} MPH`;
//       humidity.textContent = `${data.main.humidity}%`;

//       const iconCode = data.weather[0].icon;
//       const image = document.createElement("img");
//       image.setAttribute(
//         "src",
//         "https://openweathermap.org/img/wn/" + iconCode + ".png"
//       );
//       condition.textContent = "";
//       condition.append(image);

//       // Pull 5 day forecast from API
//       // const futureWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + key + '&units=imperial';

//       // fetch(futureWeatherURL)
//       //   .then(function (response) {
//       //     return response.json();
//       //   })
//       //   .then(function (data) {
//       //     console.log(data);
//       //     var index = 1;

//       //     for (let i = 5; i < data.list.length; i = i + 8) {
//       //       console.log(data.list[i]);
//       //       var weatherIcon = document.querySelector(".weather-icon" + index);
//       //       weatherIcon.textContent = "";
//       //       console.log(data);

//       //       var fiveDayIcon = data.list[i].weather[0].icon;
//       //       var image1 = document.createElement("img");
//       //       image1.setAttribute(
//       //         "src",
//       //         "https://openweathermap.org/img/wn/" + fiveDayIcon + "@2x.png"
//       //       );

//       //       weatherIcon.append(image1);
//       //       var futureTemp1 = document.querySelector(".future-temp" + index);
//       //       var futureWind1 = document.querySelector(".future-wind" + index);
//       //       var futureHumidity1 = document.querySelector(
//       //         ".future-humidity" + index
//       //       );
//       //       futureTemp1.textContent = `Temp: ${data.list[i].main.temp} °F`;
//       //       futureWind1.textContent = `Wind: ${data.list[i].wind.speed} MPH`;
//       //       futureHumidity1.textContent = `Humidity: ${data.list[i].main.humidity}%`;
//       //       index++;
//       //     }
//       //   });

//       // Pull 5 day forecast from API
// const futureWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + key + '&units=imperial';

// fetch(futureWeatherURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     todayEl.textContent = `${cityName}  (${todayDate})`;
//     futureTemp.textContent = `${data.list[0].main.temp} °F`;
//     wind.textContent = `${data.list[0].wind.speed} MPH`;
//     humidity.textContent = `${data.list[0].main.humidity}%`;

//     const iconCode = data.list[0].weather[0].icon;
//     const image = document.createElement("img");
//     image.setAttribute(
//       "src",
//       "https://openweathermap.org/img/wn/" + iconCode + ".png"
//     );
//     condition.textContent = "";
//     condition.append(image);

//     var index = 1;

//     for (let i = 5; i < data.list.length; i = i + 8) {
//       console.log(data.list[i]);
//       var weatherIcon = document.querySelector(".weather-icon" + index);
//       weatherIcon.textContent = "";
//       console.log(data);

//       var fiveDayIcon = data.list[i].weather[0].icon;
//       var image1 = document.createElement("img");
//       image1.setAttribute(
//         "src",
//         "https://openweathermap.org/img/wn/" + fiveDayIcon + "@2x.png"
//       );

//       weatherIcon.append(image1);
//       var futureTemp1 = document.querySelector(".future-temp" + index);
//       var futureWind1 = document.querySelector(".future-wind" + index);
//       var futureHumidity1 = document.querySelector(
//         ".future-humidity" + index
//       );
//       futureTemp1.textContent = `Temp: ${data.list[i].main.temp} °F`;
//       futureWind1.textContent = `Wind: ${data.list[i].wind.speed} MPH`;
//       futureHumidity1.textContent = `Humidity: ${data.list[i].main.humidity}%`;

//       index++;
//     }
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
//     });
// };

var searchButton = document.querySelector("#city-name");
var submit = document.querySelector("#submit");
var fiveDayForecast = document.querySelector("#five-day");
var apiKey = "af61749fac48e55f7ab09b69b235d6e9";
var todaysDate = dayjs().format("MMMM DD, YYYY");
var todayEl = document.getElementById("today");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var condition = document.getElementById("condition");
var searchedCities = document.querySelector(".searched-cities");
var futureDate1 = document.querySelector(".future-date1");
var futureDate2 = document.querySelector(".future-date2");
var futureDate3 = document.querySelector(".future-date3");
var futureDate4 = document.querySelector(".future-date4");
var futureDate5 = document.querySelector(".future-date5");
var futureTemp = document.querySelector(".future-temp");
var today = dayjs();
var nextDay = [];
var searched = [];

// Pull searched cities from local storage to create list
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
      "mt-3",
      "mb-3",
      "p-3",
      "text-center"
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
};

// Event listener to add searched cities to local storage
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

//Weather API function
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

  // Pull current weather from API
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

      // Pull 5 day forecast from API
      var futureWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

      fetch(futureWeatherURL)
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
};