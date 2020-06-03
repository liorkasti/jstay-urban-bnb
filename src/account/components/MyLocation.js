import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MyLocation(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon4Row}>
        <Icon name="map-pin" style={styles.icon4}></Icon>
        <Text style={styles.jerusalemIsrael}>Jerusalem, Israel</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  jerusalemIsrael: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginLeft: 17,
    marginTop: 2
  },
  icon4Row: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  }
});

export default MyLocation;
