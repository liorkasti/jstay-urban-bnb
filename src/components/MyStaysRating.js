import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MyStaysRating(props) {
  return (
    <View style={[styles.container, props.style]}>
      <FontAwesomeIcon name="star" style={styles.icon9}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon10}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon11}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon12}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon13}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon14}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon15}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon16}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon17}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon18}></FontAwesomeIcon>
      <Text style={styles.stay1}>Stay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon9: {
    top: 18,
    left: 1,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon10: {
    top: 18,
    left: 34,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon11: {
    top: 18,
    left: 66,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon12: {
    top: 18,
    left: 99,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon13: {
    top: 18,
    left: 131,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon14: {
    top: 18,
    left: 1,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon15: {
    top: 18,
    left: 34,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon16: {
    top: 18,
    left: 66,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon17: {
    top: 18,
    left: 99,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon18: {
    top: 18,
    left: 131,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  stay1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default MyStaysRating;
