import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ReviewCard from "../createStay/components/ReviewCard";
import MaterialButtonWithVioletText48 from "../createStay/components/MaterialButtonWithVioletText48";
import MaterialButtonWithVioletText50 from "../createStay/components/MaterialButtonWithVioletText50";
import EntypoIcon from "react-native-vector-icons/Entypo";

function PreBookingProfile(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
        resizeMode="stretch"
        style={styles.image1}
      ></Image>
      <View style={styles.icon1Row}>
        <FontAwesomeIcon name="user" style={styles.icon1}></FontAwesomeIcon>
        <Text style={styles.sholli4}>Sholli</Text>
      </View>
      <View style={styles.icon3Row}>
        <FontAwesomeIcon name="map-pin" style={styles.icon3}></FontAwesomeIcon>
        <Text style={styles.jerusalemIsrael1}>Jerusalem, Israel</Text>
      </View>
      <View style={styles.icon4Row}>
        <FontAwesomeIcon name="star" style={styles.icon4}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon5}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon6}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon7}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon8}></FontAwesomeIcon>
      </View>
      <View style={styles.icon14Row}>
        <FontAwesomeIcon name="star" style={styles.icon14}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon15}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon16}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon17}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon18}></FontAwesomeIcon>
      </View>
      <Text style={styles.overallRating}>Overall rating</Text>
      <Text style={styles.kosherFriendly1}>Kosher Friendly</Text>
      <View style={styles.icon24Row}>
        <MaterialCommunityIconsIcon
          name="home-modern"
          style={styles.icon24}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.hostGuest}>Host/Guest</Text>
      </View>
      <View style={styles.reviewCardStack}>
        <ReviewCard style={styles.reviewCard}></ReviewCard>
        <MaterialButtonWithVioletText48
        tag="See My Reviews"
        onPress={() =>{props.onUserPress("reviews")}}
          style={styles.materialButtonWithVioletText48}
        ></MaterialButtonWithVioletText48>
      </View>
      <MaterialButtonWithVioletText50
        style={styles.materialButtonWithVioletText50}
      ></MaterialButtonWithVioletText50>
      <View style={styles.icon126Row}>
        <FontAwesomeIcon
          name="certificate"
          style={styles.icon126}
        ></FontAwesomeIcon>
        <Text style={styles.kosherStandard1}>Kosher (standard)</Text>
      </View>
      <View style={styles.group2}>
        <View style={styles.rect14}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                  <EntypoIcon
                    name="chevron-left"
                    style={styles.icon127}
                  ></EntypoIcon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.profile}>Profile</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image14Filler}></View>
              <Image
                source={require("../assets/images/jstay-icon-inverted8.png")}
                resizeMode="contain"
                style={styles.image14}
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
  image1: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 121,
    marginLeft: 30
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  sholli4: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 15,
    marginTop: 2
  },
  icon1Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 35,
    marginRight: 295
  },
  icon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  jerusalemIsrael1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 16,
    marginTop: 2
  },
  icon3Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 37,
    marginRight: 191
  },
  icon4: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon5: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 3
  },
  icon6: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 6
  },
  icon7: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 3
  },
  icon8: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 3
  },
  icon4Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 115,
    marginLeft: 30,
    marginRight: 226
  },
  icon14: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon15: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 3
  },
  icon16: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 6
  },
  icon17: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 3
  },
  icon18: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 3
  },
  icon14Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 30,
    marginRight: 226
  },
  overallRating: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -103,
    marginLeft: 29
  },
  kosherFriendly1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: 39,
    marginLeft: 29
  },
  icon24: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  hostGuest: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 13,
    marginTop: 3
  },
  icon24Row: {
    height: 27,
    flexDirection: "row",
    marginTop: -164,
    marginLeft: 31,
    marginRight: 242
  },
  reviewCard: {
    position: "absolute",
    top: 34,
    left: 23,
    height: 117,
    right: 0
  },
  materialButtonWithVioletText48: {
    top: 0,
    left: 0,
    width: 165,
    height: 36,
    position: "absolute"
  },
  reviewCardStack: {
    height: 151,
    marginTop: 190,
    marginLeft: 5,
    marginRight: 27
  },
  materialButtonWithVioletText50: {
    width: 100,
    height: 36,
    marginTop: 12,
    marginLeft: -1
  },
  icon126: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  kosherStandard1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 15,
    marginTop: 2
  },
  icon126Row: {
    height: 26,
    flexDirection: "row",
    marginTop: -382,
    marginLeft: 33,
    marginRight: 183
  },
  group2: {
    height: 91,
    marginTop: -430
  },
  rect14: {
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
  icon127: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  profile: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 145,
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
  image14Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image14: {
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

export default PreBookingProfile;
