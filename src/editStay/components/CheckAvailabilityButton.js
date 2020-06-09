import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonViolet13 from "./MaterialButtonViolet13";

function CheckAvailabilityButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonViolet13
        style={styles.materialButtonViolet13}
      ></MaterialButtonViolet13>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonViolet13: {
    height: 58
  }
});

export default CheckAvailabilityButton;
