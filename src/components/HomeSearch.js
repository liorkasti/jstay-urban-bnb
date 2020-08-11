import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function HomeSearch(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.text}>Location, neighbourhood, or address</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    top: -2,
    left: -1,
    width: 320,
    height: 46,
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3
  },
  text: {
    top: 0,
    left: "0%",
    width: "100%",
    height: 46,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    fontFamily: "roboto-regular",
    letterSpacing: 0,
    textAlign: "center"
  }
});

export default HomeSearch;
