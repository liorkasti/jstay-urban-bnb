import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function StayLocationDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon8Row}>
        <Icon name="location-pin" style={styles.icon8}></Icon>
        <Text style={styles.nachlaotIsrael}>Nachlaot, Israel</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon8: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  nachlaotIsrael: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 5,
    marginTop: 8
  },
  icon8Row: {
    height: 35,
    flexDirection: "row",
    flex: 1
  }
});

export default StayLocationDetails;
