import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import MaterialRadio7 from "../components/MaterialRadio7";
import MaterialRadio5 from "../components/MaterialRadio5";
import MaterialRadio from "../components/MaterialRadio";
import MaterialRadio1 from "../components/MaterialRadio1";
import MaterialRadio2 from "../components/MaterialRadio2";
import MaterialRadio3 from "../components/MaterialRadio3";
import MaterialRadio4 from "../components/MaterialRadio4";
import DropDown from "../components/DropDown";
import CupertinoStepper1 from "../components/CupertinoStepper1";

function DescribeStay(props) {
  return (
    <View style={styles.container}>
      <View style={styles.createAStay1StackStackRow}>
        <View style={styles.createAStay1StackStack}>
          <View style={styles.createAStay1Stack}>
            <Text style={styles.createAStay1}>Create A Stay</Text>
            <View style={styles.rect3}>
              <View style={styles.icon3Row}>
                <EntypoIcon
                  name="chevron-left"
                  style={styles.icon3}
                ></EntypoIcon>
                <Text style={styles.createAStay2}>Create A Stay</Text>
              </View>
            </View>
          </View>
          <EntypoIcon name="chevron-left" style={styles.icon2}></EntypoIcon>
        </View>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}>
            <Text style={styles.bsD1}>BS&quot;D</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <EntypoIcon
                  name="chevron-left"
                  style={styles.icon4}
                ></EntypoIcon>
              </TouchableOpacity>
              <Text style={styles.createAStay3}>Create A Stay</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.image16Filler}></View>
            <Image
              source={require("../assets/images/jstay-icon-inverted8.png")}
              resizeMode="contain"
              style={styles.image16}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar></StatusBar>
      <View style={styles.endWrapperFillerRow}>
        <View style={styles.endWrapperFiller}></View>
        <View style={styles.materialButtonWithVioletText1Row}>
          <MaterialButtonWithVioletText11
            style={styles.materialButtonWithVioletText1}
          ></MaterialButtonWithVioletText11>
          <MaterialButtonViolet6
            style={styles.materialButtonViolet6}
          ></MaterialButtonViolet6>
        </View>
      </View>
      <View style={styles.materialRadio7ColumnRow}>
        <View style={styles.materialRadio7Column}>
          <MaterialRadio7 style={styles.materialRadio7}></MaterialRadio7>
          <MaterialRadio5 style={styles.materialRadio10}></MaterialRadio5>
        </View>
        <View style={styles.kosherStrictlyColumn}>
          <Text style={styles.kosherStrictly}>Kosher (Strictly)</Text>
          <Text style={styles.loremIpsum8}>
            This stay is kept strictly kosher with separate {"\n"}kitchens, and
            is only available to other Strictly Kosher guests
          </Text>
          <Text style={styles.notKosher1}>Not Kosher</Text>
          <Text style={styles.loremIpsum13}>
            This stay is not kosher, but has kosher options {"\n"}and/or is
            located within the local Jewish area
          </Text>
        </View>
      </View>
      <Text style={styles.stayType}>What will guests be booking?</Text>
      <View style={styles.materialRadioColumnRow}>
        <View style={styles.materialRadioColumn}>
          <MaterialRadio style={styles.materialRadio}></MaterialRadio>
          <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
        </View>
        <View style={styles.entirePlaceColumn}>
          <Text style={styles.entirePlace}>Entire Place</Text>
          <Text style={styles.guestsWill}>
            Guests will have the whole place to themselves.{"\n"}Usually
            includes a bedroom, bathroom, and kitchen
          </Text>
          <Text style={styles.privateRoom}>Private Room</Text>
          <Text style={styles.loremIpsum2}>
            Guests have their own private room for sleeping.{"\n"}Other areas
            may be shared
          </Text>
        </View>
      </View>
      <View style={styles.materialRadio2Row}>
        <MaterialRadio2 style={styles.materialRadio2}></MaterialRadio2>
        <View style={styles.sharedRoomColumn}>
          <Text style={styles.sharedRoom}>Shared Room</Text>
          <Text style={styles.guestsSleepIn}>
            Guests sleep in a bedroom or common area that may be shared with
            others
          </Text>
        </View>
      </View>
      <Text style={styles.loremIpsum3}>
        Is this set up as a dedicated guest stay?
      </Text>
      <View style={styles.materialRadio3Row}>
        <MaterialRadio3 style={styles.materialRadio3}></MaterialRadio3>
        <View style={styles.yesColumn}>
          <Text style={styles.yes}>Yes</Text>
          <Text style={styles.guestsSleepIn1}>
            it&#39;s primarily set up for guests
          </Text>
        </View>
      </View>
      <View style={styles.materialRadio4Row}>
        <MaterialRadio4 style={styles.materialRadio4}></MaterialRadio4>
        <View style={styles.no2Column}>
          <Text style={styles.no2}>No</Text>
          <Text style={styles.guestsSleepIn2}>
            I keep my personal belongings here
          </Text>
        </View>
      </View>
      <Text style={styles.isThisStayKosher}>Is this stay kosher?</Text>
      <View style={styles.materialRadio11Row}>
        <MaterialRadio7 style={styles.materialRadio11}></MaterialRadio7>
        <View style={styles.kosherStandardColumn}>
          <Text style={styles.kosherStandard}>Kosher (Standard)</Text>
          <Text style={styles.loremIpsum7}>
            This stay is kept strictly kosher to basic requirements, with
            separate dishes and utensils for meat and milk, but availible to
            non-Kosher users
          </Text>
        </View>
      </View>
      <Text style={styles.nameYourStay}>Name your stay</Text>
      <TextInput
        placeholder="e.g. David's Penthouse"
        placeholderTextColor="rgba(177,177,177,1)"
        autoFocus={true}
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.describeYourStay}>Describe your stay</Text>
      <TextInput
        placeholder="e.g. Beautiful apartment with city views.."
        placeholderTextColor="rgba(177,177,177,1)"
        autoCapitalize="sentences"
        autoCorrect={true}
        maxLength={200}
        multiline={true}
        returnKeyType="done"
        inlineImagePadding={0}
        numberOfLines={4}
        returnKeyLabel="Save"
        spellCheck={true}
        style={styles.textInput2}
      ></TextInput>
      <Text style={styles.isThisStayKosher1}>
        Is this stay gender specific?
      </Text>
      <View style={styles.materialRadio8Row}>
        <MaterialRadio5 style={styles.materialRadio8}></MaterialRadio5>
        <View style={styles.maleOnlyColumn}>
          <Text style={styles.maleOnly}>Male Only</Text>
          <View style={styles.group}>
            <Text style={styles.myStay}>
              My stay is only availible to men (female users{"\n"}will not be
              shown this listing)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.materialRadio12Row}>
        <MaterialRadio7 style={styles.materialRadio12}></MaterialRadio7>
        <View style={styles.femaleOnlyColumn}>
          <Text style={styles.femaleOnly}>Female Only</Text>
          <Text style={styles.loremIpsum11}>
            My stay is only availible to women (male users{"\n"}will not be
            shown this listing)
          </Text>
        </View>
      </View>
      <Text style={styles.loremIpsum12}>
        Use this for Shared dormitories etc..
      </Text>
      <Text style={styles.stayType2}>Stay type</Text>
      <DropDown textInput1="House" style={styles.dropDown}></DropDown>
      <CupertinoStepper1
        text1=""
        style={styles.cupertinoStepper1}
      ></CupertinoStepper1>
      <View style={styles.materialRadio13Row}>
        <MaterialRadio2 style={styles.materialRadio13}></MaterialRadio2>
        <View style={styles.hotelSuiteColumn}>
          <Text style={styles.hotelSuite}>Hotel suite</Text>
          <Text style={styles.guestsSleepIn3}>
            How many duplicate suites do you have?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  createAStay1: {
    top: 53,
    left: 17,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 35,
    fontFamily: "roboto-700"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 426,
    height: 107,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.22,
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  createAStay2: {
    color: "rgba(230,230,230,1)",
    fontSize: 35,
    fontFamily: "roboto-700",
    marginLeft: 2,
    marginTop: 4
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 155,
    marginLeft: 15,
    marginTop: 52
  },
  createAStay1Stack: {
    top: 0,
    left: 25,
    width: 426,
    height: 107,
    position: "absolute"
  },
  icon2: {
    top: 49,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  createAStay1StackStack: {
    width: 451,
    height: 107,
    marginTop: 12
  },
  rect4: {
    top: 0,
    left: 0,
    width: 449,
    height: 86,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.22,
    flexDirection: "row"
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginLeft: 360,
    marginTop: 14
  },
  button: {
    width: 29,
    height: 40
  },
  icon4: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  createAStay3: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 118,
    marginTop: 9
  },
  buttonRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 143,
    marginLeft: -380,
    marginTop: 40
  },
  button2: {
    top: 30,
    height: 62,
    position: "absolute",
    right: 7,
    width: 67,
    flexDirection: "row"
  },
  image16Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image16: {
    height: 62,
    width: 67
  },
  rect4Stack: {
    width: 449,
    height: 92,
    marginLeft: 798
  },
  createAStay1StackStackRow: {
    height: 119,
    flexDirection: "row",
    marginLeft: -1255,
    marginRight: 3
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonWithVioletText1: {
    height: 36,
    opacity: 0.46,
    width: 115,
    marginRight: 16,
    marginTop: 5
  },
  materialButtonViolet6: {
    height: 45,
    shadowOpacity: 0.01,
    width: 116
  },
  materialButtonWithVioletText1Row: {
    height: 45,
    flexDirection: "row"
  },
  endWrapperFillerRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 1292,
    marginLeft: 161,
    marginRight: 38
  },
  materialRadio7: {
    width: 40,
    height: 40
  },
  materialRadio10: {
    width: 40,
    height: 40,
    marginTop: 32
  },
  materialRadio7Column: {
    width: 40,
    marginBottom: 22
  },
  kosherStrictly: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum8: {
    color: "rgba(230,230,230,1)",
    fontFamily: "roboto-regular",
    marginTop: 2,
    marginLeft: 1
  },
  notKosher1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 9,
    marginLeft: 1
  },
  loremIpsum13: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3,
    marginLeft: 1
  },
  kosherStrictlyColumn: {
    width: 315,
    marginLeft: 2,
    marginTop: 10
  },
  materialRadio7ColumnRow: {
    height: 134,
    flexDirection: "row",
    marginTop: -389,
    marginLeft: 28,
    marginRight: 61
  },
  stayType: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -697,
    marginLeft: 28
  },
  materialRadio: {
    width: 40,
    height: 40
  },
  materialRadio1: {
    width: 40,
    height: 40,
    marginTop: 30
  },
  materialRadioColumn: {
    width: 40,
    marginBottom: 22
  },
  entirePlace: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  guestsWill: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1
  },
  privateRoom: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 9,
    marginLeft: 1
  },
  loremIpsum2: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  entirePlaceColumn: {
    width: 303,
    marginLeft: 2,
    marginTop: 8
  },
  materialRadioColumnRow: {
    height: 132,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 28,
    marginRight: 73
  },
  materialRadio2: {
    width: 40,
    height: 40
  },
  sharedRoom: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  guestsSleepIn: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  sharedRoomColumn: {
    width: 317,
    marginLeft: 3,
    marginTop: 8
  },
  materialRadio2Row: {
    height: 59,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 58
  },
  loremIpsum3: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 103,
    marginLeft: 29
  },
  materialRadio3: {
    width: 40,
    height: 40
  },
  yes: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  guestsSleepIn1: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3,
    marginLeft: 1
  },
  yesColumn: {
    width: 195,
    marginLeft: 1,
    marginTop: 8
  },
  materialRadio3Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 28,
    marginRight: 182
  },
  materialRadio4: {
    width: 40,
    height: 40
  },
  no2: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 1
  },
  guestsSleepIn2: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  no2Column: {
    width: 220,
    marginLeft: 2,
    marginTop: 9
  },
  materialRadio4Row: {
    height: 45,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 156
  },
  isThisStayKosher: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 26,
    marginLeft: 31
  },
  materialRadio11: {
    width: 40,
    height: 40
  },
  kosherStandard: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum7: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  kosherStandardColumn: {
    width: 317,
    marginLeft: 5,
    marginTop: 10
  },
  materialRadio11Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 28,
    marginRight: 56
  },
  nameYourStay: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -943,
    marginLeft: 26
  },
  textInput: {
    width: 388,
    height: 50,
    color: "rgba(177,177,177,1)",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular",
    marginLeft: 30
  },
  describeYourStay: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 24,
    marginLeft: 24
  },
  textInput2: {
    width: 384,
    height: 132,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left",
    marginTop: 13,
    marginLeft: 26
  },
  isThisStayKosher1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 846,
    marginLeft: 27
  },
  materialRadio8: {
    width: 40,
    height: 40
  },
  maleOnly: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  group: {
    width: 285,
    height: 28,
    marginTop: 3
  },
  myStay: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  maleOnlyColumn: {
    width: 285,
    marginLeft: 2,
    marginTop: 10
  },
  materialRadio8Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 28,
    marginRight: 91
  },
  materialRadio12: {
    width: 40,
    height: 40
  },
  femaleOnly: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum11: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3
  },
  femaleOnlyColumn: {
    width: 303,
    marginLeft: 4,
    marginTop: 10
  },
  materialRadio12Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 26,
    marginRight: 73
  },
  loremIpsum12: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -140,
    marginLeft: 27
  },
  stayType2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -852,
    marginLeft: 24
  },
  dropDown: {
    width: 280,
    height: 41,
    marginTop: 13,
    marginLeft: 23
  },
  cupertinoStepper1: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginTop: 283,
    marginLeft: 71
  },
  materialRadio13: {
    width: 40,
    height: 40
  },
  hotelSuite: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  guestsSleepIn3: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  hotelSuiteColumn: {
    width: 317,
    marginLeft: 3,
    marginTop: 8
  },
  materialRadio13Row: {
    height: 42,
    flexDirection: "row",
    marginTop: -77,
    marginLeft: 28,
    marginRight: 58
  }
});

export default DescribeStay;
