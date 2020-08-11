import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialButtonWithVioletText10 from "./MaterialButtonWithVioletText10";

function NextButton(props) {
  return (
    <TouchableOpacity onPress={()=>props.onPress()} style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText10
      onPress={()=>props.onPress()}
        style={styles.materialButtonWithVioletText1}
      ></MaterialButtonWithVioletText10>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText1: {
    top: "0%",
    width: 100,
    height: 36,
    position: "absolute",
    right: 0
  }
});

export default NextButton;
