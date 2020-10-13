import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyDeUuFNWIkt4W5HRcsQER_Drubi8c3C_ls",
  authDomain: "icarus-598e6.firebaseapp.com",
  databaseURL: "https://icarus-598e6.firebaseio.com",
  projectId: "icarus-598e6",
  storageBucket: "icarus-598e6.appspot.com",
  messagingSenderId: "156118424820",
  appId: "1:156118424820:web:34bfd2d9cd7ca4248f92a1",
  measurementId: "G-8G79WW9P8V"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}