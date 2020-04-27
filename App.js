import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from "./src/login/Depricated-Login";
import DynamicQuestionnaireController from './src/dynamicQuestionnaire/index';
import MainHome from "./src/home/Home";
import Orientation from 'react-native-orientation-locker';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { NativeRouter, Route, Link } from "react-router-native";


export default function App() {
  const [createAccount, setCreateAccount] = useState(false);
  const [showMainHome, setShowMainHome] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const beginCreateAccount = () => {
    userWantsToCreateAccount(true)
  }
  useEffect(() => {
    setTimeout(()=>{
      Orientation.lockToPortrait();
    })
    Icon.loadFont();
    FontAwesomeIcon.loadFont();

    // Geocoder.init("AIzaSyC9nF7BS9tSvtJaHDtTvfEYuHD6cwSBhws");
    console.disableYellowBox = true;
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {createAccount &&
        <View>
          <DynamicQuestionnaireController backToLogin={() => { setCreateAccount(false); setShowLogin(true); }} />
        </View >}
      {
        showLogin &&
        <Login createAccount={() => { setCreateAccount(true); }} loggedIn={() => { setShowLogin(false); setShowMainHome(true) }} />
      }{
        showMainHome &&
        <MainHome />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
