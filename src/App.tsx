import "./App.css";

import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDOyBr-MmbRbG9y0Ux6FpA5-mrYsaUQ2pY",
  authDomain: "react-chat-62f87.firebaseapp.com",
  projectId: "react-chat-62f87",
  storageBucket: "react-chat-62f87.appspot.com",
  messagingSenderId: "890002721394",
  appId: "1:890002721394:web:cf5708d09d1c92e6aa10eb",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return <div className="App"></div>;
}

export default App;
