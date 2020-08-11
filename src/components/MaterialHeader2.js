import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialHeader2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <MaterialCommunityIconsIcon
          name="menu"
          style={styles.leftIcon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Jstay
        </Text>
      </View>
      <View style={styles.rightIconsWrapper}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIconsIcon
            name="magnify"
            style={styles.rightIcon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton2}>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={styles.rightIcon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11
  },
  leftIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  textWrapper: {
    left: 72,
    position: "absolute",
    bottom: 19
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-regular",
    lineHeight: 18
  },
  rightIconsWrapper: {
    top: 5,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 5
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  iconButton2: {
    padding: 11
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  }
});

export default MaterialHeader2;
