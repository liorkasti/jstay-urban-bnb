import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function OveralKashrutRating(props) {
  return (
    <View style={[styles.container, props.style]}>
      <FontAwesomeIcon name="star" style={styles.icon22}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon23}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon24}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon25}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon26}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon27}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon28}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon29}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon30}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon31}></FontAwesomeIcon>
      <Text style={styles.kosherFriendly}>Kosher Friendly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon22: {
    top: 17,
    left: 1,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon23: {
    top: 17,
    left: 34,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon24: {
    top: 17,
    left: 66,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon25: {
    top: 17,
    left: 99,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon26: {
    top: 17,
    left: 131,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon27: {
    top: 17,
    left: 1,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon28: {
    top: 17,
    left: 34,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon29: {
    top: 17,
    left: 66,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon30: {
    top: 17,
    left: 99,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon31: {
    top: 17,
    left: 131,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  kosherFriendly: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default OveralKashrutRating;
