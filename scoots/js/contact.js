// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: 20.4969934, lng: -86.965853 };
    var firstLocation = { lat: 20.510256, lng: -86.950202 }
    var secondLocation = { lat: 20.476536, lng: -86.973094 }
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13.2, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: firstLocation, map: map });
    var marker2 = new google.maps.Marker({ position: secondLocation, map: map });
}
const sendEvent = (e) =>{
    e.preventDefault();
    document.getElementById('sended').style.display='block'
    document.getElementById("contact_form").reset();
    scroll(0, 0);
}