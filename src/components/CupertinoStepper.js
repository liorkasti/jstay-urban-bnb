import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoStepper(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={[
          styles.leftStepper,
          {
            backgroundColor: props.decrement
              ? "rgba(0, 122, 255,0.1)"
              : "#FFFFFF"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="minus"
          style={styles.leftIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <MaterialCommunityIconsIcon
        name="plus"
        style={styles.rightIcon}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  leftStepper: {
    top: 0,
    left: 0,
    width: 79,
    height: 30,
    flex: 0.84,
    position: "absolute",
    alignItems: "center",
    borderColor: "#007AFF",
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  leftIcon: {
    fontSize: 30,
    color: "#007AFF"
  },
  rightIcon: {
    fontSize: 30,
    color: "#007AFF",
    position: "absolute",
    top: 15,
    left: 50,
    height: 30,
    width: 30
  }
});

export default CupertinoStepper;
