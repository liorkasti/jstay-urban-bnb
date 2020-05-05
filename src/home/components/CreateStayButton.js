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
    height: 60,
    borderRadius: 10
  }
});

export default CreateStayButton;
