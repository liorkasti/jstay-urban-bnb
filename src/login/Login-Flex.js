import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import PasswordTextInput from "../components/PasswordTextInput";
import Icon from "react-native-vector-icons/Feather";
import MaterialButtonWithVioletText15 from "../components/MaterialButtonWithVioletText15";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialButtonWithVioletText from "../components/MaterialButtonWithVioletText";
import EmailTextInput from "../components/EmailTextInput";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.groupStackStackColumn}>
        <View style={styles.groupStackStack}>
          <View style={styles.groupStack}>
            <View style={styles.group}></View>
            <PasswordTextInput
              style={styles.passwordTextInput}
            ></PasswordTextInput>
            <Icon name="lock" style={styles.icon}></Icon>
          </View>
          <View style={styles.group2Stack}>
            <View style={styles.group2}></View>
            <MaterialButtonWithVioletText15
              style={styles.materialButtonWithVioletText15}
            ></MaterialButtonWithVioletText15>
          </View>
          <MaterialCheckboxWithLabel
            text1=""
            style={styles.rememberMeCheckBox}
          ></MaterialCheckboxWithLabel>
        </View>
        <MaterialButtonWithVioletText
          style={styles.materialButtonWithVioletText}
        ></MaterialButtonWithVioletText>
        <View style={styles.emailTextInputStack}>
          <EmailTextInput style={styles.emailTextInput}></EmailTextInput>
          <Text style={styles.loremIpsum2}></Text>
        </View>
        <Text style={styles.bsD1}>BS&quot;D</Text>
        <View style={styles.myDetails1Stack}>
          <Text style={styles.myDetails1}>
            Please enter your log in information
          </Text>
          <Image
            source={require("../assets/images/JStay-Logo-blue-shin7.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
      </View>
      <View style={styles.groupStackStackColumnFiller}></View>
      <View style={styles.loginButtonColumn}>
        <LoginButton style={styles.loginButton}></LoginButton>
        <TouchableOpacity style={styles.button2}>
          <SignupButton style={styles.signupButton}></SignupButton>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  group: {
    top: 0,
    left: 1,
    height: 27,
    position: "absolute",
    right: 1
  },
  passwordTextInput: {
    top: 8,
    left: 40,
    height: 43,
    position: "absolute",
    right: 0
  },
  icon: {
    position: "absolute",
    color: "rgba(177,177,177,1)",
    fontSize: 22,
    left: 0,
    bottom: 11
  },
  groupStack: {
    top: 0,
    left: 0,
    height: 51,
    position: "absolute",
    right: 0
  },
  group2: {
    top: 0,
    left: 0,
    height: 28,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText15: {
    left: 21,
    width: 108,
    height: 36,
    position: "absolute",
    bottom: 0,
    opacity: 0.46
  },
  group2Stack: {
    top: 42,
    left: 2,
    height: 52,
    position: "absolute",
    right: 1
  },
  rememberMeCheckBox: {
    left: 36,
    width: 139,
    height: 40,
    position: "absolute",
    bottom: 0
  },
  groupStackStack: {
    height: 132,
    marginTop: 383,
    marginLeft: 29,
    marginRight: 34
  },
  materialButtonWithVioletText: {
    width: 100,
    height: 36,
    marginTop: -488,
    marginLeft: 10
  },
  emailTextInput: {
    top: 0,
    left: 0,
    height: 43,
    position: "absolute",
    right: 0,
    borderRadius: 22
  },
  loremIpsum2: {
    top: 9,
    left: 9,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  emailTextInputStack: {
    height: 43,
    marginTop: 273,
    marginLeft: 21,
    marginRight: 34
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: -379,
    marginRight: 38
  },
  myDetails1: {
    left: 48,
    width: 322,
    height: 20,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    bottom: 0,
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  image1: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  myDetails1Stack: {
    height: 168,
    marginTop: 111
  },
  groupStackStackColumn: {
    marginTop: 14
  },
  groupStackStackColumnFiller: {
    flex: 1
  },
  loginButton: {
    height: 62,
    marginBottom: 13
  },
  button2: {
    height: 36,
    marginLeft: 103,
    marginRight: 106
  },
  signupButton: {
    height: 36
  },
  loginButtonColumn: {
    marginBottom: 40,
    marginLeft: 32,
    marginRight: 29
  }
});

export default Login;
