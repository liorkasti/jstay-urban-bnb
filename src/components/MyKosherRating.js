import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MyKosherRating(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group3}>
        <FontAwesomeIcon name="star" style={styles.icon19}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon20}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon21}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon22}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon24}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon25}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon26}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon27}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon28}></FontAwesomeIcon>
        <Text style={styles.kosherFriendly1}>Kosher Friendly</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group3: {
    top: "0%",
    left: 0,
    width: 159,
    height: 47,
    position: "absolute"
  },
  icon19: {
    top: 17,
    left: 1,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon20: {
    top: 17,
    left: 34,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon21: {
    top: 17,
    left: 66,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon22: {
    top: 17,
    left: 99,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon24: {
    top: 17,
    left: 1,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon25: {
    top: 17,
    left: 34,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon26: {
    top: 17,
    left: 66,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon27: {
    top: 17,
    left: 99,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon28: {
    top: 17,
    left: 131,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  kosherFriendly1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default MyKosherRating;
