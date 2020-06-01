import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialSlider1 from "./MaterialSlider1";
import MaterialButtonWithVioletText56 from "./MaterialButtonWithVioletText56";
import MaterialRadio6 from "./MaterialRadio6";
import CupertinoStepper1 from "./CupertinoStepper1";

function SearchDropdown(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect10}>
        <View style={styles.button1StackStackStackRow}>
          <View style={styles.button1StackStackStack}>
            <View style={styles.button1StackStack}>
              <View style={styles.button1Stack}>
                <TouchableOpacity style={styles.button1}>
                  <TouchableOpacity style={styles.button9}>
                    <View style={styles.icon4Stack}>
                      <FontAwesomeIcon
                        name="calendar-o"
                        style={styles.icon4}
                      ></FontAwesomeIcon>
                      <Text style={styles.january1}>January</Text>
                      <Text style={styles.january3}>02</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.checkIn}>Check-In</Text>
                </TouchableOpacity>
                <View style={styles.dates1Stack}>
                  <Text style={styles.dates1}>Travel dates</Text>
                  <View style={styles.rect1}></View>
                </View>
                <View style={styles.icon6Stack}>
                  <EntypoIcon
                    name="chevron-small-down"
                    style={styles.icon6}
                  ></EntypoIcon>
                  <TouchableOpacity style={styles.button103}>
                    <Text style={styles.dates12}>Stay type</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.button10}>
                <TouchableOpacity style={styles.button102}>
                  <View style={styles.icon53Stack}>
                    <FontAwesomeIcon
                      name="calendar-o"
                      style={styles.icon53}
                    ></FontAwesomeIcon>
                    <Text style={styles.january2}>January</Text>
                    <Text style={styles.january4}>21</Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.checkOut2}>Check-Out</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.materialSlider1Stack}>
              <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
              <Text style={styles.budget1}>Whats your max budget?</Text>
              <Text style={styles.loremIpsum1}>$</Text>
            </View>
            <Text style={styles.howManyGuests1}>How many guests?</Text>
            <MaterialSlider1 style={styles.materialSlider2}></MaterialSlider1>
            <MaterialButtonWithVioletText56
              style={styles.materialButtonWithVioletText56}
            ></MaterialButtonWithVioletText56>
            <MaterialRadio6 style={styles.materialRadio1}></MaterialRadio6>
            <MaterialRadio6 style={styles.materialRadio2}></MaterialRadio6>
            <MaterialRadio6 style={styles.materialRadio3}></MaterialRadio6>
            <EntypoIcon name="man" style={styles.icon7}></EntypoIcon>
            <View style={styles.kosherStandardStack}>
              <Text style={styles.kosherStandard}>Kosher (standard)</Text>
              <Text style={styles.text4}>
                Listed as Kosher but may host non-kosher users too
              </Text>
            </View>
            <Text style={styles.neighbourhood}>Neighbourhood</Text>
            <Text style={styles.text3}>Within a local Jewish community</Text>
            <View style={styles.kosherStrictlyStack}>
              <Text style={styles.kosherStrictly}>Kosher (strictly)</Text>
              <Text style={styles.listedAsKosher1}>
                Available to strictly kosher guests only
              </Text>
            </View>
            <TextInput placeholder="0" style={styles.textInput2}></TextInput>
            <CupertinoStepper1
              text1=""
              style={styles.cupertinoStepper1}
            ></CupertinoStepper1>
            <Text style={styles.beds}>Beds</Text>
            <TextInput placeholder="0" style={styles.textInput1}></TextInput>
            <Text style={styles.bedrooms}>Bedrooms</Text>
            <CupertinoStepper1
              text1=""
              style={styles.cupertinoStepper2}
            ></CupertinoStepper1>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect10: {
    height: 345,
    backgroundColor: "rgba(2,172,235,1)",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button1: {
    top: 74,
    left: 0,
    width: 54,
    height: 62,
    position: "absolute"
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
    left: 5,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    textDecorationLine: "underline"
  },
  january3: {
    top: 30,
    left: 15,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  icon4Stack: {
    top: 0,
    left: 0,
    width: 42,
    height: 45,
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
  dates1: {
    top: 45,
    left: 0,
    width: 160,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  rect1: {
    top: 0,
    left: 149,
    width: 1,
    height: 132,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  dates1Stack: {
    top: 9,
    left: 2,
    width: 160,
    height: 132,
    position: "absolute"
  },
  icon6: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35,
    left: 75,
    height: 38,
    width: 36
  },
  button103: {
    top: 8,
    left: 0,
    height: 20,
    position: "absolute",
    right: 29
  },
  dates12: {
    top: 0,
    left: 0,
    width: 94,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  icon6Stack: {
    top: 0,
    left: 0,
    height: 38,
    position: "absolute",
    right: 51
  },
  button1Stack: {
    top: 0,
    left: 0,
    height: 141,
    position: "absolute",
    right: 0
  },
  button10: {
    top: 75,
    left: 64,
    width: 64,
    height: 61,
    position: "absolute"
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
    left: 4,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-700",
    textDecorationLine: "underline"
  },
  january4: {
    top: 30,
    left: 17,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  icon53Stack: {
    top: 0,
    left: 0,
    width: 42,
    height: 45,
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
  button1StackStack: {
    top: 0,
    left: 0,
    height: 141,
    position: "absolute",
    right: 213
  },
  materialSlider1: {
    top: 40,
    left: 0,
    height: 21,
    position: "absolute",
    right: 30
  },
  budget1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700",
    right: 1
  },
  loremIpsum1: {
    top: 32,
    left: 193,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  materialSlider1Stack: {
    top: 164,
    left: 2,
    height: 61,
    position: "absolute",
    right: 172
  },
  howManyGuests1: {
    top: 236,
    left: 2,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  materialSlider2: {
    top: 269,
    left: 2,
    height: 21,
    position: "absolute",
    right: 202
  },
  materialButtonWithVioletText56: {
    top: 301,
    left: 9,
    width: 150,
    height: 36,
    position: "absolute"
  },
  materialRadio1: {
    top: 0,
    left: 163,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialRadio2: {
    top: 109,
    left: 165,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialRadio3: {
    top: 55,
    left: 165,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon7: {
    top: 260,
    left: 190,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 17,
    height: 18,
    width: 17
  },
  kosherStandard: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  text4: {
    top: 17,
    left: 3,
    width: 166,
    height: 28,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  kosherStandardStack: {
    top: 9,
    left: 206,
    width: 169,
    height: 45,
    position: "absolute"
  },
  neighbourhood: {
    top: 118,
    left: 206,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  text3: {
    top: 139,
    width: 150,
    height: 28,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 19,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  kosherStrictly: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  listedAsKosher1: {
    top: 18,
    left: 2,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  kosherStrictlyStack: {
    top: 64,
    left: 207,
    width: 167,
    height: 51,
    position: "absolute"
  },
  textInput2: {
    top: 189,
    left: 209,
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
  cupertinoStepper1: {
    top: 211,
    left: 281,
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10
  },
  beds: {
    top: 184,
    left: 308,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  textInput1: {
    top: 254,
    left: 209,
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
  bedrooms: {
    top: 250,
    left: 287,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  cupertinoStepper2: {
    top: 275,
    left: 281,
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10
  },
  button1StackStackStack: {
    height: 337,
    flex: 1
  },
  button1StackStackStackRow: {
    height: 337,
    flexDirection: "row",
    marginLeft: 11,
    marginRight: 26
  }
});

export default SearchDropdown;
