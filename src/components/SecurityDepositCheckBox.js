import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialRadio7 from "./MaterialRadio7";

function SecurityDepositCheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.night2}>Security Deposit</Text>
      <Text style={styles.night4}>$0.00</Text>
      <MaterialRadio7 style={styles.materialRadio2}></MaterialRadio7>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  night2: {
    top: 12,
    left: "0%",
    width: 143,
    height: 23,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night4: {
    top: 12,
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular",
    right: 41
  },
  materialRadio2: {
    top: "0%",
    width: 40,
    height: 40,
    position: "absolute",
    right: 0
  }
});

export default SecurityDepositCheckBox;
