import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDEpXTNZDhoUIaz-IS6I_KHaLJ70fow3tc",
  authDomain: "todo-app-c854e.firebaseapp.com",
  databaseURL: "https://todo-app-c854e.firebaseio.com",
  projectId: "todo-app-c854e",
  storageBucket: "todo-app-c854e.appspot.com",
  messagingSenderId: "1053788292617",
  appId: "1:1053788292617:web:83b1be32d15e070c559ad8"
});

export { firebaseConfig as firebase };
