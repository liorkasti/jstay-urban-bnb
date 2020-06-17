import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function UnreadMessage(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <View style={styles.rect22}></View>
      <Image
        source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
        resizeMode="stretch"
        style={styles.image22}
      ></Image>
      {/* <Text style={styles.nachum}>Nachum</Text> */}
      <Text style={styles.nachum}>{props.from}</Text>
      <Icon name="md-mail-open" style={styles.icon22}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex:1,
  },
  rect22: {
    top: 0,
    left: 0,
    height: 60,
    backgroundColor: "rgba(230,230,230,0.41)",
    position: "absolute",
    shadowOpacity: 0.01,
    right: 0,
  },
  image22: {
    top: "8.02%",
    left: 22,
    width: 50,
    height: 50,
    position: "absolute",
    borderRadius: 100
  },
  nachum: {
    top: "26.88%",
    left: 85,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    zIndex: 20
  },
  icon22: {
    top: "26.15%",
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    right: 36,
  }
});

export default UnreadMessage;
