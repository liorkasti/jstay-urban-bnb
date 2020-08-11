import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare3 from "./MaterialButtonShare3";

function AddToFavoritesButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonShare3
        style={styles.materialButtonShare1}
      ></MaterialButtonShare3>
      <Text style={styles.addToFavorites1}>Add to favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonShare1: {
    top: 0,
    left: 23,
    width: 56,
    height: 56,
    position: "absolute"
  },
  addToFavorites1: {
    top: 59,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default AddToFavoritesButton;
