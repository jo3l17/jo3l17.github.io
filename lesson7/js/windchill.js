var high_temperature = parseFloat(document.getElementById("high_temperature").innerHTML);
var wind_speed = parseFloat(document.getElementById("wind_speed").innerHTML);
var wind_chill = document.getElementById("wind_chill");
if (high_temperature > 50 || wind_speed < 3) {
    wind_chill.innerHTML = "N/A";
} else {
    var t = high_temperature;
    var s16 = Math.pow(wind_speed, 0.16);
    var f = 35.74 + (0.6215 * t) - (35.75 * s16) + (0.4275 * t * s16);
    wind_chill.innerHTML = Math.round(f);
};