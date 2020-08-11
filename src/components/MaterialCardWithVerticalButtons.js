import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithVerticalButtons(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Cottage.jpg")}
        resizeMode="stretch"
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.body}>
        <TouchableOpacity style={styles.topBtn}>
          <MaterialCommunityIconsIcon
            name="heart"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBtn}>
          <MaterialCommunityIconsIcon
            name="book"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn}>
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
    backgroundColor: "#FFF",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    padding: 16,
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
    margin: 0,
    padding: 0,
    minWidth: 240,
    minHeight: 240
  },
  body: {
    padding: 8,
    paddingLeft: 16
  },
  topBtn: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  centerBtn: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8
  },
  icon2: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  bottomBtn: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8
  },
  icon3: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  }
});

export default MaterialCardWithVerticalButtons;
