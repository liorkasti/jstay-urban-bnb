import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import GeneralAmenities from "../components/GeneralAmenities";
import SafetyAmenities from "../components/SafetyAmenities";
import JewishHomeAmenities from "../components/JewishHomeAmenities";
import KosherKitchenAmenities from "../components/KosherKitchenAmenities";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import ShabbatHolidayEssentials from "../components/ShabbatHolidayEssentials";
import ChildFriendlyAmenities from "../components/ChildFriendlyAmenities";
import Icon from "react-native-vector-icons/Entypo";

function Amenities(props) {
  return (
    <View style={styles.container}>
      <GeneralAmenities
        onUserInput={({ newValue, extention }) => {
          props.onUserInput(newValue, "hostListing/generalAmenities/" + extention)
        }}
        style={styles.generalAmenities}></GeneralAmenities>

      <SafetyAmenities
        onUserInput={({ newValue, extention }) => {
          props.onUserInput(newValue, "hostListing/safetyAmenities/" + extention)
        }}
        style={styles.safetyAmenities}>
      </SafetyAmenities>

      <JewishHomeAmenities
        onUserInput={({ newValue, extention }) => {
          props.onUserInput(newValue, "hostListing/jewishAmenities/" + extention)
        }}
        style={styles.jewishHomeAmenities}
      ></JewishHomeAmenities>

      {/* todo: remove this for now */}
      <KosherKitchenAmenities
        style={styles.kosherKitchenAmenities}
      ></KosherKitchenAmenities>

      {/* NextButton */}
      <MaterialButtonViolet6
        onPress={props.onNext}
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet6>

      <ShabbatHolidayEssentials
        onUserInput={({ newValue, extention }) => {
          props.onUserInput(newValue, "hostListing/holidayAmenities/" + extention)
        }}
        style={styles.shabbatHolidayEssentials}
      ></ShabbatHolidayEssentials>

      <ChildFriendlyAmenities
        onUserInput={({ newValue, extention }) => {
          props.onUserInput(newValue, "hostListing/childAmenities/" + extention)
        }}
        style={styles.childFriendlyAmenities}
      ></ChildFriendlyAmenities>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: 4100,

    backgroundColor: "rgba(2,172,235,1)"
  },
  generalAmenities: {
    height: 1260,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 33
  },
  safetyAmenities: {
    height: 264,
    marginTop: 16,
    marginLeft: 30
  },
  jewishHomeAmenities: {
    height: 413,
    marginTop: 335,
    marginLeft: 30
  },
  kosherKitchenAmenities: {
    height: 561,
    marginTop: 1075,
    marginLeft: 30,
    marginRight: 16
  },
  materialButtonViolet1: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    alignSelf: "flex-end",
    marginTop: 39,
    marginRight: 16
  },
  shabbatHolidayEssentials: {
    height: 975,
    marginTop: -1698,
    marginLeft: 20,
    marginRight: 7
  },
  childFriendlyAmenities: {
    height: 303,
    marginTop: -1726,
    marginLeft: 30
  },
  group1: {
    height: 91,
    marginTop: -1982
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7
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
  text: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 115,
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

export default Amenities;
