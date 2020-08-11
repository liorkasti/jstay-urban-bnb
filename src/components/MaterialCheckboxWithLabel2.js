import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialCheckboxWithLabel2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.checkLabel}>{props.label || "Living Room"}</Text>
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
  checkLabel: {
    color: "rgba(230,230,230,1)",
    marginLeft: 2,
    fontSize: 16
  }
});

export default MaterialCheckboxWithLabel2;
