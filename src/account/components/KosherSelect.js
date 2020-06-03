import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialRadio8 from "./MaterialRadio8";
import MaterialRadio5 from "./MaterialRadio5";
import MaterialRadio7 from "./MaterialRadio7";

function KosherSelect(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.button4Stack}>
        <TouchableOpacity style={styles.button4}>
          <View style={styles.materialRadio4Row}>
            <MaterialRadio8 style={styles.materialRadio4}></MaterialRadio8>
            <Text style={styles.text4}>I&#39;d rather not say</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.idoNotKeep1}>This can be added later</Text>
      </View>
      <View style={styles.button3Stack}>
        <TouchableOpacity style={styles.button3}>
          <View style={styles.materialRadio5Row}>
            <MaterialRadio5 style={styles.materialRadio5}></MaterialRadio5>
            <Text style={styles.notKosher1}>Not Kosher</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.idoNotKeep}>
          I do not keep kosher, but I am looking for or {"\n"}listing a stay
          within a Jewish community
        </Text>
      </View>
      <View style={styles.button2Stack}>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.materialRadio7Row}>
            <MaterialRadio7 style={styles.materialRadio7}></MaterialRadio7>
            <Text style={styles.strictlyKosher}>Strictly Kosher</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.text5}>
          I would only book a stay that is available to kosher{"\n"}guests only
        </Text>
      </View>
      <View style={styles.text6Stack}>
        <Text style={styles.text6}>
          I keep kosher according to basic requirements and would book a stay
          that is open to non-Kosher users (with separate kosher and non-kosher
          utensils)
        </Text>
        <TouchableOpacity style={styles.button5}>
          <View style={styles.materialRadio8Row}>
            <MaterialRadio7 style={styles.materialRadio8}></MaterialRadio7>
            <Text style={styles.kosherStandard}>Standard Kosher</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button4: {
    top: 0,
    left: 0,
    width: 190,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialRadio4: {
    width: 40,
    height: 40
  },
  text4: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 4,
    marginTop: 10
  },
  materialRadio4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  idoNotKeep1: {
    top: 30,
    left: 44,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 3
  },
  button4Stack: {
    height: 63,
    marginTop: 242,
    marginRight: 204
  },
  button3: {
    top: 0,
    left: 0,
    width: 144,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialRadio5: {
    width: 40,
    height: 40
  },
  notKosher1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 4,
    marginTop: 10
  },
  materialRadio5Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  idoNotKeep: {
    top: 32,
    left: 46,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  button3Stack: {
    height: 65,
    marginTop: -137,
    marginRight: 60
  },
  button2: {
    top: 0,
    left: 0,
    width: 185,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialRadio7: {
    width: 40,
    height: 40
  },
  strictlyKosher: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 3,
    marginTop: 10
  },
  materialRadio7Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 14
  },
  text5: {
    top: 33,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    left: 44,
    right: 0
  },
  button2Stack: {
    height: 66,
    marginTop: -141,
    marginLeft: 1,
    marginRight: 38
  },
  text6: {
    top: 28,
    left: 42,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  button5: {
    top: 0,
    left: 0,
    width: 220,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialRadio8: {
    width: 40,
    height: 40
  },
  kosherStandard: {
    width: 177,
    height: 20,
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 3,
    marginTop: 10
  },
  materialRadio8Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  text6Stack: {
    height: 78,
    marginTop: -150,
    marginLeft: 1,
    marginRight: 10
  }
});

export default KosherSelect;
