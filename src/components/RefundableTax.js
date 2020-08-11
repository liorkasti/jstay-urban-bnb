import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialSlider1 from "./MaterialSlider1";
import MaterialSwitch1 from "./MaterialSwitch1";
import Icon from "react-native-vector-icons/FontAwesome";

function RefundableTax(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.text1 || "Refundable Tax"}</Text>
      <Text style={styles.text2}>
        {props.text2 ||
          "What do guests need to provide to have this charge refunded?"}
      </Text>
      <TextInput
        placeholder={props.textInput2 || "e.g. 17"}
        style={styles.textInput3}
      ></TextInput>
      <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
      <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      <Icon name="percent" style={styles.icon5}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    top: 2,
    left: 6,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text2: {
    top: 92,
    left: 6,
    height: 34,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 13,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  textInput3: {
    top: 36,
    left: "47.64%",
    width: "21.87%",
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  materialSlider1: {
    top: 41,
    left: 8,
    height: 30,
    position: "absolute",
    right: 206
  },
  materialSwitch1: {
    top: 0,
    left: "84.15%",
    height: 23,
    position: "absolute",
    right: 13,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  icon5: {
    top: 44,
    left: "73.16%",
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 25
  }
});

export default RefundableTax;
