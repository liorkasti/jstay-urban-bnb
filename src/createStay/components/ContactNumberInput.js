import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialSpinner from "./MaterialSpinner";

function ContactNumberInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.meetAndGreet2}>
        Contact number for arriving guests
      </Text>
      <Text style={styles.pricesFluctuate5}>
        Add a contact number for guests to call when they arrive (can be number
        for the host or a management team)
      </Text>
      <View style={styles.textInput6Row}>
        <TextInput
          placeholder="+972"
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
          style={styles.textInput6}
        ></TextInput>
        <TextInput
          placeholder="50 000 0000"
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
          style={styles.textInput7}
        ></TextInput>
        <MaterialSpinner style={styles.materialSpinner}></MaterialSpinner>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  meetAndGreet2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  pricesFluctuate5: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1,
    marginRight: 34
  },
  textInput6: {
    width: 70,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left",
    marginTop: 1
  },
  textInput7: {
    width: 234,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left",
    marginLeft: 10
  },
  materialSpinner: {
    width: 22,
    height: 22,
    marginTop: 9
  },
  textInput6Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 7
  }
});

export default ContactNumberInput;
