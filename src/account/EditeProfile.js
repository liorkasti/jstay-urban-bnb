import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DateGroup from "../components/DateGroup";
import EntypoIcon from "react-native-vector-icons/Entypo";
import TitleDetails from "../components/TitleDetails";
import SaveAndExit from "../components/SaveAndExit";
import MaterialSpinner from "../components/MaterialSpinner";
import MaterialButtonViolet15 from "../components/MaterialButtonViolet15";

function Untitled12(props) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon name="user" style={styles.icon1}></FontAwesomeIcon>
      <View style={styles.dateGroup1Row}>
        <DateGroup style={styles.dateGroup1}></DateGroup>
        <EntypoIcon name="chevron-down" style={styles.icon7}></EntypoIcon>
      </View>
      <FontAwesomeIcon name="phone" style={styles.icon2}></FontAwesomeIcon>
      <FontAwesomeIcon name="map-pin" style={styles.icon3}></FontAwesomeIcon>
      <FontAwesomeIcon name="envelope" style={styles.icon4}></FontAwesomeIcon>
      <TouchableOpacity style={styles.button4}>
        <View style={styles.icon5Stack}>
          <EntypoIcon name="chevron-down" style={styles.icon5}></EntypoIcon>
          <TitleDetails style={styles.titleDetails1}></TitleDetails>
        </View>
      </TouchableOpacity>
      <SaveAndExit style={styles.saveAndExit1}></SaveAndExit>
      
      <View style={styles.button1Stack}>
        
      </View>

      <Text style={styles.loremIpsum}></Text>
      <TextInput placeholder="Last Name" style={styles.textInput1}></TextInput>
      <TextInput placeholder="First Name" style={styles.textInput2}></TextInput>
      <TextInput placeholder="Home town" style={styles.textInput3}></TextInput>
      <TextInput
        placeholder="Email address"
        style={styles.textInput4}
      ></TextInput>
      <View style={styles.textInput5Row}>
        <TextInput
          placeholder="Phone number"
          style={styles.textInput5}
        ></TextInput>
        <MaterialSpinner style={styles.materialSpinner1}></MaterialSpinner>
      </View>
      <MaterialButtonViolet15
        caption="Use My Current Location"
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet15>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    marginTop: 50,
    marginLeft: 29
  },
  dateGroup1: {
    height: 25,
    width: 120,
    marginTop: 2
  },
  icon7: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 2
  },
  dateGroup1Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 110,
    marginLeft: 29,
    marginRight: 233
  },
  icon2: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    marginTop: 253,
    marginLeft: 30
  },
  icon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    marginTop: -258,
    marginLeft: 32
  },
  icon4: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    marginTop: 123,
    marginLeft: 29
  },
  button4: {
    width: 95,
    height: 35,
    marginTop: -397,
    marginLeft: 29
  },
  icon5: {
    top: 0,
    left: 65,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  titleDetails1: {
    position: "absolute",
    top: 3,
    left: 0,
    height: 32,
    right: 7
  },
  icon5Stack: {
    height: 35
  },
  saveAndExit1: {
    height: 36,
    marginTop: 649,
    marginLeft: 97,
    marginRight: 97
  },
  button1: {
    top: 30,
    width: 62,
    height: 62,
    position: "absolute",
    right: 4,
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
  rect1: {
    top: 0,
    left: 0,
    height: 91,
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4,
    right: 0,
    flexDirection: "row"
  },
  button2: {
    width: 29,
    height: 40,
    marginLeft: 6,
    marginTop: 40
  },
  button3: {
    width: 29,
    height: 40
  },
  icon6: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  text1: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 48
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  button1Stack: {
    height: 92,
    marginTop: -851
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 104,
    marginLeft: 66
  },
  textInput1: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 54,
    marginLeft: 30
  },
  textInput2: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: -77,
    marginLeft: 29
  },
  textInput3: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 157,
    marginLeft: 30
  },
  textInput4: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 120,
    marginLeft: 30
  },
  textInput5: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular"
  },
  materialSpinner1: {
    width: 27,
    height: 22,
    marginLeft: 10,
    marginTop: 3
  },
  textInput5Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 30,
    marginRight: 97
  },
  materialButtonViolet1: {
    height: 45,
    borderRadius: 10,
    width: 288,
    marginTop: -217,
    marginLeft: 29
  }
});

export default Untitled12;
