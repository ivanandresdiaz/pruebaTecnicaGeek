import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firebase-functions';
import 'firebase/firebase-storage';

firebase.initializeApp({
  apiKey: 'AIzaSyDNWFMUj9hOJzriGq_IatOI6Sfoo0eJlFE',
  authDomain: 'londonstore-fortul.firebaseapp.com',
  projectId: 'londonstore-fortul',
  storageBucket: 'londonstore-fortul.appspot.com',
  messagingSenderId: '869805420350',
  appId: '1:869805420350:web:682aca0e4836d95e73866f',
  measurementId: 'G-BB58398EE6',
});

const db = firebase.firestore();
const functions = firebase.functions();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  db, googleAuthProvider, functions,
  facebookAuthProvider,
  firebase,
};
