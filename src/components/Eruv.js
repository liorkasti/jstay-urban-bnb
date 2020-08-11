import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";
import MaterialSwitch1 from "./MaterialSwitch1";

function Eruv(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button12}>
        <Text style={styles.localEruv}>Local Eruv</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox3682}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button13}>
        <Text style={styles.eruvOnProperty}>Eruv on property</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox3692}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum15}>
        There is an eruv around my local area
      </Text>
      <Text style={styles.loremIpsum16}>
        My stay is an surrounded by an eruv
      </Text>
      <Text style={styles.eruv2}>Eruv</Text>
      <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      <Text style={styles.loremIpsum17}>
        A border that permits carrying on Shabbat {"\n"}and holidays
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button12: {
    top: 61,
    left: 0,
    height: "27.07%",
    position: "absolute",
    right: 0
  },
  localEruv: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox3682: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button13: {
    top: 111,
    left: 0,
    height: 40,
    position: "absolute",
    right: 1
  },
  eruvOnProperty: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox3692: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum15: {
    top: 94,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum16: {
    top: 144,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  eruv2: {
    top: 3,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSwitch1: {
    top: 0,
    width: 45,
    height: 23,
    position: "absolute",
    right: 14,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum17: {
    top: 27,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default Eruv;
