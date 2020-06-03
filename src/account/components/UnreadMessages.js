import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function UnreadMessages(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rect22}>
        <View style={styles.image22Row}>
          <Image
            source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
            resizeMode="stretch"
            style={styles.image22}
          ></Image>
          <Text style={styles.nachum}>Nachum</Text>
        </View>
        <View style={styles.image22RowFiller}></View>
        <Icon name="md-mail-open" style={styles.icon22}></Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect22: {
    height: 60,
    backgroundColor: "rgba(230,230,230,0.41)",
    shadowOpacity: 0.01,
    flexDirection: "row"
  },
  image22: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  nachum: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 13,
    marginTop: 11
  },
  image22Row: {
    height: 50,
    flexDirection: "row",
    marginLeft: 22,
    marginTop: 5
  },
  image22RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon22: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    height: 35,
    width: 26,
    marginRight: 36,
    marginTop: 16
  }
});

export default UnreadMessages;
