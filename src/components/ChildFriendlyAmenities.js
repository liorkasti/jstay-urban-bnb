import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function ChildFriendlyAmenities(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.childFriendly}>Child Friendly</Text>
      <TouchableOpacity style={styles.button1009}>
        <Text style={styles.barsOnWindows}>Bars on Windows</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox372}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1013}>
        <MaterialCheckbox1
          style={styles.materialCheckbox382}
        ></MaterialCheckbox1>
        <Text style={styles.highchair}>Highchair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1011}>
        <MaterialCheckbox1
          style={styles.materialCheckbox34102}
        ></MaterialCheckbox1>
        <Text style={styles.crib}>Crib</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1012}>
        <Text style={styles.stairwellGate}>Stairwell Gate</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox35932}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1014}>
        <Text style={styles.carSeat2}>Car Seat</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox392}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum73}>
        Please select what extras you provide to guests traveling with children
      </Text>
      <TouchableOpacity style={styles.button1015}>
        <Text style={styles.carSeat1}>Child Friendly Games/Toys</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox35933}
        ></MaterialCheckbox1>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  childFriendly: {
    top: 0,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button1009: {
    top: 144,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  barsOnWindows: {
    top: 10,
    left: 40,
    width: 320,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox372: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1013: {
    top: 184,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  materialCheckbox382: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  highchair: {
    top: 10,
    left: 40,
    height: 20,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 0,
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button1011: {
    top: 64,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  materialCheckbox34102: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  crib: {
    top: 10,
    left: 40,
    height: 20,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 0,
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button1012: {
    top: 104,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  stairwellGate: {
    top: 10,
    left: 40,
    width: 320,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox35932: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1014: {
    top: 224,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  carSeat2: {
    top: 10,
    left: 40,
    width: "88.89%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox392: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum73: {
    top: 25,
    left: 10,
    width: 350,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button1015: {
    top: 263,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0
  },
  carSeat1: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 44,
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox35933: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  }
});

export default ChildFriendlyAmenities;
