import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconTextbox from "./MaterialIconTextbox";

function EmailInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialIconTextbox
        textInput1="email"
        style={styles.materialIconTextbox1}
      ></MaterialIconTextbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialIconTextbox1: {
    top: "0%",
    left: 0,
    height: 43,
    position: "absolute",
    right: 0
  }
});

export default EmailInput;
