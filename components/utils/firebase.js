import React, { Component } from 'react';
import ReactNative from "react-native";
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAjhR0CppwiUs0kkSrhaHsVvy0Da1iRAMY",
    authDomain: "ice-breaker-a51d0.firebaseapp.com",
    databaseURL: "https://ice-breaker-a51d0.firebaseio.com",
    storageBucket: "ice-breaker-a51d0.appspot.com",
    messagingSenderId: "503758512209"
  };

firebase.initializeApp(config);

export default firebase;
