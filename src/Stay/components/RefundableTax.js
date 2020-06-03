import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialSlider1 from "./MaterialSlider1";

function RefundableTax(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textRow}>
        <Text style={styles.text}>{props.text1 || "Refundable Tax"}</Text>
        <View style={styles.textFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      </View>
      <Text style={styles.text2}>
        {props.text2 ||
          "What do guests need to provide to have this charge refunded?"}
      </Text>
      <View style={styles.textInput3RowRow}>
        <View style={styles.textInput3Row}>
          <TextInput
            placeholder={props.textInput2 || "e.g. 17"}
            style={styles.textInput3}
          ></TextInput>
          <Icon name="percent" style={styles.icon5}></Icon>
        </View>
        <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 2
  },
  textFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch1: {
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    width: 45
  },
  textRow: {
    height: 26,
    flexDirection: "row",
    marginLeft: 6,
    marginRight: 13
  },
  text2: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 66,
    marginLeft: 6,
    marginRight: 13
  },
  textInput3: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon5: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 13,
    marginTop: 8
  },
  textInput3Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 165
  },
  materialSlider1: {
    height: 30,
    flex: 1,
    marginRight: 129,
    marginLeft: -279,
    marginTop: 5
  },
  textInput3RowRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -90,
    marginLeft: 8,
    marginRight: 77
  }
});

export default RefundableTax;
