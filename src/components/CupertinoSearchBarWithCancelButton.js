import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoSearchBarWithCancelButton(props) {
  return (
    <View style={[styles.container, props.style]}>
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
        <Text style={styles.rightButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingRight: 0
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
  rightButtonText: {
    color: "#007AFF",
    fontSize: 15,
    fontFamily: "roboto-regular"
  }
});

export default CupertinoSearchBarWithCancelButton;
