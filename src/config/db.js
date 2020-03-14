import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCtna5-szJeLHwli86vPryQf0bVnJEzpcE",
    authDomain: "referral-flow.firebaseapp.com",
    databaseURL: "https://referral-flow.firebaseio.com",
    projectId: "referral-flow",
    storageBucket: "referral-flow.appspot.com",
    messagingSenderId: "956489447320",
    appId: "1:956489447320:web:12cca49311b8a9bcccdded",
    measurementId: "G-TXMH86TGJ2"
  };

  firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database};