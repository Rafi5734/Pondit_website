const map = document.getElementById("map");
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 23.8689, lng: 90.4 },
    });
}
