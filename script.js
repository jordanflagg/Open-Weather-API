/*
  Author: <Your Name>
  Date: <Submission Date>
  MGT 3745 B Fall 2021
  Homework 4

1. Using the definition as described in The Lean Product Playbook (Links to an external site.), describe the purpose, basic structure, and an example of a product user story. If more information is needed, imagine deriving a user story for an existing feature within a web browser (e.g., Google Chrome, Microsoft Edge, Mozilla Firefox, Brave Browser)

User stories are a way to describe a feature set that makes sure the benefit to a direct group of customers remains clear. The basic structure is 

As a [type of user]
I want to [do something]
so that I can [desired benefit]

an example would be

As a student
I want canvas to send me an alert if an upcoming assignment has no submission
so that I can not forget to turn stuff in 


2. Name one difference between product and marketing MVP tests and one difference between quantitative and qualitative MVP tests.

Product mvp tests have some level of functionality for customers to see or try out where marketing mvp tests describe the functionality of the product to guage customer interest.

Quantitative mvp tests involve collecting data from a large testing group, without focus on any individual user experiences. Qualitative mvps tests use direct feedbeack from a smaller group of testers who can share the details of their experience. 


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

  https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=518d0d1bf8dba422852add942b89ffa5
*/


var button = document.getElementById("btn");
button.addEventListener("click", search);

function search(){
  //console.log(count++)
  getWeatherData(document.getElementById("userInput1").value)
}

function getWeatherData(city){

  //https://www.w3schools.com/js/js_api_fetch.asp
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=518d0d1bf8dba422852add942b89ffa5`)
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

