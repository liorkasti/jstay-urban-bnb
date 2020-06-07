import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonWithVioletText14 from "./MaterialButtonWithVioletText14";
import MaterialButtonWithVioletText13 from "./MaterialButtonWithVioletText13";

function CityCards(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/eriffel_tower.jpeg")}
        resizeMode="stretch"
        style={styles.image2}
      ></Image>
      <Image
        source={require("../assets/images/palace-of-westminster-and-big-ben-london-england-3071145.jpg")}
        resizeMode="stretch"
        style={styles.image3}
      ></Image>
      <Image
        source={require("../assets/images/newyork.jpeg")}
        resizeMode="stretch"
        style={styles.image4}
      ></Image>
      <Image
        source={require("../assets/images/Jerusalem_Western_Wall_BW_1.jpeg")}
        resizeMode="stretch"
        style={styles.image5}
      ></Image>
      <Text style={styles.paris}>Paris</Text>
      <Text style={styles.newYork}>New York</Text>
      <MaterialButtonWithVioletText14
        style={styles.materialButtonWithVioletText1430}
      ></MaterialButtonWithVioletText14>
      <Text style={styles.london}>London</Text>
      <Text style={styles.jerusalem}>Jerusalem</Text>
      <MaterialButtonWithVioletText13
        style={styles.materialButtonWithVioletText1429}
      ></MaterialButtonWithVioletText13>
      <MaterialButtonWithVioletText13
        style={styles.materialButtonWithVioletText1435}
      ></MaterialButtonWithVioletText13>
      <MaterialButtonWithVioletText14
        style={styles.materialButtonWithVioletText1436}
      ></MaterialButtonWithVioletText14>
      <MaterialButtonWithVioletText13
        style={styles.materialButtonWithVioletText1437}
      ></MaterialButtonWithVioletText13>
      <MaterialButtonWithVioletText14
        style={styles.materialButtonWithVioletText1438}
      ></MaterialButtonWithVioletText14>
      <MaterialButtonWithVioletText13
        style={styles.materialButtonWithVioletText1439}
      ></MaterialButtonWithVioletText13>
      <MaterialButtonWithVioletText14
        style={styles.materialButtonWithVioletText1440}
      ></MaterialButtonWithVioletText14>
      <Text style={styles.aroundTheGlobe}>Around The Globe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image2: {
    top: 36,
    left: "50.7%",
    width: "49.3%",
    height: 150,
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderTopRightRadius: 10
  },
  image3: {
    top: 36,
    left: "0.24%",
    width: "49.3%",
    height: 150,
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderTopLeftRadius: 10
  },
  image4: {
    top: 192,
    left: "50.7%",
    width: "49.3%",
    height: 150,
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderBottomRightRadius: 10
  },
  image5: {
    top: 192,
    left: "0.24%",
    width: "49.3%",
    height: 150,
    position: "absolute",
    opacity: 0.98,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderBottomLeftRadius: 10
  },
  paris: {
    top: 53,
    left: "54.09%",
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  newYork: {
    top: 211,
    left: "54.09%",
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  materialButtonWithVioletText1430: {
    top: 150,
    left: "24.75%",
    width: "24.65%",
    height: 36,
    position: "absolute"
  },
  london: {
    top: 53,
    left: 15,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  jerusalem: {
    top: 211,
    left: 16,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  materialButtonWithVioletText1429: {
    top: 150,
    left: "0.17%",
    width: "24.65%",
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonWithVioletText1435: {
    top: 150,
    left: "50.72%",
    width: "24.56%",
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonWithVioletText1436: {
    top: 150,
    left: "75.21%",
    width: "24.65%",
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText1437: {
    top: 306,
    left: "0.24%",
    width: "24.65%",
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    borderBottomLeftRadius: 10
  },
  materialButtonWithVioletText1438: {
    top: 306,
    left: "24.83%",
    width: "24.65%",
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText1439: {
    top: 306,
    left: "50.72%",
    width: "24.65%",
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonWithVioletText1440: {
    top: 306,
    left: "75.3%",
    width: "24.65%",
    height: 36,
    position: "absolute",
    borderBottomRightRadius: 10
  },
  aroundTheGlobe: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  }
});

export default CityCards;
