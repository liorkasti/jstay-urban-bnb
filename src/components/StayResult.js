import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithImageAndTitle from "./MaterialCardWithImageAndTitle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function StayResult(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle}
      ></MaterialCardWithImageAndTitle>
      <FontAwesomeIcon
        name="certificate"
        style={styles.icon2}
      ></FontAwesomeIcon>
      <FeatherIcon name="sunset" style={styles.icon3}></FeatherIcon>
      <MaterialCommunityIconsIcon
        name="bank"
        style={styles.icon4}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="cellphone-key"
        style={styles.icon5}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230, 230, 230,0.41)",
    borderRadius: 10
  },
  materialCardWithImageAndTitle: {
    top: 0,
    left: 0,
    width: 359,
    height: 166,
    backgroundColor: "rgba(0,88,155,0)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  icon2: {
    top: 125,
    left: 213,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon3: {
    top: 125,
    left: 247,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon4: {
    top: 125,
    left: 287,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon5: {
    top: 125,
    left: 322,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  }
});

export default StayResult;
