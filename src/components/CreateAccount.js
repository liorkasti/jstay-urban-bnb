import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import CreateAccountButtonWrapper from "./CreateAccountButtonWrapper";

function CreateAccount(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <CreateAccountButtonWrapper
        style={styles.createAccountButtonWrapper}
      ></CreateAccountButtonWrapper>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  createAccountButtonWrapper: {
    top: 0,
    left: 0,
    width: 154,
    height: 36,
    position: "absolute"
  }
});

export default CreateAccount;
