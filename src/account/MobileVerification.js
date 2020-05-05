import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialButtonWithVioletText17 from "../components/MaterialButtonWithVioletText17";
import HeaderBarLight from "../components/HeaderBarLight";

function MobileVerification(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.whatAmenities1}>Please varify contact number</Text>
      <View style={styles.textInput1Row}>
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
          style={styles.textInput1}
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
          style={styles.textInput2}
        ></TextInput>
      </View>
      <TextInput
        placeholder="000000"
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
        style={styles.textInput3}
      ></TextInput>
      <Text style={styles.loremIpsum1}>
        Sent via SMS to number you have provided
      </Text>
      <MaterialButtonWithVioletText17
        style={styles.materialButtonWithVioletText17}
      ></MaterialButtonWithVioletText17>
      <Text style={styles.pricesFluctuate1}>
        Add a contact number for guests to call when they arrive (can be a
        number for host or a management team)
      </Text>
      <Text style={styles.didNotRecieveSms}>Did not recieve SMS</Text>
      <HeaderBarLight
        text2="Verification"
        style={styles.headerBarLight}
      ></HeaderBarLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  whatAmenities1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 120,
    marginLeft: 40
  },
  textInput1: {
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
    textAlign: "left"
  },
  textInput2: {
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
  textInput1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 196,
    marginLeft: 40,
    marginRight: 60
  },
  textInput3: {
    width: 80,
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
    marginTop: -206,
    marginLeft: 40
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -67,
    marginLeft: 40
  },
  materialButtonWithVioletText17: {
    width: 121,
    height: 36,
    marginTop: 220,
    marginLeft: 250
  },
  pricesFluctuate1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -125,
    marginLeft: 40
  },
  didNotRecieveSms: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -51,
    marginLeft: 40,
    marginRight: 104
  },
  headerBarLight: {
    width: 426,
    height: 91,
    marginTop: -285,
    marginLeft: -6
  }
});

export default MobileVerification;
