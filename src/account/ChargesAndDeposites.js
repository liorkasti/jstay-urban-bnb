import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import HeaderBarLight from "../components/HeaderBarLight";
import RefundableTax from "../components/RefundableTax";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import CurrencyDropdownContainer from "../components/CurrencyDropdownContainer";

function ChargesAndDeposites(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bsD1Stack}>
        <Text style={styles.bsD1}>BS&quot;D</Text>
        <HeaderBarLight
          text2="Charges/Deposits"
          style={styles.headerBarLight1}
        ></HeaderBarLight>
      </View>
      <View style={styles.theCottage1Stack}>
        <Text style={styles.theCottage1}>
          Would you like to add deposit charges{"\n"}to your stay?
        </Text>
        <Text style={styles.loremIpsum1}></Text>
      </View>
      <Text style={styles.text1}>
        You will have the option to charge these fees until 7 days after guests
        check-out, afterwhich any uncharged fees will automatically be refunded
        to guests
      </Text>
      <RefundableTax text1="" style={styles.refundableTax}></RefundableTax>
      <View style={styles.group2}>
        <View style={styles.materialButtonWithVioletText2Row}>
          <MaterialButtonWithVioletText11
            style={styles.materialButtonWithVioletText2}
          ></MaterialButtonWithVioletText11>
          <MaterialButtonViolet6
            style={styles.materialButtonViolet4}
          ></MaterialButtonViolet6>
        </View>
      </View>
      <CurrencyDropdownContainer
        style={styles.currencyDropdownContainer}
      ></CurrencyDropdownContainer>
      <TextInput
        placeholder="e.g. guests must supply a coppy of their passport/visa"
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
      <RefundableTax
        text1="Security deposit"
        text2="Under what conditions can this charge be refunded?"
        textInput2="e.g. 100"
        style={styles.refundableTax1}
      ></RefundableTax>
      <TextInput
        placeholder="e.g. guests must keep to house rules for refund"
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
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  bsD1: {
    top: 15,
    left: 364,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  headerBarLight1: {
    top: 0,
    left: 0,
    height: 91,
    position: "absolute",
    right: 0
  },
  bsD1Stack: {
    height: 91,
    marginTop: -1,
    marginLeft: -10,
    marginRight: -2
  },
  theCottage1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  loremIpsum1: {
    top: 39,
    left: 2,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  theCottage1Stack: {
    width: 345,
    height: 40,
    marginTop: 171,
    marginLeft: 30
  },
  text1: {
    width: 330,
    height: 60,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 4,
    marginLeft: 30
  },
  refundableTax: {
    height: 127,
    marginTop: 9,
    marginLeft: 24,
    marginRight: 26
  },
  group2: {
    width: 235,
    height: 45,
    flexDirection: "row",
    marginTop: 322,
    marginLeft: 159
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    alignSelf: "flex-end",
    marginBottom: 3
  },
  materialButtonViolet4: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    marginLeft: 35
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    flex: 1
  },
  currencyDropdownContainer: {
    width: 254,
    height: 92,
    marginTop: -763,
    marginLeft: 36
  },
  textInput1: {
    width: 364,
    height: 80,
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
    marginTop: 304,
    marginLeft: 24
  },
  refundableTax1: {
    height: 108,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 26
  },
  textInput2: {
    width: 364,
    height: 80,
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
    marginTop: 1,
    marginLeft: 24
  }
});

export default ChargesAndDeposites;
