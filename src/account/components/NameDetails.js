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
    height: 25,
    width: 179
  }
});

export default NameDetails;
