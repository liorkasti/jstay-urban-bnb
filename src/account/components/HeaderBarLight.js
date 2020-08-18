import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function HeaderBarLight(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button4}>
                <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <Text style={styles.text14}>{props.header}</Text>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity onPress={props.onHome} style={styles.button3}>
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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  group1: {
    width: 414,
    // height: 91,
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7
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
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  text14: {
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 15,
    width: "100%"
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 10
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row"
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4RowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  }
});

export default HeaderBarLight;
