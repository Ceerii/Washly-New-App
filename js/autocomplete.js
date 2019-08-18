const input = document.querySelector('#location');
var place;
var getAddress = document.getElementById("searchIcon");
var latlng;
var laundryPlaces;
var service;
var placeIds;
var getResults;


var autocomplete = new google.maps.places.Autocomplete(input,
     { types: ['address'],
      componentRestrictions: {country: "ng"}
 });

google.maps.event.addListener(autocomplete, 'place_changed',  async function () {
    place = await autocomplete.getPlace();
    var lats = place.geometry.location.lat();
    var lngs = place.geometry.location.lng(); 
    placeIds = place.place_id;
    laundryPlaces = new google.maps.LatLng(lats,lngs);
    console.log(place.place_id, "the value of the place_id");
    console.log(lats,lngs);
    console.log(place);
    localStorage.setItem('placeId', place.place_id);
     search();
});


function search(){
    var request={
        location : laundryPlaces,
        radius: '1000',
        type: ['laundry']
    };
    console.log(request);

    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, callback); 

    function callback(results, status){
        console.log(results);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              getResults = results[i];
              console.log(results.length);
              // console.log(results.name)

            //   console.log(getResults.place_id );
            }
            localStorage.setItem("full-result", JSON.stringify(results))
            localStorage.setItem("total-number", results.length);
            console.log(localStorage.getItem("total-number"));
            console.log(getResults.place_id );
            
            window.location.assign("/result-page.html"); 
           
          }else{
           console.log("no");
          }
    }
}



