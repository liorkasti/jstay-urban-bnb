import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText9 from "./MaterialButtonWithVioletText9";
import Icon from "react-native-vector-icons/Ionicons";

function DoneCreateAccount(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText9
        onPress={props.onPress}
        style={styles.materialButtonWithVioletText9}
      ></MaterialButtonWithVioletText9>
      <Icon name="ios-arrow-forward" style={styles.icon10}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText9: {
    width: 154,
    height: 36,
    position: "absolute",
    bottom: 0
  },
  icon10: {
    top: 8,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 20,
    right: 2,
  }
});

export default DoneCreateAccount;
