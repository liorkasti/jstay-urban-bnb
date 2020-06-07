import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";
import MaterialSwitch1 from "./MaterialSwitch1";

function JewishHomeAmenities(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.jewishHome}>Jewish Home</Text>
      <TouchableOpacity style={styles.button34}>
        <Text style={styles.mezuzot}>Mezuzot</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox40}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button35}>
        <Text style={styles.charityBox}>Charity Box</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox42}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button36}>
        <Text style={styles.loremIpsum10}>Jewish Reading Material</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox43}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button37}>
        <Text style={styles.seforim}>Seforim</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox44}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button38}>
        <Text style={styles.loremIpsum11}>Benchers/Birkat Hamazon</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox45}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button39}>
        <Text style={styles.siddur}>Siddur</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox46}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button40}>
        <Text style={styles.kosherMeals}>Kosher Meals</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox48}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum13}></Text>
      <Text style={styles.loremIpsum32}>
        My stay has mezuzot fixed to doorways
      </Text>
      <Text style={styles.loremIpsum33}>Jewish magazines and books</Text>
      <Text style={styles.loremIpsum34}>A selection of Jewish study books</Text>
      <Text style={styles.loremIpsum36}>
        We offer a selection kosher food, free or for a fee
      </Text>
      <Text style={styles.loremIpsum47}></Text>
      <Text style={styles.kosherBeds}>Kosher Beds</Text>
      <MaterialCheckbox1 style={styles.materialCheckbox402}></MaterialCheckbox1>
      <Text style={styles.loremIpsum48}></Text>
      <Text style={styles.loremIpsum49}>
        Seperate-able beds in the master bedroom
      </Text>
      <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      <Text style={styles.myAtay}>My stay has Jewish home options</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  jewishHome: {
    top: 0,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button34: {
    top: 95,
    left: 0,
    width: 115,
    height: 40,
    position: "absolute"
  },
  mezuzot: {
    top: 10,
    left: 38,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox40: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button35: {
    top: 145,
    left: 0,
    width: 141,
    height: 40,
    position: "absolute"
  },
  charityBox: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox42: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button36: {
    top: 185,
    left: 0,
    width: 258,
    height: 40,
    position: "absolute"
  },
  loremIpsum10: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox43: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button37: {
    top: 235,
    left: 1,
    width: 109,
    height: 40,
    position: "absolute"
  },
  seforim: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox44: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button38: {
    top: 285,
    left: 0,
    width: 274,
    height: 40,
    position: "absolute"
  },
  loremIpsum11: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox45: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button39: {
    top: 325,
    left: 0,
    width: 96,
    height: 40,
    position: "absolute"
  },
  siddur: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox46: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button40: {
    top: 365,
    left: 0,
    width: 161,
    height: 40,
    position: "absolute"
  },
  kosherMeals: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox48: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum13: {
    top: 125,
    left: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum32: {
    top: 129,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum33: {
    top: 219,
    left: 9,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum34: {
    top: 268,
    left: 12,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum36: {
    top: 399,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 37
  },
  loremIpsum47: {
    top: 155,
    left: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  kosherBeds: {
    top: 60,
    left: 38,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox402: {
    top: 50,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum48: {
    top: 80,
    left: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum49: {
    top: 84,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  materialSwitch1: {
    top: 0,
    left: "80.47%",
    height: 23,
    position: "absolute",
    right: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  myAtay: {
    top: 24,
    left: 11,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default JewishHomeAmenities;
