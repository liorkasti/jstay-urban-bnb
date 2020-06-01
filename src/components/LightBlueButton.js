import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText34 from "./MaterialButtonWithVioletText34";

function LightBlueButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText34
        style={styles.materialButtonWithVioletText34}
      ></MaterialButtonWithVioletText34>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  materialButtonWithVioletText34: {
    width: 139,
    height: 36
  }
});

export default LightBlueButton;
