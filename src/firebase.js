import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDlo1NprPEwvwjBBzSrQlny_pw8dHmiyz0",
  authDomain: "web-design-davao-projects.firebaseapp.com",
  databaseURL: "https://web-design-davao-projects.firebaseio.com",
  projectId: "web-design-davao-projects",
  storageBucket: "web-design-davao-projects.appspot.com",
  messagingSenderId: "879442921638"
});

export default firebase;
