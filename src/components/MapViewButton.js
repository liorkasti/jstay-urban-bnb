import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialMapView2 from "./MaterialMapView2";

function MapViewButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialMapView2 style={styles.materialMapView2}></MaterialMapView2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialMapView2: {
    left: 0,
    height: 66,
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 0.87,
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  }
});

export default MapViewButton;
