import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import DropDown from "../components/DropDown";
import HeaderBarLight from "../components/HeaderBarLight";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function Address(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textColumn}>
        <Text style={styles.text}>
          Guests will only receive exact address once they have booked your stay
        </Text>
        <Text style={styles.country}>Country</Text>
        <View style={styles.streetAddressStack}>
          <Text style={styles.streetAddress}>Street Address</Text>
          <TextInput
            placeholder="e.g. 770 Eastern Parkway"
            placeholderTextColor="rgba(177,177,177,1)"
            autoFocus={true}
            style={styles.textInput8}
          ></TextInput>
        </View>
        <View style={styles.apartmentNoSuiteStack}>
          <Text style={styles.apartmentNoSuite}>Apartment No./Suite</Text>
          <TextInput
            placeholder="e.g. Apartment 1"
            placeholderTextColor="rgba(177,177,177,1)"
            autoFocus={true}
            style={styles.textInput9}
          ></TextInput>
        </View>
        <Text style={styles.city}>City</Text>
        <Text style={styles.stateOptional}>State (optional)</Text>
        <Text style={styles.postalCode}>Postal Code</Text>
        <Text style={styles.loremIpsum1}>
          Enter your Stay&#39;s Full Address
        </Text>
        <View style={styles.neighbourhoodStack}>
          <Text style={styles.neighbourhood}>Neighbourhood</Text>
          <TextInput
            placeholder="e.g. Crown Heights"
            placeholderTextColor="rgba(177,177,177,1)"
            autoFocus={true}
            style={styles.textInput13}
          ></TextInput>
        </View>
        <TextInput
          placeholder="e.g. Brookyn "
          placeholderTextColor="rgba(177,177,177,1)"
          autoFocus={true}
          style={styles.textInput10}
        ></TextInput>
        <TextInput
          placeholder="e.g. New York"
          placeholderTextColor="rgba(177,177,177,1)"
          autoFocus={true}
          style={styles.textInput11}
        ></TextInput>
        <TextInput
          placeholder="e.g. 11213"
          placeholderTextColor="rgba(177,177,177,1)"
          autoFocus={true}
          style={styles.textInput12}
        ></TextInput>
        <DropDown
          textInput1="Users current country"
          style={styles.dropDown}
        ></DropDown>
        <HeaderBarLight
          text2="Stays Address"
          style={styles.headerBarLight}
        ></HeaderBarLight>
      </View>
      <View style={styles.textColumnFiller}></View>
      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet6}
        ></MaterialButtonViolet6>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  text: {
    width: 301,
    height: 30,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginTop: 144,
    marginLeft: 29
  },
  country: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 16,
    marginLeft: 29
  },
  streetAddress: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  textInput8: {
    top: 14,
    left: 1,
    width: 346,
    height: 50,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular"
  },
  streetAddressStack: {
    width: 347,
    height: 64,
    marginTop: 66,
    marginLeft: 28
  },
  apartmentNoSuite: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  textInput9: {
    top: 16,
    left: 1,
    width: 346,
    height: 50,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular"
  },
  apartmentNoSuiteStack: {
    width: 347,
    height: 66,
    marginTop: 13,
    marginLeft: 28
  },
  city: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 12,
    marginLeft: 28
  },
  stateOptional: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 63,
    marginLeft: 28
  },
  postalCode: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 64,
    marginLeft: 28
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -495,
    marginLeft: 29
  },
  neighbourhood: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  textInput13: {
    top: 16,
    left: 1,
    width: 346,
    height: 50,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular"
  },
  neighbourhoodStack: {
    width: 347,
    height: 66,
    marginTop: 542,
    marginLeft: 28
  },
  textInput10: {
    width: 346,
    height: 50,
    color: "rgba(177,177,177,1)",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular",
    marginTop: -300,
    marginLeft: 29
  },
  textInput11: {
    width: 346,
    height: 50,
    color: "rgba(177,177,177,1)",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular",
    marginTop: 33,
    marginLeft: 29
  },
  textInput12: {
    width: 346,
    height: 50,
    color: "rgba(177,177,177,1)",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular",
    marginTop: 34,
    marginLeft: 29
  },
  dropDown: {
    width: 280,
    height: 41,
    marginTop: -448,
    marginLeft: 28
  },
  headerBarLight: {
    height: 91,
    marginTop: -261
  },
  textColumn: {
    marginTop: -3,
    marginLeft: -8,
    marginRight: -4
  },
  textColumnFiller: {
    flex: 1
  },
  materialButtonWithVioletText1: {
    height: 36,
    opacity: 0.46,
    flex: 1,
    marginRight: 3,
    marginBottom: 4
  },
  materialButtonViolet6: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText1Row: {
    height: 45,
    flexDirection: "row",
    marginBottom: 50,
    marginLeft: 180,
    marginRight: 15
  }
});

export default Address;
