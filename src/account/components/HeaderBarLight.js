import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function HeaderBarLight(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.bsd}>{props.text2 || "bsd"}</Text>
          <View style={styles.bookThisStayStack}>
            <Text style={styles.bookThisStay}>
              {props.text2 || "Book This Stay"}
            </Text>
            <TouchableOpacity style={styles.button2}>
              <Icon name="chevron-left" style={styles.icon1}></Icon>
            </TouchableOpacity>
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
  );
}

const styles = StyleSheet.create({
  container: {},
  rect1: {
    top: 0,
    left: 0,
    height: 86,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.22
  },
  bsd: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginTop: 14,
    marginLeft: 360
  },
  bookThisStay: {
    top: 8,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    right: 0
  },
  button2: {
    top: 0,
    left: 6,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  bookThisStayStack: {
    height: 40,
    marginTop: 14
  },
  button3: {
    top: 30,
    width: 62,
    height: 62,
    position: "absolute",
    right: 16,
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
    height: 92
  }
});

export default HeaderBarLight;
