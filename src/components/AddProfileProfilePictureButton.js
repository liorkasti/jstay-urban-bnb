import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet11 from "./MaterialButtonViolet11";

function AddProfileProfilePictureButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet11
        onPress={props.onPress}
        style={styles.materialButtonViolet11}
      ></MaterialButtonViolet11>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonViolet11: {
    height: 62,
    backgroundColor: "rgba(2,172,235,1)",
    borderRadius: 10
  }
});

export default AddProfileProfilePictureButton;
