import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ProfileName(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.sholliKestecher}>Sholli Kestecher</Text>
      <Icon name="user" style={styles.icon2}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sholliKestecher: {
    top: 2,
    left: 33,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24
  }
});

export default ProfileName;
