import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSlider1 from "./MaterialSlider1";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialRadio6 from "./MaterialRadio6";
import MaterialButtonWithVioletText56 from "./MaterialButtonWithVioletText56";
import CupertinoStepper1 from "./CupertinoStepper1";

function SearchDropdown(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect10}></View>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.checkIn}>Check-In</Text>
        <TouchableOpacity style={styles.button9}>
          <FontAwesomeIcon
            name="calendar-o"
            style={styles.icon4}
          ></FontAwesomeIcon>
        </TouchableOpacity>
        <Text style={styles.january1}>January</Text>
        <Text style={styles.january3}>02</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button10}>
        <Text style={styles.checkOut2}>Check-Out</Text>
        <TouchableOpacity style={styles.button102}>
          <FontAwesomeIcon
            name="calendar-o"
            style={styles.icon53}
          ></FontAwesomeIcon>
        </TouchableOpacity>
        <Text style={styles.january2}>January</Text>
        <Text style={styles.january4}>21</Text>
      </TouchableOpacity>
      <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
      <Text style={styles.budget1}>Whats your max budget?</Text>
      <Text style={styles.dates1}>Travel dates</Text>
      <EntypoIcon name="chevron-small-down" style={styles.icon6}></EntypoIcon>
      <TouchableOpacity style={styles.button103}>
        <Text style={styles.dates12}>Stay type</Text>
      </TouchableOpacity>
      <MaterialSlider1 style={styles.materialSlider2}></MaterialSlider1>
      <TextInput placeholder="0" style={styles.textInput1}></TextInput>
      <TextInput placeholder="0" style={styles.textInput2}></TextInput>
      <Text style={styles.loremIpsum1}>$</Text>
      <Text style={styles.howManyGuests1}>How many guests?</Text>
      <MaterialRadio6 style={styles.materialRadio1}></MaterialRadio6>
      <Text style={styles.kosherStandard}>Kosher (standard)</Text>
      <MaterialRadio6 style={styles.materialRadio2}></MaterialRadio6>
      <Text style={styles.neighbourhood}>Neighbourhood</Text>
      <Text style={styles.text3}>Within a local Jewish community</Text>
      <MaterialRadio6 style={styles.materialRadio3}></MaterialRadio6>
      <Text style={styles.kosherStrictly}>Kosher (strictly)</Text>
      <Text style={styles.listedAsKosher1}>
        Available to strictly kosher guests only
      </Text>
      <View style={styles.rect1}></View>
      <EntypoIcon name="man" style={styles.icon7}></EntypoIcon>
      <MaterialButtonWithVioletText56
        style={styles.materialButtonWithVioletText56}
      ></MaterialButtonWithVioletText56>
      <CupertinoStepper1
        text1=""
        style={styles.cupertinoStepper1}
      ></CupertinoStepper1>
      <CupertinoStepper1
        text1=""
        style={styles.cupertinoStepper2}
      ></CupertinoStepper1>
      <Text style={styles.beds}>Beds</Text>
      <Text style={styles.bedrooms}>Bedrooms</Text>
      <Text style={styles.text4}>
        Listed as Kosher but may host non-kosher users too
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect10: {
    top: 0,
    left: 0,
    height: 345,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 0,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button1: {
    top: 74,
    left: 11,
    width: 54,
    height: 62,
    position: "absolute"
  },
  checkIn: {
    top: 48,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button9: {
    top: 0,
    left: 6,
    width: 41,
    height: 45,
    position: "absolute"
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 45
  },
  january1: {
    top: 20,
    left: 11,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    textDecorationLine: "underline"
  },
  january3: {
    top: 30,
    left: 21,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button10: {
    top: 75,
    left: 75,
    width: 64,
    height: 61,
    position: "absolute"
  },
  checkOut2: {
    top: 47,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button102: {
    top: 0,
    left: 12,
    width: 46,
    height: 45,
    position: "absolute"
  },
  icon53: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 45
  },
  january2: {
    top: 20,
    left: 16,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    textDecorationLine: "underline"
  },
  january4: {
    top: 30,
    left: 29,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  materialSlider1: {
    top: 204,
    left: 13,
    height: 21,
    position: "absolute",
    right: 229
  },
  budget1: {
    top: 164,
    left: 13,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700",
    right: 201
  },
  dates1: {
    top: 54,
    left: "3.14%",
    width: 160,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  icon6: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35,
    left: 86
  },
  button103: {
    top: 8,
    left: 11,
    height: 20,
    position: "absolute",
    right: 319
  },
  dates12: {
    top: 0,
    left: "0%",
    width: 94,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  materialSlider2: {
    top: 269,
    left: 13,
    height: 21,
    position: "absolute",
    right: 229
  },
  textInput1: {
    top: 254,
    left: "53.41%",
    width: 47,
    height: 28,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput2: {
    top: 189,
    left: "53.41%",
    width: 47,
    height: 28,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  loremIpsum1: {
    top: 196,
    left: "50.07%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  howManyGuests1: {
    top: 236,
    left: "3.03%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  materialRadio1: {
    top: 0,
    left: "42.31%",
    width: 40,
    height: 40,
    position: "absolute"
  },
  kosherStandard: {
    top: 9,
    left: "52.69%",
    width: 148,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  materialRadio2: {
    top: 109,
    left: "42.57%",
    width: 40,
    height: 40,
    position: "absolute"
  },
  neighbourhood: {
    top: 118,
    left: "52.66%",
    width: 140,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  text3: {
    top: 139,
    width: "36.34%",
    height: 28,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: "11%",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  materialRadio3: {
    top: 55,
    left: "42.57%",
    width: 40,
    height: 40,
    position: "absolute"
  },
  kosherStrictly: {
    top: "18.48%",
    left: "52.97%",
    width: 142,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  listedAsKosher1: {
    top: 82,
    left: "53.41%",
    width: "40.19%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  rect1: {
    top: 9,
    left: "39.28%",
    width: 1,
    height: 132,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  icon7: {
    top: 260,
    left: "48.77%",
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 17
  },
  materialButtonWithVioletText56: {
    top: 301,
    left: 20,
    width: 150,
    height: 36,
    position: "absolute"
  },
  cupertinoStepper1: {
    top: 211,
    left: "70.89%",
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10
  },
  cupertinoStepper2: {
    top: 275,
    left: "70.89%",
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10
  },
  beds: {
    top: 184,
    left: "77.34%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  bedrooms: {
    top: 250,
    left: "72.24%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  text4: {
    top: 26,
    left: "53.41%",
    width: 166,
    height: 28,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default SearchDropdown;
