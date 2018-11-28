function initMap(){
  var teslaHQ = {lat: 37.394706, lng: -122.150325};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 16, center: teslaHQ
    }
  );
  var marker = new google.maps.Marker({
    position: teslaHQ,
    map: map
  });
}