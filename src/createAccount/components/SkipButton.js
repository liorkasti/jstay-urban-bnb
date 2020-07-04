import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText11 from "./MaterialButtonWithVioletText11";

function SkipButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText11
        style={styles.materialButtonWithVioletText11}
        onPress={props.onNext}
      ></MaterialButtonWithVioletText11>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText11: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.46
  }
});

export default SkipButton;
