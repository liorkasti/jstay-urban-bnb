import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import DoneCreateAccount from "./DoneCreateAccount";

function CreateAccountButtonWrapper(props) {
  return (
    <View style={[styles.container, props.style]}>
      <DoneCreateAccount
        style={styles.createAccountDoneButton}
      ></DoneCreateAccount>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  createAccountDoneButton: {
    width: 154,
    height: 36,
    position: "absolute",
    right: 0,
    bottom: 0
  }
});

export default CreateAccountButtonWrapper;
