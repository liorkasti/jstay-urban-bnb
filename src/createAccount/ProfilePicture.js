import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import AddProfileProfilePictureButton from "../components/AddProfileProfilePictureButton";
import SkipButton from "../components/SkipButton";
import JstayLogoFullDark from "../components/JstayLogoFullDark";
import HeaderBarDark from "../components/HeaderBarDark";
import DoneCreateAccount from "../components/DoneCreateAccount";
import { Center } from "@builderx/utils";

function ProfilePicture(props) {
  return (
    <View style={styles.container}>
        <HeaderBarDark
          onBack={props.onBack}
          text1=""
          style={styles.headerBarDark1}
        ></HeaderBarDark>
        <View style={styles.button4Column}>

          <TouchableOpacity style={styles.button4}>
            <AddProfileProfilePictureButton
              style={styles.addProfileProfilePictureButton}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <SkipButton
              style={styles.skipButton}
              onPress={props.onNext}
              // onPress={props.onSkip}
            />
          </TouchableOpacity>
          <View style={styles.addRecentPictureStack}>
            <Text style={styles.addRecentPicture}>
              Please add a recent picture
          </Text>
            <JstayLogoFullDark
              style={styles.jstayLogoFullDark}
            ></JstayLogoFullDark>
          </View>
        </View>
        <Image
          source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
          resizeMode="stretch"
          style={styles.image1}
        ></Image>
      <View style={styles.button4ColumnFiller}></View>
      <DoneCreateAccount
        onPress={props.onNext}
        style={styles.createAccountDoneButton1}
      ></DoneCreateAccount>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,88,155,1)"
  },
  button4: {
    height: 62,
    marginTop: 480,
  },
  addProfileProfilePictureButton: {
    height: 62
  },
  button2: {
    height: 36,
    marginTop: 26,

  },
  skipButton: {
    height: 36
  },
  addRecentPicture: {
    top: 190,
    color: "rgba(2,172,235,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  jstayLogoFullDark: {
    top: 45,
    height: 150,
  },
  addRecentPictureStack: {
    height: 168,
    marginTop: -552,
    width: "auto",
  },
  image1: {
    width: 150,
    height: 150,
    top: 20,
    borderRadius: 100,
    marginTop: 60,
  },
  headerBarDark1: {
    top: 0,
    left: 0,
    height: 90,
    position: "absolute",
    right: 0,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 0,
    borderBottomWidth: .7
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
    width: 150,
    height: 36,
    alignSelf: "flex-end",
    marginBottom: 30,
    marginRight: 36
  }
});

export default ProfilePicture;
