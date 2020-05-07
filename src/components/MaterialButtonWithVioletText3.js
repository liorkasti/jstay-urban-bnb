import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText3(props) {
  return (
    <TouchableOpacity onPress={()=>{props.onPress()}}style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.text1 || "BUTTON"}</Text>
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
    color: "rgba(2,172,235,1)",
    alignSelf: "flex-start",
    fontSize: 18,
    fontFamily: "roboto-bold"
  }
});

export default MaterialButtonWithVioletText3;
