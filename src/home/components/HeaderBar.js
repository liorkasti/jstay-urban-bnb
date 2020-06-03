import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoSegmentWithFourTabs1 from "./CupertinoSegmentWithFourTabs1";

function HeaderBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <CupertinoSegmentWithFourTabs1
        text1="Kosher"
        text2="Neighborhood"
        text3="Stays"
        text4="Hotels"
        style={styles.cupertinoSegmentWithFourTabs1}
      ></CupertinoSegmentWithFourTabs1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cupertinoSegmentWithFourTabs1: {
    top: 0,
    left: 0,
    height: 56,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 0
  }
});

export default HeaderBar;
