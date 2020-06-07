import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialRadio7 from "./MaterialRadio7";

function SecurityDepositCheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.night2}>Security Deposit</Text>
      <View style={styles.night2Filler}></View>
      <View style={styles.night4Row}>
        <Text style={styles.night4}>$0.00</Text>
        <MaterialRadio7 style={styles.materialRadio2}></MaterialRadio7>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  night2: {
    width: 143,
    height: 23,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 12
  },
  night2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night4: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginRight: 1,
    marginTop: 12
  },
  materialRadio2: {
    width: 40,
    height: 40
  },
  night4Row: {
    height: 40,
    flexDirection: "row"
  }
});

export default SecurityDepositCheckBox;
