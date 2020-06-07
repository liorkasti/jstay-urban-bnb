import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function EmailDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon6Row}>
        <Icon name="envelope" style={styles.icon6}></Icon>
        <Text style={styles.sholliKestecher2}>sholliber@yahoo.co.uk</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon6: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  sholliKestecher2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 12,
    marginTop: 2
  },
  icon6Row: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 141,
    marginTop: 4
  }
});

export default EmailDetails;
