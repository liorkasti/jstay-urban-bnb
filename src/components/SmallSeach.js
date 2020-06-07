import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function SmallSeach(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="chevron-small-down" style={styles.icon7}></Icon>
      <TouchableOpacity style={styles.button7}>
        <Text style={styles.dates2}>Show Amenities</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon7: {
    top: 386,
    left: "60.96%",
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  button7: {
    top: 394,
    left: "27.47%",
    width: 171,
    height: 20,
    position: "absolute"
  },
  dates2: {
    top: 0,
    left: 0,
    width: 171,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  }
});

export default SmallSeach;
