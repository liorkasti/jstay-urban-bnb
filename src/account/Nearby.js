import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import WalkingDistanceOf from "../components/WalkingDistanceOf";
import Eruv from "../components/Eruv";
import HeaderBarLight from "../components/HeaderBarLight";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function Nearby(props) {
  return (
    <View style={styles.container}>
      <View style={styles.walkingDistanceOfColumn}>
        <WalkingDistanceOf style={styles.walkingDistanceOf}></WalkingDistanceOf>
        <Eruv style={styles.eruv}></Eruv>
        <HeaderBarLight
          text1=""
          text2="Nearby"
          style={styles.headerBarLight}
        ></HeaderBarLight>
      </View>
      <View style={styles.walkingDistanceOfColumnFiller}></View>
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
  walkingDistanceOf: {
    height: 330,
    marginTop: 112,
    marginLeft: 36,
    marginRight: 6
  },
  eruv: {
    width: 386,
    height: 148,
    marginTop: 35,
    marginLeft: 36
  },
  headerBarLight: {
    height: 91,
    marginTop: -625
  },
  walkingDistanceOfColumn: {
    marginTop: -2,
    marginLeft: -6,
    marginRight: -6
  },
  walkingDistanceOfColumnFiller: {
    flex: 1
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    alignSelf: "flex-end",
    marginBottom: 2
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
    marginBottom: 29,
    marginLeft: 178,
    marginRight: 19
  }
});

export default Nearby;
