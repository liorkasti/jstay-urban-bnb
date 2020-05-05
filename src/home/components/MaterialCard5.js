import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCard5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../../assets/images/7884c76e-dd6b-40f7-9957-711355f90456.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Local Stays</Text>
        <Text style={styles.subtitleStyle}>Check out local listings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 10,
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
  bodyContent: {
    backgroundColor: "rgba(15,15, 15,0)",
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "rgba(2,172,235,1)",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    color: "rgba(2,172,235,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialCard5;
