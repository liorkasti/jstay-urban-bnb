import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText12 from "./MaterialButtonWithVioletText12";

function SignupButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialButtonWithVioletText12Filler}></View>
      <MaterialButtonWithVioletText12
      onPress={props.onPress}
        style={styles.materialButtonWithVioletText12}
      ></MaterialButtonWithVioletText12>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText12Filler: {
    flex: 1,
    position: "absolute",
  },
  materialButtonWithVioletText12: {
    height: 36,
    opacity: 0.46
  }
});

export default SignupButton;
