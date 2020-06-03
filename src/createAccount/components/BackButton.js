import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function BackButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="chevron-left" style={styles.icon12}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon12: {
    color: "rgba(2,172,235,1)",
    fontSize: 40
  }
});

export default BackButton;
