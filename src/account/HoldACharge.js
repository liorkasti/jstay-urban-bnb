import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import RefundableTaxCheckBox from "../components/RefundableTaxCheckBox";
import SecurityDepositCheckBox from "../components/SecurityDepositCheckBox";
import MaterialButtonViolet27 from "../components/MaterialButtonViolet27";

function Untitled7(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <View style={styles.rect106}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4Row}>
            <TouchableOpacity style={styles.button4}>
              <TouchableOpacity style={styles.button5}>
                <Icon name="chevron-left" style={styles.icon1}></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.holdACharge}>Hold A Charge</Text>
            <TouchableOpacity style={styles.button3}>
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
      <Text style={styles.priceForThisStay2}>
        Which charge would you like to hold?
      </Text>
      <RefundableTaxCheckBox
        style={styles.refundableTaxCheckBox}
      ></RefundableTaxCheckBox>
      <SecurityDepositCheckBox
        style={styles.securityDepositCheckBox}
      ></SecurityDepositCheckBox>
      <MaterialButtonViolet27
        style={styles.materialButtonViolet27}
      ></MaterialButtonViolet27>
      <Text style={styles.loremIpsum1}>
        Guest did/could not follow conditions to have a charge returned, this
        can not be undone
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  group1: {
    height: 91
  },
  rect106: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
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
    height: 40,
    marginTop: 10
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  holdACharge: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 91,
    marginTop: 18
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row",
    marginLeft: 60
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4Row: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  },
  priceForThisStay2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 17,
    marginLeft: 22
  },
  refundableTaxCheckBox: {
    height: 40,
    marginTop: 108,
    marginLeft: 22,
    marginRight: 28
  },
  securityDepositCheckBox: {
    height: 40,
    marginTop: 1,
    marginLeft: 21,
    marginRight: 28
  },
  materialButtonViolet27: {
    height: 45,
    borderRadius: 10,
    marginTop: 24,
    marginLeft: 25,
    marginRight: 25
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -252,
    marginLeft: 22
  }
});

export default Untitled7;
