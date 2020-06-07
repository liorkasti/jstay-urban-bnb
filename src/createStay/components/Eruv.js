import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";
import MaterialSwitch1 from "./MaterialSwitch1";

function Eruv(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.button12Stack}>
        <TouchableOpacity style={styles.button12}>
          <View style={styles.materialCheckbox3682Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox3682}
            ></MaterialCheckbox1>
            <Text style={styles.localEruv}>Local Eruv</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum15}>
          There is an eruv around my local area
        </Text>
      </View>
      <View style={styles.button13Stack}>
        <TouchableOpacity style={styles.button13}>
          <View style={styles.materialCheckbox3692Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox3692}
            ></MaterialCheckbox1>
            <Text style={styles.eruvOnProperty}>Eruv on property</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum16}>
          My stay is an surrounded by an eruv
        </Text>
      </View>
      <View style={styles.eruv2Row}>
        <Text style={styles.eruv2}>Eruv</Text>
        <View style={styles.eruv2Filler}></View>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      </View>
      <Text style={styles.loremIpsum17}>
        A border that permits carrying on Shabbat {"\n"}and holidays
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button12: {
    top: 0,
    left: 0,
    height: 44,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox3682: {
    width: 40,
    height: 40
  },
  localEruv: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox3682Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 212
  },
  loremIpsum15: {
    top: 33,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button12Stack: {
    height: 50,
    marginTop: 61
  },
  button13: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox3692: {
    width: 40,
    height: 40
  },
  eruvOnProperty: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox3692Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 157
  },
  loremIpsum16: {
    top: 33,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button13Stack: {
    height: 50,
    marginRight: 1
  },
  eruv2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  eruv2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  eruv2Row: {
    height: 27,
    flexDirection: "row",
    marginTop: -161,
    marginLeft: 9,
    marginRight: 14
  },
  loremIpsum17: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 9
  }
});

export default Eruv;
