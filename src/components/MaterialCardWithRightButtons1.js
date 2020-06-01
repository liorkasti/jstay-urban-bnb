import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithRightButtons1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Cottage.jpg")}
        resizeMode="cover"
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.leftBtn}>
          <MaterialCommunityIconsIcon
            name="settings-outline"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBtn}>
          <MaterialCommunityIconsIcon
            name="calendar-edit"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightBtn}>
          <MaterialCommunityIconsIcon
            name="delete-forever"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  buttonGroup: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 8
  },
  leftBtn: {
    marginRight: 8,
    marginLeft: 8,
    padding: 8
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  centerBtn: {
    marginRight: 8,
    marginLeft: 8,
    padding: 8
  },
  icon2: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  rightBtn: {
    marginRight: 8,
    marginLeft: 8,
    padding: 8
  },
  icon3: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  }
});

export default MaterialCardWithRightButtons1;
