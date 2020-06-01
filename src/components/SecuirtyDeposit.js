import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";
import MaterialSlider1 from "./MaterialSlider1";
import Icon from "react-native-vector-icons/FontAwesome";

function SecuirtyDeposit(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.securityDeposit}>Security deposit</Text>
      <Text style={styles.text3}>
        Under what conditions can this charge be refunded?
      </Text>
      <TextInput
        placeholder="e.g. guests must keep to house rules for refund"
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
        style={styles.textInput2}
      ></TextInput>
      <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
      <TextInput placeholder="e.g. 100" style={styles.textInput4}></TextInput>
      <MaterialSlider1 style={styles.materialSlider2}></MaterialSlider1>
      <Icon name="dollar" style={styles.icon3}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  securityDeposit: {
    top: 2,
    left: 6,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  text3: {
    top: 90,
    left: 6,
    width: 330,
    height: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  textInput2: {
    top: 106,
    left: "0%",
    width: 364,
    height: 80,
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
  materialSwitch2: {
    top: 0,
    left: 306,
    width: 45,
    height: 23,
    position: "absolute",
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  textInput4: {
    top: 36,
    left: 173,
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  materialSlider2: {
    top: 41,
    left: 8,
    width: 150,
    height: 30,
    position: "absolute"
  },
  icon3: {
    top: 44,
    left: 266,
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 25
  }
});

export default SecuirtyDeposit;
