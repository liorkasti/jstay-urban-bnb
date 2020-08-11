import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function CalendarCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/calender_final.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image2: {
    top: 0,
    left: 0,
    height: 420,
    position: "absolute",
    right: 0
  }
});

export default CalendarCard;
