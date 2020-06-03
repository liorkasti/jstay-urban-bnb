import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText11 from "./MaterialButtonWithVioletText11";

function SkipButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText11
        style={styles.materialButtonWithVioletText11}
      ></MaterialButtonWithVioletText11>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText11: {
    opacity: 0.46,
    flex: 1
  }
});

export default SkipButton;
