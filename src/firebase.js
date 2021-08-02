import firebase from "firebase";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4o9g5_Vxcm0azSXASutk_TLeGVncrlRw",
  authDomain: "twitter-clone-b8e9d.firebaseapp.com",
  projectId: "twitter-clone-b8e9d",
  storageBucket: "twitter-clone-b8e9d.appspot.com",
  messagingSenderId: "362576052791",
  appId: "1:362576052791:web:f49f3fc8a19e9b1233f5b2",
  measurementId: "G-2KKLFCJNTV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
