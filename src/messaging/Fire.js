import React, { useState, useEffect } from "react";
// import messaging from '@react-native-firebase/messaging';
// import firebase from 'firebase'; // 4.8.1
import auth, { firebase } from '@react-native-firebase/auth';


class Fire {
  constructor() {
    this.init();
    const user = auth().currentUser;
    this.checkAuth();
  }

  componentDidMount() {
    console.warn("firebase current user data: ", user)
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBHtvtmpwijXs0S1TtHm-UwCmB5is0ieKY",
        authDomain: "jstay-b675e.firebaseapp.com",
        databaseURL: "https://jstay-b675e.firebaseio.com",
        projectId: "jstay-b675e",
        storageBucket: "jstay-b675e.appspot.com",
        messagingSenderId: "1052652425814",    
      });
    }
  };
  
  checkAuth = () => {
      firebase.auth().onAuthStateChanged(user => {

      })
  }
  
  send = messages => {
      messages.forEach(item => {
          const message = { 
              text: item.text,
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              user: item.user
        }
  
        this.db.push(message)
      });
  };
  
  parse = message => {
      const { user, text, timestamp } = message.val()
      const { key: _id} = message
      const createdAt = new Date(timestamp)
  
      return {
          _id,
          createdAt,
          text,
          user
      };
  };
  
  
  
  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  }
    
  off() {
    this.db.off()
  }
  
  get db() {
    return firebase.database().ref("messages");
  }
  
  get uid() {
    return (firebase.auth().currentUser || {}).uid
  }
}

Fire.shared = new Fire();
export default  Fire;