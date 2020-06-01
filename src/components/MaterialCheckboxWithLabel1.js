import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Center } from "@builderx/utils";

function MaterialCheckboxWithLabel1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Center>
        <Text style={styles.kitchen}>Kitchen</Text>
      </Center>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  kitchen: {
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default MaterialCheckboxWithLabel1;
