import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function BedroomDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon12Row}>
        <Icon name="md-bed" style={styles.icon12}></Icon>
        <Text style={styles.bedrooms2}>Bedrooms: 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon12: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  bedrooms2: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 8,
    marginTop: 8
  },
  icon12Row: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  }
});

export default BedroomDetails;
