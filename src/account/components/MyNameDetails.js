import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import NameDetails from "./NameDetails";

function MyNameDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <NameDetails style={styles.nameDetails}></NameDetails>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  nameDetails: {
    height: 36
  }
});

export default MyNameDetails;
