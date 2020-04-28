import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MaterialButtonViolet11 from "../components/MaterialButtonViolet11";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonWithVioletText9 from "../components/MaterialButtonWithVioletText9";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function ProfilePicture(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonViolet11Column}>
        <MaterialButtonViolet11
          style={styles.materialButtonViolet11}
        ></MaterialButtonViolet11>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText11}
        ></MaterialButtonWithVioletText11>
        <View style={styles.rect1}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <EntypoIcon
                name="chevron-left"
                style={styles.icon12}
              ></EntypoIcon>
            </TouchableOpacity>
            <Text style={styles.createAnAccount2}>Create An Account</Text>
          </View>
          <View style={styles.buttonRowFiller}></View>
          <Text style={styles.bsD1}>BS&quot;D</Text>
        </View>
        <View style={styles.addRecentPictureStack}>
          <Text style={styles.addRecentPicture}>
            Please add a recent picture
          </Text>
          <Image
            source={require("../assets/images/JStay-Logo-blue-shin7.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.materialButtonViolet11ColumnFiller}></View>
      <View style={styles.group1}>
        <View style={styles.materialButtonWithVioletText9Stack}>
          <MaterialButtonWithVioletText9
          onPress={props.onNext}
            style={styles.materialButtonWithVioletText9}
          ></MaterialButtonWithVioletText9>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon10}
          ></IoniconsIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialButtonViolet11: {
    height: 62,
    borderRadius: 10,
    marginTop: 525,
    marginLeft: 39,
    marginRight: 30
  },
  materialButtonWithVioletText11: {
    width: 101,
    height: 36,
    opacity: 0.46,
    marginTop: 30,
    marginLeft: 180
  },
  rect1: {
    width: 424,
    height: 85,
    backgroundColor: "rgba(0,88,155,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(2,172,235,1)",
    shadowOpacity: 0.22,
    flexDirection: "row",
    marginTop: -653
  },
  button: {
    width: 29,
    height: 40
  },
  icon12: {
    color: "rgba(2,172,235,1)",
    fontSize: 40
  },
  createAnAccount2: {
    color: "rgba(2,172,235,1)",
    fontSize: 25,
    fontFamily: "roboto-bold",
    textAlign: "center",
    marginLeft: 74,
    marginTop: 8
  },
  buttonRow: {
    height: 40,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 40
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginRight: 38,
    marginTop: 14
  },
  addRecentPicture: {
    top: 140,
    left: 77,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    right: 81,
    fontSize: 20,
    fontFamily: "roboto-bold",
    textAlign: "center"
  },
  image1: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  addRecentPictureStack: {
    height: 168,
    marginTop: 52,
    marginLeft: 10
  },
  rect2: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 36,
    marginLeft: 143
  },
  materialButtonViolet11Column: {
    marginLeft: -10
  },
  materialButtonViolet11ColumnFiller: {
    flex: 1
  },
  group1: {
    width: 154,
    height: 36,
    alignSelf: "flex-end",
    marginBottom: 30,
    marginRight: 20
  },
  materialButtonWithVioletText9: {
    top: 0,
    left: 0,
    width: 154,
    height: 36,
    position: "absolute"
  },
  icon10: {
    top: 8,
    left: 139,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 20
  },
  materialButtonWithVioletText9Stack: {
    width: 154,
    height: 36
  }
});

export default ProfilePicture;
