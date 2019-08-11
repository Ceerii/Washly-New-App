const input = document.querySelector('#location');
var place;
var getAddress = document.getElementById("searchIcon");
var latlng;


var autocomplete = new google.maps.places.Autocomplete(input,
     { types: ['address'],
      componentRestrictions: {country: "ng"}
 });

google.maps.event.addListener(autocomplete, 'place_changed',  async function () {
    place = await autocomplete.getPlace();
    console.log(place.place_id, "the value of the place_id");
    console.log(place);
    localStorage.setItem('placeId', place.place_id);
     search();
});


function search(){
    var request={
        location : place.place_id,
        radius: '1000',
        type: ['laundry']
    };
    console.log(request);
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, callback);

    function callback(){
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var getResults = results[i];
              console.log(getResults);
            }
          }
    }
}
