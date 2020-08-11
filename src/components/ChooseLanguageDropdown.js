import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ChooseLanguageDropdown(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button6}>
        <EntypoIcon name="chevron-down" style={styles.icon29}></EntypoIcon>
        <Text style={styles.chooseLanguage}>Choose language</Text>
      </TouchableOpacity>
      <EntypoIcon name="chevron-down" style={styles.icon30}></EntypoIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button6: {
    top: 3,
    width: 150,
    height: 33,
    position: "absolute",
    right: 1
  },
  icon29: {
    top: 0,
    left: 125,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 25
  },
  chooseLanguage: {
    top: 0,
    left: 0,
    width: 149,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 2,
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  icon30: {
    top: 0,
    left: 127,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 25
  }
});

export default ChooseLanguageDropdown;
