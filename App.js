import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

import { NativeRouter, Route, Switch, BackButton, Redirect } from "react-router-native";

import StayCalender from "./src/createStay/screens/StayCalender"
import MyStaysList from "./src/account/MyStaysList"

import Login from "./src/login"
import Home from "./src/home"
import CreateStay from "./src/createStay"
import CreateAccount from "./src/createAccount"
import Account from "./src/account"
import EditStay from "./src/editStay"
import Chat from "./src/messaging";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Orientation.lockToPortrait();
    });
    GoogleSignin.configure({
      iosClientId: "1052652425814-30q7q27a1hfljo1v8a8pvbgasho71ffl.apps.googleusercontent.com",
      webClientId: '1052652425814-4a76tojt3tc8a92hc245qr6c3jvgcr7j.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    //this is for the icon library to work
    EntypoIcon.loadFont();
    MaterialCommunityIconsIcon.loadFont();
    Icon.loadFont();
    FontAwesomeIcon.loadFont();

    // Geocoder.init("AIzaSyC9nF7BS9tSvtJaHDtTvfEYuHD6cwSBhws");
    console.disableYellowBox = true;
    return subscriber; 
  }, []);

  function onAuthStateChanged(user) {
    if (user) { setLoggedIn(!!user) } else { setLoggedIn(false) }
    console.warn("auth state did change with:", user)
  }

  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false}></StatusBar>
      <NativeRouter>
        <Switch>
          <BackButton>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/home" /> : <Login />}
            </Route>
            <Route path="/chat" exact component={Chat} />
            <Route path="/account" component={Account} />
            <Route path="/editStay" component={EditStay} />
            <Route path="/CreateAccount" component={CreateAccount} />
            <Route path="/createStay" component={CreateStay} />
            <Route path="/home" component={Home} />
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
    // paddingHorizontal: 16,
    // position: "absolute",
    width: "100%",
    justifyContent: 'center',
    // marginHorizontal: Dimensions.get('window').width  < 400 ?  6 : 0,
    // height: Dimensions.get('window').width * 0.9,
  }
});