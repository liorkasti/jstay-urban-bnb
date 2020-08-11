import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonPrimary4 from "./MaterialButtonPrimary4";

function CreateStayButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonPrimary4
        style={styles.materialButtonPrimary4}
      ></MaterialButtonPrimary4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonPrimary4: {
    top: 0,
    width: "100%",
    height: 60,
    position: "absolute",
    right: 0,
    borderRadius: 10
  }
});

export default CreateStayButton;
