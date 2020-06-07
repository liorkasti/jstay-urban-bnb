import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialRadio7 from "./MaterialRadio7";

function RefundableTaxCheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.night1}>Refundable Tax</Text>
      <Text style={styles.night3}>$0.00</Text>
      <MaterialRadio7 style={styles.materialRadio1}></MaterialRadio7>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  night1: {
    top: 13,
    left: "0%",
    width: 163,
    height: 24,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night3: {
    top: 14,
    height: 22,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular",
    right: 42,
    width: 52
  },
  materialRadio1: {
    top: "0%",
    width: 40,
    height: 40,
    position: "absolute",
    right: 0
  }
});

export default RefundableTaxCheckBox;
