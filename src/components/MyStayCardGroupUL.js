import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonWithVioletText19 from "./MaterialButtonWithVioletText19";
import MaterialButtonWithVioletText20 from "./MaterialButtonWithVioletText20";
import Icon from "react-native-vector-icons/FontAwesome";

function MyStayCardGroupUL(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group8}>
        <View style={styles.rect2}></View>
        <Image
          source={require("../assets/images/Cottage1.jpg")}
          resizeMode="stretch"
          style={styles.image2}
        ></Image>
        <Text style={styles.theCottage}>The Cottage</Text>
        <MaterialButtonWithVioletText19
          style={styles.materialButtonWithVioletText19}
        ></MaterialButtonWithVioletText19>
        <MaterialButtonWithVioletText20
          style={styles.materialButtonWithVioletText20}
        ></MaterialButtonWithVioletText20>
        <Icon name="trash-o" style={styles.icon3}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group8: {
    top: 0,
    left: 0,
    height: 90,
    position: "absolute",
    right: 0
  },
  rect2: {
    top: 0,
    left: 0,
    height: 90,
    backgroundColor: "rgba(230,230,230,0.41)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01,
    right: 0
  },
  image2: {
    top: 7,
    left: 7,
    width: 100,
    height: 75,
    position: "absolute",
    borderRadius: 10
  },
  theCottage: {
    top: 18,
    left: "45.97%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialButtonWithVioletText19: {
    top: 47,
    left: "36.83%",
    width: "28.57%",
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText20: {
    top: 47,
    left: "63.51%",
    width: "28.57%",
    height: 36,
    position: "absolute"
  },
  icon3: {
    top: 10,
    left: 324,
    position: "absolute",
    color: "rgba(182,182,182,1)",
    fontSize: 20
  }
});

export default MyStayCardGroupUL;
