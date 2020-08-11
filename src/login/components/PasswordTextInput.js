import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialRightIconTextbox1 from "./MaterialRightIconTextbox1";

function PasswordTextInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group3Filler}></View>
      <View style={styles.group3}>
        <View style={styles.materialRightIconTextbox1Stack}>
          <MaterialRightIconTextbox1
            text1="password"
            style={styles.materialRightIconTextbox1}
          ></MaterialRightIconTextbox1>
          <TouchableOpacity style={styles.button5}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group3Filler: {
    flex: 1
  },
  group3: {
    height: 43
  },
  materialRightIconTextbox1: {
    top: 0,
    left: 0,
    height: 43,
    position: "absolute",
    right: 0
  },
  button5: {
    top: 0,
    left: 271,
    width: 40,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  materialRightIconTextbox1Stack: {
    height: 43
  }
});

export default PasswordTextInput;
