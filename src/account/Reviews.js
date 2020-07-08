import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import ReviewCardUL from "../createStay/components/ReviewCardUL";
import ReviewCard from "../createStay/components/ReviewCard";

function Reviews(props) {
  return (
    <View style={styles.container}>
      <ReviewCard style={styles.reviewCard1}></ReviewCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)",
    marginTop: 20
  },
  reviewCard3: {
    height: 117,
    marginTop: 50,  
  },
  rect15: {
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 13,
    marginRight: 38
  },
  button4: {
    width: 29,
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1254: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  text23: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 126,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 10
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row"
  },
  image134Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image134: {
    height: 62,
    width: 62
  },
  button4RowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  },
  reviewCardUl: {
    height: 757,
    marginTop: 15,
    marginLeft: 28,
    marginRight: 28
  }
});

export default Reviews;
