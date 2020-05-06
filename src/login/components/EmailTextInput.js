import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconTextbox4 from "./MaterialIconTextbox4";

function EmailTextInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialIconTextbox4
        textInput1="email"
        style={styles.materialIconTextbox4}
      ></MaterialIconTextbox4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialIconTextbox4: {
    left: 0,
    height: 43,
    position: "absolute",
    right: 0,
    bottom: "0%"
  }
});

export default EmailTextInput;
