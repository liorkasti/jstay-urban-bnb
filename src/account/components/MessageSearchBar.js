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
    height: 56,
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0
  }
});

export default MessageSearchBar;
