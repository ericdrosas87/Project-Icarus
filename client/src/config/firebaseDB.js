import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCm3r-aZKnTBNrcCQX_Zf8oY_Q70Age0es",
  authDomain: "project-icarus-71c43.firebaseapp.com",
  databaseURL: "https://project-icarus-71c43.firebaseio.com",
  projectId: "project-icarus-71c43",
  storageBucket: "project-icarus-71c43.appspot.com",
  messagingSenderId: "837137371384",
  appId: "1:837137371384:web:cfcb68b22a30afb5c66b0d",
  measurementId: "G-W96L5BZN79"
})


const db =firebaseApp.firestore()
const auth = firebase.auth

export {db, auth}