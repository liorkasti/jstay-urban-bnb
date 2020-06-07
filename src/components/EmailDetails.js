import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function EmailDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.sholliKestecher2}>sholliber@yahoo.co.uk</Text>
      <Icon name="envelope" style={styles.icon6}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sholliKestecher2: {
    top: 6,
    left: 36,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  icon6: {
    top: 4,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24
  }
});

export default EmailDetails;
