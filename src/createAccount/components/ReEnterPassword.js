import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialRightIconTextbox3 from "./MaterialRightIconTextbox3";

function ReEnterPassword(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="warning" style={styles.icon3}></Icon>
      <MaterialRightIconTextbox3
        style={styles.materialRightIconTextbox2}
      ></MaterialRightIconTextbox3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(208,2,27,0.81)",
    fontSize: 21,
    marginTop: 18
  },
  materialRightIconTextbox2: {
    height: 43,
    flex: 1,
    marginLeft: 17
  }
});

export default ReEnterPassword;
