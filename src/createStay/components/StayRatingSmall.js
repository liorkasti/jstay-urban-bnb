import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function StayRatingSmall(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon111StackStackRow}>
        <View style={styles.icon111StackStack}>
          <View style={styles.icon111Stack}>
            <FontAwesomeIcon
              name="star"
              style={styles.icon111}
            ></FontAwesomeIcon>
            <Text style={styles.stay12}>{props.tag || "Stay"}</Text>
          </View>
          <View style={styles.icon112Stack}>
            <FontAwesomeIcon
              name="star"
              style={styles.icon112}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              name="star"
              style={styles.icon113}
            ></FontAwesomeIcon>
          </View>
        </View>

        <View style={styles.icon114Stack}>
          <FontAwesomeIcon name="star" style={styles.icon114}></FontAwesomeIcon>
          <FontAwesomeIcon name="star" style={styles.icon115}></FontAwesomeIcon>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon111: {
    top: 14,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  stay12: {
    top: 0,
    left: 0,
    width: 100,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  icon111Stack: {
    top: 0,
    left: 0,
    width: 27,
    height: 34,
    position: "absolute"
  },
  icon112: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon113: {
    top: 0,
    left: 18,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon112Stack: {
    top: 14,
    left: 19,
    width: 36,
    height: 20,
    position: "absolute"
  },
  icon111StackStack: {
    width: 55,
    height: 34
  },
  icon114: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon115: {
    top: 0,
    left: 18,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20
  },
  icon114Stack: {
    width: 36,
    height: 20,
    marginLeft: 1,
    marginTop: 14
  },
  icon111StackStackRow: {
    height: 34,
    flexDirection: "row",
    flex: 1
  }
});

export default StayRatingSmall;
