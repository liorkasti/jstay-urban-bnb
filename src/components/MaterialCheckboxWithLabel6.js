import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, CheckBox } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel6(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>
        {props.label || "I wish to receive updates and news\nvia email"}
      </Text>
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
    color: "rgba(230,230,230,1)",
    fontFamily: "Roboto",
    fontSize: 28,
    lineHeight: 28,
    margin: 0,
    marginBottom: 10,
    marginTop: 10
  },
  checkLabel: {
    color: "rgba(230,230,230,1)",
    alignSelf: "flex-start",
    margin: 0,
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 8,
    fontSize: 16,
    textAlign: "left"
  }
});

export default MaterialCheckboxWithLabel6;
