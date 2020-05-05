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
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginLeft: 3
  },
  loremIpsum2: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3,
    marginLeft: 3
  },
  currencyDropdown: {
    width: 80,
    height: 41,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 14
  }
});

export default CurrencyDropdownContainer;
