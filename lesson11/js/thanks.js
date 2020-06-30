var url_string = window.location.href
var url = new URL(url_string);
var name = url.searchParams.get("name");
document.getElementById("name").innerHTML = name;
var stormSeverity = parseInt(url.searchParams.get("stormSeverity"));
var message = "very dangerous"
if(stormSeverity<5){
    message="not so dangerous, but"
}
document.getElementById("stormSeverity").innerHTML = message;
var stormType = url.searchParams.get("stormType");
document.getElementById("stormType").innerHTML = stormType;
