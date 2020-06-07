import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaxStayDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon11Row}>
        <Icon name="man" style={styles.icon11}></Icon>
        <Text style={styles.sleepsUpTo4}>Sleeps up to: 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon11: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  sleepsUpTo4: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 5,
    marginTop: 8
  },
  icon11Row: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  }
});

export default MaxStayDetails;
