import React, { Component } from "react";
import { StyleSheet, View, Slider } from "react-native";

function MaterialSlider1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        thumbTintColor="#3F51B5"
        minimumTrackTintColor="#3F51B5"
        maximumTrackTintColor="#9E9E9E"
        style={styles.slider}
      ></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0
  },
  slider: {}
});

export default MaterialSlider1;
