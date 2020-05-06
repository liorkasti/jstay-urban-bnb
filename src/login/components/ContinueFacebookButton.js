import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet from "./MaterialButtonViolet";

function ContinueFacebookButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonViolet: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100.01%",
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0
  }
});

export default ContinueFacebookButton;
