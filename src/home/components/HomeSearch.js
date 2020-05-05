import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function HomeSearch(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button3}>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Location, neighbourhood, or address"
            placeholderTextColor="rgba(177,177,177,1)"
            returnKeyType="search"
            returnKeyLabel="Search"
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity style={styles.button2}>
            <FontAwesomeIcon
              name="sliders"
              style={styles.icon2}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4}>
            <IoniconsIcon name="ios-search" style={styles.icon3}></IoniconsIcon>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button3: {
    width: 319,
    height: 46
  },
  textInput: {
    top: 0,
    left: 0,
    height: 46,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    fontFamily: "roboto-regular",
    letterSpacing: 0,
    textAlign: "center",
    right: 0
  },
  button2: {
    top: 11,
    left: 283,
    width: 21,
    height: 23,
    position: "absolute"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 24
  },
  button4: {
    top: 11,
    left: 19,
    width: 22,
    height: 21,
    position: "absolute"
  },
  icon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    width: 22,
    height: 21
  },
  textInputStack: {
    height: 46
  }
});

export default HomeSearch;
