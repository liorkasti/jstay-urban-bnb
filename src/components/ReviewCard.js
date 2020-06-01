import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import StayRatingSmall from "./StayRatingSmall";

function ReviewCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group1}>
        <View style={styles.rect13}></View>
        <Image
          source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
          resizeMode="stretch"
          style={styles.image13}
        ></Image>
        <Text style={styles.text}>
          Sholli was very kind and friendly, The kitchen had all Kosher
          options..
        </Text>
        <StayRatingSmall
          stay12="Stay"
          style={styles.stayRatingSmall}
        ></StayRatingSmall>
      </View>
      <StayRatingSmall
        stay12="Kashrut"
        style={styles.stayRatingSmall1}
      ></StayRatingSmall>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group1: {
    top: 0,
    left: 0,
    height: 117,
    position: "absolute",
    right: 0
  },
  rect13: {
    top: 0,
    left: 0,
    height: 117,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    right: 0
  },
  image13: {
    top: "10.79%",
    left: 15,
    width: 50,
    height: 50,
    position: "absolute",
    borderRadius: 100
  },
  text: {
    top: 13,
    left: 85,
    height: 28,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 44
  },
  stayRatingSmall: {
    position: "absolute",
    top: 70,
    left: "30.12%",
    height: 34,
    width: "25.7%"
  },
  stayRatingSmall1: {
    position: "absolute",
    top: 70,
    left: "66.31%",
    height: 34,
    width: "25.7%"
  }
});

export default ReviewCard;
