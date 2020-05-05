import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";

function RulesSwitches(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.whatAmenities1}>Add guidlines for guests</Text>
      <View style={styles.petsAllowed1Row}>
        <Text style={styles.petsAllowed1}>Suitable for students</Text>
        <View style={styles.petsAllowed1Filler}></View>
        <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Suitable for children (ages 2-13)</Text>
        <View style={styles.loremIpsumFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch3}></MaterialSwitch1>
      </View>
      <View style={styles.loremIpsum2Row}>
        <Text style={styles.loremIpsum2}>
          Suitable for infants (under 2 yrs)
        </Text>
        <View style={styles.loremIpsum2Filler}></View>
        <MaterialSwitch1 style={styles.materialSwitch4}></MaterialSwitch1>
      </View>
      <View style={styles.smokingAllowedRow}>
        <Text style={styles.smokingAllowed}>Smoking allowed</Text>
        <View style={styles.smokingAllowedFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch7}></MaterialSwitch1>
      </View>
      <View style={styles.loremIpsum4Row}>
        <Text style={styles.loremIpsum4}>Suitable for large families (7+)</Text>
        <View style={styles.loremIpsum4Filler}></View>
        <MaterialSwitch1 style={styles.materialSwitch5}></MaterialSwitch1>
      </View>
      <View style={styles.loremIpsum5Row}>
        <Text style={styles.loremIpsum5}>Suitable for hosting meal</Text>
        <View style={styles.loremIpsum5Filler}></View>
        <MaterialSwitch1 style={styles.materialSwitch6}></MaterialSwitch1>
      </View>
      <View style={styles.loremIpsum6Row}>
        <Text style={styles.loremIpsum6}>Gusts must clean before leaving</Text>
        <View style={styles.loremIpsum6Filler}></View>
        <MaterialSwitch1 style={styles.materialSwitch8}></MaterialSwitch1>
      </View>
      <View style={styles.petsAllowed2Row}>
        <Text style={styles.petsAllowed2}>Pets allowed</Text>
        <View style={styles.petsAllowed2Filler}></View>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  whatAmenities1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginRight: 11
  },
  petsAllowed1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  petsAllowed1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch2: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  petsAllowed1Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 49
  },
  loremIpsum: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  loremIpsumFiller: {
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
  loremIpsumRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 12
  },
  loremIpsum2: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch4: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum2Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 12
  },
  smokingAllowed: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  smokingAllowedFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch7: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  smokingAllowedRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 82
  },
  loremIpsum4: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  loremIpsum4Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch5: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum4Row: {
    height: 23,
    flexDirection: "row",
    marginTop: -93
  },
  loremIpsum5: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum5Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch6: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum5Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 12
  },
  loremIpsum6: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  loremIpsum6Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch8: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum6Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 47
  },
  petsAllowed2: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  petsAllowed2Filler: {
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
  petsAllowed2Row: {
    height: 23,
    flexDirection: "row",
    marginTop: -268
  }
});

export default RulesSwitches;
