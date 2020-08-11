import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function ReadMessage(props) {

  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <View style={styles.rect24}></View>
      <Image
        source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
        resizeMode="stretch"
        style={styles.image24}
      ></Image>
      {/* <Text style={styles.sholli14}>Sholli</Text> */}
      <Text style={styles.sholli14}>{props.from}</Text>
      <Icon name="md-mail-unread" style={styles.icon24}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect24: {
    top: 0,
    left: 0,
    height: 60,
    backgroundColor: "rgba(230,230,230,0.41)",
    position: "absolute",
    shadowOpacity: 0.01,
    right: 0
  },
  image24: {
    top: "8.02%",
    left: 22,
    width: 50,
    height: 50,
    position: "absolute",
    borderRadius: 100
  },
  sholli14: {
    top: "26.88%",
    left: 85,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  icon24: {
    top: 16,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    right: 35
  }
});

export default ReadMessage;
