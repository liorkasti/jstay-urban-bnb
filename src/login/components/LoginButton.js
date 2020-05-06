import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonLight from "./MaterialButtonLight";

function LoginButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonLight
      onPress={props.onPress}
        style={styles.materialButtonLight}
      ></MaterialButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonLight: {
    left: "0%",
    width: "100%",
    height: 62,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    bottom: "0.01%",
    borderRadius: 10
  }
});

export default LoginButton;
