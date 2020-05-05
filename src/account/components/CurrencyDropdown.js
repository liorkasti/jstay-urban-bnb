import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function CurrencyDropdown(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textInput7Stack}>
        <TextInput placeholder="USD" style={styles.textInput7}></TextInput>
        <Icon name="chevron-down" style={styles.icon4}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput7: {
    top: 1,
    left: 0,
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon4: {
    top: 0,
    left: 39,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  textInput7Stack: {
    width: 80,
    height: 41
  }
});

export default CurrencyDropdown;
