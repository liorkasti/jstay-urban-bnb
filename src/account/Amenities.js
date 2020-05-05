import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import GeneralAmenities from "../components/GeneralAmenities";
import SafetyAmenities from "../components/SafetyAmenities";
import JewishHomeAmenities from "../components/JewishHomeAmenities";
import KosherKitchenAmenities from "../components/KosherKitchenAmenities";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import ShabbatHolidayEssentials from "../components/ShabbatHolidayEssentials";
import ChildFriendlyAmenities from "../components/ChildFriendlyAmenities";
import HeaderBarLight from "../components/HeaderBarLight";

function Amenities(props) {
  return (
    <View style={styles.container}>
      <GeneralAmenities style={styles.generalAmenities}></GeneralAmenities>
      <SafetyAmenities style={styles.safetyAmenities}></SafetyAmenities>
      <JewishHomeAmenities
        style={styles.jewishHomeAmenities}
      ></JewishHomeAmenities>
      <KosherKitchenAmenities
        style={styles.kosherKitchenAmenities}
      ></KosherKitchenAmenities>
      <View style={styles.materialButtonViolet1Stack}>
        <MaterialButtonViolet6
          text1="Next"
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet6>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
      </View>
      <ShabbatHolidayEssentials
        style={styles.shabbatHolidayEssentials}
      ></ShabbatHolidayEssentials>
      <ChildFriendlyAmenities
        style={styles.childFriendlyAmenities}
      ></ChildFriendlyAmenities>
      <HeaderBarLight
        text1=""
        text2="Amenities"
        style={styles.headerBarLight1}
      ></HeaderBarLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  generalAmenities: {
    height: 1260,
    marginTop: 120,
    marginLeft: 30,
    marginRight: 33
  },
  safetyAmenities: {
    height: 264,
    marginTop: 16,
    marginLeft: 30
  },
  jewishHomeAmenities: {
    width: 384,
    height: 413,
    marginTop: 335,
    marginLeft: 30
  },
  kosherKitchenAmenities: {
    width: 301,
    height: 561,
    marginTop: 1077,
    marginLeft: 35
  },
  materialButtonViolet1: {
    top: 0,
    width: 112,
    height: 45,
    position: "absolute",
    right: 0,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText1: {
    left: 0,
    width: 88,
    height: 36,
    position: "absolute",
    bottom: 4,
    opacity: 0.46
  },
  materialButtonViolet1Stack: {
    width: 192,
    height: 45,
    marginTop: 24,
    marginLeft: 152
  },
  shabbatHolidayEssentials: {
    height: 975,
    marginTop: -1685,
    marginLeft: 30,
    marginRight: -3
  },
  childFriendlyAmenities: {
    width: 334,
    height: 303,
    marginTop: -1713,
    marginLeft: 26
  },
  headerBarLight1: {
    width: 370,
    height: 91,
    marginTop: -1995,
    marginLeft: -8
  }
});

export default Amenities;
