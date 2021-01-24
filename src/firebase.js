import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDINZf9FXhanOZ-7xaC8AEoI0rG4Cxo05M",
  authDomain: "clone101-ac474.firebaseapp.com",
  projectId: "clone101-ac474",
  storageBucket: "clone101-ac474.appspot.com",
  messagingSenderId: "943594411010",
  appId: "1:943594411010:web:d8b0a0fb4dd07cd55ec31b",
  measurementId: "G-T4XZL0V136",
};
//link to you app.
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
