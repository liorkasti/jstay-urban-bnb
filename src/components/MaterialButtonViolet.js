import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Continue with Facebook</Text>
      <Text style={styles.loremIpsum}></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  loremIpsum: {
    top: 17,
    left: 62,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonViolet;
