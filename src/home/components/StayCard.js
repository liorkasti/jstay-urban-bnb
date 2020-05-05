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
    height: 266
  }
});

export default StayCard;
