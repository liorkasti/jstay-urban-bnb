import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import EmailTextInput4 from "./EmailTextInput4";

function EmailTextInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialIconTextbox4Filler}></View>
      <EmailTextInput4
        textInput1="email"
        style={styles.materialIconTextbox4}
      ></EmailTextInput4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialIconTextbox4Filler: {
    flex: 1
  },
  materialIconTextbox4: {
    height: 43
  }
});

export default EmailTextInput;
