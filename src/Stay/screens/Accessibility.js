import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import LargeTextInput from "../components/LargeTextInput";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import Icon from "react-native-vector-icons/Entypo";

function Accessibility(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wheelchairAccesableStackStack}>
        <View style={styles.wheelchairAccesableStack}>
          <Text style={styles.wheelchairAccesable}>Wheelchair accessible</Text>
          <Text style={styles.text1}>My stay has wheelchair access</Text>
        </View>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      </View>
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
      <Text style={styles.guestsMustKno1}>Guests must know before booking</Text>
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
      <View style={styles.materialButtonWithVioletText2Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText2Filler}></View>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.text4}>Accessibility</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image1Filler}></View>
              <Image
                source={require("../assets/images/jstay-icon-inverted8.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
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
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  text1: {
    top: 23,
    left: 0,
    width: 330,
    height: 17,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  wheelchairAccesableStack: {
    top: 2,
    left: 0,
    width: 330,
    height: 40,
    position: "absolute"
  },
  materialSwitch1: {
    top: 0,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  wheelchairAccesableStackStack: {
    width: 356,
    height: 42,
    marginTop: 575,
    marginLeft: 24
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
    marginTop: 44,
    marginLeft: 24
  },
  tellUsMore: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -158,
    marginLeft: 24
  },
  largeTextInput: {
    width: 364,
    height: 132,
    marginTop: -494,
    marginLeft: 24
  },
  guestsMustKno1: {
    width: 310,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -190,
    marginLeft: 24
  },
  text3: {
    width: 330,
    height: 17,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1,
    marginLeft: 24
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
    marginLeft: 24
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
    marginLeft: 23,
    marginRight: 34
  },
  tellUsMore1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 24,
    marginLeft: 25
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    marginTop: 6
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet4: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 422,
    marginLeft: 159,
    marginRight: 20
  },
  group1: {
    height: 91,
    marginTop: -868
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 13,
    marginRight: 38
  },
  button4: {
    width: 29,
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  text4: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 100,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 10
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row"
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4RowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  }
});

export default Accessibility;
