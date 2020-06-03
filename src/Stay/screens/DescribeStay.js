import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import MaterialRadio7 from "../components/MaterialRadio7";
import MaterialRadio from "../components/MaterialRadio";
import MaterialRadio1 from "../components/MaterialRadio1";
import MaterialRadio2 from "../components/MaterialRadio2";
import MaterialRadio3 from "../components/MaterialRadio3";
import MaterialRadio4 from "../components/MaterialRadio4";
import MaterialRadio5 from "../components/MaterialRadio5";
import DropDown from "../components/DropDown";
import CupertinoStepper1 from "../components/CupertinoStepper1";

function DescribeStay(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="undefined" />
      <View style={styles.icon2Row}>
        <EntypoIcon name="chevron-left" style={styles.icon2}></EntypoIcon>
        <View style={styles.bsD1Stack}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.group1}>
            <View style={styles.rect4}>
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
                  <Text style={styles.createAStay3}>Create A Stay</Text>
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
        </View>
      </View>
      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText1Filler}></View>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet6}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.materialRadio11ColumnRow}>
        <View style={styles.materialRadio11Column}>
          <MaterialRadio7 style={styles.materialRadio11}></MaterialRadio7>
          <MaterialRadio7 style={styles.materialRadio7}></MaterialRadio7>
        </View>
        <View style={styles.standardKosherStackColumn}>
          <View style={styles.standardKosherStack}>
            <Text style={styles.standardKosher}>Standard Kosher</Text>
            <Text style={styles.loremIpsum7}>
              This stay is kept strictly kosher to basic requirements, with
              separate dishes and utensils for meat and milk, but available to
              non-Kosher users (with separate dishes)
            </Text>
          </View>
          <View style={styles.loremIpsum8Stack}>
            <Text style={styles.loremIpsum8}>
              This stay is kept strictly kosher with separate {"\n"}kitchens,
              and is only available to other Strictly Kosher guests
            </Text>
            <Text style={styles.strictlyKosher}>Strictly Kosher</Text>
          </View>
        </View>
      </View>
      <Text style={styles.stayType}>What will guests be booking?</Text>
      <View style={styles.materialRadioRow}>
        <MaterialRadio style={styles.materialRadio}></MaterialRadio>
        <View style={styles.privatePlaceStack}>
          <Text style={styles.privatePlace}>Private Place</Text>
          <Text style={styles.guestsWill}>
            Guests will have the entire place to themselves.{"\n"}Usually
            includes a bedroom, bathroom, and kitchen
          </Text>
        </View>
      </View>
      <View style={styles.materialRadio1Row}>
        <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
        <View style={styles.privateRoomColumn}>
          <Text style={styles.privateRoom}>Private Room</Text>
          <Text style={styles.loremIpsum2}>
            Guests have their own private room for sleeping.{"\n"}Other areas
            may be shared
          </Text>
        </View>
      </View>
      <View style={styles.materialRadio2ColumnRow}>
        <View style={styles.materialRadio2Column}>
          <MaterialRadio2 style={styles.materialRadio2}></MaterialRadio2>
          <MaterialRadio2 style={styles.materialRadio13}></MaterialRadio2>
        </View>
        <View style={styles.sharedRoomStackColumn}>
          <View style={styles.sharedRoomStack}>
            <Text style={styles.sharedRoom}>Shared Room</Text>
            <Text style={styles.guestsSleepIn}>
              Guests sleep in a bedroom or common area that may be shared with
              others
            </Text>
          </View>
          <Text style={styles.hotelSuite}>Hotel suite</Text>
          <Text style={styles.guestsSleepIn3}>
            How many duplicate suites do you have?
          </Text>
        </View>
      </View>
      <View style={styles.loremIpsum3StackStackStackStack}>
        <View style={styles.loremIpsum3StackStackStack}>
          <View style={styles.loremIpsum3StackStack}>
            <View style={styles.loremIpsum3Stack}>
              <Text style={styles.loremIpsum3}>
                Is this set up as a dedicated guest stay?
              </Text>
              <MaterialRadio3 style={styles.materialRadio3}></MaterialRadio3>
            </View>
            <View style={styles.yesStack}>
              <Text style={styles.yes}>Yes</Text>
              <Text style={styles.guestsSleepIn1}>
                Its set up for guests only
              </Text>
            </View>
          </View>
          <MaterialRadio4 style={styles.materialRadio4}></MaterialRadio4>
        </View>
        <Text style={styles.no2}>No</Text>
      </View>
      <Text style={styles.isThisStayKosher}>Is this stay kosher?</Text>
      <Text style={styles.guestsSleepIn2}>
        I keep my personal belongings here
      </Text>
      <View style={styles.nameYourStayStack}>
        <Text style={styles.nameYourStay}>Name your stay</Text>
        <TextInput
          placeholder="e.g. David's Penthouse"
          placeholderTextColor="rgba(177,177,177,1)"
          autoFocus={true}
          style={styles.textInput}
        ></TextInput>
      </View>
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
      <View style={styles.materialRadio8StackStack}>
        <View style={styles.materialRadio8Stack}>
          <MaterialRadio5 style={styles.materialRadio8}></MaterialRadio5>
          <Text style={styles.s17}>Use this for shared dormitories, etc..</Text>
        </View>
        <View style={styles.maleOnlyStack}>
          <Text style={styles.maleOnly}>Male Only</Text>
          <View style={styles.group}>
            <Text style={styles.text3}>
              My stay is only available to men (female users will not be shown
              this listing)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.materialRadio12Row}>
        <MaterialRadio7 style={styles.materialRadio12}></MaterialRadio7>
        <View style={styles.femaleOnlyStack}>
          <Text style={styles.femaleOnly}>Female Only</Text>
          <Text style={styles.loremIpsum11}>
            My stay is only available to women (male users{"\n"}will not be
            shown this listing)
          </Text>
        </View>
      </View>
      <View style={styles.materialRadio10Row}>
        <MaterialRadio5 style={styles.materialRadio10}></MaterialRadio5>
        <View style={styles.notKosher1Stack}>
          <Text style={styles.notKosher1}>Not Kosher</Text>
          <Text style={styles.loremIpsum13}>
            This stay is not kosher, but has kosher options {"\n"}and/or is
            located within the local Jewish area
          </Text>
        </View>
      </View>
      <Text style={styles.stayType2}>Stay type</Text>
      <DropDown textInput1="House" style={styles.dropDown}></DropDown>
      <CupertinoStepper1
        text1=""
        style={styles.cupertinoStepper1}
      ></CupertinoStepper1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  icon2: {
    color: "rgba(0,88,155,1)",
    fontSize: 40,
    marginTop: 61
  },
  bsD1: {
    top: 14,
    left: 354,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  group1: {
    top: 0,
    left: 0,
    height: 91,
    position: "absolute",
    right: 0
  },
  rect4: {
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
  createAStay3: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 96,
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
  bsD1Stack: {
    height: 91,
    flex: 1,
    marginLeft: 1214
  },
  icon2Row: {
    height: 103,
    flexDirection: "row",
    marginLeft: -1255
  },
  materialButtonWithVioletText1: {
    height: 36,
    opacity: 0.46,
    width: 94,
    marginTop: 5
  },
  materialButtonWithVioletText1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet6: {
    height: 45,
    shadowOpacity: 0.01,
    width: 110
  },
  materialButtonWithVioletText1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 1413,
    marginLeft: 149,
    marginRight: 33
  },
  materialRadio11: {
    width: 40,
    height: 40
  },
  materialRadio7: {
    width: 40,
    height: 40,
    marginTop: 56
  },
  materialRadio11Column: {
    width: 40,
    marginBottom: 42
  },
  standardKosher: {
    top: 0,
    left: 1,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum7: {
    top: 23,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  standardKosherStack: {
    height: 89,
    marginLeft: 2
  },
  loremIpsum8: {
    top: 22,
    left: 1,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 0
  },
  strictlyKosher: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum8Stack: {
    height: 72,
    marginTop: 7,
    marginRight: 2
  },
  standardKosherStackColumn: {
    width: 317,
    marginLeft: 2,
    marginTop: 10
  },
  materialRadio11ColumnRow: {
    height: 178,
    flexDirection: "row",
    marginTop: -534,
    marginLeft: 28,
    marginRight: 27
  },
  stayType: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -701,
    marginLeft: 28
  },
  materialRadio: {
    width: 40,
    height: 40
  },
  privatePlace: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  guestsWill: {
    top: 23,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  privatePlaceStack: {
    height: 73,
    flex: 1,
    marginLeft: 2,
    marginTop: 8
  },
  materialRadioRow: {
    height: 81,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 28,
    marginRight: 41
  },
  materialRadio1: {
    width: 40,
    height: 40
  },
  privateRoom: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 1
  },
  loremIpsum2: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  privateRoomColumn: {
    width: 305,
    marginLeft: 2,
    marginTop: 10
  },
  materialRadio1Row: {
    height: 67,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 28,
    marginRight: 39
  },
  materialRadio2: {
    width: 40,
    height: 40
  },
  materialRadio13: {
    width: 40,
    height: 40,
    marginTop: 20
  },
  materialRadio2Column: {
    width: 40,
    marginBottom: 9
  },
  sharedRoom: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  guestsSleepIn: {
    top: 23,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  sharedRoomStack: {
    height: 56,
    marginRight: 1
  },
  hotelSuite: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  guestsSleepIn3: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  sharedRoomStackColumn: {
    width: 318,
    marginLeft: 3,
    marginTop: 8
  },
  materialRadio2ColumnRow: {
    height: 109,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 28,
    marginRight: 25
  },
  loremIpsum3: {
    top: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700",
    right: 0,
    left: 0
  },
  materialRadio3: {
    top: 47,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum3Stack: {
    top: 0,
    left: 0,
    height: 87,
    position: "absolute",
    right: 0
  },
  yes: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  guestsSleepIn1: {
    top: 23,
    left: 1,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  yesStack: {
    top: 55,
    left: 41,
    width: 195,
    height: 40,
    position: "absolute"
  },
  loremIpsum3StackStack: {
    top: 0,
    left: 0,
    height: 95,
    position: "absolute",
    right: 0
  },
  materialRadio4: {
    top: 92,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum3StackStackStack: {
    top: 0,
    left: 0,
    height: 132,
    position: "absolute",
    right: 0
  },
  no2: {
    top: 101,
    left: 43,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum3StackStackStackStack: {
    height: 132,
    marginTop: 38,
    marginLeft: 28,
    marginRight: 30
  },
  isThisStayKosher: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 31,
    marginLeft: 31
  },
  guestsSleepIn2: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -55,
    marginLeft: 61
  },
  nameYourStay: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  textInput: {
    top: 20,
    left: 2,
    width: 360,
    height: 50,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    fontFamily: "roboto-regular"
  },
  nameYourStayStack: {
    width: 362,
    height: 70,
    marginTop: -864,
    marginLeft: 26
  },
  describeYourStay: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 24,
    marginLeft: 24
  },
  textInput2: {
    width: 356,
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
    marginTop: 9,
    marginLeft: 24
  },
  isThisStayKosher1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 946,
    marginLeft: 27
  },
  materialRadio8: {
    top: 13,
    left: 1,
    width: 40,
    height: 40,
    position: "absolute"
  },
  s17: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  materialRadio8Stack: {
    top: 0,
    left: 0,
    width: 225,
    height: 53,
    position: "absolute"
  },
  maleOnly: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  group: {
    top: 23,
    left: 0,
    height: 28,
    position: "absolute",
    right: 0
  },
  text3: {
    width: 285,
    height: 42,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  maleOnlyStack: {
    top: 23,
    left: 43,
    height: 51,
    position: "absolute",
    right: 0
  },
  materialRadio8StackStack: {
    height: 74,
    marginTop: 6,
    marginLeft: 27,
    marginRight: 59
  },
  materialRadio12: {
    width: 40,
    height: 40
  },
  femaleOnly: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum11: {
    top: 23,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  femaleOnlyStack: {
    height: 56,
    flex: 1,
    marginLeft: 4,
    marginTop: 10
  },
  materialRadio12Row: {
    height: 66,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 26,
    marginRight: 41
  },
  materialRadio10: {
    width: 40,
    height: 40
  },
  notKosher1: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum13: {
    top: 23,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0,
    left: 0
  },
  notKosher1Stack: {
    height: 56,
    flex: 1,
    marginLeft: 3,
    marginTop: 11
  },
  materialRadio10Row: {
    height: 67,
    flexDirection: "row",
    marginTop: -281,
    marginLeft: 28,
    marginRight: 52
  },
  stayType2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -874,
    marginLeft: 24
  },
  dropDown: {
    width: 280,
    height: 41,
    marginTop: 9,
    marginLeft: 23
  },
  cupertinoStepper1: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginTop: 314,
    marginLeft: 69
  }
});

export default DescribeStay;
