import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialSpinner from "./MaterialSpinner";

function ContactNumberInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.meetAndGreet2}>
        Contact number for arriving guests
      </Text>
      <Text style={styles.pricesFluctuate5}>
        Add a contact number for guests to call when they arrive (can be number
        for the host or a management team)
      </Text>
      <TextInput
        placeholder="+972"
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
        style={styles.textInput6}
      ></TextInput>
      <TextInput
        placeholder="50 000 0000"
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
        style={styles.textInput7}
      ></TextInput>
      <MaterialSpinner style={styles.materialSpinner}></MaterialSpinner>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  meetAndGreet2: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular",
    width: 247
  },
  pricesFluctuate5: {
    top: 49,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 34,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  textInput6: {
    top: 107,
    left: "0%",
    width: "20.84%",
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
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  textInput7: {
    top: 106,
    left: "23.82%",
    width: "69.78%",
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
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  materialSpinner: {
    top: 115,
    left: "93.46%",
    width: "6.54%",
    height: 22,
    position: "absolute"
  }
});

export default ContactNumberInput;
