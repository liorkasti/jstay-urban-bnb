import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function KashrutDetails(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.icon5Row}>
        <Icon name="certificate" style={styles.icon5}></Icon>
        <Text style={styles.kosherStandard}>Kosher (standard)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon5: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  kosherStandard: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 15,
    marginTop: 2
  },
  icon5Row: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 184,
    marginTop: 4
  }
});

export default KashrutDetails;
