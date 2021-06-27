function initMap() {
    var bake = { lat: 10.806141, lng: 106.669060};
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: bake });
    var marker = new google.maps.Marker({ position: bake, map: map });
}

