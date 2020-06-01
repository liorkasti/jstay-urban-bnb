import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextbox5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="account-supervisor" style={styles.iconStyle}></Icon>
      <TextInput
        placeholder="title"
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
    paddingLeft: 10
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "rgba(33,150,243,1)",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialIconTextbox5;
