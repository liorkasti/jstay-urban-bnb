import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={styles.leftIcon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TextInput
          placeholder={props.textInput1 || "Search"}
          style={styles.inputStyle}
        ></TextInput>
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterialCommunityIconsIcon
            name="close"
            style={styles.rightIcon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    top: 4,
    left: 4,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 4,
    bottom: 4,
    borderRadius: 2
  },
  leftIconButton: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11
  },
  leftIcon2: {
    backgroundColor: "transparent",
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    top: 4,
    left: 72,
    width: "70%",
    height: 48,
    color: "#000",
    position: "absolute",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  rightIconButton: {
    top: 5,
    position: "absolute",
    alignItems: "center",
    right: 5,
    padding: 11
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 24,
    opacity: 0.6
  }
});

export default MaterialSearchBar;
