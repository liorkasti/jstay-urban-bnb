import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function SafetyAmenities(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button29}>
        <Text style={styles.fireExtinguisher}>Fire Extinguisher</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox3410}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.text}>Safety Amenities</Text>
      <TouchableOpacity style={styles.button31}>
        <Text style={styles.smokeDetector}>Smoke Detector</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox37}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button32}>
        <Text style={styles.loremIpsum7}>Carbon Monoxide Detector</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox38}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button30}>
        <Text style={styles.fireEscape}>Fire Escape</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox3593}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button33}>
        <Text style={styles.firstAidKit}>First Aid Kit</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox39}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum9}>
        Check your local laws, which may require a working{"\n"}
        detector/extinguisher in every room/stay
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button29: {
    top: 64,
    left: 0,
    width: "99.99%",
    height: 40,
    position: "absolute"
  },
  fireExtinguisher: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox3410: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  text: {
    top: 0,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button31: {
    top: 144,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  smokeDetector: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox37: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button32: {
    top: 184,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  loremIpsum7: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox38: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button30: {
    top: 104,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  fireEscape: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox3593: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button33: {
    top: 224,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  firstAidKit: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox39: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum9: {
    top: 24,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default SafetyAmenities;
