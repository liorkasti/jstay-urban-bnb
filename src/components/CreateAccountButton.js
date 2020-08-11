import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Center } from "@builderx/utils";
import MaterialButtonWithVioletText3 from "./MaterialButtonWithVioletText3";

function CreateAccountButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Center horizontal>
        <MaterialButtonWithVioletText3
          style={styles.materialButtonWithVioletText32}
        ></MaterialButtonWithVioletText3>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialButtonWithVioletText32: {
    top: "0%",
    width: 352,
    height: "100%",
    position: "absolute",
    borderRadius: 10
  }
});

export default CreateAccountButton;
