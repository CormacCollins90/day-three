let request = new XMLHttpRequest();
// APIKEY is the key the weather site gives you.
let APIKEY = "62d04e5c57e8d07fc97bef4241a59bc5";

function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
    console.log(apiData);
    // This pulls the data from the element
    let temp = (apiData.main.temp - 273.15).toFixed(0) + "&deg;C"
    let htmlString = "<strong>" + apiData.name + ":</strong>" + " " + apiData.weather[0].description;

    htmlString += `<img src="http://openweathermap.org/img/w/${apiData.weather[0].icon}.png">
    <br />`;
    htmlString += `<strong>Temperature:</strong> ${temp}
        <br />`;
    htmlString += `<strong>Air Pressure:</strong> ${apiData.main.pressure}
    <br />`;
    htmlString += `<strong>Wind Speed:</strong> ${apiData.wind.speed}`;


    document.getElementById("weatherData").innerHTML = htmlString;
}

// function submitCity() {
//     let cityName = document.getElementById("cityForm")["city"].value;
request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Monkstown,IE&APPID=" + APIKEY);
request.send();
// }


request.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            displayNicely(this.responseText);
        }
        else if (this.status == 404) {
            document.getElementById("weatherData").innerHTML = "<h2>City not found! please try again,</h2>";
        }
    }
}
