import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import DragableMap from "./DragableMap";

function MapButtonClosed(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.dragableMapStack}>
        <DragableMap style={styles.dragableMap}></DragableMap>
        <TouchableOpacity onPress={props.onPress} style={styles.button6}>
          <View style={styles.dragableMap1Stack}>
            <DragableMap style={styles.dragableMap1}></DragableMap>
            <Text style={styles.loremIpsum1}>Find Stays With Map View</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  dragableMap: {
    position: "absolute",
    left: 0,
    height: 60,
    right: 3,
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
    fontFamily: "roboto-regular",
    left: 84
  },
  dragableMap1Stack: {
    width: 405,
    height: 60
  },
  dragableMapStack: {
    height: 60
  }
});

export default MapButtonClosed;
