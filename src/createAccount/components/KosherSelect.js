
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native";
import MaterialRadio8 from "./MaterialRadio8";
import MaterialRadio5 from "./MaterialRadio5";
import MaterialRadio7 from "./MaterialRadio7";

function KosherSelect(props) {
  return (
    <View style={[styles.container, props.style]}>
        <TouchableOpacity style={styles.button4}>
          <MaterialRadio8 style={styles.materialRadio4}></MaterialRadio8>
          <Text style={styles.text4}>I&#39;d rather not say</Text>
          <Text style={styles.idoNotKeep1}>This can be added later</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <MaterialRadio5 style={styles.materialRadio5}></MaterialRadio5>
          <Text style={styles.notKosher1}>Not Kosher</Text>
        </TouchableOpacity>
        <Text style={styles.idoNotKeep}>
          I do not keep kosher, but I am looking for or listing a stay
          within a Jewish community
      </Text>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.strictlyKosher}>Strictly Kosher</Text>
          <MaterialRadio7 style={styles.materialRadio7}></MaterialRadio7>
        </TouchableOpacity>
        <Text style={styles.text5}>
          I would only book a stay that is available to kosher guests only
      </Text>
        <Text style={styles.text6}>
          I keep kosher according to basic requirements and would book a stay that
          is open to non-Kosher users (with separate kosher and non-kosher
          utensils)
      </Text>
        <TouchableOpacity style={styles.button5}>
          <Text style={styles.kosherStandard}>Standard Kosher</Text>
          <MaterialRadio7 style={styles.materialRadio8}></MaterialRadio7>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button4: {
    top: 270,
    left: 0,
    width: 'auto',
    height: 40,
    position: "absolute"
  },
  materialRadio4: {
    top: -5,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  text4: {
    paddingRight: 16,
    textAlign: "justify",
    left: 44,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button3: {
    top: 168,
    left: 0,
    width: 144,
    height: 40,
    position: "absolute"
  },
  materialRadio5: {
    top: 12,
    left: 0,
    width: "27.86%",
    height: 40,
    position: "absolute"
  },
  notKosher1: {
    top: 16,
    left: 44,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  idoNotKeep: {
    paddingRight: 16,
    textAlign: "justify",
    top: 210,
    left: 46,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 60
  },
  button2: {
    top: 90,
    left: 1,
    width: 185,
    height: 40,
    position: "absolute"
  },
  strictlyKosher: {
    top: 20,
    left: 43,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialRadio7: {
    top: 14,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  text5: {
    paddingRight: 16,
    textAlign: "justify",
    top: 136,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    left: 45,
    right: 39
  },
  text6: {
    paddingRight: 16,
    textAlign: "justify",
    top: 32,
    left: 43,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 11
  },
  idoNotKeep1: {
    top: 26,
    left: 44,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
  },
  button5: {
    top: 8,
    width: 220,
    height: 44,
    position: "absolute"
  },
  kosherStandard: {
    left: 44,
    width: 'auto',
    height: 44,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialRadio8: {
    top: -5,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  }
});

export default KosherSelect;
