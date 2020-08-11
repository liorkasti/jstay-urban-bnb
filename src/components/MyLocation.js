import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MyLocation(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.jerusalemIsrael}>Jerusalem, Israel</Text>
      <Icon name="map-pin" style={styles.icon4}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  jerusalemIsrael: {
    top: 2,
    left: 31,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24
  }
});

export default MyLocation;
