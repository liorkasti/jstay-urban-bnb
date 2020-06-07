import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function PhoneDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon7Row}>
        <Icon name="phone" style={styles.icon7}></Icon>
        <Text style={styles.text2}>0522339278</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  text2: {
    width: 115,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 14,
    marginTop: 2
  },
  icon7Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 234
  }
});

export default PhoneDetails;
