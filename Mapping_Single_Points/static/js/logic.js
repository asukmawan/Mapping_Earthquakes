// Add console.log to check to see if our code is working.
console.log("working");

// // Method 1: Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Method 2: Create the map object with a center and zoom level. - more useful when we have to add multiple tile layers or background image of our map
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 14
  });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  Add a circle to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);


//  Add a circle marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: 'yellow'
  // fillColor: '#ffffa1'
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

    // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);