import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function OveralKashrutRating(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon22StackRow}>
        <View style={styles.icon22Stack}>
          <FontAwesomeIcon name="star" style={styles.icon22}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon27}></FontAwesomeIcon>
        </View>
        <View style={styles.icon23Stack}>
          <FontAwesomeIcon name="star" style={styles.icon23}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon28}></FontAwesomeIcon>
        </View>
        <View style={styles.icon24Stack}>
          <FontAwesomeIcon name="star" style={styles.icon24}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon29}></FontAwesomeIcon>
        </View>
        <View style={styles.icon25Stack}>
          <FontAwesomeIcon name="star" style={styles.icon25}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon30}></FontAwesomeIcon>
        </View>
        <View style={styles.icon26Stack}>
          <FontAwesomeIcon name="star" style={styles.icon26}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon31}></FontAwesomeIcon>
        </View>
      </View>
      <Text style={styles.kosherFriendly}>Kosher Friendly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon22: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon27: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon22Stack: {
    width: 29,
    height: 30
  },
  icon23: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon28: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon23Stack: {
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon24: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon29: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon24Stack: {
    width: 29,
    height: 30,
    marginLeft: 5
  },
  icon25: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon30: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon25Stack: {
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon26: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon31: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon26Stack: {
    width: 29,
    height: 30,
    marginLeft: 5
  },
  icon22StackRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 1
  },
  kosherFriendly: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -47
  }
});

export default OveralKashrutRating;
