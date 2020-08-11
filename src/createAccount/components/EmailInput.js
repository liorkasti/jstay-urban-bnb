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
    height: 43
  }
});

export default EmailInput;
