import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare3 from "./MaterialButtonShare3";

function AddToFavoritesButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialButtonShare3
      onPress={()=>{props.onPress()}}
        style={styles.materialButtonShare1}
      ></MaterialButtonShare3>
      <Text style={styles.addToFavorites1}>Add to favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonShare1: {
    width: 56,
    height: 56,
    marginLeft: 23
  },
  addToFavorites1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: 3
  }
});

export default AddToFavoritesButton;
