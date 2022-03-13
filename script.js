/*
  Author: Jordan Flagg
  Date: October 2021
  
  Scenario: You've been selected to produce an interactive prototype that is able to take in user input and append results to the screen.

  Directions: Without editing the index.html page, write code in the script.js file which will:
  -  Take the value entered into the input field and when the button is clicked, make a weather API request for the current conditions, and parse/append the response to the page. If more than one result is returned, display the first result. If no results are returned, then don't update the page. See animated gif in canvas for desired behavior. For your API request, use the first of the three API search formats, which accepts a city name or zip code:
  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  Example: 
    https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=000000000000000


  The main temperature should be displayed in Fahrenheit (Default: Kelvin) and wind speed should be dislayed in miles per hour (Default: meter/sec). Use the API parameters to return the values in the proper units. Also, display an image representing the current weather conditions.
  DO NOT mathematically convert the default kelvin and m/s values to Fahrenheit and mph.
  
  References: https://openweathermap.org/current
  Icons: https://openweathermap.org/weather-conditions
  Postman: https://www.postman.com/downloads/

  
*/

var API_KEY = config.API_KEY

var button = document.getElementById("btn");
button.addEventListener("click", search);

function search(){
  //console.log(count++)
  getWeatherData(document.getElementById("userInput1").value)
}

function getWeatherData(city){

  //https://www.w3schools.com/js/js_api_fetch.asp
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    
    document.getElementById("resultBox").innerText = `
    Temp: ${data.main.temp} \xB0F
    Wind: ${data.wind.speed} mph
    Description: ${data.weather[0].description}
    `

    let img = document.createElement("img")
    img.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById("resultBox").appendChild(img)
  
  });
    
}

