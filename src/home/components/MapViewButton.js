import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialMapView2 from "./MaterialMapView2";

function MapViewButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialMapView2Stack}>
        <MaterialMapView2 style={styles.materialMapView2}></MaterialMapView2>
        <Text style={styles.loremIpsum}>Find Stays With Map View</Text>
      </View>
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
    opacity: 0.78,
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum: {
    top: 24,
    left: 98,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialMapView2Stack: {
    height: 66
  }
});

export default MapViewButton;
