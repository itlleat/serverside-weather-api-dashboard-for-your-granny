

var weatherResultsEl = document.querySelector('weather-results');
var aTemp = document.getElementById('aTemp');
var aWin = document.getElementById('aWin');
var aHum = document.getElementById('aHum');
var currentWeather = document.getElementById('current-weather');
var zTemp = document.getElementById('zTemp');
var zWin = document.getElementById('zWin');
var zHum = document.getElementById('zHum');
const weatherIcon = document.getElementById('')


const key = 'af61749fac48e55f7ab09b69b235d6e9';

function nowWeather(city) {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=imperial')  
    .then(function(resp) {
        return resp.json() 
    })
    .then(function(data) {
        // console.log('--->'+(JSON.stringify(data)));
        // drawWeather(data);
        console.log(data);
      //  currentWeather.textContent = data.list[0].main.temp;
       zTemp.textContent = data.main.temp;
       zWin.textContent = data.wind.speed;
       zHum.textContent = data.main.humidity;
      
        // var weatherPic = data.list[3].weather[0]
      })
    .catch(function() {
        // catch any errors
    });
}

function weatherForecast(city) {
  // var aTemp = 
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key + '&units=imperial')  
    .then(function(resp) {
        return resp.json() 
    })
    .then(function(data) {
        aTemp.textContent = data.list[3].main.temp;
        aWin.textContent = data.list[3].wind.speed;
        aHum.textContent = data.list[3].main.humidity;
        var weatherPic = data.list[3].weather[0]
        var iconCode = data.weather[0].icon;

var image = document.createElement("img");
        image.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCode + ".png");
      mainI.appendChild(image);
      })
    .catch(function() {
        // catch any errors
    });
}

//Event Listeners on button click
document.addEventListener("DOMContentLoaded", () => {
  // Handling button click
  document.querySelector(".button-search").addEventListener("click", () => {
      const searchedCity = document.querySelector('.text-search');
      localStorage.setItem("search-component", JSON.stringify(searchedCity));
      console.log(searchedCity.value);
      
      if(searchedCity.value){
          weatherForecast(searchedCity.value);
          nowWeather(searchedCity.value);
      }       
    }) 
});






