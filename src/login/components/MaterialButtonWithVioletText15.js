import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText15(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={styles.caption}>Forgot password</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    minWidth: 88
  },
  caption: {
    color: "rgba(177,177,177,1)",
    fontSize: 10,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonWithVioletText15;
