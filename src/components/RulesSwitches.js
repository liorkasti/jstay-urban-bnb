import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";

function RulesSwitches(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.whatAmenities1}>Add guidelines for guests</Text>
      <Text style={styles.petsAllowed1}>Suitable for students</Text>
      <Text style={styles.loremIpsum}>Suitable for children (ages 2-13)</Text>
      <Text style={styles.loremIpsum2}>Suitable for infants (under 2 yrs)</Text>
      <Text style={styles.smokingAllowed}>Smoking allowed</Text>
      <Text style={styles.loremIpsum4}>Suitable for large families (7+)</Text>
      <Text style={styles.loremIpsum5}>Suitable for hosting meals</Text>
      <Text style={styles.loremIpsum6}>Guests must clean before leaving</Text>
      <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
      <MaterialSwitch1 style={styles.materialSwitch3}></MaterialSwitch1>
      <MaterialSwitch1 style={styles.materialSwitch4}></MaterialSwitch1>
      <MaterialSwitch1 style={styles.materialSwitch5}></MaterialSwitch1>
      <MaterialSwitch1 style={styles.materialSwitch6}></MaterialSwitch1>
      <MaterialSwitch1 style={styles.materialSwitch7}></MaterialSwitch1>
      <MaterialSwitch1 style={styles.materialSwitch8}></MaterialSwitch1>
      <Text style={styles.petsAllowed2}>Pets allowed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  whatAmenities1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 11,
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  petsAllowed1: {
    top: 71,
    left: 0,
    width: "87.19%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum: {
    top: 106,
    left: 0,
    width: "78.04%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum2: {
    top: 139,
    left: 0,
    width: "87.22%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  smokingAllowed: {
    top: 251,
    left: 0,
    width: "86.95%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum4: {
    top: 176,
    left: 0,
    width: "73.99%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum5: {
    top: 214,
    left: 0,
    width: "86.95%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum6: {
    top: 286,
    left: 0,
    width: "81.28%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSwitch1: {
    top: 34,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  materialSwitch2: {
    top: 69,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  materialSwitch3: {
    top: 104,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  materialSwitch4: {
    top: 139,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  materialSwitch5: {
    top: 174,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  materialSwitch6: {
    top: 244,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  materialSwitch7: {
    top: 284,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  materialSwitch8: {
    top: 314,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  petsAllowed2: {
    top: 36,
    left: 0,
    width: "81.28%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  }
});

export default RulesSwitches;
