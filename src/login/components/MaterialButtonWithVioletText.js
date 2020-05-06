import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function MaterialButtonWithVioletText(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.text1 || "Back"}</Text>
      <Icon name="ios-arrow-back" style={styles.icon}></Icon>
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
    width: 52,
    height: 16,
    color: "rgba(2,172,235,1)",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  icon: {
    left: 6,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 30,
    top: "11.11%"
  }
});

export default MaterialButtonWithVioletText;
