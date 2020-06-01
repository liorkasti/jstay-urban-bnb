import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function StayLocationDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="location-pin" style={styles.icon8}></Icon>
      <Text style={styles.nachlaotIsrael}>Nachlaot, Israel</Text>
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
    fontSize: 30
  },
  nachlaotIsrael: {
    top: 8,
    left: 35,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default StayLocationDetails;
