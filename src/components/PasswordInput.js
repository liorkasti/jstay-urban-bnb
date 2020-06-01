import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialRightIconTextbox1 from "./MaterialRightIconTextbox1";
import Icon from "react-native-vector-icons/Feather";

function PasswordInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialRightIconTextbox1
        text1="password"
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <Icon name={props.icon1Name || "lock"} style={styles.icon4}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialRightIconTextbox1: {
    top: "-0.01%",
    left: 40,
    height: 43,
    position: "absolute",
    right: 0
  },
  icon4: {
    top: "29.16%",
    left: 0,
    position: "absolute",
    color: "rgba(177,177,177,1)",
    fontSize: 23
  }
});

export default PasswordInput;
