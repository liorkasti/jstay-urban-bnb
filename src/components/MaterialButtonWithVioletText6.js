import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText6(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Privacy Policy</Text>
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
    width: 201,
    height: 56,
    color: "rgba(168,219,243,1)",
    alignSelf: "flex-start",
    fontSize: 13,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonWithVioletText6;
