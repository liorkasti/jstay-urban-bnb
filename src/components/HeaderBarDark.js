import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import BackButton from "./BackButton";

function HeaderBarDark(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}></View>
      <Text style={styles.createAccount}>
        {props.text2 || "Create Account"}
      </Text>
      <BackButton onPress={props.onBack} style={styles.backButton}></BackButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect1: {
    top: 0,
    left: 0,
    height: 85,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    right: 0
  },
  createAccount: {
    top: 48,
    left: 0,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    right: 0,
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  backButton: {
    top: 40,
    left: 10,
    width: 29,
    height: 40,
    position: "absolute"
  }
});

export default HeaderBarDark;
