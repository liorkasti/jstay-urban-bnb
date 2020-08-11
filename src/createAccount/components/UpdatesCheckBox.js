import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCheckboxWithLabel6 from "./MaterialCheckboxWithLabel6";

function UpdatesCheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialCheckboxWithLabel1Filler}></View>
      <MaterialCheckboxWithLabel6
        text1=""
        style={styles.materialCheckboxWithLabel1}
      ></MaterialCheckboxWithLabel6>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialCheckboxWithLabel1Filler: {
    flex: 1
  },
  materialCheckboxWithLabel1: {
    width: 300,
    height: 40
  }
});

export default UpdatesCheckBox;
