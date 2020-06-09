import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialButtonViolet10 from "../components/MaterialButtonViolet10";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import Icon from "react-native-vector-icons/Entypo";

function StayPictures(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum4}>
        Show guests what your stay looks like
      </Text>
      <Text style={styles.loremIpsum6}>
        Adding clear and bright pictures will increase chances of stay bookings
      </Text>
      <View style={styles.materialButtonViolet10Stack}>
        <MaterialButtonViolet10
          style={styles.materialButtonViolet10}
        ></MaterialButtonViolet10>
        <Image
          source={require("../assets/images/Cottage_21.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/Cottage2.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/Cottage_21.jpg")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Image
          source={require("../assets/images/Cottage2.jpg")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <Image
          source={require("../assets/images/Cottage_21.jpg")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <Image
          source={require("../assets/images/Cottage2.jpg")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
        <Image
          source={require("../assets/images/Cottage_21.jpg")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
        <Image
          source={require("../assets/images/Cottage2.jpg")}
          resizeMode="contain"
          style={styles.image8}
        ></Image>
      </View>
      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet11}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.pictures}>Pictures</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image1Filler}></View>
              <Image
                source={require("../assets/images/jstay-icon-inverted8.png")}
                resizeMode="contain"
                style={styles.image1}
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
  loremIpsum4: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 115,
    marginLeft: 33
  },
  loremIpsum6: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 5,
    marginLeft: 35,
    marginRight: 59
  },
  materialButtonViolet10: {
    top: 0,
    left: 1,
    height: 44,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    borderRadius: 10,
    right: 2
  },
  image: {
    top: 39,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image2: {
    top: 39,
    left: 192,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image3: {
    top: 174,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image4: {
    top: 174,
    left: 192,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image5: {
    top: 309,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image6: {
    top: 309,
    left: 192,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image7: {
    top: 444,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image8: {
    top: 444,
    left: 192,
    width: 150,
    height: 150,
    position: "absolute"
  },
  materialButtonViolet10Stack: {
    height: 594,
    marginTop: 15,
    marginLeft: 34,
    marginRight: 38
  },
  materialButtonWithVioletText1: {
    height: 36,
    opacity: 0.46,
    flex: 1,
    marginRight: 49,
    marginTop: 4
  },
  materialButtonViolet11: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 162,
    marginRight: 3
  },
  group1: {
    height: 91,
    marginTop: -864
  },
  rect: {
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
  pictures: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 126,
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

export default StayPictures;
