import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialSearchBar1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1Filler}></View>
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
    shadowRadius: 1.2,
    flexDirection: "row"
  },
  rect1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect1: {
    backgroundColor: "rgba(230,230,230,1)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 49,
    width: 367,
    alignSelf: "flex-end",
    marginRight: 4,
    marginBottom: 4
  },
  inputStyle: {
    width: 139,
    height: 51,
    color: "#000",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    marginLeft: 11,
    marginTop: -1
  }
});

export default MaterialSearchBar1;
