import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import MaterialButtonWithVioletText1 from "../components/MaterialButtonWithVioletText1";
import Svg, { Path } from "react-native-svg";
import MaterialButtonWithVioletText2 from "../components/MaterialButtonWithVioletText2";
import MaterialButtonWithVioletText3 from "../components/MaterialButtonWithVioletText3";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

export default function Welcome(props) {

  return (
    <View style={styles.container}>
      <View style={styles.materialButtonWithVioletText12Column}>
        <MaterialButtonWithVioletText1
          text1="Continue with Google"
          style={styles.materialButtonWithVioletText12}
        ></MaterialButtonWithVioletText1>
        <View style={styles.pathRow}>
          <Svg viewBox="0 0 44 63.01159786070548" style={styles.path}>
            <Path
              strokeWidth={1}
              fill="rgba(230, 230, 230,1)"
              stroke="rgba(230, 230, 230,1)"
              d="M0.00 0.01 C0.00 1.01 44.00 63.01 44.00 63.01 C44.00 63.01 0.00 -0.99 0.00 0.01 Z"
            ></Path>
          </Svg>
          <Image
            source={require("../assets/images/JStay-Logo-blue-shin6.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <TouchableOpacity style={styles.button}>
          <View style={styles.materialButtonWithVioletText2Filler}></View>
          <MaterialButtonWithVioletText2
            onPress={()=>{
              props.onNext()
            }}
            text1="Log In"
            style={styles.materialButtonWithVioletText2}
          ></MaterialButtonWithVioletText2>
        </TouchableOpacity>
        <MaterialButtonWithVioletText3
          text1="Create an Account"
          style={styles.materialButtonWithVioletText32}
        ></MaterialButtonWithVioletText3>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
        <Text style={styles.bsD}>BS&quot;D</Text>
      </View>
      <View style={styles.materialButtonWithVioletText12ColumnFiller}></View>
      <Text style={styles.text}>
        By tapping &#39;Continue with Facebook&#39;, &#39;Continue with
        Google&#39; or &#39;Create an Account&#39; you agree to Jstays&#39;
        Terms of Service, Payments Terms of Service, Privacy Policy and
        Non-Discrimination Policy.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialButtonWithVioletText12: {
    width: 352,
    height: 62,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    marginTop: 412,
    marginLeft: 152
  },
  path: {
    width: 29,
    height: 42,
    marginTop: 14
  },
  image2: {
    height: 150,
    flex: 1,
    marginLeft: 92
  },
  pathRow: {
    height: 150,
    flexDirection: "row",
    marginTop: -350,
    marginRight: 14
  },
  button: {
    width: 108,
    height: 48,
    flexDirection: "row",
    marginTop: -247,
    marginLeft: 441
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonWithVioletText2: {
    width: 108,
    height: 48
  },
  materialButtonWithVioletText32: {
    width: 187,
    height: 31,
    marginTop: 431,
    marginLeft: 236
  },
  materialButtonViolet: {
    width: 352,
    height: 62,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: -200,
    marginLeft: 152
  },
  bsD: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: -399,
    marginRight: 52
  },
  materialButtonWithVioletText12Column: {
    marginTop: 13,
    marginLeft: -121,
    marginRight: -14
  },
  materialButtonWithVioletText12ColumnFiller: {
    flex: 1
  },
  text: {
    width: 304,
    height: 60,
    color: "rgba(168,219,243,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginBottom: 54,
    marginLeft: 35
  }
});