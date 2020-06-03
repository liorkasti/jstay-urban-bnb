import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function UnreadMessage(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rect24}>
        <View style={styles.image24Row}>
          <Image
            source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
            resizeMode="stretch"
            style={styles.image24}
          ></Image>
          <Text style={styles.sholli14}>Sholli</Text>
        </View>
        <View style={styles.image24RowFiller}></View>
        <Icon name="md-mail-unread" style={styles.icon24}></Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect24: {
    height: 60,
    backgroundColor: "rgba(230,230,230,0.41)",
    shadowOpacity: 0.01,
    flexDirection: "row"
  },
  image24: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  sholli14: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 13,
    marginTop: 11
  },
  image24Row: {
    height: 50,
    flexDirection: "row",
    marginLeft: 22,
    marginTop: 5
  },
  image24RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon24: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    height: 35,
    width: 27,
    marginRight: 35,
    marginTop: 16
  }
});

export default UnreadMessage;
