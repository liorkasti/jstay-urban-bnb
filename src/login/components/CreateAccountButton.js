import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText3 from "./MaterialButtonWithVioletText3";

function CreateAccountButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText3
      onPress={props.onPress}
        style={styles.materialButtonWithVioletText32}
      ></MaterialButtonWithVioletText3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText32: {
    width: 352,
    borderRadius: 10,
    flex: 1,
    alignSelf: "center"
  }
});

export default CreateAccountButton;
