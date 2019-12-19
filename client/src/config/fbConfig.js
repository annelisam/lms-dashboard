import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyD51JwUZEFvgKmCtIYj8yZaWshWsMD_tuk",
  authDomain: "annelisa-pm.firebaseapp.com",
  databaseURL: "https://annelisa-pm.firebaseio.com",
  projectId: "annelisa-pm",
  storageBucket: "annelisa-pm.appspot.com",
  messagingSenderId: "1067764814152",
  appId: "1:1067764814152:web:763576378c27693555237d",
  measurementId: "G-QGVD894KM8"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;

