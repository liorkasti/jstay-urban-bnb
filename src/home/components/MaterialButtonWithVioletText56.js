import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialButtonWithVioletText56(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={styles.caption}>Show Amenities</Text>
      <Icon name="chevron-down" style={styles.icon}></Icon>
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
    color: "rgba(0,88,155,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  icon: {
    top: 1,
    left: 133,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  }
});

export default MaterialButtonWithVioletText56;
