import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  SafeAreaView,
  Dimensions,
  ScrollView
} from "react-native";
import MaterialCard5 from "./components/MaterialCard5";
import MaterialCard12 from "./components/MaterialCard12";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCardWithTextOverImage4 from "./components/MaterialCardWithTextOverImage4";
import MaterialCardWithTextOverImage5 from "./components/MaterialCardWithTextOverImage5";
import MaterialCardWithTextOverImage6 from "./components/MaterialCardWithTextOverImage6";
import MaterialCardWithTextOverImage7 from "./components/MaterialCardWithTextOverImage7";
import MaterialBasicFooter1 from "./components/MaterialBasicFooter1";
import MaterialButtonShare from "./components/MaterialButtonShare";
import MaterialButtonViolet4 from "./components/MaterialButtonViolet4";
import MaterialButtonViolet8 from "./components/MaterialButtonViolet8";
import MaterialButtonViolet5 from "./components/MaterialButtonViolet5";
import MaterialButtonViolet2 from "./components/MaterialButtonViolet2";
import MaterialButtonViolet1 from "./components/MaterialButtonViolet1";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function Untitled2(props) {
  return (
    <View style={styles.container}>

      <MaterialCard12 style={styles.materialCard12}></MaterialCard12>
      <View style={styles.group}>
        <TextInput
          placeholder="Location, comunity, or address"
          placeholderTextColor="rgba(177,177,177,1)"
          returnKeyType="search"
          returnKeyLabel="Search"
          style={styles.textInput}
        ></TextInput>
        <FontAwesomeIcon name="sliders" style={styles.icon2}></FontAwesomeIcon>
        <IoniconsIcon name="ios-search" style={styles.icon3}></IoniconsIcon>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./images/jstay_icon_final_inverted_colors_-_Palette_e6e6e6.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </TouchableOpacity>
      </View>


      <View style={styles.group2}>
        <MaterialButtonViolet8
          style={styles.materialButtonViolet8}
        ></MaterialButtonViolet8>
        <MaterialButtonViolet5
          style={styles.materialButtonViolet5}
        ></MaterialButtonViolet5>
        <MaterialButtonViolet2
          style={styles.materialButtonViolet2}
        ></MaterialButtonViolet2>
        <MaterialButtonViolet1
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet1>
      </View>

      <ScrollView style={styles.group4}>
        <MaterialCard5 
        style={styles.materialCard5}
        ></MaterialCard5>
        <View style={{flexDirection: "row", flexWrap:"wrap", marginTop: 10}}>
        <MaterialCardWithTextOverImage4
          style={styles.materialCardWithTextOverImage4}
        ></MaterialCardWithTextOverImage4>
        <MaterialCardWithTextOverImage5
          style={styles.materialCardWithTextOverImage4}
        ></MaterialCardWithTextOverImage5>
        <MaterialCardWithTextOverImage6
          style={styles.materialCardWithTextOverImage4}
        ></MaterialCardWithTextOverImage6>
        <MaterialCardWithTextOverImage7
          style={styles.materialCardWithTextOverImage4}
        ></MaterialCardWithTextOverImage7>
        </View>
      </ScrollView>

      <MaterialBasicFooter1
        style={styles.materialBasicFooter1}
      ></MaterialBasicFooter1>

      <MaterialButtonShare
        style={styles.materialButtonShare}
      ></MaterialButtonShare>
      <StatusBar hidden={false}></StatusBar>
      <MaterialButtonViolet4
        style={styles.materialButtonViolet6}
      ></MaterialButtonViolet4>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(2,172,235,1)"
  },
  materialCard5: {
    left: "1.65%",
    height: 349,
    width: 336,
    backgroundColor: "rgba(230,230,230,1)",
    display: "flex",
    flexDirection: "column",
    borderRadius: 10
  },
  materialCard12: {
    top: 986,
    left: 3,
    height: 206,
    position: "absolute",
    right: 1
  },
  group: {
    top: 40,
    left: 10,
    height: 52,
    position: "absolute",
    right: 22
  },
  textInput: {
    top: 5,
    left: "0%",
    width: "89.85%",
    height: 46,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    
    letterSpacing: 0,
    textAlign: "center"
  },
  icon2: {
    top: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 37,
    left: "78.22%"
  },
  icon3: {
    top: 7,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 45,
    left: "3.88%",
    width: 34,
    height: 45
  },
  button: {
    top: 3,
    width: "18.4%",
    height: 51,
    position: "absolute",
    right: "-4.34%"
  },
  image1: {
    top: 0,
    left: 21,
    width: 50,
    height: 51,
    position: "absolute"
  },
  group4: {
    zIndex: 1,
    maxHeight: 425,
    width: 340,
    marginLeft: 10,
    marginTop: 145,
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  group3: {
    top: 0,
    left: "0.63%",
    width: 440,
    height: "55.47%",
    position: "absolute"
  },
  materialCardWithTextOverImage4: {
    width: 170,
    height: 170,
    borderTopLeftRadius: 10
  },
  materialCardWithTextOverImage5: {
    top: 204,
    left: 1,
    width: 200,
    height: 200,
    position: "absolute",
    borderBottomLeftRadius: 10
  },
  materialCardWithTextOverImage6: {
    top: 0,
    width: 200,
    height: 200,
    position: "absolute",
    right: 34,
    borderTopRightRadius: 10
  },
  materialCardWithTextOverImage7: {
    top: 203,
    width: 200,
    height: 200,
    position: "absolute",
    right: 35,
    borderBottomRightRadius: 10
  },
  materialBasicFooter1: {
    zIndex: 10,
    left: -2,
    height: 76,
    position: "absolute",
    right: -15,
    top: 575
  },
  materialButtonShare: {
    zIndex: 10,
    width: 56,
    height: 56,
    position: "absolute",
    right: 14,
    bottom: 87,
    borderColor: "#000000",
    borderWidth: 0
  },
  materialButtonViolet6: {
    zIndex: 10,
    left: "64.28%",
    height: 60,
    position: "absolute",
    right: 14,
    bottom: 85
  },
  group2: {
    top: 106,
    left: "0.79%",
    width: 409,
    height: 37,
    position: "absolute"
  },
  materialButtonViolet8: {
    top: 0,
    left: 215,
    width: 88,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonViolet5: {
    top: "3.52%",
    left: "78.64%",
    width: 88,
    height: 36,
    position: "absolute",
    overflow: "visible"
  },
  materialButtonViolet2: {
    top: "3.52%",
    left: "26.75%",
    width: 88,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  materialButtonViolet1: {
    top: "3.52%",
    left: "1.2%",
    width: 88,
    height: 36,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    overflow: "visible"
  }
});

export default Untitled2;
