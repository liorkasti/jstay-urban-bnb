import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText2(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.text1 || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 88
  },
  caption: {
    width: 93,
    height: 28,
    color: "rgba(2,172,235,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialButtonWithVioletText2;
