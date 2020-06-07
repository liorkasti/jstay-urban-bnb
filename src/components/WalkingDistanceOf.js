import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function WalkingDistanceOf(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum12}></Text>
      <Text style={styles.kosherRestaurants}>Kosher Restaurants</Text>
      <MaterialCheckbox1 style={styles.materialCheckbox53}></MaterialCheckbox1>
      <Text style={styles.walkingDistance1}>Within Walking Distance of..</Text>
      <Text style={styles.synagogues}>Synagogues</Text>
      <MaterialCheckbox1 style={styles.materialCheckbox52}></MaterialCheckbox1>
      <TouchableOpacity style={styles.button8}>
        <Text style={styles.jewishCommunity}>Jewish Community</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox51}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button9}>
        <Text style={styles.kosherShops}>Kosher Shops</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox54}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.womensMikvah}>Women&#39;s Mikvah</Text>
      <MaterialCheckbox1 style={styles.materialCheckbox55}></MaterialCheckbox1>
      <Text style={styles.mensMikvah2}>Men&#39;s Mikvah</Text>
      <MaterialCheckbox1 style={styles.materialCheckbox56}></MaterialCheckbox1>
      <Text style={styles.loremIpsum13}></Text>
      <Text style={styles.loremIpsum14}>
        My stay is within a 10 minute walk of the following
      </Text>
      <Text style={styles.jewishDaycare}>Jewish Daycare</Text>
      <MaterialCheckbox1 style={styles.materialCheckbox562}></MaterialCheckbox1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum12: {
    top: 137,
    left: 30,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  kosherRestaurants: {
    top: 131,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox53: {
    top: 121,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  walkingDistance1: {
    top: 0,
    left: 7,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  synagogues: {
    top: 91,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox52: {
    top: 81,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button8: {
    top: 41,
    left: 0,
    width: 319,
    height: 40,
    position: "absolute"
  },
  jewishCommunity: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox51: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button9: {
    top: 161,
    left: 0,
    width: 163,
    height: 40,
    position: "absolute"
  },
  kosherShops: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox54: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  womensMikvah: {
    top: 211,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox55: {
    top: 201,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  mensMikvah2: {
    top: 251,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox56: {
    top: 241,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum13: {
    top: 94,
    left: 174,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum14: {
    top: 25,
    left: 7,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  jewishDaycare: {
    top: 291,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox562: {
    top: 281,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  }
});

export default WalkingDistanceOf;
