import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import Login from "./src/login"
import Home from "./src/home"
import CreateStay from "./src/createStay"
import CreateAccount from "./src/createAccount"
import Account from "./src/account"

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

    // Geocoder.init("AIzaSyC9nF7BS9tSvtJaHDtTvfEYuHD6cwSBhws");
    console.disableYellowBox = true;
  }, [])

  // return (
  //   <View style={styles.screen}>
  //     <Login />
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Login />
      {/* <NativeRouter>
        <Switch>
          <View style={{ flex: 1 }}>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/createStay" component={CreateStay} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/account" component={Account} />
          </View>
        </Switch>
      </NativeRouter> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    }
});