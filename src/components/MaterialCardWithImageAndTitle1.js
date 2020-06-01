import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialCardWithImageAndTitle1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>The Cottage</Text>
          <Text style={styles.subtitleStyle}>Make chabges to my stay</Text>
        </View>
        <Image
          source={require("../assets/images/Cottage.jpg")}
          resizeMode="stretch"
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>Edit stay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>Calendar</Text>
        </TouchableOpacity>
      </View>
      <Icon name="chevron-small-down" style={styles.icon1}></Icon>
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "rgba(0,88,155,1)",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    color: "rgba(0,88,155,1)",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  cardItemImagePlace: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    margin: 16
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    color: "rgba(0,88,155,1)",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    color: "rgba(0,88,155,1)",
    opacity: 0.9,
    fontSize: 14
  },
  icon1: {
    top: 830,
    left: 192,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  }
});

export default MaterialCardWithImageAndTitle1;
