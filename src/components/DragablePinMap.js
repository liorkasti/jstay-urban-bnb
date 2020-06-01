import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import DragableMap from "./DragableMap";

function DragablePinMap(props) {
  return (
    <View style={[styles.container, props.style]}>
      <DragableMap style={styles.dragableMap}></DragableMap>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  dragableMap: {
    top: "0%",
    left: 0,
    height: "100%",
    position: "absolute",
    right: 0
  }
});

export default DragablePinMap;
