import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialBasicFooter1 from "./MaterialBasicFooter1";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function FooterBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.stackFiller}></View>
      <View style={styles.materialBasicFooter1Stack}>
        <MaterialBasicFooter1
          style={styles.materialBasicFooter1}
        ></MaterialBasicFooter1>
        <MaterialCommunityIconsIcon
          name="numeric-3-box"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon5}
        ></FontAwesomeIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  stackFiller: {
    flex: 1
  },
  materialBasicFooter1: {
    left: 0,
    height: 100,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  icon4: {
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 20,
    right: 134,
    bottom: 82
  },
  icon5: {
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 15,
    bottom: 88,
    right: 39
  },
  materialBasicFooter1Stack: {
    height: 105,
    marginBottom: -2
  }
});

export default FooterBar;
