import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialBasicFooter1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="home-heart"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activebtnWrapper}>
        <MaterialCommunityIconsIcon
          name="apple-safari"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.activeText}>My Stays</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon
          name="message-processing"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn2Text}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn3Text}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  btnWrapper1: {
    width: 94,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,

    textAlign: "center"
  },
  activebtnWrapper: {
    width: 94,
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 1,
    paddingTop: 5
  },
  activeText: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    paddingTop: 4,
    fontSize: 14,

    textAlign: "center"
  },
  btnWrapper2: {
    width: 94,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn2Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,

    textAlign: "center"
  },
  btnWrapper3: {
    width: 94,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn3Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,

    textAlign: "center"
  }
});

export default MaterialBasicFooter1;
