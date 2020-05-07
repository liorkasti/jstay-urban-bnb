import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialChipBasic1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.chipText}>Kosher</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(230,230,230)",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 50
  },
  chipText: {
    height: 16,
    color: "rgba(230,230,230,1)",
    fontSize: 16
  }
});

export default MaterialChipBasic1;
