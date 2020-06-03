import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonViolet20 from "../components/MaterialButtonViolet20";
import MaterialButtonViolet13 from "../components/MaterialButtonViolet13";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet24 from "../components/MaterialButtonViolet24";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button6}>
        <View style={styles.group22}>
          <View style={styles.rect105}>
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
              <TouchableOpacity style={styles.button7}>
                <Image
                  source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
                  resizeMode="stretch"
                  style={styles.image11}
                ></Image>
                <Text style={styles.host}>Host</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.checkIn1ColumnRow}>
        <View style={styles.checkIn1Column}>
          <Text style={styles.checkIn1}>Check-in</Text>
          <Text style={styles.checkOut3}>04 March 2021</Text>
          <Text style={styles.checkOut5}>15:00</Text>
        </View>
        <View style={styles.checkOut1StackStack}>
          <View style={styles.checkOut1Stack}>
            <Text style={styles.checkOut1}>Check-out</Text>
            <Svg viewBox="0 0 114 107" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(238,8,8,1)"
                cx={57}
                cy={54}
                rx={57}
                ry={54}
              ></Ellipse>
            </Svg>
            <Text style={styles.loremIpsum3}>Lorem Ipsum</Text>
          </View>
          <Text style={styles.checkOut2}>20 March 2021</Text>
          <Text style={styles.checkOut4}>11:00</Text>
        </View>
      </View>
      <View style={styles.materialButtonViolet20Row}>
        <MaterialButtonViolet20
          style={styles.materialButtonViolet20}
        ></MaterialButtonViolet20>
        <MaterialButtonViolet13
          text1="Message Host"
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet13>
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
      <Text style={styles.text1}>
        Free cancellation until 3 days prior to arrival
      </Text>
      <Text style={styles.text2}>
        Note: you will receive full address and check-in information on day of
        arrival
      </Text>
      <View style={styles.group23}>
        <View style={styles.rect106}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4Row}>
            <TouchableOpacity style={styles.button4}>
              <TouchableOpacity style={styles.button5}>
                <Icon name="chevron-left" style={styles.icon1}></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.confirmed}>Confirmed</Text>
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
      <MaterialButtonViolet24
        style={styles.materialButtonViolet24}
      ></MaterialButtonViolet24>
      <Text style={styles.loremIpsum}>$0.00/night x 0 nights</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  button6: {
    width: 380,
    height: 90,
    marginTop: 100,
    marginLeft: 10
  },
  group22: {
    width: 380,
    height: 90,
    marginLeft: 10
  },
  rect105: {
    width: 380,
    height: 82,
    borderRadius: 10,
    shadowOpacity: 0.01
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
  button7: {
    width: 50,
    height: 64,
    marginLeft: 96,
    marginTop: 3
  },
  image11: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  host: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginLeft: 10
  },
  image10Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 13
  },
  checkIn1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  checkOut3: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 16
  },
  checkOut5: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 16
  },
  checkIn1Column: {
    width: 134,
    marginBottom: 26
  },
  checkOut1: {
    top: 0,
    left: 47,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  ellipse: {
    top: 23,
    left: 0,
    width: 114,
    height: 107,
    position: "absolute"
  },
  loremIpsum3: {
    top: 78,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  checkOut1Stack: {
    top: 0,
    left: 0,
    width: 140,
    height: 130,
    position: "absolute"
  },
  checkOut2: {
    top: 40,
    left: 47,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut4: {
    top: 80,
    left: 50,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut1StackStack: {
    width: 181,
    height: 130
  },
  checkIn1ColumnRow: {
    height: 130,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 26,
    marginRight: 19
  },
  materialButtonViolet20: {
    width: 173,
    height: 45,
    borderRadius: 10
  },
  materialButtonViolet1: {
    width: 173,
    height: 45,
    marginLeft: 15
  },
  materialButtonViolet20Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 400,
    marginLeft: 26,
    marginRight: -27
  },
  priceForYourStay1: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: -445,
    marginLeft: 23
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
    marginLeft: 167
  },
  night1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 23,
    marginRight: 15
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
    marginLeft: 167
  },
  night2Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 23,
    marginRight: 15
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
    marginLeft: 167
  },
  night3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 23,
    marginRight: 15
  },
  night4: {
    width: 172,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  night11: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 98
  },
  night4Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 23,
    marginRight: 15
  },
  night5: {
    width: 208,
    height: 25,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginLeft: 23
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
    marginLeft: 167
  },
  night6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 23,
    marginRight: 15
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
    marginLeft: 167
  },
  night7Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 23,
    marginRight: 15
  },
  text1: {
    width: 310,
    height: 25,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 9,
    marginLeft: 27
  },
  text2: {
    width: 323,
    height: 40,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 5,
    marginLeft: 45
  },
  group23: {
    width: 414,
    height: 91,
    marginTop: -710
  },
  rect106: {
    width: 414,
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
  confirmed: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 114,
    marginTop: 18
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row",
    marginLeft: 82
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
  materialButtonViolet24: {
    width: 361,
    height: 45,
    borderRadius: 10,
    marginTop: 696,
    marginLeft: 26
  },
  loremIpsum: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-700",
    marginTop: -448,
    marginLeft: 27
  }
});

export default Untitled3;
