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
    flex: 1
  }
});

export default DragablePinMap;
