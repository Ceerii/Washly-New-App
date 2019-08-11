// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgys0RWpOLCXPzuW9B0ph5LOJ56Z_-yZs",
    authDomain: "washly-auth.firebaseapp.com",
    databaseURL: "https://washly-auth.firebaseio.com",
    projectId: "washly-auth",
    storageBucket: "",
    messagingSenderId: "32346399713",
    appId: "1:32346399713:web:743103593c3da9f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();

  function googleSignin() {
     firebase.auth()
     
     .signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
          
        console.log(token)
        console.log(user)
     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
          
        console.log(error.code)
        console.log(error.message)
     });
  }
  
 