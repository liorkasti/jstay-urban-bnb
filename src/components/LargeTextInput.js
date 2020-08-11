import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function LargeTextInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder={
          props.textInput1 || "e.g. Difficult staircase, pets on property"
        }
        placeholderTextColor="rgba(177,177,177,1)"
        autoCapitalize="sentences"
        autoCorrect={true}
        maxLength={200}
        multiline={true}
        returnKeyType="done"
        inlineImagePadding={0}
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
    width: "100%",
    height: 132,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "roboto-regular",
    textAlign: "left"
  }
});

export default LargeTextInput;
