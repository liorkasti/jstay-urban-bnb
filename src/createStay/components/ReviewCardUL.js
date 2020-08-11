import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ReviewCard from "./ReviewCard";

function ReviewCardUL(props) {
  return (
    <View style={[styles.container, props.style]}>
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
    height: 117,
    marginTop: 379
  },
  reviewCard2: {
    height: 117,
    marginTop: -496
  },
  reviewCard3: {
    height: 117,
    marginTop: 11
  },
  reviewCard4: {
    height: 117,
    marginTop: 10
  },
  reviewCard5: {
    height: 117,
    marginTop: 263
  },
  reviewCard6: {
    height: 117,
    marginTop: -245
  }
});

export default ReviewCardUL;
