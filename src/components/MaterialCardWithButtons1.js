import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithButtons1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage5.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.leftBtn}>
          <MaterialCommunityIconsIcon
            name="clipboard-check-outline"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBtn}>
          <MaterialCommunityIconsIcon
            name="book"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightBtn}>
          <MaterialCommunityIconsIcon
            name="share"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 185,
    flex: 1,
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
    minHeight: 180
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8
  },
  leftBtn: {
    padding: 8
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  centerBtn: {
    padding: 8
  },
  icon2: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  rightBtn: {
    padding: 8
  },
  icon3: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  }
});

export default MaterialCardWithButtons1;
