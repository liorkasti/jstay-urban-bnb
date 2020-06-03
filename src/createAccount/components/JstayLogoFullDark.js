import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function JstayLogoFullDark(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/JStay-Logo-blue-shin7.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image1: {
    height: 150
  }
});

export default JstayLogoFullDark;
