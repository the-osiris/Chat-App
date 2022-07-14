import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY8mXJ32xG64okq3Ms2S1t1nAxva-iuDU",
  authDomain: "inlyn-5e5a3.firebaseapp.com",
  projectId: "inlyn-5e5a3",
  storageBucket: "inlyn-5e5a3.appspot.com",
  messagingSenderId: "218713045655",
  appId: "1:218713045655:web:dca15e1d947e83979607d2",
  measurementId: "G-J10T0RTPXD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
