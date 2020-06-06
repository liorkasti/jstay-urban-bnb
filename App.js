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
// import CreateStay from "./src/createStay"
// import CreateAccount from "./src/createAccount"
// import Account from "./src/account"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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

  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false}></StatusBar>
      <NativeRouter>
        <Switch>
          <BackButton>
            {/* <Route exact path="/" >
              {loggedIn ? <Redirect to="/home" /> : <Login />}
            </Route> */}
            <Route path="/" component={Home} />
            {/* <Route path="/createStay" component={CreateStay} /> */}
            {/* <Route path="/createAccount" component={CreateAccount} /> */}
            {/* <Route path="/account" component={Account} /> */}
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