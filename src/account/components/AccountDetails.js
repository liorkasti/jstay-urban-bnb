import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AccountDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon2Row}>
        <Icon name="user" style={styles.icon2}></Icon>
        <Text style={styles.accountName}>Sholli Kestecher</Text>
      </View>

      <View style={styles.icon3Row}>
        <Icon name="calendar-plus-o" style={styles.icon3}></Icon>
        <Text style={styles.accountDate}>18/11/89</Text>
      </View>

      <View style={styles.icon4Row}>
        <Icon name="map-pin" style={styles.icon4}></Icon>
        <Text style={styles.jerusalemIsrael}>Jerusalem, Israel</Text>
      </View>

      <View style={styles.icon8Row}>
        <Icon name="intersex" style={styles.icon8}></Icon>
        <Text style={styles.text1}>Mr</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    left: 0,
    // position: "absolute",
    top: 0,
  },
  icon2: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    position: "absolute",
    left: 0,    
  },
  accountName: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    top: 2,
    fontFamily: "roboto-regular",
    // marginLeft: 16,
    // marginTop: 2,
    position: "absolute",
    left: 34,
  },
  icon2Row: {
    top: 40,
    left: 0,
    position: "absolute",
    height: 26,
    // flexDirection: "row",
    // flex: 1,
    // marginRight: -1
  },
  icon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  accountDate: {
    top: 0,
    left: 20,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 13,
    marginTop: 2
  },
  icon3Row: {
    top: 80,
    left: 0,
    position: "absolute",
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 13
  },
  icon4: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  jerusalemIsrael: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 17,
    marginTop: 2
  },
  icon4Row: {
    top: 120,
    left: 3,
    position: "absolute",
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  icon8: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  text1: {
    // width: 32,
    // height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 14,
    top: 2
  },
  icon8Row: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: -52
  },

});

export default AccountDetails;
