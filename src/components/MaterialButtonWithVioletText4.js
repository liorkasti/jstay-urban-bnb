import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText4(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  caption: {
    top: 18,
    left: 50,
    width: 0,
    height: 0,
    color: "rgba(168,219,243,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 13
  }
});

export default MaterialButtonWithVioletText4;
