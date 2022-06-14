var firebaseConfig = {
    apiKey: "AIzaSyA_fMhM54vDPbchDaXhUhlbwy3SqzF07kY",
    authDomain: "all-project-5ae38.firebaseapp.com",
    databaseURL: "https://all-project-5ae38-default-rtdb.firebaseio.com",
    projectId: "all-project-5ae38",
    storageBucket: "all-project-5ae38.appspot.com",
    messagingSenderId: "583572244484",
    appId: "1:583572244484:web:39041c14276d3af3b20d51"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
 }
