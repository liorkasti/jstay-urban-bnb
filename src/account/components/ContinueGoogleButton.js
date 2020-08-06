import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText1 from "./MaterialButtonWithVioletText1";

function ContinueGoogleButton(props) {

  // console.warn("ContinueGoogleButton props", props)
  return (

    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText1
        onPress={props.googleSignin}
        text1="Continue with Google"
        style={styles.materialButtonWithVioletText12}
      ></MaterialButtonWithVioletText1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText12: {
    height: 45,
    backgroundColor: "rgba(0,88,155,1)",
    borderRadius: 10
  }
});

export default ContinueGoogleButton;
