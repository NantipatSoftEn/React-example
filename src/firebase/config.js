import  firebase from  'firebase';
import React from 'react';
const config = {
    apiKey: "AIzaSyDSPBDvzWr2HdoqMzZnpWNsfPpN8GVLzTI",
    authDomain: "test-8e511.firebaseapp.com",
    databaseURL: "https://test-8e511.firebaseio.com",
    projectId: "test-8e511",
    storageBucket: "test-8e511.appspot.com",
    messagingSenderId: "345142912527"
  };

 firebase.initializeApp(config);

 firebase.database().ref().set({
    name:'Andrew Mead'
 });
