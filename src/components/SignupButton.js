import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText12 from "./MaterialButtonWithVioletText12";

function SignupButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText12
        style={styles.materialButtonWithVioletText12}
      ></MaterialButtonWithVioletText12>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText12: {
    left: "0%",
    width: "100%",
    height: 36,
    position: "absolute",
    bottom: "0%",
    opacity: 0.46
  }
});

export default SignupButton;
