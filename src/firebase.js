// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCFoDmsN06BYc1DGVsSLH_Y3WCrKn1i2Ac",
  authDomain: "e-commerce-94802.firebaseapp.com",
  databaseURL: "https://e-commerce-94802.firebaseio.com",
  projectId: "e-commerce-94802",
  storageBucket: "e-commerce-94802.appspot.com",
  messagingSenderId: "535848650010",
  appId: "1:535848650010:web:b2fe90f9ccf289b1a858a3"
};
// Initialize Firebase
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}