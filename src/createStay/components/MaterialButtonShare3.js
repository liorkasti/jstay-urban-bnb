import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonShare3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="home-heart" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "rgba(2,172,235,1)",
    fontFamily: "Roboto",
    fontSize: 40,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0
  }
});

export default MaterialButtonShare3;
