import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>{props.label || "Remember Me"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  checkIcon: {
    color: "rgba(177,177,177,1)",
    fontFamily: "Roboto",
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    width: 117,
    height: 17,
    color: "rgba(177,177,177,1)",
    marginLeft: 2,
    fontSize: 14
  }
});

export default MaterialCheckboxWithLabel;
