import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function HeaderBarLight(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}></View>
      <Text style={styles.bookThisStay}>{props.text2 || "Book This Stay"}</Text>
      <TouchableOpacity style={styles.button2}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
      </TouchableOpacity>
      <Text style={styles.bsd}>{props.text2 || "bsd"}</Text>
      <TouchableOpacity style={styles.button3}>
        <Image
          source={require("../assets/images/jstay-icon-inverted8.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </TouchableOpacity>
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
    right: 0
  },
  bookThisStay: {
    top: 48,
    left: 0,
    width: "100%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  button2: {
    top: 40,
    left: 6,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  bsd: {
    top: 14,
    left: 360,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  button3: {
    top: 30,
    width: 62,
    height: 62,
    position: "absolute",
    right: 16
  },
  image1: {
    top: 0,
    left: "-0.01%",
    height: 62,
    position: "absolute",
    right: 0
  }
});

export default HeaderBarLight;
