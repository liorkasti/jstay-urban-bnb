import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function DateGroup(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.sholliKestecher1}>18/11/89</Text>
      <Icon name="calendar-plus-o" style={styles.icon3}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sholliKestecher1: {
    top: 2,
    left: 37,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  icon3: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24
  }
});

export default DateGroup;
