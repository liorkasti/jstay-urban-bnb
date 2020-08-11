import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialRadio6 from "./MaterialRadio6";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialSlider1 from "./MaterialSlider1";

function SmallSeach(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textInput1StackStackStack}>
        <View style={styles.textInput1StackStack}>
          <View style={styles.textInput1Stack}>
            <TextInput
              placeholder="Location, neighbourhood, or address"
              placeholderTextColor="rgba(177,177,177,1)"
              returnKeyType="search"
              returnKeyLabel="Search"
              style={styles.textInput1}
            ></TextInput>
            <TouchableOpacity style={styles.button1}>
              <FontAwesomeIcon
                name="sliders"
                style={styles.icon2}
              ></FontAwesomeIcon>
            </TouchableOpacity>
            <IoniconsIcon name="ios-search" style={styles.icon3}></IoniconsIcon>
          </View>
          <View style={styles.button2Stack}>
            <TouchableOpacity style={styles.button2}>
              <View style={styles.materialRadio1Row}>
                <MaterialRadio6 style={styles.materialRadio1}></MaterialRadio6>
                <Text style={styles.kosherStandard}>Kosher (standard)</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.listedAsKosher2}>
              Listed as Kosher but may host non-kosher users too
            </Text>
            <TouchableOpacity style={styles.button8}>
              <View style={styles.image16Filler}></View>
              <Image
                source={require("../../assets/images/jstay-icon-inverted8.png")}
                resizeMode="contain"
                style={styles.image16}
              ></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button3}>
            <View style={styles.materialRadio3Row}>
              <MaterialRadio6 style={styles.materialRadio3}></MaterialRadio6>
              <Text style={styles.kosherStrictly}>Kosher (strictly)</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button6Stack}>
          <TouchableOpacity style={styles.button6}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon4}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <View style={styles.datesStack}>
            <Text style={styles.dates}>Travel dates</Text>
            <View style={styles.rect2}></View>
          </View>
          <View style={styles.icon6Stack}>
            <EntypoIcon
              name="chevron-small-down"
              style={styles.icon6}
            ></EntypoIcon>
            <Text style={styles.dates1}>Select stay type</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button5}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon5}
          ></FontAwesomeIcon>
        </TouchableOpacity>
        <Text style={styles.checkIn}>Check-In</Text>
        <Text style={styles.checkOut}>Check-Out</Text>
        <View style={styles.button4Stack}>
          <TouchableOpacity style={styles.button4}>
            <View style={styles.materialRadio2Row}>
              <MaterialRadio6 style={styles.materialRadio2}></MaterialRadio6>
              <View style={styles.communityColumn}>
                <Text style={styles.community}>Community</Text>
                <Text style={styles.checkOut1}>Within Jewish community</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.listedAsKosher1}>
            Availible to kosher guests only
          </Text>
        </View>
      </View>
      <Text style={styles.bsD1}>BS&quot;D</Text>
      <View style={styles.materialSlider1StackRow}>
        <View style={styles.materialSlider1Stack}>
          <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
          <MaterialSlider1 style={styles.materialSlider3}></MaterialSlider1>
        </View>
        <Text style={styles.loremIpsum2}>$</Text>
        <TextInput placeholder="0" style={styles.textInput4}></TextInput>
      </View>
      <Text style={styles.budget}>Whats your max budget?</Text>
      <View style={styles.materialSlider2Row}>
        <MaterialSlider1 style={styles.materialSlider2}></MaterialSlider1>
        <EntypoIcon name="man" style={styles.icon8}></EntypoIcon>
        <TextInput placeholder="0" style={styles.textInput3}></TextInput>
      </View>
      <Text style={styles.howManyGuests}>How many guests?</Text>
      <View style={styles.icon7Stack}>
        <EntypoIcon name="chevron-small-down" style={styles.icon7}></EntypoIcon>
        <TouchableOpacity style={styles.button7}>
          <Text style={styles.dates2}>Show Amenities</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput1: {
    top: 0,
    left: 0,
    width: 321,
    height: 46,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    letterSpacing: 0,
    textAlign: "center"
  },
  button1: {
    top: 12,
    left: 283,
    width: 21,
    height: 23,
    position: "absolute"
  },
  icon2: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  },
  icon3: {
    top: 12,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    left: 17,
    width: 22,
    height: 21
  },
  textInput1Stack: {
    top: 7,
    left: 0,
    width: 321,
    height: 46,
    position: "absolute"
  },
  button2: {
    top: 60,
    left: 0,
    width: 191,
    height: 41,
    position: "absolute",
    flexDirection: "row"
  },
  materialRadio1: {
    width: 40,
    height: 40
  },
  kosherStandard: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 3,
    marginTop: 9
  },
  materialRadio1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  listedAsKosher2: {
    top: 87,
    left: 43,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button8: {
    top: 0,
    height: 62,
    position: "absolute",
    right: 7,
    width: 58,
    flexDirection: "row"
  },
  image16Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image16: {
    height: 62,
    width: 58
  },
  button2Stack: {
    top: 0,
    left: 164,
    width: 226,
    height: 115,
    position: "absolute"
  },
  button3: {
    top: 108,
    left: 163,
    width: 191,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialRadio3: {
    width: 40,
    height: 40
  },
  kosherStrictly: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 3,
    marginTop: 9
  },
  materialRadio3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  textInput1StackStack: {
    top: 0,
    left: 2,
    width: 390,
    height: 148,
    position: "absolute"
  },
  button6: {
    top: 83,
    left: 10,
    width: 33,
    height: 35,
    position: "absolute"
  },
  icon4: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  dates: {
    top: 45,
    left: 0,
    width: 160,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  rect2: {
    top: 0,
    left: 158,
    width: 2,
    height: 127,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  datesStack: {
    top: 10,
    left: 2,
    width: 160,
    height: 127,
    position: "absolute"
  },
  icon6: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35,
    left: 126
  },
  dates1: {
    top: 8,
    left: 0,
    width: 160,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  icon6Stack: {
    top: 0,
    left: 0,
    width: 161,
    height: 34,
    position: "absolute"
  },
  button6Stack: {
    top: 60,
    left: 0,
    width: 162,
    height: 137,
    position: "absolute"
  },
  button5: {
    top: 143,
    left: 80,
    width: 33,
    height: 35,
    position: "absolute"
  },
  icon5: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  checkIn: {
    top: 183,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  checkOut: {
    top: 183,
    left: 64,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button4: {
    top: 21,
    left: 0,
    width: 203,
    height: 44,
    position: "absolute"
  },
  materialRadio2: {
    width: 40,
    height: 40
  },
  community: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  checkOut1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  communityColumn: {
    width: 160,
    marginLeft: 3,
    marginTop: 9
  },
  materialRadio2Row: {
    height: 44,
    flexDirection: "row"
  },
  listedAsKosher1: {
    top: 0,
    left: 44,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button4Stack: {
    top: 135,
    left: 165,
    width: 227,
    height: 65,
    position: "absolute"
  },
  textInput1StackStackStack: {
    width: 392,
    height: 200,
    marginTop: 26
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginTop: -214,
    marginLeft: 344
  },
  materialSlider1: {
    top: 0,
    left: 0,
    width: 172,
    height: 21,
    position: "absolute"
  },
  materialSlider3: {
    top: 0,
    left: 0,
    width: 173,
    height: 21,
    position: "absolute"
  },
  materialSlider1Stack: {
    width: 173,
    height: 21,
    marginTop: 5
  },
  loremIpsum2: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 11,
    marginTop: 6
  },
  textInput4: {
    width: 47,
    height: 28,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 5
  },
  materialSlider1StackRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 252,
    marginLeft: 2,
    marginRight: 146
  },
  budget: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -53,
    marginLeft: 1
  },
  materialSlider2: {
    width: 173,
    height: 21,
    marginTop: 5
  },
  icon8: {
    color: "rgba(0,88,155,1)",
    fontSize: 17,
    marginLeft: 6,
    marginTop: 5
  },
  textInput3: {
    width: 47,
    height: 28,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 1
  },
  materialSlider2Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 2,
    marginRight: 146
  },
  howManyGuests: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -53,
    marginLeft: 1
  },
  icon7: {
    top: 0,
    left: 131,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  button7: {
    top: 8,
    left: 0,
    width: 171,
    height: 20,
    position: "absolute"
  },
  dates2: {
    width: 171,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  icon7Stack: {
    width: 171,
    height: 34,
    marginTop: 52,
    marginLeft: 108
  }
});

export default SmallSeach;
