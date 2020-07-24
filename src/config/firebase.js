// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyA8G5s4B7hpbskZ8gh0XFYEhoSGPH69W14",
  authDomain: "synsource-ad271.firebaseapp.com",
  databaseURL: "https://synsource-ad271.firebaseio.com",
  projectId: "synsource-ad271",
  storageBucket: "synsource-ad271.appspot.com",
  messagingSenderId: "636804836771",
  appId: "1:636804836771:web:cd203c4343a7649230fe16",
  measurementId: "G-V4PG64CPXF"
};

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;