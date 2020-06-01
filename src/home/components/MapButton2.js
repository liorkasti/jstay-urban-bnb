import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import DragableMap from "./DragableMap";

function MapButton2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.button55Filler}></View>
      <TouchableOpacity style={styles.button55}>
        <View style={styles.dragableMapStack}>
          <DragableMap style={styles.dragableMap}></DragableMap>
          <Text style={styles.loremIpsum3}>Find Stays With Map View</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button55Filler: {
    flex: 1
  },
  button55: {
    height: 60
  },
  dragableMap: {
    position: "absolute",
    height: 60,
    left: 0,
    borderRadius: 10,
    bottom: 0,
    right: 0
  },
  loremIpsum3: {
    top: 18,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700",
    right: 84
  },
  dragableMapStack: {
    height: 60
  }
});

export default MapButton2;
