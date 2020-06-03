import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialButtonWithVioletText35 from "../components/MaterialButtonWithVioletText35";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialButtonWithVioletText36 from "../components/MaterialButtonWithVioletText36";
import MaterialButtonWithVioletText37 from "../components/MaterialButtonWithVioletText37";
import MaterialButtonWithVioletText38 from "../components/MaterialButtonWithVioletText38";
import MaterialButtonWithVioletText40 from "../components/MaterialButtonWithVioletText40";
import MaterialButtonWithVioletText42 from "../components/MaterialButtonWithVioletText42";
import MaterialButtonWithVioletText43 from "../components/MaterialButtonWithVioletText43";
import MaterialButtonWithVioletText44 from "../components/MaterialButtonWithVioletText44";
import MaterialButtonWithVioletText45 from "../components/MaterialButtonWithVioletText45";
import MaterialButtonWithVioletText47 from "../components/MaterialButtonWithVioletText47";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonWithVioletText57 from "../components/MaterialButtonWithVioletText57";
import MaterialButtonWithVioletText39 from "../components/MaterialButtonWithVioletText39";

function EditMyListings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonWithVioletText35Stack}>
        <MaterialButtonWithVioletText35
          style={styles.materialButtonWithVioletText35}
        ></MaterialButtonWithVioletText35>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon3}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText36Stack}>
        <MaterialButtonWithVioletText36
          style={styles.materialButtonWithVioletText36}
        ></MaterialButtonWithVioletText36>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon4}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText37Stack}>
        <MaterialButtonWithVioletText37
          style={styles.materialButtonWithVioletText37}
        ></MaterialButtonWithVioletText37>
        <MaterialButtonWithVioletText38
          style={styles.materialButtonWithVioletText38}
        ></MaterialButtonWithVioletText38>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon5}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon6}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText40Stack}>
        <MaterialButtonWithVioletText40
          style={styles.materialButtonWithVioletText40}
        ></MaterialButtonWithVioletText40>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon8}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText42Stack}>
        <MaterialButtonWithVioletText42
          style={styles.materialButtonWithVioletText42}
        ></MaterialButtonWithVioletText42>
        <MaterialButtonWithVioletText43
          style={styles.materialButtonWithVioletText43}
        ></MaterialButtonWithVioletText43>
        <MaterialButtonWithVioletText44
          style={styles.materialButtonWithVioletText44}
        ></MaterialButtonWithVioletText44>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon9}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon10}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon11}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText45Stack}>
        <MaterialButtonWithVioletText45
          style={styles.materialButtonWithVioletText45}
        ></MaterialButtonWithVioletText45>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon13}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText47Stack}>
        <MaterialButtonWithVioletText47
          style={styles.materialButtonWithVioletText47}
        ></MaterialButtonWithVioletText47>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon14}
        ></FontAwesomeIcon>
      </View>
      <Text style={styles.text}>
        Select which area you would like to make changes to
      </Text>
      <Text style={styles.addRecentPicture1}>Permanently delete this stay</Text>
      <View style={styles.group3}>
        <View style={styles.group2}>
          <View style={styles.group1}>
            <View style={styles.rect106}>
              <Text style={styles.bsD1}>BS&quot;D</Text>
              <View style={styles.button4Row}>
                <TouchableOpacity style={styles.button4}>
                  <TouchableOpacity style={styles.button5}>
                    <EntypoIcon
                      name="chevron-left"
                      style={styles.icon1}
                    ></EntypoIcon>
                  </TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.editStay}>Edit Stay</Text>
                <View style={styles.button3Stack}>
                  <TouchableOpacity style={styles.button3}></TouchableOpacity>
                  <Image
                    source={require("../assets/images/jstay-icon-light-dark-blue.png")}
                    resizeMode="contain"
                    style={styles.image1}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.materialButtonWithVioletText57Stack}>
        <MaterialButtonWithVioletText57
          style={styles.materialButtonWithVioletText57}
        ></MaterialButtonWithVioletText57>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon12}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText39Stack}>
        <MaterialButtonWithVioletText39
          style={styles.materialButtonWithVioletText39}
        ></MaterialButtonWithVioletText39>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon7}
        ></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText58Stack}>
        <MaterialButtonWithVioletText38
          caption="Listing Setup"
          style={styles.materialButtonWithVioletText58}
        ></MaterialButtonWithVioletText38>
        <FontAwesomeIcon
          name="exclamation"
          style={styles.icon2}
        ></FontAwesomeIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialButtonWithVioletText35: {
    top: 0,
    height: 36,
    position: "absolute",
    left: 0,
    right: 0
  },
  icon3: {
    top: 10,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText35Stack: {
    height: 36,
    marginTop: 221
  },
  materialButtonWithVioletText36: {
    top: 0,
    height: 36,
    position: "absolute",
    left: 0,
    right: 0
  },
  icon4: {
    top: 9,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText36Stack: {
    height: 36
  },
  materialButtonWithVioletText37: {
    top: 0,
    height: 36,
    position: "absolute",
    left: 0,
    right: 0
  },
  materialButtonWithVioletText38: {
    top: 32,
    height: 36,
    position: "absolute",
    left: 0,
    right: 0
  },
  icon5: {
    top: 8,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  icon6: {
    top: 38,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText37Stack: {
    height: 68
  },
  materialButtonWithVioletText40: {
    top: 0,
    height: 36,
    position: "absolute",
    left: 0,
    right: 0
  },
  icon8: {
    top: 9,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText40Stack: {
    height: 36,
    marginTop: 36
  },
  materialButtonWithVioletText42: {
    top: 0,
    left: 0,
    height: 36,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText43: {
    top: 34,
    left: 0,
    height: 36,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText44: {
    top: 69,
    left: 0,
    height: 36,
    position: "absolute",
    right: 0
  },
  icon9: {
    top: 8,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  icon10: {
    top: 43,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  icon11: {
    top: 78,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText42Stack: {
    height: 105
  },
  materialButtonWithVioletText45: {
    top: 0,
    left: 0,
    height: 36,
    position: "absolute",
    right: 0
  },
  icon13: {
    top: 7,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText45Stack: {
    height: 36,
    marginTop: 36
  },
  materialButtonWithVioletText47: {
    top: 0,
    left: 0,
    height: 36,
    position: "absolute",
    right: 0
  },
  icon14: {
    top: 6,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText47Stack: {
    height: 36
  },
  text: {
    width: 304,
    height: 40,
    color: "rgba(2,172,235,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: -526,
    marginLeft: 29
  },
  addRecentPicture1: {
    height: 28,
    color: "rgba(2,172,235,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    textAlign: "center",
    width: 192,
    marginTop: 525,
    alignSelf: "center"
  },
  group3: {
    height: 91,
    marginTop: -713
  },
  group2: {
    height: 91
  },
  group1: {
    height: 91
  },
  rect106: {
    height: 91,
    borderColor: "rgba(2,172,235,1)",
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
    height: 40,
    marginTop: 12
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(2,172,235,1)",
    fontSize: 40
  },
  editStay: {
    color: "rgba(2,172,235,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 96,
    marginTop: 20
  },
  button3: {
    top: 2,
    left: 59,
    width: 62,
    height: 62,
    position: "absolute"
  },
  image1: {
    top: 0,
    width: 70,
    height: 61,
    position: "absolute",
    right: 51
  },
  button3Stack: {
    width: 121,
    height: 64,
    marginLeft: 59
  },
  button4Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 6,
    marginRight: -50
  },
  materialButtonWithVioletText57: {
    top: 0,
    left: 0,
    height: 36,
    position: "absolute",
    right: 0
  },
  icon12: {
    top: 8,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText57Stack: {
    height: 36,
    marginTop: 447
  },
  materialButtonWithVioletText39: {
    top: 0,
    height: 36,
    position: "absolute",
    left: 0,
    right: 0
  },
  icon7: {
    top: 10,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText39Stack: {
    height: 36,
    marginTop: -213
  },
  materialButtonWithVioletText58: {
    top: 0,
    height: 36,
    position: "absolute",
    left: 0,
    right: 0
  },
  icon2: {
    top: 6,
    left: 324,
    position: "absolute",
    color: "rgba(225,14,14,1)",
    fontSize: 20
  },
  materialButtonWithVioletText58Stack: {
    height: 36,
    marginTop: -212
  }
});

export default EditMyListings;
