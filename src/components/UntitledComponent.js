import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Write a short description about your stay"
        placeholderTextColor="rgba(177,177,177,1)"
        autoCapitalize="sentences"
        autoCorrect={true}
        maxLength={200}
        numberOfLines={4}
        returnKeyLabel="Save"
        spellCheck={true}
        style={styles.textInput2}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput2: {
    top: 0,
    left: "0%",
    width: 221,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular",
    textAlign: "left"
  }
});

export default UntitledComponent;
