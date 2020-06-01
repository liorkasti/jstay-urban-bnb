import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoSegmentWithFourTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.textWrapper,
          {
            backgroundColor: props.rect1 || undefined
          }
        ]}
      >
        <TouchableOpacity style={styles.segmentTextWrapper1}>
          <Text style={styles.text1}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper2}>
          <Text style={styles.text2}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper3}>
          <Text style={styles.text3}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper4}>
          <Text style={styles.text4}>Year</Text>
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
    backgroundColor: "#007AFF",
    alignItems: "center",
    padding: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  text1: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
    borderLeftWidth: 0
  },
  text2: {
    color: "#007AFF",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper3: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  text3: {
    color: "#007AFF",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper4: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  text4: {
    color: "#007AFF",
    fontSize: 13,
    fontFamily: "roboto-regular"
  }
});

export default CupertinoSegmentWithFourTabs;
