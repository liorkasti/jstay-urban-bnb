import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonWithVioletText53 from "./MaterialButtonWithVioletText53";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function PastTripCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group22}>
        <View style={styles.rect102}></View>
        <Image
          source={require("../assets/images/Cottage1.jpg")}
          resizeMode="stretch"
          style={styles.image102}
        ></Image>
        <Text style={styles.theCottage92}>The Cottage</Text>
      </View>
      <MaterialButtonWithVioletText53
        style={styles.materialButtonWithVioletText532}
      ></MaterialButtonWithVioletText53>
      <Text style={styles.upcomingTrips12}></Text>
      <Text style={styles.jerusalemIsrael2}>Jerusalem, Israel</Text>
      <Text style={styles.checkOut22}>04 March 2021</Text>
      <FontAwesomeIcon name="star" style={styles.icon4}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon5}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon6}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon7}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon8}></FontAwesomeIcon>
      <Text style={styles.kashrut}>Kashrut</Text>
      <FontAwesomeIcon name="star" style={styles.icon9}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon10}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon11}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon12}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" style={styles.icon13}></FontAwesomeIcon>
      <Text style={styles.stay}>Stay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group22: {
    top: 0,
    left: 0,
    height: 90,
    position: "absolute",
    right: 0
  },
  rect102: {
    top: 0,
    left: 0,
    height: 120,
    backgroundColor: "rgba(230,230,230,0.41)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01,
    right: 0
  },
  image102: {
    top: 7,
    left: 7,
    width: 100,
    height: 75,
    position: "absolute",
    borderRadius: 10
  },
  theCottage92: {
    top: 7,
    left: 110,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  materialButtonWithVioletText532: {
    top: 81,
    left: 0,
    width: "31.43%",
    height: 36,
    position: "absolute"
  },
  upcomingTrips12: {
    top: 31,
    left: 110,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  jerusalemIsrael2: {
    top: 31,
    left: 110,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-700"
  },
  checkOut22: {
    top: 47,
    left: 111,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  icon4: {
    top: 92,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 12
  },
  icon5: {
    top: 92,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 31
  },
  icon6: {
    top: 92,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 50
  },
  icon7: {
    top: 92,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 69
  },
  icon8: {
    top: 92,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 87
  },
  kashrut: {
    top: 78,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 58
  },
  icon9: {
    top: 92,
    left: 207,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon10: {
    top: 92,
    left: 189,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon11: {
    top: 92,
    left: 170,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon12: {
    top: 92,
    left: 152,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon13: {
    top: 92,
    left: 133,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  stay: {
    top: 78,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 191
  }
});

export default PastTripCard;
