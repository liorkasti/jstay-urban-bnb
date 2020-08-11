import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel5(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.male}>{props.text1 || "Female"}</Text>
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
  male: {
    width: 56,
    height: 16,
    color: "rgba(177,177,177,1)",
    marginLeft: 2,
    fontSize: 16
  }
});

export default MaterialCheckboxWithLabel5;
