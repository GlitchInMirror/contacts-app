import firebase from 'firebase/app'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyBuzhbWfE9_6PkW3M4-sO8D-SgWo_CzuWA",
  authDomain: "contacts-app-abf4d.firebaseapp.com",
  databaseURL: "https://contacts-app-abf4d.firebaseio.com",
  projectId: "contacts-app-abf4d",
  storageBucket: "contacts-app-abf4d.appspot.com",
  messagingSenderId: "81427014889",
  appId: "1:81427014889:web:7f7114945e7a7a9183bc78",
  measurementId: "G-CCWP7R81EW"
};


firebase.initializeApp(config);



export default firebase;