import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="re-enter password"
        placeholderTextColor="rgba(177,177,177,1)"
        style={styles.inputStyle}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Icon name="eye" style={styles.iconStyle}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(33,150,243,1)",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  button: {
    width: 32,
    height: 23,
    flexDirection: "row"
  },
  iconStyle: {
    color: "rgba(177,177,177,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8,
    width: 32,
    height: 23
  }
});

export default MaterialRightIconTextbox3;
