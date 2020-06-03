import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import AddProfileProfilePictureButton from "../components/AddProfileProfilePictureButton";
import SkipButton from "../components/SkipButton";
import JstayLogoFullDark from "../components/JstayLogoFullDark";
import HeaderBarDark from "../components/HeaderBarDark";
import DoneCreateAccount from "../components/DoneCreateAccount";

function ProfilePicture(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button4Column}>
        <TouchableOpacity style={styles.button4}>
          <AddProfileProfilePictureButton
            style={styles.addProfileProfilePictureButton}
          ></AddProfileProfilePictureButton>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <SkipButton style={styles.skipButton}></SkipButton>
        </TouchableOpacity>
        <View style={styles.addRecentPictureStack}>
          <Text style={styles.addRecentPicture}>
            Please add a recent picture
          </Text>
          <JstayLogoFullDark
            style={styles.jstayLogoFullDark}
          ></JstayLogoFullDark>
        </View>
        <Image
          source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
          resizeMode="stretch"
          style={styles.image1}
        ></Image>
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
      <View style={styles.button4ColumnFiller}></View>
      <DoneCreateAccount
        style={styles.createAccountDoneButton1}
      ></DoneCreateAccount>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  button4: {
    height: 62,
    marginTop: 525,
    marginLeft: 29,
    marginRight: 30
  },
  addProfileProfilePictureButton: {
    height: 62
  },
  button2: {
    height: 36,
    marginTop: 26,
    marginLeft: 115,
    marginRight: 116
  },
  skipButton: {
    height: 36
  },
  addRecentPicture: {
    top: 140,
    left: 77,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    right: 81,
    fontSize: 20,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  jstayLogoFullDark: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  addRecentPictureStack: {
    height: 168,
    marginTop: -512
  },
  image1: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 35,
    marginLeft: 127
  },
  group1: {
    height: 90,
    marginTop: -490
  },
  headerBarDark1: {
    top: 0,
    left: 0,
    height: 90,
    position: "absolute",
    right: 0,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 0,
    borderBottomWidth: 90
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
  button4Column: {},
  button4ColumnFiller: {
    flex: 1
  },
  createAccountDoneButton1: {
    width: 154,
    height: 36,
    alignSelf: "flex-end",
    marginBottom: 30,
    marginRight: 30
  }
});

export default ProfilePicture;
