import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaxStayDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="man" style={styles.icon11}></Icon>
      <Text style={styles.sleepsUpTo4}>Sleeps up to: 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon11: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  sleepsUpTo4: {
    top: 8,
    left: 35,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default MaxStayDetails;
