import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB00f4WS4Mbks_-F5JgfR7lXcywbUHG32o",
    authDomain: "hoop-forum.firebaseapp.com",
    projectId: "hoop-forum",
    storageBucket: "hoop-forum.appspot.com",
    messagingSenderId: "730386488520",
    appId: "1:730386488520:web:3985ae6fd8e2713d9299fd",
    measurementId: "G-GL516VKL1E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore()

export {auth, provider}
export default db;