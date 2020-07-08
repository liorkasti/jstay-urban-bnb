import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import RefundableTax from "../components/RefundableTax";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import CurrencyDropdownContainer from "../components/CurrencyDropdownContainer";

function ChargesAndDeposites(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.theCottage1}>
        Would you like to add deposit charges to your stay?
      </Text>
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}></Text>
        <Text style={styles.text1}>
          You will have the option to charge these fees until 7 days after
          guests check-out, after which any uncharged fees will automatically be
          refunded to guests
        </Text>
      </View>
      <RefundableTax text1="" style={styles.refundableTax}></RefundableTax>
      <View style={styles.group2}>
        <View style={styles.materialButtonWithVioletText2Row}>
          <MaterialButtonWithVioletText11
            style={styles.materialButtonWithVioletText2}
          ></MaterialButtonWithVioletText11>
          <MaterialButtonViolet6 onPress={props.onNext}
            style={styles.materialButtonViolet4}
          ></MaterialButtonViolet6>
        </View>
      </View>
      <CurrencyDropdownContainer
        style={styles.currencyDropdownContainer}
      ></CurrencyDropdownContainer>
      <TextInput
        placeholder="e.g. guests must supply a copy of their passport/visa"
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
    top: 14,
    left: 354,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  group3: {
    top: 0,
    left: 0,
    height: 91,
    position: "absolute",
    right: 0
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7
  },
  bsD12: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 13,
    marginRight: 38
  },
  button4: {
    width: 29,
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  chargesDeposites: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 55,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 10
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row"
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4RowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  },
  bsD1Stack: {
    height: 91
  },
  theCottage1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 128,
    marginLeft: 30,
    marginRight: 60
  },
  loremIpsum1: {
    top: 35,
    left: 2,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  text1: {
    top: 0,
    left: 0,
    width: 330,
    height: 60,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum1Stack: {
    width: 330,
    height: 60,
    marginTop: 11,
    marginLeft: 30
  },
  refundableTax: {
    height: 127,
    marginTop: 24,
    marginLeft: 24,
    marginRight: 26
  },
  group2: {
    width: 235,
    height: 45,
    flexDirection: "row",
    marginTop: 337,
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
    marginTop: -766,
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
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginTop: 297,
    marginLeft: 24
  },
  refundableTax1: {
    height: 108,
    marginTop: 26,
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
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginTop: 20,
    marginLeft: 24
  }
});

export default ChargesAndDeposites;
