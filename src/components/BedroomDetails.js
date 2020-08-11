import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function BedroomDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="md-bed" style={styles.icon12}></Icon>
      <Text style={styles.bedrooms2}>Bedrooms: 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon12: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  bedrooms2: {
    top: 8,
    left: 31,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default BedroomDetails;
