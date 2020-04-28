import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CommingSoonLight(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Column}>
        <View style={styles.rect1}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <EntypoIcon name="chevron-left" style={styles.icon1}></EntypoIcon>
            </TouchableOpacity>
            <Text style={styles.bsD1}>BS&quot;D</Text>
          </View>
          <View style={styles.buttonRowFiller}></View>
          <View style={styles.comingSoon3Row}>
            <Text style={styles.comingSoon3}>Coming Soon</Text>
            <MaterialCommunityIconsIcon
              name="screwdriver"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <Image
          source={require("../../assets/images/jstay-icon-inverted8.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.underConstruction1}>
          I can&#39;t wait to show you what&#39;s coming next
        </Text>
        <Text style={styles.walkingDistance1}>
          Within Walking Distance of..
        </Text>
        <Text style={styles.loremIpsum1}>
          My stay is within a 10 minute walk of the following
        </Text>
      </View>
      <View style={styles.rect1ColumnFiller}></View>
      <Text style={styles.src}>src/{props.comingSoonDirectory}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  rect1: {
    height: 86,
    backgroundColor: "rgba(2,172,235,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.22,
    flexDirection: "row"
  },
  button: {
    width: 40,
    height: 40,
    marginTop: 26
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginLeft: 314
  },
  buttonRow: {
    height: 66,
    flexDirection: "row",
    marginLeft: 6,
    marginTop: 14
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  comingSoon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-bold",
    textAlign: "center",
    marginRight: 59,
    marginTop: 9
  },
  icon2: {
    color: "#03589b",
    fontSize: 45,
    height: 44,
    width: 25
  },
  comingSoon3Row: {
    height: 44,
    flexDirection: "row",
    marginRight: 31,
    marginTop: 39
  },
  image1: {
    width: 131,
    height: 152,
    marginTop: 125,
    marginLeft: 127
  },
  underConstruction1: {
    width: 256,
    height: 56,
    color: "#03589b",
    fontSize: 20,
    fontFamily: "roboto-bold",
    textAlign: "center",
    marginTop: 71,
    marginLeft: 78
  },
  walkingDistance1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-bold",
    marginTop: 1550,
    marginLeft: 46
  },
  loremIpsum1: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 46
  },
  rect1Column: {
    marginLeft: -6,
    marginRight: -6
  },
  rect1ColumnFiller: {
    flex: 1
  },
  src: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-bold",
    alignSelf: "flex-end",
    marginBottom: 87,
    marginRight: 165
  }
});

export default CommingSoonLight;
