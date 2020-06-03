import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialUnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.agentFee}>e.g. caretaker&#39;s fee</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  agentFee: {
    flex: 1,
    color: "rgba(177,177,177,1)",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialUnderlineTextbox;
