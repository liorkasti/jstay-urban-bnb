import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoSegmentWithFourTabs1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity onPress={()=>{console.warn("add language dropdown")}} style={styles.segmentTextWrapper1}>
          <Text style={styles.text1}>{props.text1 || "Language"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{props.onUserPress("myStaysList")}} style={styles.segmentTextWrapper2}>
          <Text style={styles.text2}>{props.text2 || "My Stays"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{props.onUserPress("newRequest")}} style={styles.segmentTextWrapper3}>
          <Text style={styles.text3}>{props.text3 || "New Request"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{props.onUserPress("trips")}} style={styles.segmentTextWrapper4}>
          <Text style={styles.text4}>{props.text4 || "Bookings"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  segmentTextWrapper1: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  text1: {
    color: "rgba(177,177,177,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper2: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 1,
    borderLeftWidth: 0
  },
  text2: {
    color: "rgba(177,177,177,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper3: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  text3: {
    color: "rgba(177,177,177,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper4: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  text4: {
    color: "rgba(177,177,177,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  }
});

export default CupertinoSegmentWithFourTabs1;
