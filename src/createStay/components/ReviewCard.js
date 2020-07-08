import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import StayRatingSmall from "./StayRatingSmall";

function ReviewCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group1}>
        <View style={styles.rect13}>
          <View style={styles.image13Row}>
            <Image
              source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
              resizeMode="stretch"
              style={styles.image13}
            ></Image>
            <Text style={styles.text}>
              Sholli was very kind and friendly, The kitchen had all Kosher
              options..
            </Text>
          </View>
          <View style={styles.stayRatingSmallRow}>
            <StayRatingSmall
              tag="Stay"
              style={styles.stayRatingSmall}
            ></StayRatingSmall>
            <StayRatingSmall
              tag="Kashrut"
              style={styles.stayRatingSmall1}
            ></StayRatingSmall>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 8,
    width: "96%"
  },
  group1: {
    height: 117
  },
  rect13: {
    height: 117,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  image13: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  text: {
    color: "rgba(230,230,230,1)",
    fontFamily: "roboto-regular",
    flex: 1,
    marginLeft: 20
  },
  image13Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 15,
    marginRight: 44
  },
  stayRatingSmall: {
    height: 34,
    width: 92
  },
  stayRatingSmall1: {
    height: 34,
    width: 92,
    marginLeft: 38
  },
  stayRatingSmallRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 108,
    marginRight: 29
  }
});

export default ReviewCard;
