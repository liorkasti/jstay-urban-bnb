import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialMapView from "./MaterialMapView";

function DragableMap(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialMapView style={styles.materialMapView}></MaterialMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10
  },
  materialMapView: {
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.01,
    flex: 1
  }
});

export default DragableMap;
