import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet from "./MaterialButtonViolet";

function ContinueFacebookButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet
      onPress={props.onPress}
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonViolet: {
    height: 45,
    backgroundColor: "rgba(0,88,155,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0
  }
});

export default ContinueFacebookButton;
