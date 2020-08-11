import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithRightButtons from "./MaterialCardWithRightButtons";

function StayCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialCardWithRightButtons
        style={styles.materialCardWithRightButtons}
      ></MaterialCardWithRightButtons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialCardWithRightButtons: {
    top: 0,
    left: "0%",
    width: "100%",
    height: 266,
    position: "absolute"
  }
});

export default StayCard;
