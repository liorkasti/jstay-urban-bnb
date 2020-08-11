import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AddProfilePictureCircle from "./AddProfilePictureCircle";

function ProfilePictureCircle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <AddProfilePictureCircle
        style={styles.addProfilePictureCircle}
      ></AddProfilePictureCircle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  addProfilePictureCircle: {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute"
  }
});

export default ProfilePictureCircle;
