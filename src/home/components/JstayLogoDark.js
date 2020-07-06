import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function JstayLogoDark(props) {
  return (
    <TouchableOpacity onPress={()=>props.onPress()} style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/jstay-icon-inverted8.png")}
        resizeMode="contain"
        style={styles.image6}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  image6: {
    height: 62,
    position: "absolute",
  }
});

export default JstayLogoDark;
