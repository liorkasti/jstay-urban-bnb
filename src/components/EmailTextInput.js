import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import EmailTextInput4 from "./EmailTextInput4";

function EmailTextInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <EmailTextInput4
        textInput1="email"
        style={styles.materialIconTextbox4}
      ></EmailTextInput4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialIconTextbox4: {
    left: 0,
    height: 43,
    position: "absolute",
    right: 0,
    bottom: "0%"
  }
});

export default EmailTextInput;
