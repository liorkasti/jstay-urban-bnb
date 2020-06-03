import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet26 from "../components/MaterialButtonViolet26";
import MaterialButtonViolet20 from "../components/MaterialButtonViolet20";
import MaterialButtonViolet25 from "../components/MaterialButtonViolet25";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import MaterialSlider1 from "../components/MaterialSlider1";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Untitled11(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button1Stack}>
        <TouchableOpacity style={styles.button1}>
          <TouchableOpacity style={styles.button7}>
            <View style={styles.image10Row}>
              <Image
                source={require("../assets/images/Cottage1.jpg")}
                resizeMode="stretch"
                style={styles.image10}
              ></Image>
              <View style={styles.theCottage9Column}>
                <Text style={styles.theCottage9}>The Cottage</Text>
                <View style={styles.upcomingTrips1Stack}>
                  <Text style={styles.upcomingTrips1}></Text>
                  <Text style={styles.jerusalemIsrael}>Jerusalem, Israel</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button8}>
          <Image
            source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
            resizeMode="stretch"
            style={styles.image11}
          ></Image>
          <Text style={styles.guest}>Guest</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD12}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <EntypoIcon
                    name="chevron-left"
                    style={styles.icon1}
                  ></EntypoIcon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.newRequest}>New Request</Text>
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
      <MaterialButtonViolet26
        style={styles.materialButtonViolet3}
      ></MaterialButtonViolet26>
      <View style={styles.materialButtonViolet4Row}>
        <MaterialButtonViolet20
          text1="Decline"
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet20>
        <MaterialButtonViolet25
          text1="Accept"
          style={styles.materialButtonViolet5}
        ></MaterialButtonViolet25>
      </View>
      <View style={styles.checkIn1Row}>
        <Text style={styles.checkIn1}>Check-in</Text>
        <Text style={styles.checkOut1}>Check-out</Text>
      </View>
      <View style={styles.checkOut3Row}>
        <Text style={styles.checkOut3}>04 March 2021</Text>
        <Text style={styles.checkOut2}>20 March 2021</Text>
      </View>
      <Text style={styles.text1}>
        Free cancellation until 3 days prior to arrival
      </Text>
      <View style={styles.discountRow}>
        <Text style={styles.discount}>Discount</Text>
        <View style={styles.discountFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
      </View>
      <View style={styles.textInput1StackRowRow}>
        <View style={styles.textInput1StackRow}>
          <View style={styles.textInput1Stack}>
            <TextInput
              placeholder="e.g. 20"
              style={styles.textInput1}
            ></TextInput>
            <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
          </View>
          <FontAwesomeIcon
            name="percent"
            style={styles.icon2}
          ></FontAwesomeIcon>
        </View>
        <View style={styles.textInput1StackRowFiller}></View>
        <MaterialButtonViolet25
          text1="Send"
          style={styles.materialButtonViolet6}
        ></MaterialButtonViolet25>
      </View>
      <Text style={styles.pricingForStay1}>Pricing for stay</Text>
      <View style={styles.night1Row}>
        <Text style={styles.night1}>Nightly rate</Text>
        <Text style={styles.night8}>$0.00</Text>
      </View>
      <View style={styles.night2Row}>
        <Text style={styles.night2}>Cleaning fee</Text>
        <Text style={styles.night9}>$0.00</Text>
      </View>
      <View style={styles.night3Row}>
        <Text style={styles.night3}>Other fees</Text>
        <Text style={styles.night10}>$0.00</Text>
      </View>
      <View style={styles.night6Row}>
        <Text style={styles.night6}>Jstay fee</Text>
        <Text style={styles.night12}>$0.00</Text>
      </View>
      <View style={styles.night7Row}>
        <Text style={styles.night7}>Total</Text>
        <Text style={styles.night13}>$0.00</Text>
      </View>
      <Text style={styles.loremIpsum1}>$0.00/night x 0 nights</Text>
      <View style={styles.night14Row}>
        <Text style={styles.night14}>Deductable charge/s</Text>
        <Text style={styles.night16}>$0.00</Text>
      </View>
      <Text style={styles.night15}>
        These charges will be refunded if no claim has been made
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  button1: {
    top: 0,
    left: 0,
    height: 90,
    position: "absolute",
    right: 7
  },
  button7: {
    width: 380,
    height: 90,
    marginLeft: 10
  },
  image10: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage9: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  upcomingTrips1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  jerusalemIsrael: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-700"
  },
  upcomingTrips1Stack: {
    width: 108,
    height: 17
  },
  theCottage9Column: {
    width: 111,
    marginLeft: 3,
    marginBottom: 34
  },
  image10Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 159
  },
  button8: {
    top: 19,
    width: 50,
    height: 64,
    position: "absolute",
    right: 0
  },
  image11: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  guest: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    alignSelf: "center"
  },
  button1Stack: {
    height: 90,
    marginTop: 91,
    marginRight: 27
  },
  group1: {
    height: 91,
    marginTop: -181
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
  },
  bsD12: {
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
  newRequest: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 99,
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
    height: 62,
    width: 62,
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
  materialButtonViolet3: {
    width: 363,
    height: 45,
    borderRadius: 10,
    marginTop: 611,
    marginLeft: 26
  },
  materialButtonViolet4: {
    width: 176,
    height: 45,
    borderRadius: 10
  },
  materialButtonViolet5: {
    width: 176,
    height: 45,
    borderRadius: 10,
    marginLeft: 12
  },
  materialButtonViolet4Row: {
    height: 45,
    flexDirection: "row",
    marginTop: -102,
    marginLeft: 26,
    marginRight: 24
  },
  checkIn1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  checkOut1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginLeft: 100
  },
  checkIn1Row: {
    height: 24,
    flexDirection: "row",
    marginTop: -490,
    marginLeft: 26,
    marginRight: 114
  },
  checkOut3: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 47
  },
  checkOut3Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 26,
    marginRight: 73
  },
  text1: {
    width: 272,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 338,
    marginLeft: 26
  },
  discount: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 1
  },
  discountFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  discountRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 139,
    marginLeft: 26,
    marginRight: 24
  },
  textInput1: {
    top: 0,
    left: 146,
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  materialSlider1: {
    top: 5,
    left: 0,
    width: 150,
    height: 30,
    position: "absolute"
  },
  textInput1Stack: {
    width: 226,
    height: 40
  },
  icon2: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 13,
    marginTop: 6
  },
  textInput1StackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 3
  },
  textInput1StackRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet6: {
    width: 89,
    height: 45,
    borderRadius: 10
  },
  textInput1StackRowRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 26,
    marginRight: 12
  },
  pricingForStay1: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: -554,
    marginLeft: 26
  },
  night1: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  night8: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 207
  },
  night1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 26,
    marginRight: 26
  },
  night2: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  night9: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 207
  },
  night2Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 26,
    marginRight: 26
  },
  night3: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  night10: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 207
  },
  night3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 26
  },
  night6: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  night12: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 207
  },
  night6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 26
  },
  night7: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  night13: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 207
  },
  night7Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 26
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-700",
    marginTop: -177,
    marginLeft: 26
  },
  night14: {
    width: 172,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  night16: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 138
  },
  night14Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 180,
    marginLeft: 26,
    marginRight: 26
  },
  night15: {
    width: 208,
    height: 25,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginLeft: 26
  }
});

export default Untitled11;
