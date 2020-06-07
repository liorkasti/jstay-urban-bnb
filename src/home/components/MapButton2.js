import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import DragableMap from "./DragableMap";

function MapButton2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress} style={styles.button55}>
        <DragableMap style={styles.dragableMap}></DragableMap>
        <Text style={styles.loremIpsum3}>Find Stays With Map View</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button55: {
    left: 0,
    height: 60,
    position: "absolute",
    bottom: 0,
    right: 0
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
    fontFamily: "roboto-regular",
    right: "20.75%"
  }
});

export default MapButton2;
