import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet13 from "./MaterialButtonViolet13";

function MessageHostButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet13
        text1="Message Host"
        style={styles.materialButtonViolet132}
      ></MaterialButtonViolet13>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonViolet132: {
    top: 0,
    left: "0%",
    width: "100%",
    height: 58,
    position: "absolute"
  }
});

export default MessageHostButton;
