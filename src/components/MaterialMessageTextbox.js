import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialMessageTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text
        style={[
          styles.label,
          {
            color: props.error
              ? "red"
              : props.success
              ? "green"
              : "rgba(0,0,0,0.6)"
          }
        ]}
      >
        Label
      </Text>
      <TextInput
        placeholder="Input"
        style={[
          styles.inputStyle,
          {
            borderBottomColor: props.error
              ? "red"
              : props.success
              ? "green"
              : "#D9D5DC"
          }
        ]}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  label: {
    paddingTop: 16,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  inputStyle: {
    width: "100%",
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialMessageTextbox;
