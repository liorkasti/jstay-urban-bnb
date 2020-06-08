import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import ReviewCardUl from "../createStay/components/ReviewCardUl";

function Reviews(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group3}>
        <View style={styles.rect15}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1254}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.text23}>Reviews</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image134Filler}></View>
              <Image
                source={require("../assets/images/jstay-icon-inverted8.png")}
                resizeMode="contain"
                style={styles.image134}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ReviewCardUl style={styles.reviewCardUl}></ReviewCardUl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  group3: {
    height: 91
  },
  rect15: {
    height: 91,
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
