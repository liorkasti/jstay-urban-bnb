import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CurrencyDropdown from "./CurrencyDropdown";

function CurrencyDropdownContainer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.currency1Stack}>
        <Text style={styles.currency1}>Currency</Text>
        <Text style={styles.loremIpsum2}>Select preferred currency</Text>
      </View>
      <CurrencyDropdown style={styles.currencyDropdown}></CurrencyDropdown>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  currency1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum2: {
    top: 23,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  currency1Stack: {
    width: 156,
    height: 40,
    marginLeft: 3
  },
  currencyDropdown: {
    width: 80,
    height: 41,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 11
  }
});

export default CurrencyDropdownContainer;
