import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import DragableMap from "./DragableMap";

function MapButtonClosed(props) {
  return (
    <View style={[styles.container, props.style]}>
      <DragableMap style={styles.dragableMap}></DragableMap>
      <TouchableOpacity style={styles.button6}>
        <DragableMap style={styles.dragableMap1}></DragableMap>
        <Text style={styles.loremIpsum1}>Find Stays With Map View</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  dragableMap: {
    position: "absolute",
    left: 0,
    height: 60,
    right: 2,
    borderRadius: 10,
    bottom: 0
  },
  button6: {
    top: 0,
    left: 3,
    width: 405,
    height: 60,
    position: "absolute"
  },
  dragableMap1: {
    position: "absolute",
    top: 0,
    width: 405,
    height: 60,
    left: 0,
    borderRadius: 10
  },
  loremIpsum1: {
    top: 18,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700",
    left: 84
  }
});

export default MapButtonClosed;
