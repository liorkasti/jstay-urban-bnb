import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Center } from "@builderx/utils";
import Icon from "react-native-vector-icons/FontAwesome";

function MaterialButtonShare4(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Center>
        <Icon name="trash-o" style={styles.icon1}></Icon>
      </Center>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(2,172,235,1)",
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
  icon1: {
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 25
  }
});

export default MaterialButtonShare4;
