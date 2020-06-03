import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText9 from "./MaterialButtonWithVioletText9";
import Icon from "react-native-vector-icons/Ionicons";

function DoneCreateAccount(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialButtonWithVioletText9Stack}>
        <MaterialButtonWithVioletText9
          style={styles.materialButtonWithVioletText9}
        ></MaterialButtonWithVioletText9>
        <Icon name="ios-arrow-forward" style={styles.icon10}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText9: {
    width: 154,
    height: 36,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  icon10: {
    top: 8,
    left: 139,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 20
  },
  materialButtonWithVioletText9Stack: {
    width: 154,
    height: 36
  }
});

export default DoneCreateAccount;
