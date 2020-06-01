import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CurrencyDropdown from "./CurrencyDropdown";

function CurrencyDropdownContainer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.currency1}>Currency</Text>
      <Text style={styles.loremIpsum2}>Select preferred currency</Text>
      <CurrencyDropdown style={styles.currencyDropdown}></CurrencyDropdown>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  currency1: {
    top: 0,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  loremIpsum2: {
    top: 23,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  currencyDropdown: {
    top: 51,
    left: 0,
    width: 80,
    height: 41,
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 0
  }
});

export default CurrencyDropdownContainer;
