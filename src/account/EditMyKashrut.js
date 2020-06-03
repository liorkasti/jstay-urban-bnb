import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import KosherSelect from "../components/KosherSelect";
import MaterialButtonWithVioletText31 from "../components/MaterialButtonWithVioletText31";
import Icon from "react-native-vector-icons/Entypo";

function EditMyKashrut(props) {
  return (
    <View style={styles.container}>
      <View style={styles.kosherSelect1Stack}>
        <KosherSelect style={styles.kosherSelect1}></KosherSelect>
        <MaterialButtonWithVioletText31
          style={styles.materialButtonWithVioletText31}
        ></MaterialButtonWithVioletText31>
        <Text style={styles.myLevelOfKashrut1}>My level of kashrut is</Text>
      </View>
      <View style={styles.group1}>
        <View style={styles.group2}>
          <View style={styles.group12}>
            <View style={styles.rect106}>
              <Text style={styles.bsD1}>BS&quot;D</Text>
              <View style={styles.button4RowRow}>
                <View style={styles.button4Row}>
                  <TouchableOpacity style={styles.button4}>
                    <TouchableOpacity style={styles.button5}>
                      <Icon name="chevron-left" style={styles.icon1}></Icon>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text style={styles.kashrut}>Kashrut</Text>
                </View>
                <View style={styles.button4RowFiller}></View>
                <Image
                  source={require("../assets/images/jstay-icon-light-dark-blue.png")}
                  resizeMode="contain"
                  style={styles.image1}
                ></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  kosherSelect1: {
    top: 14,
    left: 0,
    height: 383,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText31: {
    top: 360,
    left: 117,
    width: 170,
    height: 36,
    position: "absolute"
  },
  myLevelOfKashrut1: {
    top: 0,
    left: 25,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  kosherSelect1Stack: {
    height: 397,
    marginTop: 230,
    marginLeft: 5
  },
  group1: {
    height: 91,
    marginTop: -627
  },
  group2: {
    height: 91
  },
  group12: {
    height: 91
  },
  rect106: {
    height: 91,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 0,
    borderBottomWidth: 4
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
    color: "rgba(2,172,235,1)",
    fontSize: 40
  },
  kashrut: {
    color: "rgba(2,172,235,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 129,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 12
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    width: 70,
    height: 61
  },
  button4RowRow: {
    height: 61,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 6,
    marginRight: 1
  }
});

export default EditMyKashrut;
