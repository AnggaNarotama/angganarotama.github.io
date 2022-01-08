mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5nZ2FuYXJvdGFtYSIsImEiOiJja3k1dHVqd2wwbmp2MzFveXd0MTMydzhuIn0.cCKIXjp1WkmScbOhKzlNRg"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([115.40313,-8.53513])
}

function errorLocation() {
  setupMap([115.40313,-8.53513])
}

function setupMap(center) {
  
  const bounds = [
    [115.21516,-8.81996], // Southwest coordinates
    [115.69576,-8.42485] // Northeast coordinates
    ];
     
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [115.40313,-8.53513], // starting position
    zoom: 15, // starting zoom
    maxBounds: bounds // Set the map's geographical boundaries.
    });

  const marker = new mapboxgl.Marker()
  .setLngLat([115.40313,-8.53513])
  .setPopup(new mapboxgl.Popup().setHTML("<h1>Kabupaten Klungkung</h1>")) // add popup
  .addTo(map);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })
 
  map.addControl(directions, "top-left")
}
