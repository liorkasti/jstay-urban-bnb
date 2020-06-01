import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

function JstayLogoDark(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.image6Filler}></View>
      <Image
        source={require("../assets/images/jstay-icon-inverted8.png")}
        resizeMode="contain"
        style={styles.image6}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  image6Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image6: {
    height: 62,
    width: 62
  }
});

export default JstayLogoDark;
