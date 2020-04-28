import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialRadio8 from "../components/MaterialRadio8";
import Icon from "react-native-vector-icons/Entypo";
import MaterialRadio5 from "../components/MaterialRadio5";
import MaterialRadio6 from "../components/MaterialRadio6";
import MaterialRadio7 from "../components/MaterialRadio7";
import MaterialButtonWithVioletText10 from "../components/MaterialButtonWithVioletText10";

function MyKashrut(props) {
  return (
    <View style={styles.container}>
      <View style={styles.myLevelOfKashrutStackColumn}>
        <View style={styles.myLevelOfKashrutStack}>
          <Text style={styles.myLevelOfKashrut}>My level of kashrut</Text>
          <Image
            source={require("../assets/images/JStay-Logo-blue-shin7.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.materialRadio4Row}>
          <MaterialRadio8 style={styles.materialRadio4}></MaterialRadio8>
          <View style={styles.text4Column}>
            <Text style={styles.text4}>I&#39;d rather not say</Text>
            <Text style={styles.idoNotKeep1}>This can be added later</Text>
          </View>
        </View>
        <View style={styles.rect1}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Icon name="chevron-left" style={styles.icon1}></Icon>
            </TouchableOpacity>
            <Text style={styles.createAnAccount2}>Create An Account</Text>
          </View>
          <View style={styles.buttonRowFiller}></View>
          <Text style={styles.bsD1}>BS&quot;D</Text>
        </View>
        <View style={styles.materialRadio5Row}>
          <MaterialRadio5 style={styles.materialRadio5}></MaterialRadio5>
          <View style={styles.notKosher1Column}>
            <Text style={styles.notKosher1}>Not Kosher</Text>
            <Text style={styles.idoNotKeep}>
              I do not keep kosher, but I am looking for or {"\n"}listing a stay
              within a Jewish community
            </Text>
          </View>
        </View>
        <View style={styles.materialRadio6Row}>
          <MaterialRadio6 style={styles.materialRadio6}></MaterialRadio6>
          <View style={styles.kosherStandard1Column}>
            <Text style={styles.kosherStandard1}>Kosher Standard</Text>
            <Text style={styles.text6}>
              I keep kosher according to basic requirements
            </Text>
          </View>
        </View>
        <View style={styles.materialRadio7Row}>
          <MaterialRadio7 style={styles.materialRadio7}></MaterialRadio7>
          <View style={styles.kosherMehadrin1Column}>
            <Text style={styles.kosherMehadrin1}>Kosher Mehadrin</Text>
            <Text style={styles.text5}>
              I keep kosher to a stricter mehadrin standard {"\n"}(you will be
              shown mehadrin listings)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.myLevelOfKashrutStackColumnFiller}></View>
      <MaterialButtonWithVioletText10
        style={styles.materialButtonWithVioletText10}
      ></MaterialButtonWithVioletText10>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  myLevelOfKashrut: {
    top: 147,
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
  myLevelOfKashrutStack: {
    height: 167,
    marginTop: 137,
    marginLeft: 10
  },
  materialRadio4: {
    width: 40,
    height: 40
  },
  text4: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 1
  },
  idoNotKeep1: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  text4Column: {
    width: 147,
    marginLeft: 4,
    marginTop: 9
  },
  materialRadio4Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 212,
    marginLeft: 30,
    marginRight: 203
  },
  rect1: {
    height: 86,
    backgroundColor: "rgba(0,88,155,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(2,172,235,1)",
    shadowOpacity: 0.22,
    flexDirection: "row",
    marginTop: -562
  },
  button: {
    width: 29,
    height: 40
  },
  icon1: {
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
  materialRadio5: {
    width: 40,
    height: 40
  },
  notKosher1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  idoNotKeep: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  notKosher1Column: {
    width: 275,
    marginLeft: 1,
    marginTop: 10
  },
  materialRadio5Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 366,
    marginLeft: 33,
    marginRight: 75
  },
  materialRadio6: {
    width: 40,
    height: 40
  },
  kosherStandard1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text6: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  kosherStandard1Column: {
    width: 286,
    marginLeft: 3,
    marginTop: 9
  },
  materialRadio6Row: {
    height: 45,
    flexDirection: "row",
    marginTop: -182,
    marginLeft: 30,
    marginRight: 65
  },
  materialRadio7: {
    width: 40,
    height: 40
  },
  kosherMehadrin1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text5: {
    color: "rgba(230,230,230,1)",
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  kosherMehadrin1Column: {
    width: 285,
    marginLeft: 2,
    marginTop: 10
  },
  materialRadio7Row: {
    height: 59,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 30,
    marginRight: 67
  },
  myLevelOfKashrutStackColumn: {
    marginLeft: -10
  },
  myLevelOfKashrutStackColumnFiller: {
    flex: 1
  },
  materialButtonWithVioletText10: {
    width: 100,
    height: 36,
    alignSelf: "flex-end",
    marginBottom: 31,
    marginRight: 8
  }
});

export default MyKashrut;
