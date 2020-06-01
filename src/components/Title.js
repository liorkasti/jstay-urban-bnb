import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Title(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="intersex" style={styles.icon8}></Icon>
      <Text style={styles.text1}>Mr</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon8: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  text1: {
    top: 2,
    left: 35,
    width: 32,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  }
});

export default Title;
