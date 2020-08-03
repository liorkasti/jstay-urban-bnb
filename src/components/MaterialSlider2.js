import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Slider from '@react-native-community/slider';

function MaterialSlider2(props) {
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
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  slider: {}
});

export default MaterialSlider2;
