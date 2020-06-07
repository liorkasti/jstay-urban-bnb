import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonLight from "./MaterialButtonLight";

function LoginButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialButtonLightFiller}></View>
      <MaterialButtonLight
      onPress={props.onPress}
        style={styles.materialButtonLight}
      ></MaterialButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonLightFiller: {
    flex: 1
  },
  materialButtonLight: {
    height: 62,
    backgroundColor: "rgba(2,172,235,1)",
    borderRadius: 10
  }
});

export default LoginButton;
