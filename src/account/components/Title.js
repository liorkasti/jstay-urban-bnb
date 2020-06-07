import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Title(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon8Row}>
        <Icon name="intersex" style={styles.icon8}></Icon>
        <Text style={styles.text1}>Mr</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon8: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  text1: {
    width: 32,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 14,
    marginTop: 2
  },
  icon8Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: -52
  }
});

export default Title;
