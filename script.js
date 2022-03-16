// API Key is hidden in config.js
var API_KEY = config.API_KEY

// GO button to run search function when clicked
var button = document.getElementById("btn");
button.addEventListener("click", search);

// Searches for city input by user from OpenWeather
function search(){
  //console.log(count++)
  getWeatherData(document.getElementById("userInput1").value)
  document.getElementById("userInput1").value = ""
}

var lat = 0
var lon = 0

function getWeatherData(city){

  //https://www.w3schools.com/js/js_api_fetch.asp
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {

    // First call returns current temp, wind, description, and weather image
    document.getElementById("city").innerText = `${data.name}`
    document.getElementById("maintemp").innerText = `${Math.round(data.main.temp)} \xB0F`
    document.getElementById("resultBox").innerText = `Wind: ${Math.round(data.wind.speed)} mph
    ${data.weather[0].description}
    `
    document.getElementById("wimg").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    lon = data.coord.lon
    lat = data.coord.lat
    
    
    //let img = document.createElement("img")
    //img.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    //document.getElementById("resultBox").appendChild(img)

    // Second call uses lat and lon to get 5 day forecast 
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {

    // For each daily weather object, unix time is converted to day, daily temp is returned along with description
    
    var milliseconds = data.daily[0].dt * 1000
    var dateObject = new Date(milliseconds)
    var humanDateFormat = dateObject.toLocaleString()
    
    document.getElementById("temp1").innerText = `${Math.round(data.daily[0].temp.day)} \xB0F`
    document.getElementById("day1").innerText = `${dateObject.toLocaleString("en-US", {weekday: "long"})}`
    document.getElementById("des1").innerText = `${data.daily[0].weather[0].description}`

    var milliseconds = data.daily[1].dt * 1000
    var dateObject = new Date(milliseconds)
    var humanDateFormat = dateObject.toLocaleString()
    
    document.getElementById("temp2").innerText = `${Math.round(data.daily[1].temp.day)} \xB0F`
    document.getElementById("day2").innerText = `${dateObject.toLocaleString("en-US", {weekday: "long"})}`
    document.getElementById("des2").innerText = `${data.daily[1].weather[0].description}`

    var milliseconds = data.daily[2].dt * 1000
    var dateObject = new Date(milliseconds)
    var humanDateFormat = dateObject.toLocaleString()
    
    document.getElementById("temp3").innerText = `${Math.round(data.daily[2].temp.day)} \xB0F`
    document.getElementById("day3").innerText = `${dateObject.toLocaleString("en-US", {weekday: "long"})}`
    document.getElementById("des3").innerText = `${data.daily[2].weather[0].description}`

    var milliseconds = data.daily[3].dt * 1000
    var dateObject = new Date(milliseconds)
    var humanDateFormat = dateObject.toLocaleString()
    
    document.getElementById("temp4").innerText = `${Math.round(data.daily[3].temp.day)} \xB0F`
    document.getElementById("day4").innerText = `${dateObject.toLocaleString("en-US", {weekday: "long"})}`
    document.getElementById("des4").innerText = `${data.daily[3].weather[0].description}`

    var milliseconds = data.daily[4].dt * 1000
    var dateObject = new Date(milliseconds)
    var humanDateFormat = dateObject.toLocaleString()
    
    document.getElementById("temp5").innerText = `${Math.round(data.daily[4].temp.day)} \xB0F`
    document.getElementById("day5").innerText = `${dateObject.toLocaleString("en-US", {weekday: "long"})}`
    document.getElementById("des5").innerText = `${data.daily[4].weather[0].description}`
    })
  });

  
        
    
}

