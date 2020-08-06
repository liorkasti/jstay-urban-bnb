import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function PhoneDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text2}>0522339278</Text>
      <Icon name="phone" style={styles.icon7}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text2: {
    top: 2,
    left: 34,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  icon7: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24
  }
});

export default PhoneDetails;
