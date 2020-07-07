import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText21(props) {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.hasStay ? "myStays" : "createStay")}
      style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.hasStay ? "My Stay/s" : "Create a Stay"}</Text>
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
    color: "rgba(2,172,235,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonWithVioletText21;
