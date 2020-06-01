import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapViewButton from "./MapViewButton";

function MapButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MapViewButton style={styles.mapViewButton}></MapViewButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mapViewButton: {
    left: 0,
    height: 66,
    position: "absolute",
    right: 0,
    bottom: 0
  }
});

export default MapButton;
