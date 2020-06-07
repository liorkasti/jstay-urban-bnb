import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialButtonWithVioletText52 from "../components/MaterialButtonWithVioletText52";
import MaterialButtonWithVioletText58 from "../components/MaterialButtonWithVioletText58";
import MaterialButtonWithVioletText54 from "../components/MaterialButtonWithVioletText54";
import EntypoIcon from "react-native-vector-icons/Entypo";
import PastTripCard from "../components/PastTripCard";

function Trips(props) {
  return (
    <View style={styles.container}>
      <View style={styles.upcomingTripsStack}>
        <Text style={styles.upcomingTrips}>Upcoming trips</Text>
        <View style={styles.group3Stack}>
          <View style={styles.group3}>
            <View style={styles.group2}>
              <View style={styles.rect10}>
                <View style={styles.image10Row}>
                  <Image
                    source={require("../assets/images/Cottage1.jpg")}
                    resizeMode="stretch"
                    style={styles.image10}
                  ></Image>
                  <View style={styles.theCottage9Column}>
                    <Text style={styles.theCottage9}>The Cottage</Text>
                    <View style={styles.upcomingTrips1Stack}>
                      <Text style={styles.upcomingTrips1}></Text>
                      <Text style={styles.jerusalemIsrael}>
                        Jerusalem, Israel
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.checkInRow}>
              <Text style={styles.checkIn}>Check-in</Text>
              <Text style={styles.checkOut2}>04 March 2021</Text>
            </View>
            <View style={styles.checkOutRow}>
              <Text style={styles.checkOut}>Check-out</Text>
              <Text style={styles.checkOut1}>20 March 2021</Text>
            </View>
            <View style={styles.materialButtonWithVioletText52StackRow}>
              <View style={styles.materialButtonWithVioletText52Stack}>
                <MaterialButtonWithVioletText52
                  style={styles.materialButtonWithVioletText52}
                ></MaterialButtonWithVioletText52>
                <MaterialButtonWithVioletText58
                  style={styles.materialButtonWithVioletText58}
                ></MaterialButtonWithVioletText58>
              </View>
              <MaterialButtonWithVioletText54
                style={styles.materialButtonWithVioletText54}
              ></MaterialButtonWithVioletText54>
            </View>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon3}></EntypoIcon>
        </View>
      </View>
      <View style={styles.pastTripsStack}>
        <Text style={styles.pastTrips}>Past trips</Text>
        <EntypoIcon name="chevron-down" style={styles.icon2}></EntypoIcon>
        <PastTripCard style={styles.pastTripCard1}></PastTripCard>
      </View>
      <PastTripCard style={styles.pastTripCard}></PastTripCard>
      <View style={styles.group223}>
        <View style={styles.rect1023}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <EntypoIcon
                    name="chevron-left"
                    style={styles.icon1}
                  ></EntypoIcon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.myTrips}>My Trips</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image123Filler}></View>
              <Image
                source={require("../assets/images/jstay-icon-inverted8.png")}
                resizeMode="contain"
                style={styles.image123}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  upcomingTrips: {
    top: 5,
    left: 23,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  group3: {
    top: 34,
    left: 0,
    height: 188,
    position: "absolute",
    right: 0
  },
  group2: {
    width: 388,
    height: 90,
    marginLeft: 10
  },
  rect10: {
    height: 190,
    backgroundColor: "rgba(230,230,230,0.41)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01,
    marginLeft: -11,
    marginRight: -1
  },
  image10: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage9: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  upcomingTrips1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  jerusalemIsrael: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  upcomingTrips1Stack: {
    width: 108,
    height: 17
  },
  theCottage9Column: {
    width: 111,
    marginLeft: 3,
    marginBottom: 34
  },
  image10Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 18,
    marginRight: 167
  },
  checkIn: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 50
  },
  checkInRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 19,
    marginRight: 116
  },
  checkOut: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 37
  },
  checkOutRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 19,
    marginRight: 116
  },
  materialButtonWithVioletText52: {
    top: 0,
    left: 92,
    width: 120,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText58: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText52Stack: {
    width: 212,
    height: 36
  },
  materialButtonWithVioletText54: {
    width: 143,
    height: 36,
    marginLeft: 10,
    marginTop: 1
  },
  materialButtonWithVioletText52StackRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 24,
    marginRight: 10
  },
  icon3: {
    top: 0,
    left: 160,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  group3Stack: {
    top: 0,
    left: 0,
    height: 222,
    position: "absolute",
    right: 0
  },
  upcomingTripsStack: {
    height: 222,
    marginTop: 115,
    marginLeft: 8,
    marginRight: 7
  },
  pastTrips: {
    top: 5,
    left: 22,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  icon2: {
    top: 0,
    left: 108,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  pastTripCard1: {
    position: "absolute",
    top: 32,
    left: 0,
    height: 117,
    right: 0
  },
  pastTripsStack: {
    height: 149,
    marginTop: 29,
    marginLeft: 8,
    marginRight: 7
  },
  pastTripCard: {
    height: 117,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8
  },
  group223: {
    height: 91,
    marginTop: -640
  },
  rect1023: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
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
  myTrips: {
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
  image123Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image123: {
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

export default Trips;
