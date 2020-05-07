import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialChipBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.chipText}>Community</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 50
  },
  chipText: {
    color: "rgba(230,230,230,1)",
    fontSize: 16
  }
});

export default MaterialChipBasic;
