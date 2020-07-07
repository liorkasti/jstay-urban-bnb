import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialButtonWithVioletText21 from "../components/MaterialButtonWithVioletText21";
import MaterialButtonWithVioletText22 from "../components/MaterialButtonWithVioletText22";
import MaterialButtonWithVioletText23 from "../components/MaterialButtonWithVioletText23";
import MaterialButtonWithVioletText24 from "../components/MaterialButtonWithVioletText24";
import MaterialButtonWithVioletText25 from "../components/MaterialButtonWithVioletText25";
import MaterialButtonWithVioletText26 from "../components/MaterialButtonWithVioletText26";
import MaterialButtonWithVioletText28 from "../components/MaterialButtonWithVioletText28";

function FooterMenuDropdown(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group1}>
        <View style={styles.rect9}>
          <View style={styles.button54Stack}>
            <TouchableOpacity
              // onPress={(menuItem) => { props.handleFooterMenu(menuItem) }}
              style={styles.button54}
            >
              <View style={styles.materialButtonWithVioletText21Stack} >
                <MaterialButtonWithVioletText21
                  onPress={(menuItem) => { props.handleFooterMenu("createStay") }}
                  style={styles.materialButtonWithVioletText21}
                ></MaterialButtonWithVioletText21>
                <View style={styles.rect3}></View>
              </View>
            </TouchableOpacity>

            <MaterialButtonWithVioletText22
              onPress={() => { props.handleFooterMenu("profile") }}
              style={styles.materialButtonWithVioletText22}
            ></MaterialButtonWithVioletText22>

            <View style={styles.rect4}></View>
          </View>

          <View style={styles.materialButtonWithVioletText23Stack}>
            <MaterialButtonWithVioletText23
              onPress={() => { props.handleFooterMenu("kashrut") }}
              style={styles.materialButtonWithVioletText23}
            ></MaterialButtonWithVioletText23>
            <View style={styles.rect5}></View>
          </View>

          <View style={styles.materialButtonWithVioletText24Stack}>

            <MaterialButtonWithVioletText24
              onPress={() => { props.handleFooterMenu("paymentDetails") }}

              style={styles.materialButtonWithVioletText24}
            ></MaterialButtonWithVioletText24>

            <View style={styles.rect6}></View>
          </View>
          <View style={styles.materialButtonWithVioletText25Stack}>

            <MaterialButtonWithVioletText25
              style={styles.materialButtonWithVioletText25}
            ></MaterialButtonWithVioletText25>

            <MaterialButtonWithVioletText26
              style={styles.materialButtonWithVioletText26}
            ></MaterialButtonWithVioletText26>

            <View style={styles.rect7}></View>
            <View style={styles.rect8}></View>

            <MaterialButtonWithVioletText28
              onPress={() => props.handleFooterMenu("logout")}
              style={styles.materialButtonWithVioletText28}
            ></MaterialButtonWithVioletText28>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group1: {
    flex: 1,
    width: 207,
    width: '100%',
    height: 350,
    // position: "absolute",
    right: 0,
    left: "48.5%",
    bottom: -12,
    top: 0
  },
  rect9: {
    width: 207,
    height: 350,
    backgroundColor: "rgba(0,88,155,1)"
  },
  button54: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  button54Stack: {
    width: 207,
    height: 99,
    marginTop: 2
  },
  materialButtonWithVioletText21Stack: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText21: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect3: {
    top: 48,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText22: {
    top: 49,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  }, rect4: {
    top: 98,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText23: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect5: {
    top: 49,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText23Stack: {
    width: 207,
    height: 50
  },
  rect6: {
    top: 49,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText24Stack: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText25: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText24: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText25Stack: {
    width: 207,
    height: 145
  },
  materialButtonWithVioletText28: {
    top: 95,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText26: {
    top: 49,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect7: {
    top: 49,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect8: {
    top: 94,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
})

export default FooterMenuDropdown;
