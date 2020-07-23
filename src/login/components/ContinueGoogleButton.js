import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText1 from "./MaterialButtonWithVioletText1";

function ContinueGoogleButton(props) {
  // console.warn("on Welcome.js google sign btn in press:", props);

  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText1
        onPress={props.onPress}        
        text1="Continue with Google"
        style={styles.materialButtonWithVioletText12}

      ></MaterialButtonWithVioletText1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText12: {
    height: 62,
    backgroundColor: "rgba(2,172,235,1)",
    borderRadius: 10
  }
});

export default ContinueGoogleButton;
