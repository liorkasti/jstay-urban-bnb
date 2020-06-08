import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function SearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group2}>
        <View style={styles.textInput42Stack}>
          <TextInput
            onFocus={() => { props.onPress() }}
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
            <IoniconsIcon
              name="ios-search"
              style={styles.icon352}
            ></IoniconsIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group2: {
    height: "10%",
    // position: "absolute",
    alignItems: "center"
  },
  textInput42: {
    top: 0,
    width: 290,
    height: "100%",
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    // position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    fontFamily: "roboto-regular",
    fontSize: 12,
    textAlign: "center",
  },
  button1082: {
    top: 8,
    height: 23,
    position: "absolute",
    right: 12,
    width: 21,
    // right: "12%",

  },
  icon252: {
    color: "rgba(128,128,128,1)",
    fontSize: 24
  },
  button1072: {
    top: 9,
    left: 10,
    width: 22,
    height: 21,
    position: "absolute",
    // left: "13%",
  },
  icon352: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    width: 22,
    height: 21
  },
  textInput42Stack: {
    height: 39
  }
});

export default SearchBar;
