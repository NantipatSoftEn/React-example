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
// const database = firebase.database();
//
// database.ref().on('value',(snapshot) => {
//     console.log(snapshot.val());
// });
// setTimeout(() => {
//         database.ref('jop').set(51);
// },3500);
//
// setTimeout(() => {
//         database.ref('jop').set(70);
// },3500);
//
// setTimeout(() => {
//         database.ref('jop').set(99);
// },3500);
// database.ref('attributes/height')
// .once('value').
// then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log("Error",e);
// })
// database.ref().set({
//     class:'Novice',
//     lv:26,
//     jop:10,
//     location:{
//         city:'phuket',
//         country: 'United State'
//     }
// }).then( () => {
//     console.log("Data is save ");
// }).catch( (e) => {
//     console.log("This is failed.",e);
// });
//
// database.ref('lv').set(27);
// database.ref('attributes').set({
//     height:73,
//     weight:150
// }).then( () => {
//     console.log("Second set Call");
// }).catch( (e) => {
//     console.log("Things didnt for the Second");
// });
//
// database.ref('lv').remove().then(() => {
//     console.log("data remove");
// }).catch( (e) => {
//     console.log("error");
// })
//
// database.ref().update({
//     class:'Wizard',
//     jop:50
// });
