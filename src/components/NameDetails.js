import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ProfileName from "./ProfileName";

function NameDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ProfileName style={styles.profileName}></ProfileName>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  profileName: {
    position: "absolute",
    top: "0%",
    left: 0,
    height: 25,
    width: "47.17%"
  }
});

export default NameDetails;
