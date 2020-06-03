import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckbox3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "alpha-m-box"}
        style={styles.checkIcon}
      ></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  checkIcon: {
    color: "rgba(230,230,230,1)",
    fontFamily: "Roboto",
    fontSize: 28,
    lineHeight: 28
  }
});

export default MaterialCheckbox3;
