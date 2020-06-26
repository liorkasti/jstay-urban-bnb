import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


import { NativeRouter, Route, Switch, BackButton, Redirect } from "react-router-native";
import Login from "./src/login"
import Home from "./src/home"
import CreateStay from "./src/createStay"
import CreateAccount from "./src/createAccount"
import Account from "./src/account"
import EditStay from "./src/editStay"
import Messages from "./src/messaging";
import Chat from "./src/messaging";



export default function App() {
  useEffect(() => {
    setTimeout(() => {
      Orientation.lockToPortrait();
    });

    //this is for the icon library to work
    EntypoIcon.loadFont();
    MaterialCommunityIconsIcon.loadFont();
    Icon.loadFont();
    FontAwesomeIcon.loadFont();
    
    setTimeout(()=>{
      onGoogleButtonPress()
    })
    
    // Geocoder.init("AIzaSyC9nF7BS9tSvtJaHDtTvfEYuHD6cwSBhws");
    console.disableYellowBox = true;
  }, [])

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false}></StatusBar>
      <NativeRouter>
        <Switch>
          <BackButton>
            <Route path="/" exact component={ Login }/>
            <Route path="/chat" exact component={ Chat }/>
            <Route path="/account" component={ Account }/>
            <Route path="/editStay" component={ EditStay }/>
            <Route path="/CreateAccount" component={ CreateAccount }/>
            <Route path="/createStay" component={ CreateStay }/>
            <Route path="/home" component={Home}/>
            {/* <Route path="/messaging" component={Messages}/> */}
          </BackButton>
        </Switch>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  }
});