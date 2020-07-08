import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialButtonViolet20 from "../components/MaterialButtonViolet20";
import MaterialButtonViolet25 from "../components/MaterialButtonViolet25";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet26 from "../components/MaterialButtonViolet26";

function ConfirmedHost(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group24}>
        <View style={styles.group22}>
          <View style={styles.rect105}>

            <View style={styles.image10RowRow}>
              <TouchableOpacity onPress={()=>{props.onUserPress("stayProfile")}}style={styles.image10Row}>
                <Image
                  source={require("../assets/images/Cottage1.jpg")}
                  resizeMode="stretch"
                  style={styles.image10}
                ></Image>
                <View style={styles.theCottage9Column}>
                  <Text style={styles.theCottage9}>The Cottage</Text>
                  <View style={styles.upcomingTrips1Stack}>
                    <Text style={styles.upcomingTrips1}></Text>
                    <Text style={styles.jerusalemIsrael}>
                      Jerusalem, Israel
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.image10RowFiller}></View>
              <TouchableOpacity onPress={()=>props.onUserPress("preBookingProfile")} style={styles.button7}>
                <Image
                  source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
                  resizeMode="stretch"
                  style={styles.image11}
                ></Image>
                <Text style={styles.guest}>Guest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.checkIn1Row}>
        <Text style={styles.checkIn1}>Check-in</Text>
        <Text style={styles.checkOut1}>Check-out</Text>
      </View>
      <View style={styles.checkOut3Row}>
        <Text style={styles.checkOut3}>04 March 2021</Text>
        <Text style={styles.checkOut2}>20 March 2021</Text>
      </View>
      <View style={styles.checkOut5Row}>
        <Text style={styles.checkOut5}>15:00</Text>
        <Text style={styles.checkOut4}>11:00</Text>
      </View>
     
      <View style={styles.materialButtonViolet20Row}>
        <MaterialButtonViolet20
        onPress={() =>props.onUserPress("cancelationHost")}
          style={styles.materialButtonViolet20}
        ></MaterialButtonViolet20>
        <MaterialButtonViolet25
          onPress={()=>{props.messageGuest()}}
          style={styles.materialButtonViolet25}
        ></MaterialButtonViolet25>
      </View>
      <View style={styles.group23}>
      </View>
      <MaterialButtonViolet26
        onPress={() =>props.onUserPress("holdACharge")}
        style={styles.materialButtonViolet26}
      ></MaterialButtonViolet26>
      <Text style={styles.pricingForStay}>Pricing for stay</Text>
      <View style={styles.night1Row}>
        <Text style={styles.night1}>Nightly rate</Text>
        <View style={styles.night1Filler}></View>
        <Text style={styles.night8}>$0.00</Text>
      </View>
      <View style={styles.night2Row}>
        <Text style={styles.night2}>Cleaning fee</Text>
        <View style={styles.night2Filler}></View>
        <Text style={styles.night9}>$0.00</Text>
      </View>
      <View style={styles.night3Row}>
        <Text style={styles.night3}>Other fees</Text>
        <View style={styles.night3Filler}></View>
        <Text style={styles.night10}>$0.00</Text>
      </View>
      <View style={styles.night4Row}>
        <Text style={styles.night4}>Deductable charge/s</Text>
        <View style={styles.night4Filler}></View>
        <Text style={styles.night11}>$0.00</Text>
      </View>
      <Text style={styles.night5}>
        These charges will be refunded if no claim has been made
      </Text>
      <View style={styles.night6Row}>
        <Text style={styles.night6}>Jstay fee</Text>
        <View style={styles.night6Filler}></View>
        <Text style={styles.night12}>$0.00</Text>
      </View>
      <View style={styles.night7Row}>
        <Text style={styles.night7}>Total</Text>
        <View style={styles.night7Filler}></View>
        <Text style={styles.night13}>$0.00</Text>
      </View>
      <Text style={styles.text3}>
        Free cancellation until 3 days prior to arrival
      </Text>
      <Text style={styles.loremIpsum1}>$0.00/night x 0 nights</Text>
      <Text style={styles.text4}>
        Note: guest will receive full address and check-in information on day of
        arrival
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  group24: {
    height: 90,
    marginLeft: 20,
    marginRight: 14
  },
  group22: {
    width: 380,
    height: 90
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
    fontFamily: "roboto-regular"
  },
  upcomingTrips1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  jerusalemIsrael: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  upcomingTrips1Stack: {
    width: 110,
    height: 17
  },
  theCottage9Column: {
    width: 111,
    marginLeft: 3,
    marginBottom: 34
  },
  image10Row: {
    flexDirection: "row"
  },
  image10RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button7: {
    width: 50,
    height: 64,
    marginTop: 3
  },
  image11: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "flex-end"
  },
  guest: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    alignSelf: "center"
  },
  image10RowRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 13
  },
  checkIn1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 100
  },
  checkIn1Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 10,
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
  checkOut5: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut4: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 133
  },
  checkOut5Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 26,
    marginRight: 154
  },
  materialButtonViolet20: {
    height: 45,
    borderRadius: 10,
    width: 176
  },
  materialButtonViolet25: {
    height: 45,
    borderRadius: 10,
    width: 176,
    marginLeft: 12
  },
  materialButtonViolet20Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 436,
    marginLeft: 26,
    marginRight: 24
  },
  group23: {
    height: 91,
    marginTop: -785
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
  confirmed: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 113,
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
  materialButtonViolet26: {
    height: 45,
    borderRadius: 10,
    width: 364,
    marginTop: 706,
    marginLeft: 26
  },
  pricingForStay: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -512,
    marginLeft: 27
  },
  night1: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
  },
  night1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night8: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 26,
    marginRight: 25
  },
  night2: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night9: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night2Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 27,
    marginRight: 25
  },
  night3: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night10: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 25
  },
  night4: {
    width: 172,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night4Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night11: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night4Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 25
  },
  night5: {
    width: 208,
    height: 25,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 27
  },
  night6: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night6Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night12: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 23,
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
  night7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  night13: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night7Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 25
  },
  text3: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 9,
    marginLeft: 27,
    marginRight: 114
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -271,
    marginLeft: 26
  },
  text4: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 274,
    marginLeft: 37,
    marginRight: 37
  }
});

export default ConfirmedHost;
