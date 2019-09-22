/* import Firebase */
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCFoDmsN06BYc1DGVsSLH_Y3WCrKn1i2Ac",
  authDomain: "e-commerce-94802.firebaseapp.com",
  databaseURL: "https://e-commerce-94802.firebaseio.com",
  projectId: "e-commerce-94802",
  storageBucket: "e-commerce-94802.appspot.com",
  messagingSenderId: "535848650010",
  appId: "1:535848650010:web:b2fe90f9ccf289b1a858a3"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);