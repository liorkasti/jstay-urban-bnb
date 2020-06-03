import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MyKosherRating(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group3}>
        <Text style={styles.kosherFriendly1}>Kosher Friendly</Text>
        <View style={styles.icon19StackRow}>
          <View style={styles.icon19Stack}>
            <FontAwesomeIcon
              name="star"
              style={styles.icon19}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              name="star"
              style={styles.icon24}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.icon20Stack}>
            <FontAwesomeIcon
              name="star"
              style={styles.icon20}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              name="star"
              style={styles.icon25}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.icon21Stack}>
            <FontAwesomeIcon
              name="star"
              style={styles.icon21}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              name="star"
              style={styles.icon26}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.icon22Stack}>
            <FontAwesomeIcon
              name="star"
              style={styles.icon22}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              name="star"
              style={styles.icon27}
            ></FontAwesomeIcon>
          </View>
          <FontAwesomeIcon name="star" style={styles.icon28}></FontAwesomeIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group3: {
    width: 159,
    height: 47
  },
  kosherFriendly1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular"
  },
  icon19: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon24: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon19Stack: {
    width: 29,
    height: 30
  },
  icon20: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon25: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon20Stack: {
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon21: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon26: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon21Stack: {
    width: 29,
    height: 30,
    marginLeft: 5
  },
  icon22: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon27: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon22Stack: {
    width: 27,
    height: 30,
    marginLeft: 4
  },
  icon28: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 5
  },
  icon19StackRow: {
    height: 30,
    flexDirection: "row",
    marginLeft: 1,
    marginRight: -1
  }
});

export default MyKosherRating;
