import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialSearchBar1 from "./MaterialSearchBar1";

function MessageSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialSearchBar1
        style={styles.materialSearchBar1}
      ></MaterialSearchBar1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialSearchBar1: {
    top: "0%",
    left: 0,
    height: 56,
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    right: 0
  }
});

export default MessageSearchBar;
