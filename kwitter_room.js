
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDL3ILOTjJvgDyjBHvONuGZP6OCi860kag",
      authDomain: "kwitter-3c3aa.firebaseapp.com",
      projectId: "kwitter-3c3aa",
      storageBucket: "kwitter-3c3aa.appspot.com",
      messagingSenderId: "906607481270",
      appId: "1:906607481270:web:fa1e4a95b1871f78cdb117"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
