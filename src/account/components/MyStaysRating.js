import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MyStaysRating(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon9StackRow}>
        <View style={styles.icon9Stack}>
          <FontAwesomeIcon name="star" style={styles.icon9}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon14}></FontAwesomeIcon>
        </View>
        <View style={styles.icon10Stack}>
          <FontAwesomeIcon name="star" style={styles.icon10}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon15}></FontAwesomeIcon>
        </View>
        <View style={styles.icon11Stack}>
          <FontAwesomeIcon name="star" style={styles.icon11}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon16}></FontAwesomeIcon>
        </View>
        <View style={styles.icon12Stack}>
          <FontAwesomeIcon name="star" style={styles.icon12}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon17}></FontAwesomeIcon>
        </View>
        <View style={styles.icon13Stack}>
          <FontAwesomeIcon name="star" style={styles.icon13}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon18}></FontAwesomeIcon>
        </View>
      </View>
      <Text style={styles.stay1}>Stay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon9: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon14: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon9Stack: {
    width: 29,
    height: 30
  },
  icon10: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon15: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon10Stack: {
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon11: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon16: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon11Stack: {
    width: 29,
    height: 30,
    marginLeft: 5
  },
  icon12: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon17: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon12Stack: {
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon13: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon18: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon13Stack: {
    width: 29,
    height: 30,
    marginLeft: 5
  },
  icon9StackRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 1,
    marginRight: -1
  },
  stay1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -48
  }
});

export default MyStaysRating;
