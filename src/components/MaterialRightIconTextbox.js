import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="password"
        placeholderTextColor="rgba(177,177,177,1)"
        style={styles.inputStyle}
      ></TextInput>
      <Icon name="eye" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "rgba(177,177,177,1)",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  iconStyle: {
    color: "rgba(177,177,177,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8
  }
});

export default MaterialRightIconTextbox;
