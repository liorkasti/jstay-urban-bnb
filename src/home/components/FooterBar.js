import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialBasicFooter1 from "./MaterialBasicFooter1";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function FooterBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialCommunityIconsIcon
        name="numeric-3-box"
        style={styles.icon4}
      ></MaterialCommunityIconsIcon>
      <FontAwesomeIcon
        name="exclamation"
        style={styles.icon5}
      ></FontAwesomeIcon>
            <MaterialBasicFooter1
        style={styles.materialBasicFooter1}
      ></MaterialBasicFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialBasicFooter1: {
    left: 0,
    height: 70,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  icon4: {
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 20,
    right: 134,
    top: "-27.6%",
    bottom: 78
  },
  icon5: {
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 15,
    top: "-25.01%",
    bottom: 76,
    right: 39
  }
});

export default FooterBar;
