import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function DateGroup(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon3Row}>
        <Icon name="calendar-plus-o" style={styles.icon3}></Icon>
        <Text style={styles.sholliKestecher1}>18/11/89</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  sholliKestecher1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginLeft: 13,
    marginTop: 2
  },
  icon3Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 13
  }
});

export default DateGroup;
