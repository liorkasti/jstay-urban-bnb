import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.text1 || "Create Account"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  caption: {
    width: 233,
    height: 39,
    color: "rgba(2,172,235,1)",
    alignSelf: "center",
    justifyContent: "space-between",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center"
  }
});

export default MaterialButtonWithVioletText3;
