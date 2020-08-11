import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialRightIconTextbox3 from "./MaterialRightIconTextbox3";
import Icon from "react-native-vector-icons/Entypo";

function ReEnterPassword(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialRightIconTextbox3
        style={styles.materialRightIconTextbox2}
      ></MaterialRightIconTextbox3>
      <Icon name="warning" style={styles.icon3}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialRightIconTextbox2: {
    top: "0%",
    left: 38,
    height: 43,
    position: "absolute",
    right: 0
  },
  icon3: {
    left: 0,
    position: "absolute",
    color: "rgba(208,2,27,0.81)",
    fontSize: 21,
    top: "40.84%"
  }
});

export default ReEnterPassword;
