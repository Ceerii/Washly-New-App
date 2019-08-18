var user;
getPlaceDetails();
errorDetails();
let output = [];

function  getPlaceDetails(){
    
    //   var requestplace={
    //     placeId: getResults.place_id,
    //   };
    // //   console.log(requestplace.placeId);
    // // window.location.assign("/result-page.html");
    //   service = new google.maps.places.PlacesService(document.createElement('div'));
    //   service.getDetails(requestplace, callbackresult);

    //   function callbackresult(details, status){
          
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         //  const check = [];
    //         console.log(details.name);

            
    //     }

    //   }

     user = JSON.parse(localStorage.getItem("full-result"));
    console.log( JSON.parse(localStorage.getItem("full-result")));
    console.log(user.length);
    document.querySelector(".totalno").innerHTML=`${user.length}`;
   
  

     
}



