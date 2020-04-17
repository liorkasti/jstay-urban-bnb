import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import MaterialButtonViolet1 from "./components/MaterialButtonViolet1";
import MaterialButtonViolet2 from "./components/MaterialButtonViolet2";
import MaterialButtonViolet3 from "./components/MaterialButtonViolet3";
import MaterialButtonViolet5 from "./components/MaterialButtonViolet5";
import MaterialCard5 from "./components/MaterialCard5";
import MaterialCard12 from "./components/MaterialCard12";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialBasicFooter1 from "./components/MaterialBasicFooter1";
import MaterialButtonShare from "./components/MaterialButtonShare";
import MaterialButtonViolet4 from "./components/MaterialButtonViolet4";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea42Column}>
        <View style={styles.scrollArea42}>
          <View style={styles.materialButtonViolet1Row}>
            <MaterialButtonViolet1
              style={styles.materialButtonViolet1}
            ></MaterialButtonViolet1>
            <MaterialButtonViolet2
              style={styles.materialButtonViolet2}
            ></MaterialButtonViolet2>
            <MaterialButtonViolet3
              style={styles.materialButtonViolet3}
            ></MaterialButtonViolet3>
            <MaterialButtonViolet5
              style={styles.materialButtonViolet5}
            ></MaterialButtonViolet5>
          </View>
        </View>
        <View style={styles.rect23}>
          <MaterialCard5 style={styles.materialCard5}></MaterialCard5>
          <MaterialCard12 style={styles.materialCard12}></MaterialCard12>
        </View>
        <View style={styles.group}>
          <View style={styles.textInputStack}>
            <TextInput
              placeholder="Location, comunity, or address"
              placeholderTextColor="rgba(177,177,177,1)"
              returnKeyType="search"
              returnKeyLabel="Search"
              style={styles.textInput}
            ></TextInput>
            <FontAwesomeIcon
              name="sliders"
              style={styles.icon2}
            ></FontAwesomeIcon>
            <IoniconsIcon name="ios-search" style={styles.icon3}></IoniconsIcon>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./images/jstay_icon_final_inverted_colors_-_Palette_e6e6e6.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.scrollArea42ColumnFiller}></View>
      <View style={styles.materialBasicFooter1Column}>
        <MaterialBasicFooter1
          style={styles.materialBasicFooter1}
        ></MaterialBasicFooter1>
        <View style={styles.materialButtonShareStack}>
          <MaterialButtonShare
            style={styles.materialButtonShare}
          ></MaterialButtonShare>
          <MaterialButtonViolet4
            style={styles.materialButtonViolet6}
          ></MaterialButtonViolet4>
        </View>
      </View>
      <StatusBar hidden={false}></StatusBar>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  scrollArea42: {
    width: 393,
    height: 36,
    overflow: "hidden",
    marginTop: 65,
    marginLeft: 9
  },
  scrollArea42_contentContainerStyle: {
    width: 1963,
    height: 36,
    flexDirection: "row"
  },
  materialButtonViolet1: {
    width: 88,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    overflow: "visible"
  },
  materialButtonViolet2: {
    width: 88,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    marginLeft: 12
  },
  materialButtonViolet3: {
    width: 88,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    marginLeft: 12
  },
  materialButtonViolet5: {
    width: 88,
    height: 36,
    overflow: "visible",
    marginLeft: 11
  },
  materialButtonViolet1Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 6
  },
  rect23: {
    width: 410,
    height: 567,
    marginTop: 16
  },
  materialCard5: {
    height: 349,
    backgroundColor: "rgba(230,230,230,1)"
  },
  materialCard12: {
    height: 206,
    marginTop: 12
  },
  group: {
    width: 364,
    height: 52,
    marginTop: -684,
    marginLeft: 8
  },
  textInput: {
    top: 2,
    left: 0,
    width: 327,
    height: 46,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,

    letterSpacing: 0,
    textAlign: "center"
  },
  icon2: {
    top: 6,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 37,
    left: 285
  },
  icon3: {
    top: 4,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 45,
    left: 14,
    width: 34,
    height: 45
  },
  button: {
    top: 0,
    width: 67,
    height: 51,
    position: "absolute",
    right: 0
  },
  image1: {
    width: 50,
    height: 51,
    marginLeft: 21
  },
  textInputStack: {
    width: 380,
    height: 51,
    marginTop: 3
  },
  scrollArea42Column: {
    width: 410,
    marginTop: 40,
    marginLeft: 2
  },
  scrollArea42ColumnFiller: {
    flex: 1
  },
  materialBasicFooter1: {
    height: 76,
    marginBottom: -145
  },
  materialButtonShare: {
    width: 56,
    height: 56,
    position: "absolute",
    right: 1,
    bottom: 2,
    borderColor: "#000000",
    borderWidth: 0
  },
  materialButtonViolet6: {
    height: 60,
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 134
  },
  materialButtonShareStack: {
    width: 134,
    height: 60,
    alignSelf: "flex-end",
    marginBottom: 85,
    marginRight: 12
  },
  materialBasicFooter1Column: {
    marginRight: 1
  }
});

export default Untitled2;
