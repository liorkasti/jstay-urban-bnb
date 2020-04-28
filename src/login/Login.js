import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import MaterialButtonWithVioletText from "../components/MaterialButtonWithVioletText";
import MaterialIconTextbox4 from "../components/MaterialIconTextbox4";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import Icon from "react-native-vector-icons/Feather";
import MaterialButtonWithVioletText15 from "../components/MaterialButtonWithVioletText15";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialButtonLight from "../components/MaterialButtonLight";
import MaterialButtonWithVioletText12 from "../components/MaterialButtonWithVioletText12";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonWithVioletTextColumn}>
        <MaterialButtonWithVioletText
          style={styles.materialButtonWithVioletText}
        ></MaterialButtonWithVioletText>
        <View style={styles.materialIconTextbox4Stack}>
          <MaterialIconTextbox4
            textInput1="email"
            style={styles.materialIconTextbox4}
          ></MaterialIconTextbox4>
          <Text style={styles.loremIpsum2}></Text>
        </View>
        <Text style={styles.bsD1}>BS&quot;D</Text>
        <View style={styles.myDetails1Stack}>
          <Text style={styles.myDetails1}>
            Please enter your log in information
          </Text>
          <Image
            source={require("../assets/images/JStay-Logo-blue-shin7.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
      </View>
      <View style={styles.materialButtonWithVioletTextColumnFiller}></View>
      <View style={styles.groupStackStackColumn}>
        <View style={styles.groupStackStack}>
          <View style={styles.groupStack}>
            <View style={styles.group}></View>
            <View style={styles.group3}>
              <View style={styles.materialRightIconTextbox1Stack}>
                <MaterialRightIconTextbox1
                  text1="password"
                  style={styles.materialRightIconTextbox1}
                ></MaterialRightIconTextbox1>
                <TouchableOpacity style={styles.button}></TouchableOpacity>
              </View>
            </View>
            <Icon name="lock" style={styles.icon}></Icon>
          </View>
          <View style={styles.group2Stack}>
            <View style={styles.group2}></View>
            <MaterialButtonWithVioletText15
              style={styles.materialButtonWithVioletText15}
            ></MaterialButtonWithVioletText15>
          </View>
          <MaterialCheckboxWithLabel
            text1=""
            style={styles.materialCheckboxWithLabel}
          ></MaterialCheckboxWithLabel>
        </View>
        <MaterialButtonLight
          style={styles.materialButtonLight}
        ></MaterialButtonLight>
        <MaterialButtonWithVioletText12
          style={styles.materialButtonWithVioletText12}
        ></MaterialButtonWithVioletText12>
      </View>
      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialButtonWithVioletText: {
    width: 100,
    height: 36,
    marginTop: 27,
    marginLeft: 10
  },
  materialIconTextbox4: {
    left: 0,
    height: 43,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  loremIpsum2: {
    top: 10,
    left: 9,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  materialIconTextbox4Stack: {
    height: 43,
    marginTop: 272,
    marginLeft: 21,
    marginRight: 34
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: -378,
    marginRight: 38
  },
  myDetails1: {
    left: 48,
    width: 322,
    height: 20,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    bottom: 0,
    fontSize: 20,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  image1: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  myDetails1Stack: {
    height: 168,
    marginTop: 113
  },
  materialButtonWithVioletTextColumn: {
    marginTop: 14
  },
  materialButtonWithVioletTextColumnFiller: {
    flex: 1
  },
  group: {
    top: 0,
    left: 1,
    height: 27,
    position: "absolute",
    right: 1
  },
  group3: {
    left: 40,
    height: 43,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  materialRightIconTextbox1: {
    top: 0,
    left: 0,
    height: 43,
    position: "absolute",
    right: 0
  },
  button: {
    top: 0,
    left: 271,
    width: 40,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  materialRightIconTextbox1Stack: {
    height: 43
  },
  icon: {
    position: "absolute",
    color: "rgba(177,177,177,1)",
    fontSize: 22,
    left: 0,
    bottom: 11
  },
  groupStack: {
    left: 0,
    height: 51,
    position: "absolute",
    bottom: 81,
    right: 0
  },
  group2: {
    top: 0,
    left: 0,
    height: 28,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText15: {
    left: 21,
    width: 108,
    height: 36,
    position: "absolute",
    bottom: 0,
    opacity: 0.46
  },
  group2Stack: {
    top: 42,
    left: 2,
    height: 52,
    position: "absolute",
    right: 1
  },
  materialCheckboxWithLabel: {
    left: 27,
    width: 139,
    height: 40,
    position: "absolute",
    bottom: 0
  },
  groupStackStack: {
    height: 132,
    marginBottom: 216,
    marginRight: 5
  },
  materialButtonLight: {
    width: 353,
    height: 62,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 10,
    marginBottom: 13,
    marginLeft: 3
  },
  materialButtonWithVioletText12: {
    width: 116,
    height: 36,
    opacity: 0.46,
    marginLeft: 122
  },
  groupStackStackColumn: {
    marginBottom: 40,
    marginLeft: 29,
    marginRight: 29
  }
});

export default Login;
