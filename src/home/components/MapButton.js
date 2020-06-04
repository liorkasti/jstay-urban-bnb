import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MapViewButton from "./MapViewButton";

function MapButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
        <View style={styles.mapViewButtonFiller}></View>
        <MapViewButton style={styles.mapViewButton}></MapViewButton>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 405,
    height: 66
  },
  mapViewButtonFiller: {
    flex: 1
  },
  mapViewButton: {
    height: 66
  }
});

export default MapButton;
