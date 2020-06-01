import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="eye" style={styles.iconStyle}></Icon>
      <Text style={styles.reEnterPassword}>re-enter password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1
  },
  iconStyle: {
    color: "rgba(177,177,177,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8
  },
  reEnterPassword: {
    flex: 1,
    color: "rgba(177,177,177,1)",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialRightIconTextbox2;
