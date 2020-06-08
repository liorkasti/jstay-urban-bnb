import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MyStayCardGroupUL from "./components/MyStayCardGroupUL";
import MaterialButtonShare2 from "./components/MaterialButtonShare2";
import Icon from "react-native-vector-icons/Entypo";

function MyStaysList(props) {
  return (
    <View style={styles.container}>
      <MyStayCardGroupUl style={styles.myStayCardGroupUl}></MyStayCardGroupUl>
      <MaterialButtonShare2
        style={styles.materialButtonShare2}
      ></MaterialButtonShare2>
      <View style={styles.group10}>
        <View style={styles.rect11}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4Row}>
            <TouchableOpacity style={styles.button4}>
              <TouchableOpacity style={styles.button5}>
                <Icon name="chevron-left" style={styles.icon12}></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.myStays}>My Stays</Text>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image1Filler}></View>
              <Image
                source={require("../assets/images/jstay-icon-inverted8.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  myStayCardGroupUl: {
    height: 608,
    width: 350,
    marginTop: 103,
    marginLeft: 32
  },
  materialButtonShare2: {
    width: 56,
    height: 56,
    marginTop: 102,
    marginLeft: 326
  },
  group10: {
    width: 414,
    height: 91,
    marginTop: -869
  },
  rect11: {
    width: 414,
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
    height: 40,
    marginTop: 10
  },
  button5: {
    width: 29,
    height: 40
  },
  icon12: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  myStays: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 121,
    marginTop: 18
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row",
    marginLeft: 90
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4Row: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  }
});

export default MyStaysList;
