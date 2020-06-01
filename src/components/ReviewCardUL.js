import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ReviewCard from "./ReviewCard";

function ReviewCardUL(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ReviewCard style={styles.reviewCard1}></ReviewCard>
      <ReviewCard style={styles.reviewCard2}></ReviewCard>
      <ReviewCard style={styles.reviewCard3}></ReviewCard>
      <ReviewCard style={styles.reviewCard4}></ReviewCard>
      <ReviewCard style={styles.reviewCard5}></ReviewCard>
      <ReviewCard style={styles.reviewCard6}></ReviewCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  reviewCard1: {
    position: "absolute",
    top: 379,
    left: 0,
    height: 117,
    right: 0
  },
  reviewCard2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 117,
    right: 0
  },
  reviewCard3: {
    position: "absolute",
    top: 128,
    left: 0,
    height: 117,
    right: 0
  },
  reviewCard4: {
    position: "absolute",
    top: 255,
    left: 0,
    height: 117,
    right: 0
  },
  reviewCard5: {
    position: "absolute",
    top: 635,
    left: 0,
    height: 117,
    right: 0
  },
  reviewCard6: {
    position: "absolute",
    top: 507,
    left: 0,
    height: 117,
    right: 0
  }
});

export default ReviewCardUL;
