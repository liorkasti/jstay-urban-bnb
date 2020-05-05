import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Center } from "@builderx/utils";

function CupertinoStepper1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={[
          styles.leftStepper,
          {
            backgroundColor: props.decrement
              ? "rgba(0, 122, 255,0.1)"
              : "#08aceb"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="minus"
          style={styles.leftIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rightStepper,
          {
            backgroundColor: props.increment
              ? "rgba(0, 122, 255,0.1)"
              : "#08aceb"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="plus"
          style={styles.rightIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <Center vertical>
        <Text style={styles.loremIpsum}>0</Text>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#08aceb",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 0
  },
  leftStepper: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  leftIcon: {
    fontSize: 30,
    color: "rgba(0,88,155,1)",
    paddingRight: 23,
    width: 53,
    height: 30
  },
  rightStepper: {
    flex: 1,
    alignItems: "center",
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  rightIcon: {
    fontSize: 30,
    color: "rgba(0,88,155,1)",
    paddingLeft: 23,
    width: 53,
    height: 30
  },
  loremIpsum: {
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    left: 43
  }
});

export default CupertinoStepper1;
