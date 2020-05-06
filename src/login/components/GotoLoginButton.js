import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialButtonWithVioletText2 from "./MaterialButtonWithVioletText2";

function GotoLoginButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText2
      onPress={props.onPress}
        text1="Log In"
        style={styles.materialButtonWithVioletText2}
      ></MaterialButtonWithVioletText2>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText2: {
    top: 0,
    width: 108,
    height: 48,
    position: "absolute",
    right: 0
  }
});

export default GotoLoginButton;
