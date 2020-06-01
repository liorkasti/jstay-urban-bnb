import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText1 from "./MaterialButtonWithVioletText1";

function ContinueGoogleButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText1
        text1="Continue with Google"
        style={styles.materialButtonWithVioletText12}
      ></MaterialButtonWithVioletText1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText12: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "99.99%",
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    borderRadius: 10
  }
});

export default ContinueGoogleButton;
