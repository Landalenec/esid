navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var address = getAddress(lat, lon);
  console.log(address);
});
