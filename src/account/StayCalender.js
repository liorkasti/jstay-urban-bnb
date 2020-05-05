import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet12 from "../components/MaterialButtonViolet12";

function StayCalender(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
            <Text style={styles.bsD1}>BS&quot;D</Text>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.calender}>Calender</Text>
            </View>
          </View>
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
      <Text style={styles.blockDates}>Make sure your dates are correct</Text>
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}>
          Block or free up dates before publishing your stay, {"\n"}you can also
          edit calender after set-up is complete
        </Text>
        <Image
          source={require("../assets/images/calender_final.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <MaterialButtonViolet12
        style={styles.materialButtonViolet12}
      ></MaterialButtonViolet12>
      <Text style={styles.blockDates1}>
        That&#39;s it, you&#39;re all done!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  group1: {
    width: 426,
    height: 91,
    marginLeft: -6
  },
  rect1: {
    top: 0,
    left: 0,
    width: 426,
    height: 86,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.22,
    flexDirection: "row"
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginLeft: 360,
    marginTop: 14
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
  calender: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 128,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 162,
    marginLeft: -380,
    marginTop: 40
  },
  button3: {
    top: 30,
    left: 348,
    width: 62,
    height: 62,
    position: "absolute",
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
  rect1Stack: {
    width: 426,
    height: 92
  },
  blockDates: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 30,
    marginLeft: 30
  },
  loremIpsum1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  image2: {
    top: 15,
    left: 0,
    width: 350,
    height: 420,
    position: "absolute"
  },
  loremIpsum1Stack: {
    width: 350,
    height: 435,
    marginLeft: 30
  },
  materialButtonViolet12: {
    width: 360,
    height: 58,
    borderRadius: 10,
    marginTop: 94,
    marginLeft: 30
  },
  blockDates1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -123,
    marginLeft: 30
  }
});

export default StayCalender;
