import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function SearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group2}>
        <TextInput
          placeholder="Location, neighbourhood, or address"
          style={styles.textInput42}
        ></TextInput>
        <TouchableOpacity style={styles.button1082}>
          <FontAwesomeIcon
            name="sliders"
            style={styles.icon252}
          ></FontAwesomeIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1072}>
          <IoniconsIcon name="ios-search" style={styles.icon352}></IoniconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group2: {
    top: 0,
    left: 0,
    height: 39,
    position: "absolute",
    right: 0
  },
  textInput42: {
    top: 0,
    left: "0%",
    width: "100%",
    height: 39,
    padding: 10,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  button1082: {
    top: 8,
    left: "89.62%",
    height: 23,
    position: "absolute",
    right: 12
  },
  icon252: {
    top: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24,
    left: "0.01%"
  },
  button1072: {
    top: 9,
    left: 10,
    width: 22,
    height: 21,
    position: "absolute"
  },
  icon352: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    left: "-0.01%",
    width: 22,
    height: 21
  }
});

export default SearchBar;
