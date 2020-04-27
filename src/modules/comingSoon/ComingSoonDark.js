import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function ComingSoonDark(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Column}>
        <View style={styles.rect1}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <EntypoIcon name="chevron-left" style={styles.icon1}></EntypoIcon>
            </TouchableOpacity>
            <Text style={styles.comingSoon}>Coming Soon</Text>
          </View>
          <View style={styles.buttonRowFiller}></View>
          <MaterialCommunityIconsIcon
            name="screwdriver"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.image1Stack}>
          <Image
            source={require("../../assets/images/JStay-Logo-blue-shin7.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.text}>
            I can&#39;t wait to show you what&#39;s coming next
          </Text>
        </View>
      </View>
      <View style={styles.rect1ColumnFiller}></View>
      <Text style={styles.src}>src/{props.comingSoonDirectory}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  rect1: {
    height: 85,
    backgroundColor: "rgba(0,88,155,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(2,172,235,1)",
    shadowOpacity: 0.22,
    flexDirection: "row"
  },
  button: {
    width: 40,
    height: 40
  },
  icon1: {
    color: "rgba(2,172,235,1)",
    fontSize: 40
  },
  comingSoon: {
    color: "rgba(2,172,235,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 54,
    marginTop: 8
  },
  buttonRow: {
    height: 40,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 40
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "#08aceb",
    fontSize: 45,
    height: 44,
    width: 22,
    marginRight: 22,
    marginTop: 35
  },
  image1: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  text: {
    top: 143,
    left: 87,
    color: "#08aceb",
    position: "absolute",
    right: 71,
    fontSize: 20,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  image1Stack: {
    height: 193,
    marginTop: 162,
    marginLeft: 10
  },
  rect1Column: {
    marginLeft: -10
  },
  rect1ColumnFiller: {
    flex: 1
  },
  src: {
    width: 256,
    height: 28,
    color: "#e6e6e6",
    fontSize: 20,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginBottom: 84,
    marginLeft: 72
  }
});

export default ComingSoonDark;
