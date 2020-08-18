import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialButtonWithVioletText19 from "./MaterialButtonWithVioletText19";
import MaterialButtonWithVioletText20 from "./MaterialButtonWithVioletText20";
import Icon from "react-native-vector-icons/FontAwesome";

import StayCard from "../components/StayCard";

function MyStayCardGroupUL(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group8}>
        {
          props.myStays && props.myStays.map((stay, index) => {
            if (stay)
              return (
                <StayCard
                  stayPicture={`/stays/${stay}/0`}
                  onUserPress={(action) => { props.onUserPress(action, stay) }}
                  stay={stay} />
              )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group8: {
    height: 90
  },
  rect2: {
    height: 90,
    backgroundColor: "rgba(230,230,230,0.41)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01
  },
  image2: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 32
  },
  materialButtonWithVioletText19: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText20: {
    top: 0,
    left: 93,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText19Stack: {
    width: 193,
    height: 36,
    marginTop: 5
  },
  theCottageColumn: {
    width: 193,
    marginLeft: 22,
    marginTop: 11
  },
  icon3: {
    color: "rgba(182,182,182,1)",
    fontSize: 20,
    height: 20,
    width: 17,
    marginLeft: 2,
    marginTop: 3
  },
  image2Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 9
  }
});

export default MyStayCardGroupUL;
