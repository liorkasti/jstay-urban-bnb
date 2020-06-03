import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import BackButton from "./BackButton";

function HeaderBarDark(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <View style={styles.createAccountStack}>
          <Text style={styles.createAccount}>
            {props.text2 || "Create Account"}
          </Text>
          <BackButton style={styles.backButton}></BackButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect1: {
    height: 85,
    backgroundColor: "rgba(0,88,155,1)"
  },
  createAccount: {
    top: 8,
    left: 0,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    right: 0,
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  backButton: {
    top: 0,
    left: 10,
    width: 29,
    height: 40,
    position: "absolute"
  },
  createAccountStack: {
    height: 40,
    marginTop: 40
  }
});

export default HeaderBarDark;
