import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import EmailInput from "../components/EmailInput";
import Icon from "react-native-vector-icons/Feather";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import ReEnterPassword from "../components/ReEnterPassword";
import { Center } from "@builderx/utils";
import HeaderBarDark from "../components/HeaderBarDark";

import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
// import HomeButton from "../components/HomeButton";
// import SkipButton from "../components/SkipButton";
import UpdatesCheckBox from "../components/UpdatesCheckBox";

function AccountDetails(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(0,88,155,1)" />
      <View style={styles.emailInputColumn}>
        
        <EmailInput style={styles.emailInput}></EmailInput>
        <View style={styles.group}>
          <Icon name={props.icon1Name || "lock"} style={styles.icon4}></Icon>
          <MaterialRightIconTextbox1
            text1="password"
            style={styles.materialRightIconTextbox1}
          ></MaterialRightIconTextbox1>
        </View>
        <ReEnterPassword style={styles.reEnterPassword}></ReEnterPassword>

        <View style={styles.textStack}>
          <Center horizontal>
            <Text style={styles.text}>Account details</Text>
            <Image
              source={require("../assets/images/JStay-Logo-blue-shin7.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </Center>
        </View>

       

      </View>
      <View style={styles.emailInputColumnFiller}></View>
      <View>
        {/* <NextButton style={styles.nextButton}></NextButton> */}
        <TouchableOpacity style={styles.button2}>
          <UpdatesCheckBox style={styles.updatesCheckBox}>
          </UpdatesCheckBox>
        </TouchableOpacity>
      </View>

      <View style={styles.materialIconTextboxColumnFiller} />
      <NextButton onPress={props.onNext} style={styles.nextButton1} />
      <BackButton onPress={props.onBack} style={styles.onBack} />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)",
    // width: "100%"
  },
  emailInput: {
    height: 43,
    marginTop: 373,
    marginLeft: 23,
    marginRight: 27
  },
  group: {
    height: 43,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 33,
    marginRight: 27
  },
  icon4: {
    color: "rgba(177,177,177,1)",
    fontSize: 23,
    marginTop: 13
  },
  materialRightIconTextbox1: {
    height: 43,
    flex: 1,
    marginLeft: 17,
    zIndex: 10
  },
  reEnterPassword: {
    height: 43,
    marginTop: 7,
    marginLeft: 33,
    marginRight: 27
  },
  text: {
    top: 146,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  image3: {
    top: 0,
    height: 150,
    position: "absolute",
  },
  textStack: {
    height: 170,
    marginTop: -383
  },
  group2: {
    height: 90,
    marginTop: -307,
  },
  headerBarDark1: {
    height: 90,
    position: "absolute",
    right: 0,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 0,
    borderBottomWidth: 90,
    left: 0
  },
  headerBarDark1Stack: {
    height: 90
  },
  emailInputColumn: {},
  emailInputColumnFiller: {
    flex: 1
  },
  nextButton: {
    width: 100,
    height: 36,
    alignSelf: "flex-end",
    marginBottom: -125
  },
  button2: {
    width: 30,
    height: 49,
    marginBottom: 76
  },
  updatesCheckBox: {
    top: 300,
    width: 3200,
    height: 40,
    left: 40,
  },
  materialIconTextboxColumn: {},
  materialIconTextboxColumnFiller: {
    flex: 1
  },
  nextButton1: {
    width: 100,
    height: 36,
    alignSelf: "flex-end",
    marginBottom: 40,
    marginRight: 8
  }
});

export default AccountDetails;
