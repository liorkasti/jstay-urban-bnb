import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialFixedLabelTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 30,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialFixedLabelTextbox;
