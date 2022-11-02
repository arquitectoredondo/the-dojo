import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZdtvmTy8TESHodzJySPwrxcqMEJKeqYk",
  authDomain: "thedojosite-74a42.firebaseapp.com",
  projectId: "thedojosite-74a42",
  storageBucket: "thedojosite-74a42.appspot.com",
  messagingSenderId: "875216706130",
  appId: "1:875216706130:web:0a38f0284d572d4b429d8b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
