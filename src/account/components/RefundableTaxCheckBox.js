import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialRadio7 from "./MaterialRadio7";

function RefundableTaxCheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.night1}>Refundable Tax</Text>
      <View style={styles.night1Filler}></View>
      <View style={styles.night3Row}>
        <Text style={styles.night3}>$0.00</Text>
        <MaterialRadio7 style={styles.materialRadio1}></MaterialRadio7>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  night1: {
    width: 163,
    height: 24,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 13
  },
  night1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night3: {
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    width: 52,
    marginRight: 2,
    marginTop: 14
  },
  materialRadio1: {
    width: 40,
    height: 40
  },
  night3Row: {
    height: 40,
    flexDirection: "row"
  }
});

export default RefundableTaxCheckBox;
