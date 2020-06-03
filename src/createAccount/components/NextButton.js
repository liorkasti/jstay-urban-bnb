import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialButtonWithVioletText10 from "./MaterialButtonWithVioletText10";

function NextButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.materialButtonWithVioletText1Filler}></View>
      <MaterialButtonWithVioletText10
        style={styles.materialButtonWithVioletText1}
      ></MaterialButtonWithVioletText10>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  materialButtonWithVioletText1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonWithVioletText1: {
    width: 100,
    height: 36
  }
});

export default NextButton;
