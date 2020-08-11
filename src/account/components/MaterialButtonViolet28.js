import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet28(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.editAccount}>Edit Account</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  editAccount: {
    color: "rgba(2,172,235,1)",
    fontSize: 20
  }
});

export default MaterialButtonViolet28;
