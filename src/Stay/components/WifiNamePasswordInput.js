import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function WifiNamePasswordInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.wiFiStack}>
        <Text style={styles.wiFi}>WiFi</Text>
        <Text style={styles.pricesFluctuate4}>
          Let guests connect to the internet
        </Text>
      </View>
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
    fontFamily: "roboto-700"
  },
  pricesFluctuate4: {
    top: 23,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  wiFiStack: {
    width: 297,
    height: 40
  },
  wifiName: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  password: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 46
  },
  textInput4: {
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
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
    textAlign: "left",
    marginTop: -61
  },
  textInput5: {
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
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
    textAlign: "left",
    marginTop: 24
  }
});

export default WifiNamePasswordInput;
