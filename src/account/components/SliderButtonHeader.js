import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";

function SliderButtonHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.meetAndGreetRow}>
        <Text style={styles.meetAndGreet}>
          {props.text2 || "Meet and greet"}
        </Text>
        <View style={styles.meetAndGreetFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch3}></MaterialSwitch1>
      </View>
      <Text style={styles.pricesFluctuate3}>
        {props.text1 ||
          "Somebody will grret guests when they arive to let them in"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  meetAndGreet: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 2
  },
  meetAndGreetFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch3: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  meetAndGreetRow: {
    height: 23,
    flexDirection: "row"
  },
  pricesFluctuate3: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 2
  }
});

export default SliderButtonHeader;
