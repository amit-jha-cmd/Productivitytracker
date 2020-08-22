import firebase from 'firebase';
import "firebase/auth";
  // Your web app's Firebase configuration
  //can have a separate env file and initalise the console varaibles
  var Config = {
    apiKey: "AIzaSyAuHay8EzsAz3pZ1ZPF7wiWuO1Aj7KMdJ4",
    authDomain: "authenticate-65e21.firebaseapp.com",
    databaseURL: "https://authenticate-65e21.firebaseio.com",
    projectId: "authenticate-65e21",
    storageBucket: "authenticate-65e21.appspot.com",
    messagingSenderId: "279758698106",
    appId: "1:279758698106:web:f90bb38082be76e68cedc3",
    measurementId: "G-C14V6WW28H"
  };

const firebaseConfig = firebase.initializeApp(Config);
  export default firebaseConfig;
 
