// Initialize the map and set its view to a specific location and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (this is the visual map layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker at a specific location
var marker = L.marker([51.5, -0.09]).addTo(map);

// Add popup text to the marker
marker.bindPopup("<b>Hello!</b><br>This is a marker on the map.").openPopup();
