import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function StayRatingSmall(props) {
  return (
    <View style={[styles.container, props.style]}>
      <FontAwesomeIcon name="star" style={styles.icon111}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon112}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon113}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon114}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon115}></FontAwesomeIcon>
      <Text style={styles.stay12}>Stay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon111: {
    top: 14,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon112: {
    top: 14,
    left: 19,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon113: {
    top: 14,
    left: 37,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon114: {
    top: 14,
    left: 56,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon115: {
    top: 14,
    left: 74,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  stay12: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default StayRatingSmall;
