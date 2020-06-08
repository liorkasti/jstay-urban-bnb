import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialButtonWithVioletText51 from "../components/MaterialButtonWithVioletText51";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet28 from "../components/MaterialButtonViolet28";

function GuestCardInfo(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.addBillingInfo}>
        Please enter your billing information
      </Text>
      <TextInput placeholder="First Name" style={styles.textInput}></TextInput>
      <TextInput placeholder="Last Name" style={styles.textInput3}></TextInput>
      <TextInput placeholder="Address" style={styles.textInput5}></TextInput>
      <TextInput placeholder="I.D" style={styles.textInput7}></TextInput>
      <TextInput
        placeholder="Credit Card Number"
        style={styles.textInput9}
      ></TextInput>
      <Text style={styles.addBillingInfo1}>Card Information</Text>
      <View style={styles.textInput11Row}>
        <TextInput placeholder="Month " style={styles.textInput11}></TextInput>
        <TextInput placeholder="Year" style={styles.textInput13}></TextInput>
      </View>
      <View style={styles.textInput15Row}>
        <TextInput placeholder="CVV" style={styles.textInput15}></TextInput>
        <Text style={styles.text16}>
          The CVV is 3 digits that can be found on the back of your card
        </Text>
      </View>
      <MaterialButtonWithVioletText51
        style={styles.materialButtonWithVioletText51}
      ></MaterialButtonWithVioletText51>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.payments}>Payments</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
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
      <MaterialButtonViolet28
        style={styles.materialButtonViolet32}
      ></MaterialButtonViolet28>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  addBillingInfo: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 106,
    marginLeft: 30,
    marginRight: 54
  },
  textInput: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 26,
    marginLeft: 30
  },
  textInput3: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 30
  },
  textInput5: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 31
  },
  textInput7: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 31
  },
  textInput9: {
    width: 230,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 55,
    marginLeft: 31
  },
  addBillingInfo1: {
    width: 210,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -61,
    marginLeft: 30
  },
  textInput11: {
    width: 70,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular"
  },
  textInput13: {
    width: 70,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginLeft: 9
  },
  textInput11Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 31,
    marginRight: 234
  },
  textInput15: {
    width: 50,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular"
  },
  text16: {
    width: 220,
    height: 27,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 9,
    marginTop: 3
  },
  textInput15Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 31,
    marginRight: 104
  },
  materialButtonWithVioletText51: {
    height: 36,
    width: 100,
    marginTop: 19,
    marginLeft: 150
  },
  group1: {
    height: 91,
    marginTop: -519
  },
  rect: {
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
  payments: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 121,
    marginTop: 8
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
  },
  materialButtonViolet32: {
    height: 0,
    width: 0,
    marginTop: -92
  }
});

export default GuestCardInfo;
