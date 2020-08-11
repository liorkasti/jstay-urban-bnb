import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialToast1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text numberOfLines={1} style={styles.text1}>
        Toast Message
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323232",
    opacity: 1,
    justifyContent: "center",
    paddingRight: 24,
    paddingLeft: 24,
    minWidth: 288,
    borderRadius: 2
  },
  text1: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialToast1;
