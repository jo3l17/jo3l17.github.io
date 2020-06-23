const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c1f6fb6b50ba56614c1c0da21d37b603";
// const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.09631&lon=-111.876617&units=imperial&appid=c1f6fb6b50ba56614c1c0da21d37b603";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const current = jsObject.current
        document.getElementById('currently').textContent = jsObject.weather[0].main;
        document.getElementById('high_temperature').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind_speed').textContent = jsObject.wind.speed;
        windChill();
    });
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c1f6fb6b50ba56614c1c0da21d37b603"
var predictionTable = document.getElementById("forecast_prediction");
predictionTable.innerHTML=""
fetch(forecastURL)
    .then(response=>response.json())
    .then(forecastData=>{
        let forecastTableData = forecastData.list.filter((element)=>element.dt_txt.includes("18:00:00"))
        for (let i = 0; i < forecastTableData.length; i++) {
            var cell = document.createElement('td');
            var img = document.createElement("img");
            img.setAttribute('src','https://openweathermap.org/img/w/' + forecastTableData[i].weather[0].icon + '.png');
            img.setAttribute('alt',forecastTableData[i].weather[0].description)
            var br = document.createElement("br");
            var span = document.createElement("span");
            span.textContent = forecastTableData[i].main.temp + ' °F'
            cell.append(img,br,span)
            predictionTable.appendChild(cell)
        }
    })