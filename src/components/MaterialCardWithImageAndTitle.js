import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.theCottage}>The Cottage</Text>
          <Text style={styles.text}>
            Beautiful cozy cottage in central jerusalem..
          </Text>
        </View>
        <Image
          source={require("../assets/images/Cottage.jpg")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>View Stay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>Request to Book</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.actionButton3}>
        <Text style={styles.actionText22}>Remove Stay</Text>
      </TouchableOpacity>
      <Text style={styles.from000Night}>From: 0.00 $/Night</Text>
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
  theCottage: {
    color: "rgba(0,88,155,1)",
    paddingBottom: 12,
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  text: {
    color: "rgba(0,88,155,1)",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    width: "81.26%",
    height: 36,
    textAlign: "left"
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
    padding: 8,
    width: "22.41%"
  },
  actionText1: {
    color: "rgba(0,88,155,1)",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton2: {
    height: 36,
    padding: 8,
    width: "36.5%"
  },
  actionText2: {
    color: "rgba(0,88,155,1)",
    opacity: 0.9,
    fontSize: 14,
    textAlign: "center"
  },
  actionButton3: {
    height: 1,
    padding: 8
  },
  actionText22: {
    color: "rgba(0,88,155,1)",
    opacity: 0.9,
    fontSize: 14,
    textAlign: "center"
  },
  from000Night: {
    top: 108,
    left: 15,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontFamily: "roboto-700"
  }
});

export default MaterialCardWithImageAndTitle;
