// var cityList =$("#city-list");
// var cities = [];

// var key = "af61749fac48e55f7ab09b69b235d6e9";

//Api call to get !current! weather
// lat lon is latitude and longitude
//appid is api key

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// api to call a !5 day! forecast

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// geocoding - get the weather of a city by entering the name - api can parse coordinates from the city name

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}











//Format for day





// // function FormatDay(date){
// //     var date = new Date();
// //     console.log(date);
// //     var month = date.getMonth()+1;
// //     var day = date.getDate();
    
// //     var dayOutput = date.getFullYear() + '/' +
// //         (month<10 ? '0' : '') + month + '/' +
// //         (day<10 ? '0' : '') + day;
// //     return dayOutput;
// // }



// //Calling function init();
// init();

// //Function init();
// function init(){
//     //Get stored cities from localStorage
//     //Parsing the JSON string to an object
//     var storedCities = JSON.parse(localStorage.getItem("cities"));

//     // If cities were retrieved from localStorage, update the cities array to it
//     if (storedCities !== null) {
//         cities = storedCities;
//       }
//     // Render cities to the DOM
//     renderCities();
//     // console.log(cities);
// }

// //Function StoreCities()
// function storeCities(){
//    // Stringify and set "cities" key in localStorage to cities array
//   localStorage.setItem("cities", JSON.stringify(cities));
//   console.log(localStorage);
// }

// //Function renderCities()
// function renderCities() {
//     // Clear cityList element
//     // cityList.text = "";
//     // cityList.HTML = "";
//     cityList.empty();
    
//     // Render a new li for each city
//     for (var i = 0; i < cities.length; i++) {
//       var city = cities[i];
      
//       var li = $("<li>").text(city);
//       li.attr("id","listC");
//       li.attr("data-city", city);
//       li.attr("class", "list-group-item");
//       console.log(li);
//       cityList.prepend(li);
//     }
//     //Get Response weather for the first city only
//     if (!city){
//         return
//     } 
//     else{
//         getResponseWeather(city)
//     };
// }   

//   //When form is submitted...
//   $("#add-city").on("click", function(event){
//       event.preventDefault();

//     // This line will grab the city from the input box
//     var city = $("#city-input").val().trim();
    
//     // Return from function early if submitted city is blank
//     if (city === "") {
//         return;
//     }
//     //Adding city-input to the city array
//     cities.push(city);
//     // Store updated cities in localStorage, re-render the list
//   storeCities();
//   renderCities();
//   });

//   //Function get Response Weather 
  
//   function getResponseWeather(cityName){
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + key; 

//     //Clear content of today-weather
//     $("#today-weather").empty();
//     getResponseweather.preventDefault()
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
        
//       // Create a new table row element
//       cityTitle = $("<h3>").text(response.name + " "+ FormatDay());
//       $("#today-weather").append(cityTitle);
//       var TempetureToNum = parseInt((response.main.temp)* 9/5 - 459);
//       var cityTemperature = $("<p>").text("Tempeture: "+ TempetureToNum + " °F");
//       $("#today-weather").append(cityTemperature);
//       var cityHumidity = $("<p>").text("Humidity: "+ response.main.humidity + " %");
//       $("#today-weather").append(cityHumidity);
//       var cityWindSpeed = $("<p>").text("Wind Speed: "+ response.wind.speed + " MPH");
//       $("#today-weather").append(cityWindSpeed);
//       var CoordLon = response.coord.lon;
//       var CoordLat = response.coord.lat;

    
//         //Api to get 5-day forecast  
//         var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key;
//             preventDefault()
//             $.ajax({
//             url: queryURL3,
//             method: "GET"
//         }).then(function(response5day) { 
//             $("#boxes").empty();
//             console.log(response5day);
//             for(var i=0, j=0; j<=5; i=i+6){
//                 var read_date = response5day.list[i].dt;
//                 if(response5day.list[i].dt != response5day.list[i+1].dt){
//                     var FivedayDiv = $("<div>");
//                     FivedayDiv.attr("class","col-3 m-2 bg-primary")
//                     var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
//                     d.setUTCSeconds(read_date);
//                     var date = d;
//                     console.log(date);
//                     var month = date.getMonth()+1;
//                     var day = date.getDate();
//                     var dayOutput = date.getFullYear() + '/' +
//                     (month<10 ? '0' : '') + month + '/' +
//                     (day<10 ? '0' : '') + day;
//                     var Fivedayh4 = $("<h6>").text(dayOutput);
//                     //Set src to the imags
//                     var imgtag = $("<img>");
//                     var skyconditions = response5day.list[i].weather[0].main;
//                     if(skyconditions==="Clouds"){
//                         imgtag.attr("src", "https://img.icons8.com/color/48/000000/cloud.png")
//                     } else if(skyconditions==="Clear"){
//                         imgtag.attr("src", "https://img.icons8.com/color/48/000000/summer.png")
//                     }else if(skyconditions==="Rain"){
//                         imgtag.attr("src", "https://img.icons8.com/color/48/000000/rain.png")
//                     }

//                     var pTemperatureK = response5day.list[i].main.temp;
//                     console.log(skyconditions);
//                     var TempetureToNum = parseInt((pTemperatureK)* 9/5 - 459);
//                     var pTemperature = $("<p>").text("Tempeture: "+ TempetureToNum + " °F");
//                     var pHumidity = $("<p>").text("Humidity: "+ response5day.list[i].main.humidity + " %");
//                     FivedayDiv.append(Fivedayh4);
//                     FivedayDiv.append(imgtag);
//                     FivedayDiv.append(pTemperature);
//                     FivedayDiv.append(pHumidity);
//                     $("#boxes").append(FivedayDiv);
//                     console.log(response5day);
//                     j++;
//                 }
            
//         }
      
//     });
      

//     });
    
//   }

//   //Click function to each Li 
//   $(document).on("click", "#listC", function() {
//     var thisCity = $(this).attr("data-city");
//     getResponseWeather(thisCity);
//   });


// var key = "af61749fac48e55f7ab09b69b235d6e9";
// var citySearchEl = document.querySelector('#city-search')
// var resultTextEl = document.querySelector('#result-text');
// var resultContentEl = document.querySelector('#result-content');
// var searchFormEl = document.querySelector('#search-form');

// function getParams() {
//   // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//   var searchParamsArr = document.location.search.split('&');

//   // Get the query and format values
//   var query = searchParamsArr[0].split('=').pop();
//   var format = searchParamsArr[1].split('=').pop();

//   searchApi(query, format);
// }

// function printResults(resultObj) {
//   console.log(resultObj);

//   // set up `<div>` to hold result content
//   var resultCard = document.createElement('div');
//   resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//   var resultBody = document.createElement('div');
//   resultBody.classList.add('card-body');
//   resultCard.append(resultBody);

//   var titleEl = document.createElement('h3');
//   titleEl.textContent = resultObj.title;

//   var bodyContentEl = document.createElement('p');
//   bodyContentEl.innerHTML =
//     '<strong>Date:</strong> ' + resultObj.date + '<br/>';

//   if (resultObj.subject) {
//     bodyContentEl.innerHTML +=
//       '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Subjects:</strong> No subject for this entry.';
//   }

//   if (resultObj.description) {
//     bodyContentEl.innerHTML +=
//       '<strong>Description:</strong> ' + resultObj.description[0];
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Description:</strong>  No description for this entry.';
//   }

//   var linkButtonEl = document.createElement('a');
//   linkButtonEl.textContent = 'Read More';
//   linkButtonEl.setAttribute('href', resultObj.url);
//   linkButtonEl.classList.add('btn', 'btn-dark');

//   resultBody.append(titleEl, bodyContentEl, linkButtonEl);

//   resultContentEl.append(resultCard);
// }

// function searchApi(query, format) {
//   var locQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + key;

//   if (format) {
//     locQueryUrl = 'hhttps://api.openweathermap.org/' + format +  'data/2.5/weather' + '/?fo=json';
//   }

//   locQueryUrl = locQueryUrl + '&q=' + query;

//   fetch(locQueryUrl)
//     .then(function (response) {
//       if (!response.ok) {
//         throw response.json();
//       }

//       return response.json();
//     })
//     .then(function (locRes) {
//       // write query to page so user knows what they are viewing
//       resultTextEl.textContent = locRes.search.query;

//       console.log(locRes);

//       if (!locRes.results.length) {
//         console.log('No results found!');
//         resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//       } else {
//         resultContentEl.textContent = '';
//         for (var i = 0; i < locRes.results.length; i++) {
//           printResults(locRes.results[i]);
//         }
//       }
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   var formatInputVal = document.querySelector('#format-input').value;

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   searchApi(searchInputVal, formatInputVal);
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// getParams();

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
  // var aTemp = 
  // document.addEventListener("DOMContentLoaded", () => {
  //   // Handling button click
  //   document.querySelector(".button-search").addEventListener("click", () => {
  //       const searchedCity = document.querySelector('.text-search');
  //       localStorage.setItem("search-component", JSON.stringify(searchedCity));
  //       console.log(searchedCity.value);
  //       }
  //       if(searchedCity.value){
  //           weatherForecast(searchedCity.value);
  //           nowWeather(searchedCity.value);
  //       }       
  //     })
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
        // console.log('--->'+(JSON.stringify(data)));
        // drawWeather(data);
        // console.log(data);
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

// var iconCode = data.weather[0].icon;

// var image = document.createElement("img");
//         image.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCode + ".png");
//       mainI.appendChild(image);

// aTemp.textContent = data.list[3].main.temp;

// function drawWeather( d ) {
//   var celcius = Math.round(parseFloat(d.main.temp)-273.15);
//   var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
//   var description = d.weather[0].description; 
  
//   document.getElementById('description').innerHTML = description;
//   document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
//   document.getElementById('location').innerHTML = d.name+' '+d.sys.country;
// }




//Event Listeners on button click
document.addEventListener("DOMContentLoaded", () => {
  // Handling button click
  document.querySelector(".button-search").addEventListener("click", () => {
      const searchedCity = document.querySelector('.text-search');
      localStorage.setItem("search-component", JSON.stringify(searchedCity));
      console.log(searchedCity.value);
      

    // for (var i = 0; i< searchedCity.length; i++){
    //   var city = searchedCity[i];
      
    //   var li = $("<li>").text(searchedCity);
    //   li.attr("id","listC");
    //   li.attr("data-city", searchedCity);
    //   li.attr("class", "list-group-item");
    //   console.log(li);
    //   cityList.prepend(li);
    // }
      if(searchedCity.value){
          weatherForecast(searchedCity.value);
          nowWeather(searchedCity.value);
      }       
    }) 
});

// //Function StoreCities()
// function storeCities(){
//    // Stringify and set "cities" key in localStorage to cities array
//   localStorage.setItem("cities", JSON.stringify(cities));
//   console.log(localStorage);
// }

// //Function renderCities()
// function renderCities() {
//     // Clear cityList element
//     // cityList.text = "";
//     // cityList.HTML = "";
//     cityList.empty();
    
//     // Render a new li for each city
//     for (var i = 0; i < cities.length; i++) {
//       var city = cities[i];
      
//       var li = $("<li>").text(city);
//       li.attr("id","listC");
//       li.attr("data-city", city);
//       li.attr("class", "list-group-item");
//       console.log(li);
//       cityList.prepend(li);
//     }
//     //Get Response weather for the first city only
//     if (!city){
//         return
//     } 
//     else{
//         getResponseWeather(city)
//     };
// }   

//   //When form is submitted...
//   $("#add-city").on("click", function(event){
//       event.preventDefault();

//     // This line will grab the city from the input box
//     var city = $("#city-input").val().trim();
    
//     // Return from function early if submitted city is blank
//     if (city === "") {
//         return;
//     }
//     //Adding city-input to the city array
//     cities.push(city);
//     // Store updated cities in localStorage, re-render the list
//   storeCities();
//   renderCities();
//   });
