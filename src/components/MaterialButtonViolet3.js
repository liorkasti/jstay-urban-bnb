import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.mehadrin}>Mehadrin</Text>
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
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  mehadrin: {
    width: 73,
    height: 14,
    color: "rgba(230,230,230,1)",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 8,
    textAlign: "center"
  }
});

export default MaterialButtonViolet3;
