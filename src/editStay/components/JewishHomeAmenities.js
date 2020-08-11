import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function JewishHomeAmenities(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.jewishHomeRow}>
        <Text style={styles.jewishHome}>Jewish Home</Text>
        <View style={styles.jewishHomeFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      </View>
      <View style={styles.button34StackStack}>
        <View style={styles.button34Stack}>
          <TouchableOpacity style={styles.button34}>
            <View style={styles.mezuzotStack}>
              <Text style={styles.mezuzot}>Mezuzot</Text>
              <MaterialCheckbox1
                style={styles.materialCheckbox40}
              ></MaterialCheckbox1>
              <Text style={styles.loremIpsum13}></Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum32}>
            My stay has mezuzot fixed to doorways
          </Text>
          <Text style={styles.loremIpsum49}>
            Seperate-able beds in the master bedroom
          </Text>
        </View>
        <TouchableOpacity style={styles.button35}>
          <View style={styles.materialCheckbox42StackRow}>
            <View style={styles.materialCheckbox42Stack}>
              <MaterialCheckbox1
                style={styles.materialCheckbox42}
              ></MaterialCheckbox1>
              <Text style={styles.loremIpsum47}></Text>
            </View>
            <Text style={styles.charityBox}>Charity Box</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.kosherBedsStack}>
          <Text style={styles.kosherBeds}>Kosher Beds</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox402}
          ></MaterialCheckbox1>
          <Text style={styles.loremIpsum48}></Text>
        </View>
      </View>
      <View style={styles.button36StackStack}>
        <View style={styles.button36Stack}>
          <TouchableOpacity style={styles.button36}>
            <View style={styles.materialCheckbox43Row}>
              <MaterialCheckbox1
                style={styles.materialCheckbox43}
              ></MaterialCheckbox1>
              <Text style={styles.loremIpsum10}>Jewish Reading Material</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum33}>Jewish magazines and books</Text>
        </View>
        <View style={styles.button37Stack}>
          <TouchableOpacity style={styles.button37}>
            <View style={styles.seforimStack}>
              <Text style={styles.seforim}>Seforim</Text>
              <MaterialCheckbox1
                style={styles.materialCheckbox44}
              ></MaterialCheckbox1>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum34}>
            A selection of Jewish study books
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button38}>
        <View style={styles.materialCheckbox45Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox45}
          ></MaterialCheckbox1>
          <Text style={styles.loremIpsum11}>Benchers/Birkat Hamazon</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button39}>
        <View style={styles.siddurStack}>
          <Text style={styles.siddur}>Siddur</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox46}
          ></MaterialCheckbox1>
        </View>
      </TouchableOpacity>
      <View style={styles.button40Stack}>
        <TouchableOpacity style={styles.button40}>
          <View style={styles.materialCheckbox48Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox48}
            ></MaterialCheckbox1>
            <Text style={styles.kosherMeals}>Kosher Meals</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum36}>
          We offer a selection kosher food, free or for a fee
        </Text>
      </View>
      <Text style={styles.myAtay}>My stay has Jewish home options</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  jewishHome: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  jewishHomeFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch1: {
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    width: 52
  },
  jewishHomeRow: {
    height: 24,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 23
  },
  button34: {
    top: 11,
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
  loremIpsum13: {
    top: 30,
    left: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  mezuzotStack: {
    width: 115,
    height: 40
  },
  loremIpsum32: {
    top: 45,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum49: {
    top: 0,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button34Stack: {
    top: 34,
    left: 0,
    width: 273,
    height: 62,
    position: "absolute"
  },
  button35: {
    top: 95,
    left: 0,
    width: 141,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox42: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum47: {
    top: 10,
    left: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox42Stack: {
    width: 40,
    height: 40
  },
  charityBox: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox42StackRow: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  kosherBeds: {
    top: 10,
    left: 38,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox402: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum48: {
    top: 30,
    left: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  kosherBedsStack: {
    top: 0,
    left: 0,
    width: 149,
    height: 40,
    position: "absolute"
  },
  button34StackStack: {
    width: 273,
    height: 135,
    marginTop: 26
  },
  button36: {
    top: 0,
    left: 0,
    width: 258,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox43: {
    width: 40,
    height: 40
  },
  loremIpsum10: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox43Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  loremIpsum33: {
    top: 34,
    left: 9,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button36Stack: {
    top: 0,
    left: 0,
    width: 258,
    height: 51,
    position: "absolute"
  },
  button37: {
    top: 0,
    left: 0,
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
  seforimStack: {
    width: 110,
    height: 40
  },
  loremIpsum34: {
    top: 33,
    left: 11,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button37Stack: {
    top: 50,
    left: 1,
    width: 223,
    height: 50,
    position: "absolute"
  },
  button36StackStack: {
    width: 258,
    height: 100
  },
  button38: {
    width: 274,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox45: {
    width: 40,
    height: 40
  },
  loremIpsum11: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox45Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  button39: {
    width: 96,
    height: 40
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
  siddurStack: {
    width: 96,
    height: 40
  },
  button40: {
    top: 0,
    left: 0,
    width: 161,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox48: {
    width: 40,
    height: 40
  },
  kosherMeals: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox48Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  loremIpsum36: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  button40Stack: {
    height: 51,
    marginRight: 38
  },
  myAtay: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -392,
    marginLeft: 11
  }
});

export default JewishHomeAmenities;
