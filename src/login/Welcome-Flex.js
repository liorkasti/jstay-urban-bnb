import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import ContinueGoogleButton from "../components/ContinueGoogleButton";
import Icon from "react-native-vector-icons/Entypo";
import GotoLoginButton from "../components/GotoLoginButton";
import CreateAccountButton from "../components/CreateAccountButton";
import ContinueFacebookButton from "../components/ContinueFacebookButton";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button2Column}>
        <TouchableOpacity style={styles.button2}>
          <ContinueGoogleButton
            style={styles.continueGoogleButton}
          ></ContinueGoogleButton>
        </TouchableOpacity>
        <View style={styles.button6Row}>
          <TouchableOpacity style={styles.button6}>
            <View style={styles.iconStack}>
              <Icon name="chevron-down" style={styles.icon}></Icon>
              <Text style={styles.chooseLanguage}>Choose language</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.button6Filler}></View>
          <TouchableOpacity style={styles.button4}>
            <GotoLoginButton style={styles.gotoLoginButton}></GotoLoginButton>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button5}>
          <CreateAccountButton
            style={styles.createAccountButton}
          ></CreateAccountButton>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <ContinueFacebookButton
            style={styles.continueFacebookButton}
          ></ContinueFacebookButton>
        </TouchableOpacity>
        <Text style={styles.bsD}>BS&quot;D</Text>
        <Image
          source={require("../assets/images/JStay-Logo-blue-shin6.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <View style={styles.button2ColumnFiller}></View>
      <Text style={styles.text}>
        By tapping &#39;Continue with Facebook&#39;, &#39;Continue with
        Google&#39; or &#39;Create an Account&#39; you agree to Jstays&#39;
        Terms of Service, Payments Terms of Service, Privacy Policy and
        Non-Discrimination Policy.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  button2: {
    height: 62,
    marginTop: 412,
    marginLeft: 31,
    marginRight: 45
  },
  continueGoogleButton: {
    height: 62
  },
  button6: {
    width: 150,
    height: 33,
    marginTop: 6
  },
  icon: {
    top: 0,
    left: 125,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 25
  },
  chooseLanguage: {
    top: 3,
    left: 0,
    width: 149,
    height: 30,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 2,
    fontSize: 16,
    fontFamily: "roboto-700"
  },
  iconStack: {
    width: 151,
    height: 33
  },
  button6Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button4: {
    width: 108,
    height: 48
  },
  gotoLoginButton: {
    width: 108,
    height: 48
  },
  button6Row: {
    height: 48,
    flexDirection: "row",
    marginTop: -447,
    marginLeft: 31
  },
  button5: {
    height: 62,
    marginTop: 419,
    marginLeft: 31,
    marginRight: 45
  },
  createAccountButton: {
    height: 62
  },
  button3: {
    height: 62,
    marginTop: -219,
    marginLeft: 31,
    marginRight: 45
  },
  continueFacebookButton: {
    height: 62
  },
  bsD: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: -399,
    marginRight: 52
  },
  image2: {
    height: 150,
    marginTop: 112,
    marginRight: 14
  },
  button2Column: {
    marginTop: 13,
    marginRight: -14
  },
  button2ColumnFiller: {
    flex: 1
  },
  text: {
    width: 304,
    height: 60,
    color: "rgba(168,219,243,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginBottom: 34,
    marginLeft: 31
  }
});

export default Welcome;
