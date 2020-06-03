import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialButtonWithVioletText2 from "./MaterialButtonWithVioletText2";

function GotoLoginButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.materialButtonWithVioletText2Filler}></View>
      <MaterialButtonWithVioletText2
        text1="Log In"
        style={styles.materialButtonWithVioletText2}
      ></MaterialButtonWithVioletText2>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonWithVioletText2: {
    width: 108,
    height: 48
  }
});

export default GotoLoginButton;
