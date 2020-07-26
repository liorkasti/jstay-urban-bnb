import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText32(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Edit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    backgroundColor: "transparent",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",    
    // paddingRight: 16,
    // paddingLeft: 16,
    // minWidth: 88
  },
  caption: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonWithVioletText32;
