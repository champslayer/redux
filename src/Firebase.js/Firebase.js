import firebase from 'firebase';
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDUNBiqwYOCCILz7xPzLUQ0EJx-7d4uiGU",
  authDomain: "test-316015.firebaseapp.com",
  projectId: "test-316015",
  storageBucket: "test-316015.appspot.com",
  messagingSenderId: "667938877224",
  appId: "1:667938877224:web:c39e4ef308446b9c882a1d",
  measurementId: "G-9S469PZDFX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

   const db = firebaseApp.firestore();
   export default db;

   //apiKey: "AIzaSyDUNBiqwYOCCILz7xPzLUQ0EJx-7d4uiGU",
   //  authDomain: "test-316015.firebaseapp.com",
   //  projectId: "test-316015",
  //   storageBucket: "test-316015.appspot.com",
  //   messagingSenderId: "667938877224",
  //   appId: "1:667938877224:web:c39e4ef308446b9c882a1d",
//     measurementId: "G-9S469PZDFX"