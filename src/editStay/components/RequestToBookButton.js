import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet14 from "./MaterialButtonViolet14";

function RequestToBookButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet14
      onPress={props.onPress}
        style={styles.materialButtonViolet14}
      ></MaterialButtonViolet14>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonViolet14: {
    height: 58,
    borderRadius: 10
  }
});

export default RequestToBookButton;
