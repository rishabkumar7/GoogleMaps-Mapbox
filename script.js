mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGFia3VtYXI3IiwiYSI6ImNraGRrc3Q3bTBoaXYyeG53NnU3czd0aXkifQ.1x98rE3iYJSnymrR1Gu90g';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-79.41, 43.68])
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 10
  })

const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})

map.addControl(directions, "top-left")
}