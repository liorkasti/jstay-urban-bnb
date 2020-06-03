import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MyLocation from "./MyLocation";

function MyLocationDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MyLocation style={styles.myLocation}></MyLocation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  myLocation: {
    height: 25,
    width: 185,
    marginTop: 4
  }
});

export default MyLocationDetails;
