import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Title from "./Title";

function TitleDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Title style={styles.title}></Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    position: "absolute",
    top: "0%",
    left: 0,
    height: 24,
    width: "17.4%"
  }
});

export default TitleDetails;
