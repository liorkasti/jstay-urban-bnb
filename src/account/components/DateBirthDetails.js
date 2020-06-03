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
    height: 25,
    width: 120,
    marginTop: 4
  }
});

export default DateBirthDetails;
