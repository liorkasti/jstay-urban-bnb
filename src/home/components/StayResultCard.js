import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCardWithImageAndTitle from "./MaterialCardWithImageAndTitle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function StayResultCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={()=>{props.onPress();}} style={styles.button9}>
        <View style={styles.materialCardWithImageAndTitle2Stack}>
          <MaterialCardWithImageAndTitle
          onPress={()=>{props.onPress();}}
            style={styles.materialCardWithImageAndTitle2}
          ></MaterialCardWithImageAndTitle>
          <FontAwesomeIcon
            name="certificate"
            style={styles.icon22}
          ></FontAwesomeIcon>
          <FeatherIcon name="sunset" style={styles.icon32}></FeatherIcon>
          <MaterialCommunityIconsIcon
            name="bank"
            style={styles.icon42}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="cellphone-key"
            style={styles.icon523}
          ></MaterialCommunityIconsIcon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button9: {
    height: 166,
    backgroundColor: "rgba(230, 230, 230,0.41)",
    borderRadius: 10
  },
  materialCardWithImageAndTitle2: {
    top: 0,
    left: 0,
    height: 166,
    backgroundColor: "rgba(0,88,155,0)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    right: 0
  },
  icon22: {
    top: 131,
    left: 236,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 18
  },
  icon32: {
    top: 131,
    left: 263,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 18
  },
  icon42: {
    top: 131,
    left: 291,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 18
  },
  icon523: {
    top: 131,
    left: 321,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 18
  },
  materialCardWithImageAndTitle2Stack: {
    height: 166
  }
});

export default StayResultCard;
