import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialButtonWithVioletText10 from "../components/MaterialButtonWithVioletText10";
import EntypoIcon from "react-native-vector-icons/Entypo";

function MyDetails(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextbox
        textInput1="first name"
        icon1Name="account"
        style={styles.materialIconTextbox}
      ></MaterialIconTextbox>
      <MaterialIconTextbox
        textInput1="last name"
        icon1Name="account"
        style={styles.materialIconTextbox1}
      ></MaterialIconTextbox>
      <MaterialIconTextbox
        textInput1="date of birth"
        icon1Name="calendar-search"
        style={styles.materialIconTextbox2}
      ></MaterialIconTextbox>
      <View style={styles.icon2Row}>
        <MaterialIconsIcon
          name="people"
          style={styles.icon2}
        ></MaterialIconsIcon>
        <View style={styles.rect2}>
          <Text style={styles.title}>title</Text>
        </View>
      </View>
      <MaterialButtonWithVioletText10
        onPress={props.onNext}
        style={styles.materialButtonWithVioletText1}
      ></MaterialButtonWithVioletText10>
      <View style={styles.rect3}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <EntypoIcon name="chevron-left" style={styles.icon3}></EntypoIcon>
          </TouchableOpacity>
          <Text style={styles.createAnAccount2}>Create An Account</Text>
        </View>
        <View style={styles.buttonRowFiller}></View>
        <Text style={styles.bsD1}>BS&quot;D</Text>
      </View>
      <View style={styles.textStack}>
        <Text style={styles.text}>My details</Text>
        <Image
          source={require("../assets/images/JStay-Logo-blue-shin7.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialIconTextbox: {
    height: 43,
    marginTop: 394,
    marginLeft: 20,
    marginRight: 30
  },
  materialIconTextbox1: {
    height: 43,
    marginTop: 7,
    marginLeft: 20,
    marginRight: 30
  },
  materialIconTextbox2: {
    height: 43,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 30
  },
  icon2: {
    color: "#b1b1b1",
    fontSize: 24
  },
  rect2: {
    width: 152,
    height: 24,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 14
  },
  title: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 9,
    marginLeft: 7
  },
  icon2Row: {
    height: 24,
    flexDirection: "row",
    marginTop: -184,
    marginLeft: 29,
    marginRight: 195
  },
  materialButtonWithVioletText1: {
    width: 100,
    height: 36,
    alignSelf: "flex-end",
    marginTop: 440,
    marginRight: 8
  },
  rect3: {
    height: 86,
    backgroundColor: "rgba(0,88,155,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(2,172,235,1)",
    shadowOpacity: 0.22,
    flexDirection: "row",
    marginTop: -856,
    marginLeft: -10
  },
  button: {
    width: 29,
    height: 40
  },
  icon3: {
    color: "rgba(2,172,235,1)",
    fontSize: 40
  },
  createAnAccount2: {
    color: "rgba(2,172,235,1)",
    fontSize: 25,
    fontFamily: "roboto-bold",
    textAlign: "center",
    marginLeft: 74,
    marginTop: 8
  },
  buttonRow: {
    height: 40,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 40
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginRight: 38,
    marginTop: 14
  },
  text: {
    top: 146,
    left: 30,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  image1: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  textStack: {
    height: 166,
    marginTop: 51
  }
});

export default MyDetails;
