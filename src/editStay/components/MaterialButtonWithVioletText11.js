import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText11(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.skip}>Skip</Text>
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
  skip: {
    width: 44,
    height: 21,
    color: "rgba(177,177,177,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center"
  }
});

export default MaterialButtonWithVioletText11;
