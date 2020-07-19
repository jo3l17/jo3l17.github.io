const fillPage = (id) => {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id="+id+"&units=imperial&APPID=c1f6fb6b50ba56614c1c0da21d37b603";
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            const current = jsObject.current
            document.getElementById('currently').textContent = jsObject.weather[0].main;
            document.getElementById('high_temperature').textContent = Math.round(jsObject.main.temp_max);
            document.getElementById('humidity').textContent = jsObject.main.humidity;
            document.getElementById('wind_speed').textContent = Math.round(jsObject.wind.speed);
            windChill();
        });
    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id="+id+"&units=imperial&APPID=c1f6fb6b50ba56614c1c0da21d37b603"
    var predictionTable = document.getElementById("forecast_prediction");
    predictionTable.innerHTML = ""
    fetch(forecastURL)
        .then(response => response.json())
        .then(forecastData => {
            let forecastTableData = forecastData.list.filter((element) => element.dt_txt.includes("18:00:00"))
            for (let i = 0; i < forecastTableData.length; i++) {
                var cell = document.createElement('td');
                var img = document.createElement("img");
                img.setAttribute('src', 'https://openweathermap.org/img/wn/' + forecastTableData[i].weather[0].icon + '.png');
                img.setAttribute('alt', forecastTableData[i].weather[0].description)
                var br = document.createElement("br");
                var span = document.createElement("span");
                span.textContent = forecastTableData[i].main.temp + ' °F'
                cell.append(img, br, span)
                predictionTable.appendChild(cell)
            }
        })
}