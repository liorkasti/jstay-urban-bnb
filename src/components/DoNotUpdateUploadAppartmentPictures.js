import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

function DoNotUpdateUploadAppartmentPictures(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect8}></View>
      <FeatherIcon name="plus" style={styles.icon8}></FeatherIcon>
      <View style={styles.rect2}></View>
      <FeatherIcon name="plus" style={styles.icon2}></FeatherIcon>
      <View style={styles.group2}>
        <View style={styles.rect3}></View>
        <FeatherIcon name="plus" style={styles.icon3}></FeatherIcon>
      </View>
      <View style={styles.rect4}></View>
      <FeatherIcon name="plus" style={styles.icon4}></FeatherIcon>
      <View style={styles.group4}>
        <View style={styles.rect5}></View>
        <FeatherIcon name="plus" style={styles.icon5}></FeatherIcon>
      </View>
      <View style={styles.rect6}></View>
      <FeatherIcon name="plus" style={styles.icon6}></FeatherIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect8: {
    top: "0%",
    left: "0%",
    width: "44.09%",
    height: "28.84%",
    backgroundColor: "rgba(177,177,177,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.32
  },
  icon8: {
    top: 28,
    left: "8.22%",
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 94
  },
  rect2: {
    top: "0%",
    left: "55.61%",
    width: "44.09%",
    height: "28.84%",
    backgroundColor: "rgba(177,177,177,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.32
  },
  icon2: {
    top: 28,
    left: "63.83%",
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 94
  },
  group2: {
    top: "35.44%",
    left: "0%",
    width: 155,
    height: 142,
    position: "absolute"
  },
  rect3: {
    top: 0,
    left: "0%",
    width: "96.67%",
    height: "105.42%",
    backgroundColor: "rgba(177,177,177,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.32
  },
  icon3: {
    top: 28,
    left: "18.03%",
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 94
  },
  rect4: {
    top: "35.44%",
    left: "55.9%",
    width: "44.09%",
    height: "28.84%",
    backgroundColor: "rgba(177,177,177,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.32
  },
  icon4: {
    top: 212,
    left: "63.83%",
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 94
  },
  group4: {
    top: "71.16%",
    width: 155,
    height: 142,
    position: "absolute",
    right: "54.38%"
  },
  rect5: {
    top: 0,
    left: "0%",
    width: "96.67%",
    height: "105.42%",
    backgroundColor: "rgba(177,177,177,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.32
  },
  icon5: {
    top: 28,
    left: "18.03%",
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 94
  },
  rect6: {
    top: "71.16%",
    left: "55.9%",
    width: 150,
    height: 150,
    backgroundColor: "rgba(177,177,177,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.32
  },
  icon6: {
    top: 398,
    left: "63.83%",
    position: "absolute",
    color: "rgba(230,230,230,1)",
    fontSize: 94
  }
});

export default DoNotUpdateUploadAppartmentPictures;
