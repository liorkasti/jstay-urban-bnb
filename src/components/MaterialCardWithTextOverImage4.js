import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function MaterialCardWithTextOverImage4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../images/cardImage3.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.jerusalem}>Jerusalem</Text>
          <Text style={styles.stayIn}>Stay in</Text>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>Stays</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.actionText2}>Hotels</Text>
          </TouchableOpacity>
        </View>
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
    overflow: "hidden",
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    height: "100%"
  },
  cardBody: {
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  jerusalem: {
    width: 199,
    height: 36,
    color: "rgba(230,230,230,1)",
    paddingBottom: 12,
    fontSize: 35,
    fontFamily: "roboto-700"
  },
  stayIn: {
    width: 49,
    height: 16,
    color: "rgba(230,230,230,1)",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-700",
    lineHeight: 16
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
    color: "rgba(230,230,230,1)",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    color: "rgba(230,230,230,1)",
    opacity: 0.9,
    fontSize: 14
  }
});

export default MaterialCardWithTextOverImage4;
