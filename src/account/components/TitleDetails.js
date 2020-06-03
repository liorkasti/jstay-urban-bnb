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
    height: 24,
    width: 15
  }
});

export default TitleDetails;
