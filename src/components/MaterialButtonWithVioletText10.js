import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialButtonWithVioletText10(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Next</Text>
      <Icon name="chevron-right" style={styles.icon}></Icon>
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
    fontSize: 16,
    fontFamily: "roboto-700"
  },
  icon: {
    top: 8,
    left: 67,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 20
  }
});

export default MaterialButtonWithVioletText10;
