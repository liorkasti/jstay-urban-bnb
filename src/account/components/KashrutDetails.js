import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function KashrutDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.kosherStandard}>Kosher (standard)</Text>
      <Icon name="certificate" style={styles.icon5}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  kosherStandard: {
    top: 6,
    left: 36,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  icon5: {
    top: 4,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24
  }
});

export default KashrutDetails;
