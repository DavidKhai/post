import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyATTNJnkeG7VYRImF9lA6zySbnk5qdnMfU",
    authDomain: "holocom-f66e0.firebaseapp.com",
    databaseURL: "https://holocom-f66e0-default-rtdb.firebaseio.com",
    projectId: "holocom-f66e0",
    storageBucket: "holocom-f66e0.appspot.com",
    messagingSenderId: "48590608146",
    appId: "1:48590608146:web:f38a1391832977ac81c5cb",
    measurementId: "G-0NPECB1ZZH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const DataPost = firebase.database().ref('DataHolocom');