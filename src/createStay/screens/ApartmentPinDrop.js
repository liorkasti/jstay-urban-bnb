import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import DragablePinMap from "../components/DragablePinMap";
import { Center } from "@builderx/utils";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function ApartmentPinDrop(props) {
  const savePinDrop = (newLocation) => {
    props.onUserInput({ location: newLocation, path: "hostListing" })
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="light-content" />
      <View style={styles.editThePinColumn}>
        <Text style={styles.editThePin}>Edit the pin</Text>
        <Text style={styles.loremIpsum}>
          Move the pin over the exact location of your stay.{"\n"}Only confirmed
          guests will see exact location.
        </Text>
      </View>

      <View style={styles.dragablePinMapStack}>
        <DragablePinMap style={styles.dragablePinMap}></DragablePinMap>
        <Center horizontal>
          <EntypoIcon name="location-pin" style={styles.icon}></EntypoIcon>
        </Center>
      </View>

      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText1Filler}></View>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet10}
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
  editThePin: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 50,
    marginLeft: 24
  },
  loremIpsum: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1,
    marginLeft: 24
  },
  group1: {
    height: 91,
    marginTop: -178
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
  location: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 124,
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
  },
  editThePinColumn: {},
  dragablePinMap: {
    top: 0,
    height: 500,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  icon: {
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 82,
    top: 240
  },
  dragablePinMapStack: {
    flex: 1,
    marginBottom: 4,
    marginTop: 30,
    marginLeft: 7,
    marginRight: 7
  },
  materialButtonWithVioletText1: {
    width: 148,
    height: 36,
    opacity: 0.46,
    alignSelf: "flex-end",
    marginBottom: 5
  },
  materialButtonWithVioletText1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet10: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 550,
    marginBottom: 34,
    marginLeft: 133,
    marginRight: 14
  }
});

export default ApartmentPinDrop;
