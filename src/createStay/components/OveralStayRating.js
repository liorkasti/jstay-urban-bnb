import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function OveralStayRating(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon10StackRow}>
        <View style={styles.icon10Stack}>
          <FontAwesomeIcon name="star" style={styles.icon10}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon17}></FontAwesomeIcon>
        </View>
        <View style={styles.icon13Stack}>
          <FontAwesomeIcon name="star" style={styles.icon13}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon18}></FontAwesomeIcon>
        </View>
        <View style={styles.icon14Stack}>
          <FontAwesomeIcon name="star" style={styles.icon14}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon19}></FontAwesomeIcon>
        </View>
        <View style={styles.icon15Stack}>
          <FontAwesomeIcon name="star" style={styles.icon15}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon20}></FontAwesomeIcon>
        </View>
        <View style={styles.icon16Stack}>
          <FontAwesomeIcon name="star" style={styles.icon16}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon21}></FontAwesomeIcon>
        </View>
      </View>
      <Text style={styles.stay2}>Stay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon10: {
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
  icon10Stack: {
    width: 29,
    height: 30
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
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon14: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon19: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon14Stack: {
    width: 29,
    height: 30,
    marginLeft: 5
  },
  icon15: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon20: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon15Stack: {
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon16: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon21: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon16Stack: {
    width: 29,
    height: 30,
    marginLeft: 5
  },
  icon10StackRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 1
  },
  stay2: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -48
  }
});

export default OveralStayRating;
