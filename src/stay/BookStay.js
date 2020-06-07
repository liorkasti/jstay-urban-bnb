import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSlider1 from "../components/MaterialSlider1";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet14 from "../components/MaterialButtonViolet14";
import LargeTextInput from "../components/LargeTextInput";

function BookStay(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button1Row}>
        <TouchableOpacity style={styles.button1}>
          <View style={styles.icon4Stack}>
            <FontAwesomeIcon
              name="calendar-o"
              style={styles.icon4}
            ></FontAwesomeIcon>
            <Text style={styles.january}>January</Text>
            <Text style={styles.january2}>02</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.icon5Stack}>
            <FontAwesomeIcon
              name="calendar-o"
              style={styles.icon5}
            ></FontAwesomeIcon>
            <Text style={styles.january1}>January</Text>
            <Text style={styles.january3}>21</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon52}
          ></FontAwesomeIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.checkIn1Row}>
        <Text style={styles.checkIn1}>Check-In</Text>
        <Text style={styles.checkOut1}>Check-Out</Text>
      </View>
      <Text style={styles.dates1}>Travel dates</Text>
      <View style={styles.materialSlider1Row}>
        <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
        <EntypoIcon name="man" style={styles.icon6}></EntypoIcon>
        <TextInput placeholder="0" style={styles.textInput1}></TextInput>
      </View>
      <Text style={styles.howManyGuests1}>How many guests?</Text>
      <Text style={styles.howManyGuests2}>Add a message to host</Text>
      <MaterialButtonViolet14
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet14>
      <LargeTextInput
        textInput1="e.g. we are a family of 4 and we would love to stay in your beautiful home"
        style={styles.largeTextInput}
      ></LargeTextInput>
      <Text style={styles.your}>
        Hosts will have 24 hours to accept/decline booking
      </Text>
      <Text style={styles.text2}>
        Free cancellations until 3 days prior to check-in
      </Text>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
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
              <Text style={styles.bookThisStay}>Book This Stay</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity style={styles.button32}>
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
      <Text style={styles.priceForYourStay1}>Pricing for your stay</Text>
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
      <View style={styles.night4Row}>
        <Text style={styles.night4}>Deductable charge/s</Text>
        <Text style={styles.night11}>$0.00</Text>
      </View>
      <Text style={styles.night5}>
        These charges will be refunded if host&#39;s requirements are met
      </Text>
      <View style={styles.night6Row}>
        <Text style={styles.night6}>Jstay fee</Text>
        <Text style={styles.night12}>$0.00</Text>
      </View>
      <View style={styles.night7Row}>
        <Text style={styles.night7}>Total</Text>
        <Text style={styles.night13}>$0.00</Text>
      </View>
      <Text style={styles.loremIpsum1}>$0.00/night x 0 nights</Text>
      <Text style={styles.text3}>
        Conditions for return of deductible
        charge...----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    width: 41,
    height: 45,
    marginTop: 1
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 45
  },
  january: {
    top: 19,
    left: 4,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-regular",
    textDecorationLine: "underline"
  },
  january2: {
    top: 29,
    left: 14,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  icon4Stack: {
    width: 42,
    height: 45
  },
  button2: {
    width: 46,
    height: 45,
    marginLeft: 29
  },
  icon5: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 45
  },
  january1: {
    top: 20,
    left: 4,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 9,
    fontFamily: "roboto-regular",
    textDecorationLine: "underline"
  },
  january3: {
    top: 30,
    left: 16,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  icon5Stack: {
    width: 42,
    height: 45
  },
  button3: {
    width: 46,
    height: 45,
    marginLeft: 129,
    marginTop: 1
  },
  icon52: {
    color: "rgba(0,88,155,1)",
    fontSize: 45
  },
  button1Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 132,
    marginLeft: 37,
    marginRight: 86
  },
  checkIn1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  checkOut1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 10
  },
  checkIn1Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 27,
    marginRight: 258
  },
  dates1: {
    width: 160,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -86,
    marginLeft: 27
  },
  materialSlider1: {
    width: 183,
    height: 21,
    marginTop: 6
  },
  icon6: {
    color: "rgba(0,88,155,1)",
    fontSize: 17,
    marginLeft: 6,
    marginTop: 6
  },
  textInput1: {
    width: 47,
    height: 28,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 2
  },
  materialSlider1Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 115,
    marginLeft: 27,
    marginRight: 131
  },
  howManyGuests1: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -53,
    marginLeft: 27
  },
  howManyGuests2: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 506,
    marginLeft: 28
  },
  materialButtonViolet1: {
    height: 58,
    borderRadius: 10,
    marginTop: 178,
    marginLeft: 37,
    marginRight: 14
  },
  largeTextInput: {
    height: 132,
    marginTop: -236,
    marginLeft: 37,
    marginRight: 13
  },
  your: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 27,
    marginRight: 69
  },
  text2: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -217,
    marginLeft: 31,
    marginRight: 73
  },
  group1: {
    height: 91,
    marginTop: -735
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
  bookThisStay: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 88,
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
  button32: {
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
  priceForYourStay1: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 219,
    marginLeft: 26
  },
  night1: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night8: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular"
  },
  night9: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular"
  },
  night10: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 26
  },
  night4: {
    width: 172,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night11: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 138
  },
  night4Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 26
  },
  night5: {
    width: 208,
    height: 25,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 26
  },
  night6: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night12: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 104,
    marginLeft: 27,
    marginRight: 25
  },
  night7: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night13: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night7Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 25
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -328,
    marginLeft: 26
  },
  text3: {
    color: "rgba(0,88,155,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 159,
    marginLeft: 26,
    marginRight: 34
  }
});

export default BookStay;
