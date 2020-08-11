import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <MaterialCommunityIconsIcon
          name="subdirectory-arrow-right"
          style={styles.leftIcon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <View style={styles.inputBox}>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.inputLeftIcon}
        ></MaterialCommunityIconsIcon>
        <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
        <MaterialCommunityIconsIcon
          name="close-circle"
          style={styles.inputRightIcon}
        ></MaterialCommunityIconsIcon>
      </View>
      <TouchableOpacity style={styles.rightIconButton}>
        <MaterialCommunityIconsIcon
          name="upload"
          style={styles.rightIcon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  leftIconButton: {
    padding: 8
  },
  leftIcon2: {
    backgroundColor: "transparent",
    opacity: 0.6,
    color: "#007AFF",
    fontSize: 24
  },
  inputBox: {
    flex: 1,
    backgroundColor: "#CECED2",
    flexDirection: "row",
    borderRadius: 5
  },
  inputLeftIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 32,
    flex: 1,
    color: "#000",
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 15
  },
  inputRightIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8
  },
  rightIcon2: {
    backgroundColor: "transparent",
    opacity: 0.6,
    color: "#007AFF",
    fontSize: 24
  }
});

export default CupertinoSearchBar;
