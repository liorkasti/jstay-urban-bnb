import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText33 from "./MaterialButtonWithVioletText33";

function SaveAndExit(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonWithVioletText33
        style={styles.materialButtonWithVioletText332}
      ></MaterialButtonWithVioletText33>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText332: {
    height: 36
  }
});

export default SaveAndExit;
