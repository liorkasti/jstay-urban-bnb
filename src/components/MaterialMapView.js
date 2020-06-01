import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

function MaterialMapView(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MapView customMapStyle={[]} style={styles.mapView1}></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10
  },
  mapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)"
  }
});

export default MaterialMapView;
