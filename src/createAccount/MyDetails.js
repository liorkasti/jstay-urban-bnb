import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import EmailTextInput4 from "../components/EmailTextInput4";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Center } from "@builderx/utils";
import HeaderBarDark from "../components/HeaderBarDark";
import NextButton from "../components/NextButton";

function MyDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialIconTextboxColumn}>
        <MaterialIconTextbox
          textInput1="first name"
          icon1Name="account"
          style={styles.materialIconTextbox}
        ></MaterialIconTextbox>
        <MaterialIconTextbox
          textInput1="last name"
          icon1Name="account"
          style={styles.materialIconTextbox1}
        ></MaterialIconTextbox>
        <View style={styles.materialIconTextbox2Stack}>
          <MaterialIconTextbox
            textInput1="date of birth"
            icon1Name="calendar-search"
            style={styles.materialIconTextbox2}
          ></MaterialIconTextbox>
          <EmailTextInput4
            textInput1="email"
            style={styles.materialIconTextbox4}
          ></EmailTextInput4>
        </View>
        <View style={styles.icon2Row}>
          <MaterialIconsIcon
            name="people"
            style={styles.icon2}
          ></MaterialIconsIcon>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <Text style={styles.title}>title</Text>
            </View>
            <EntypoIcon
              name="chevron-small-down"
              style={styles.icon4}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.textStack}>
          <Center horizontal>
            <Text style={styles.text}>My details</Text>
          </Center>
          <Image
            source={require("../assets/images/JStay-Logo-blue-shin7.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.group3}>
          <View style={styles.group2}>
            <View style={styles.group1}>
              <View style={styles.headerBarDark1Stack}>
                <HeaderBarDark
                  text1=""
                  style={styles.headerBarDark1}
                ></HeaderBarDark>
                <Text style={styles.bsD1}>BS&quot;D</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.materialIconTextboxColumnFiller}></View>
      <NextButton style={styles.nextButton1}></NextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialIconTextbox: {
    height: 43,
    marginTop: 394,
    marginLeft: 20,
    marginRight: 29
  },
  materialIconTextbox1: {
    height: 43,
    marginTop: 7,
    marginLeft: 20,
    marginRight: 29
  },
  materialIconTextbox2: {
    top: 1,
    left: 0,
    height: 43,
    position: "absolute",
    right: 0
  },
  materialIconTextbox4: {
    top: 0,
    left: 0,
    height: 43,
    position: "absolute",
    right: 0
  },
  materialIconTextbox2Stack: {
    height: 44,
    marginTop: 9,
    marginLeft: 20,
    marginRight: 29
  },
  icon2: {
    color: "#b1b1b1",
    fontSize: 24,
    marginTop: 4
  },
  rect2: {
    top: 0,
    left: 0,
    width: 73,
    height: 35,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 10
  },
  title: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 13,
    marginLeft: 7
  },
  icon4: {
    top: 3,
    left: 35,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  rect2Stack: {
    width: 73,
    height: 41,
    marginLeft: 14
  },
  icon2Row: {
    height: 41,
    flexDirection: "row",
    marginTop: -188,
    marginLeft: 29,
    marginRight: 274
  },
  text: {
    top: 146,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  image1: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  textStack: {
    height: 170,
    marginTop: -256
  },
  group3: {
    height: 90,
    marginTop: -307
  },
  group2: {
    height: 90
  },
  group1: {
    height: 90
  },
  headerBarDark1: {
    top: 0,
    left: 0,
    height: 90,
    position: "absolute",
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 0,
    borderBottomWidth: 90,
    right: 0
  },
  bsD1: {
    top: 13,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    right: 38,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  headerBarDark1Stack: {
    height: 90
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

export default MyDetails;
