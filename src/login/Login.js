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

      <TouchableOpacity onPress={props.login} style={styles.button3}>
        <LoginButton onPress={props.login} style={styles.loginButton}></LoginButton>
      </TouchableOpacity>

      {/* BackButton */}
      <MaterialButtonWithVioletText
        onPress={props.onBack}
        style={styles.materialButtonWithVioletText}
      ></MaterialButtonWithVioletText>
      {/* Remember Me */}
      <TouchableOpacity style={styles.button4}>
        <MaterialCheckboxWithLabel
          text1=""
          style={styles.materialCheckboxWithLabel}
        ></MaterialCheckboxWithLabel>
      </TouchableOpacity>
      {/* Forgot password */}
      <MaterialButtonWithVioletText15
        style={styles.materialButtonWithVioletText15}
      ></MaterialButtonWithVioletText15>

      <PasswordTextInput style={styles.passwordTextInput}></PasswordTextInput>
      <EmailTextInput style={styles.emailTextInput}></EmailTextInput>
      <Text style={styles.loremIpsum2}></Text>
      <Icon name="lock" style={styles.icon}></Icon>

      {/* signupButton */}
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
    alignItems: "center",
    backgroundColor: "rgba(0,88,155,1)",
  },
  group: {
    height: 27,
    position: "absolute",
  },
  button3: {
    bottom: 95,
    width: 353,
    height: 62,
    position: "absolute"
  },
  loginButton: {
    paddingLeft: 16,
    paddingRight: 16,
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
    top: 440,
    left: 44,
    width: 139,
    height: 40,
    position: "absolute"
  },
  materialCheckboxWithLabel: {
    width: 139,
    height: 40,
    position: "absolute",
    bottom: -8
  },
  materialButtonWithVioletText15: {
    left: 46,
    width: 208,
    height: 36,
    position: "absolute",
    top: 430,
    opacity: 0.46
  },
  passwordTextInput: {
    top: 370,
    left: 46,
    width: 311,
    width: "80%",
    height: 43,
    paddingRight: 24,
    position: "absolute"
  },
  emailTextInput: {
    top: 319,
    left: 21,
    width: 359,
    width: "80%",
    // paddingRight: 16,
    height: 43,
    position: "absolute"
  },
  loremIpsum2: {
    top: 329,
    left: 30,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  icon: {
    position: "absolute",
    color: "rgba(177,177,177,1)",
    fontSize: 22,
    left: 16,
    top: 385,
  },
  button2: {
    bottom: 45,
    width: 116,
    height: 36,
    position: "absolute"
  },
  signupButton: {
    alignItems: "center",
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
    width: "auto",
    color: "rgba(2,172,235,1)",
    position: "absolute",
    top: 255,
    fontSize: 20,
    fontFamily: "roboto-regular",
  },
  image1: {
    width: "auto",
    top: 120,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  }
});

export default Login;
