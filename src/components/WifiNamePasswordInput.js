import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function WifiNamePasswordInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.wiFi}>WiFi</Text>
      <Text style={styles.pricesFluctuate4}>
        Let guests connect to the internet
      </Text>
      <Text style={styles.wifiName}>Wifi name:</Text>
      <Text style={styles.password}>Password:</Text>
      <TextInput
        placeholder="e.g. Kosher Home"
        placeholderTextColor="rgba(177,177,177,1)"
        autoCapitalize="sentences"
        autoCorrect={true}
        maxLength={200}
        multiline={true}
        returnKeyType="done"
        inlineImagePadding={0}
        numberOfLines={4}
        returnKeyLabel="Save"
        spellCheck={true}
        style={styles.textInput4}
      ></TextInput>
      <TextInput
        placeholder="e.g. Afikoman123"
        placeholderTextColor="rgba(177,177,177,1)"
        autoCapitalize="sentences"
        autoCorrect={true}
        maxLength={200}
        multiline={true}
        returnKeyType="done"
        inlineImagePadding={0}
        numberOfLines={4}
        returnKeyLabel="Save"
        spellCheck={true}
        style={styles.textInput5}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  wiFi: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  pricesFluctuate4: {
    top: 23,
    left: 0,
    width: "88.39%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  wifiName: {
    top: 43,
    left: 0,
    width: "74.72%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  password: {
    top: 106,
    left: 0,
    width: "88.41%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  textInput4: {
    top: 62,
    left: "0%",
    width: "100%",
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left"
  },
  textInput5: {
    top: 126,
    left: "0%",
    width: "100%",
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left"
  }
});

export default WifiNamePasswordInput;
