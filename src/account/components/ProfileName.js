import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ProfileName(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon2Row}>
        <Icon name="user" style={styles.icon2}></Icon>
        <Text style={styles.sholliKestecher}>Sholli Kestecher</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  sholliKestecher: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginLeft: 16,
    marginTop: 2
  },
  icon2Row: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  }
});

export default ProfileName;
