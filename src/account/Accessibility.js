import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import LargeTextInput from "../components/LargeTextInput";
import HeaderBarLight from "../components/HeaderBarLight";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function Accessibility(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wheelchairAccesableRowColumn}>
        <View style={styles.wheelchairAccesableRow}>
          <Text style={styles.wheelchairAccesable}>Wheelchair accesable</Text>
          <View style={styles.wheelchairAccesableFiller}></View>
          <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
        </View>
        <Text style={styles.text1}>My stay has wheelchair access</Text>
        <TextInput
          placeholder="e.g. There are ramps and elevators but no access to our loft"
          placeholderTextColor="rgba(177,177,177,1)"
          autoCapitalize="sentences"
          autoCorrect={true}
          maxLength={200}
          multiline={true}
          returnKeyType="done"
          inlineImagePadding={0}
          numberOfLines={4}
          returnKeyLabel="Save"
          spellCheck={true}
          style={styles.textInput1}
        ></TextInput>
        <Text style={styles.tellUsMore}>Tell us more</Text>
        <LargeTextInput style={styles.largeTextInput}></LargeTextInput>
        <Text style={styles.guestsMustKno1}>
          Guests must know before booking
        </Text>
        <Text style={styles.text3}>
          Please clearly explain anything that guests should know
        </Text>
        <TextInput
          placeholder="e.g. garden and driveway is shared with others"
          placeholderTextColor="rgba(177,177,177,1)"
          autoCapitalize="sentences"
          autoCorrect={true}
          maxLength={200}
          multiline={true}
          returnKeyType="done"
          inlineImagePadding={0}
          numberOfLines={4}
          returnKeyLabel="Save"
          spellCheck={true}
          style={styles.textInput3}
        ></TextInput>
        <View style={styles.guestsMustKno2Row}>
          <Text style={styles.guestsMustKno2}>Some spaces are shared</Text>
          <View style={styles.guestsMustKno2Filler}></View>
          <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
        </View>
        <Text style={styles.tellUsMore1}>Tell us more</Text>
        <HeaderBarLight
          text2="Accessibilaty"
          style={styles.headerBarLight}
        ></HeaderBarLight>
      </View>
      <View style={styles.wheelchairAccesableRowColumnFiller}></View>
      <View style={styles.materialButtonWithVioletText2Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText2Filler}></View>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet4}
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
  wheelchairAccesable: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 2
  },
  wheelchairAccesableFiller: {
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
  wheelchairAccesableRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 575,
    marginLeft: 31,
    marginRight: 39
  },
  text1: {
    width: 330,
    height: 17,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 31
  },
  textInput1: {
    width: 364,
    height: 132,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left",
    marginTop: 46,
    marginLeft: 31
  },
  tellUsMore: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -158,
    marginLeft: 31
  },
  largeTextInput: {
    width: 364,
    height: 132,
    marginTop: -490,
    marginLeft: 31
  },
  guestsMustKno1: {
    width: 310,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -190,
    marginLeft: 31
  },
  text3: {
    width: 330,
    height: 17,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1,
    marginLeft: 31
  },
  textInput3: {
    width: 364,
    height: 132,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left",
    marginTop: 260,
    marginLeft: 31
  },
  guestsMustKno2: {
    width: 310,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 2
  },
  guestsMustKno2Filler: {
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
  guestsMustKno2Row: {
    height: 23,
    flexDirection: "row",
    marginTop: -207,
    marginLeft: 30,
    marginRight: 39
  },
  tellUsMore1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 24,
    marginLeft: 32
  },
  headerBarLight: {
    height: 91,
    marginTop: -397
  },
  wheelchairAccesableRowColumn: {
    marginLeft: -7,
    marginRight: -5
  },
  wheelchairAccesableRowColumnFiller: {
    flex: 1
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    alignSelf: "flex-end",
    marginBottom: 3
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet4: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    marginBottom: 28,
    marginLeft: 159,
    marginRight: 20
  }
});

export default Accessibility;
