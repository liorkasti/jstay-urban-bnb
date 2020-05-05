import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialButtonWithVioletText14 from "./MaterialButtonWithVioletText14";
import MaterialButtonWithVioletText13 from "./MaterialButtonWithVioletText13";

function CityCards(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.image3Row}>
        <ImageBackground
          source={require("../../assets/images/palace-of-westminster-and-big-ben-london-england-3071145.jpg")}
          resizeMode="stretch"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <Text style={styles.london}>London</Text>
          <View style={styles.materialButtonWithVioletText1430Stack}>
            <MaterialButtonWithVioletText14
              style={styles.materialButtonWithVioletText1430}
            ></MaterialButtonWithVioletText14>
            <MaterialButtonWithVioletText13
              style={styles.materialButtonWithVioletText1429}
            ></MaterialButtonWithVioletText13>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../../assets/images/eriffel_tower.jpeg")}
          resizeMode="stretch"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.paris}>Paris</Text>
          <View style={styles.materialButtonWithVioletText1435Stack}>
            <MaterialButtonWithVioletText13
              style={styles.materialButtonWithVioletText1435}
            ></MaterialButtonWithVioletText13>
            <MaterialButtonWithVioletText14
              style={styles.materialButtonWithVioletText1436}
            ></MaterialButtonWithVioletText14>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.image5StackRow}>
        <View style={styles.image5Stack}>
          <ImageBackground
            source={require("../../assets/images/Jerusalem_Western_Wall_BW_1.jpeg")}
            resizeMode="stretch"
            style={styles.image5}
            imageStyle={styles.image5_imageStyle}
          >
            <MaterialButtonWithVioletText14
              style={styles.materialButtonWithVioletText1438}
            ></MaterialButtonWithVioletText14>
          </ImageBackground>
          <Text style={styles.jerusalem}>Jerusalem</Text>
          <MaterialButtonWithVioletText13
            style={styles.materialButtonWithVioletText1437}
          ></MaterialButtonWithVioletText13>
        </View>
        <ImageBackground
          source={require("../../assets/images/newyork.jpeg")}
          resizeMode="stretch"
          style={styles.image4}
          imageStyle={styles.image4_imageStyle}
        >
          <Text style={styles.newYork}>New York</Text>
          <View style={styles.materialButtonWithVioletText1439Stack}>
            <MaterialButtonWithVioletText13
              style={styles.materialButtonWithVioletText1439}
            ></MaterialButtonWithVioletText13>
            <MaterialButtonWithVioletText14
              style={styles.materialButtonWithVioletText1440}
            ></MaterialButtonWithVioletText14>
          </View>
        </ImageBackground>
      </View>
      <Text style={styles.aroundTheGlobe}>Around The Globe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image3: {
    width: 200,
    height: 150,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderTopLeftRadius: 10,
    overflow: "hidden"
  },
  image3_imageStyle: {
    width: 190,
    height: 140
  },
  london: {
    color: "rgba(2,172,235,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 14
  },
  materialButtonWithVioletText1430: {
    top: 0,
    left: 99,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText1429: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonWithVioletText1430Stack: {
    width: 199,
    height: 36,
    marginTop: 73
  },
  image2: {
    width: 200,
    height: 150,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderTopRightRadius: 10,
    marginLeft: 5,
    overflow: "hidden"
  },
  image2_imageStyle: {
    width: 190,
    height: 140
  },
  paris: {
    color: "rgba(2,172,235,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 13
  },
  materialButtonWithVioletText1435: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonWithVioletText1436: {
    top: 0,
    left: 99,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText1435Stack: {
    width: 199,
    height: 36,
    marginTop: 73
  },
  image3Row: {
    height: 150,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 1
  },
  image5: {
    top: 0,
    left: 0,
    width: 200,
    height: 150,
    position: "absolute",
    borderColor: "rgba(0,88,155,0.98)",
    borderWidth: 5,
    borderBottomLeftRadius: 10,
    overflow: "hidden"
  },
  image5_imageStyle: {
    width: 190,
    height: 140,
    opacity: 0.98
  },
  materialButtonWithVioletText1438: {
    width: 100,
    height: 36,
    marginTop: 114,
    marginLeft: 100
  },
  jerusalem: {
    top: 19,
    left: 15,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  materialButtonWithVioletText1437: {
    top: 114,
    left: 0,
    width: 100,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    borderBottomLeftRadius: 10
  },
  image5Stack: {
    width: 200,
    height: 150
  },
  image4: {
    width: 200,
    height: 150,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderBottomRightRadius: 10,
    marginLeft: 5,
    overflow: "hidden"
  },
  image4_imageStyle: {
    width: 190,
    height: 140
  },
  newYork: {
    color: "rgba(2,172,235,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    marginTop: 19,
    marginLeft: 13
  },
  materialButtonWithVioletText1439: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonWithVioletText1440: {
    top: 0,
    left: 99,
    width: 100,
    height: 36,
    position: "absolute",
    borderBottomRightRadius: 10
  },
  materialButtonWithVioletText1439Stack: {
    width: 199,
    height: 36,
    marginTop: 71
  },
  image5StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 1
  },
  aroundTheGlobe: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -342
  }
});

export default CityCards;
