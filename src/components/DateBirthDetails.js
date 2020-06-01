import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import DateGroup from "./DateGroup";

function DateBirthDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <DateGroup style={styles.dateGroup}></DateGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  dateGroup: {
    position: "absolute",
    top: "11.72%",
    left: 0,
    height: 25,
    width: 120
  }
});

export default DateBirthDetails;
