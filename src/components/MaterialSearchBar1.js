import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialSearchBar1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TextInput
          placeholder="Search messages"
          style={styles.inputStyle}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    top: "7.14%",
    left: "1.07%",
    backgroundColor: "rgba(230,230,230,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 4,
    bottom: 4,
    borderRadius: 10
  },
  inputStyle: {
    top: -1,
    left: 11,
    width: "37.87%",
    height: 51,
    color: "#000",
    position: "absolute",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialSearchBar1;
