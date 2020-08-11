import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText46(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={styles.seeMyReviews}>See my reviews</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  seeMyReviews: {
    width: 196,
    height: 21,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "justify",
    top: 18,
    left: -9
  }
});

export default MaterialButtonWithVioletText46;
