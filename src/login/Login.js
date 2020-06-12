import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
  Image
} from "react-native";
import LoginButton from "./components/LoginButton";
import MaterialButtonWithVioletText from "./components/MaterialButtonWithVioletText";
import MaterialCheckboxWithLabel from "./components/MaterialCheckboxWithLabel";
import MaterialButtonWithVioletText15 from "./components/MaterialButtonWithVioletText15";
import PasswordTextInput from "./components/PasswordTextInput";
import EmailTextInput from "./components/EmailTextInput";
import Icon from "react-native-vector-icons/Feather";
import SignupButton from "./components/SignupButton";

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(0,88,155,1)" />
      <View style={styles.group}></View>
      <View style={styles.group2}></View>
     
      <TouchableOpacity onPress={props.login} style={styles.button3}>
        <LoginButton onPress={props.login} style={styles.loginButton}></LoginButton>
      </TouchableOpacity>
     
      {/* BackButton */}
      <MaterialButtonWithVioletText
        onPress={props.onBack}
        style={styles.materialButtonWithVioletText}
      ></MaterialButtonWithVioletText>
      <TouchableOpacity style={styles.button4}>
        <MaterialCheckboxWithLabel
          text1=""
          style={styles.materialCheckboxWithLabel}
        ></MaterialCheckboxWithLabel>
      </TouchableOpacity>
      <MaterialButtonWithVioletText15
        style={styles.materialButtonWithVioletText15}
      ></MaterialButtonWithVioletText15>
      <PasswordTextInput style={styles.passwordTextInput}></PasswordTextInput>
      <EmailTextInput style={styles.emailTextInput}></EmailTextInput>
      <Text style={styles.loremIpsum2}></Text>
      <Icon name="lock" style={styles.icon}></Icon>
      
      <TouchableOpacity style={styles.button2}>
        <SignupButton onPress={props.createAccount} style={styles.signupButton}></SignupButton>
      </TouchableOpacity>
      
      <Text style={styles.bsD1}>BS&quot;D</Text>
      <Text style={styles.myDetails1}>
        Please enter your log in information
      </Text>
      <Image
        source={require("../assets/images/JStay-Logo-blue-shin7.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  group: {
    top: "44.33%",
    left: 30,
    height: 27,
    position: "absolute",
    right: 35
  },
  group2: {
    top: "49.03%",
    left: 31,
    height: 28,
    position: "absolute",
    right: 34
  },
  button3: {
    bottom: 95,
    left: 32,
    width: 353,
    height: 62,
    position: "absolute"
  },
  loginButton: {
    // bottom: "20%",
    left: 0,
    width: 353,
    height: 62,
    position: "absolute"
  },
  materialButtonWithVioletText: {
    top: 41,
    left: 10,
    width: 100,
    height: 36,
    position: "absolute"
  },
  button4: {
    top: 489,
    left: 65,
    width: 139,
    height: 40,
    position: "absolute"
  },
  materialCheckboxWithLabel: {
    left: 0,
    width: 139,
    height: 40,
    position: "absolute",
    bottom: "0.01%"
  },
  materialButtonWithVioletText15: {
    left: 52,
    width: 108,
    height: 36,
    position: "absolute",
    bottom: "45.24%",
    opacity: 0.46
  },
  passwordTextInput: {
    top: 405,
    left: 69,
    width: 311,
    height: 43,
    position: "absolute"
  },
  emailTextInput: {
    top: 349,
    left: 21,
    width: 359,
    height: 43,
    position: "absolute"
  },
  loremIpsum2: {
    top: 359,
    left: 30,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  icon: {
    position: "absolute",
    color: "rgba(177,177,177,1)",
    fontSize: 22,
    left: 29,
    bottom: "51.18%"
  },
  button2: {
    bottom: 45,
    left: 151,
    width: 116,
    height: 36,
    position: "absolute"
  },
  signupButton: {
    // top: 0,
    // bottom: "5%",
    left: 0,
    width: 116,
    height: 36,
    position: "absolute"
  },
  bsD1: {
    top: 14,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    right: 38,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  myDetails1: {
    left: "11.71%",
    width: "77.71%",
    height: 30,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    bottom: "65%",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  image1: {
    width: "auto",
    top: "15.29%",
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  }
});

export default Login;
