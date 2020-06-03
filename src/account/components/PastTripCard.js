import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonWithVioletText53 from "./MaterialButtonWithVioletText53";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function PastTripCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group22StackStack}>
        <View style={styles.group22Stack}>
          <View style={styles.group22}>
            <View style={styles.rect102}>
              <View style={styles.image102Row}>
                <Image
                  source={require("../assets/images/Cottage1.jpg")}
                  resizeMode="stretch"
                  style={styles.image102}
                ></Image>
                <View style={styles.theCottage92Column}>
                  <Text style={styles.theCottage92}>The Cottage</Text>
                  <View style={styles.upcomingTrips12Stack}>
                    <Text style={styles.upcomingTrips12}></Text>
                    <Text style={styles.jerusalemIsrael2}>
                      Jerusalem, Israel
                    </Text>
                    <Text style={styles.checkOut22}>04 March 2021</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <MaterialButtonWithVioletText53
            style={styles.materialButtonWithVioletText532}
          ></MaterialButtonWithVioletText53>
          <Text style={styles.kashrut}>Kashrut</Text>
          <Text style={styles.stay}>Stay</Text>
        </View>
        <View style={styles.icon4Stack}>
          <FontAwesomeIcon name="star" style={styles.icon4}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon5}></FontAwesomeIcon>
        </View>
        <FontAwesomeIcon name="star" style={styles.icon6}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon7}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon8}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon9}></FontAwesomeIcon>
        <View style={styles.icon10Stack}>
          <FontAwesomeIcon name="star" style={styles.icon10}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon11}></FontAwesomeIcon>
        </View>
        <FontAwesomeIcon name="star" style={styles.icon12}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon13}></FontAwesomeIcon>
      </View>
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
    height: 120,
    backgroundColor: "rgba(230,230,230,0.41)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01
  },
  image102: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage92: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  upcomingTrips12: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  jerusalemIsrael2: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-700"
  },
  checkOut22: {
    top: 16,
    left: 1,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  upcomingTrips12Stack: {
    width: 135,
    height: 40
  },
  theCottage92Column: {
    width: 135,
    marginLeft: 3,
    marginBottom: 11
  },
  image102Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 154
  },
  materialButtonWithVioletText532: {
    top: 81,
    left: 0,
    width: 125,
    height: 36,
    position: "absolute"
  },
  kashrut: {
    top: 78,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 58
  },
  stay: {
    top: 78,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 191
  },
  group22Stack: {
    top: 0,
    height: 117,
    position: "absolute",
    right: 0,
    left: 0
  },
  icon4: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 0
  },
  icon5: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 19
  },
  icon4Stack: {
    top: 92,
    width: 37,
    height: 20,
    position: "absolute",
    right: 12
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
  icon9: {
    top: 92,
    left: 207,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon10: {
    top: 0,
    left: 19,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon11: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon10Stack: {
    top: 92,
    left: 170,
    width: 37,
    height: 20,
    position: "absolute"
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
  group22StackStack: {
    height: 117
  }
});

export default PastTripCard;
