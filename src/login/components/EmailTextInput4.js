import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function EmailTextInput4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="email-outline" style={styles.iconStyle}></Icon>
      <TextInput
        placeholder={props.textInput1 || "Label"}
        placeholderTextColor="rgba(177,177,177,1)"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "rgba(177,177,177,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    left: -7,
    // right: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    // alignSelf: "stretch",
    paddingTop: 14,
    // paddingRight: 5,
    paddingBottom: 8,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default EmailTextInput4;
