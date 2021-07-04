import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
  apiKey: "AIzaSyDUNBiqwYOCCILz7xPzLUQ0EJx-7d4uiGU",
  authDomain: "test-316015.firebaseapp.com",
  projectId: "test-316015",
  storageBucket: "test-316015.appspot.com",
  messagingSenderId: "667938877224",
  appId: "1:667938877224:web:c39e4ef308446b9c882a1d",
  measurementId: "G-9S469PZDFX"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export var provider = new firebase.auth.GoogleAuthProvider();
export const FireStore = firebase.firestore();
