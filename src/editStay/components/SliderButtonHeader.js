import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";

function SliderButtonHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialSwitch3Stack}>
        <MaterialSwitch1 style={styles.materialSwitch3}></MaterialSwitch1>
        <View style={styles.meetAndGreetStack}>
          <Text style={styles.meetAndGreet}>
            {props.text2 || "Meet and greet"}
          </Text>
          <Text style={styles.pricesFluctuate3}>
            {props.text1 ||
              "Somebody will greet guests when they arrive to let them in"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialSwitch3: {
    top: 0,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  meetAndGreet: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  pricesFluctuate3: {
    top: 23,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  meetAndGreetStack: {
    top: 2,
    left: 0,
    width: 297,
    height: 56,
    position: "absolute"
  },
  materialSwitch3Stack: {
    width: 335,
    height: 58
  }
});

export default SliderButtonHeader;
