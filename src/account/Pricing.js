import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialSlider1 from "../components/MaterialSlider1";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";

function Pricing(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group5}>
        <View style={styles.group4}>
          <View style={styles.group2}>
            <View style={styles.rect1Stack}>
              <View style={styles.rect1}>
                <Text style={styles.bsD1}>BS&quot;D</Text>
                <View style={styles.button4Row}>
                  <TouchableOpacity style={styles.button4}>
                    <TouchableOpacity style={styles.button5}>
                      <EntypoIcon
                        name="chevron-left"
                        style={styles.icon1}
                      ></EntypoIcon>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text style={styles.pricing}>Pricing</Text>
                </View>
              </View>
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
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}>
          You will be able to change pricing once your stay has been published
        </Text>
        <Text style={styles.loremIpsum2}></Text>
      </View>
      <Text style={styles.whatAmenities1}>
        How will you charge your guests?
      </Text>
      <Text style={styles.priceForShabbat}>Price for Shabbat</Text>
      <Text style={styles.fridaySaturday}>
        Friday afternoon check-in/Saturday night checkout
      </Text>
      <Text style={styles.setNightlyCharge}>Set nightly charge</Text>
      <View style={styles.loremIpsum5StackStack}>
        <View style={styles.loremIpsum5Stack}>
          <Text style={styles.loremIpsum5}>
            Add a set one off non-refundable fee for every{"\n"}booking
          </Text>
          <MaterialSwitch1 style={styles.materialSwitch5}></MaterialSwitch1>
        </View>
        <Text style={styles.extraFees}>Extra Fees</Text>
      </View>
      <Text style={styles.cleaningFee}>Cleaning fee</Text>
      <Text style={styles.other}>Other</Text>
      <Text style={styles.sundayThursday3}>Please describe this charge</Text>
      <MaterialUnderlineTextbox
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <View style={styles.holidayPricingColumnRow}>
        <View style={styles.holidayPricingColumn}>
          <Text style={styles.holidayPricing}>Holiday pricing</Text>
          <Text style={styles.loremIpsum7}>
            High-season and Chagim (Yom Tov)
          </Text>
        </View>
        <MaterialSwitch1 style={styles.materialSwitch4}></MaterialSwitch1>
      </View>
      <View style={styles.materialSlider1Row}>
        <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
        <TextInput placeholder="e.g. 100" style={styles.textInput}></TextInput>
        <FontAwesomeIcon name="dollar" style={styles.icon6}></FontAwesomeIcon>
        <Text style={styles.night}>/ Night</Text>
      </View>
      <View style={styles.shabbatPricingRow}>
        <Text style={styles.shabbatPricing}>Shabbat Pricing</Text>
        <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
      </View>
      <Text style={styles.pricesFluctuate}>
        Prices fluctuate over the weekend
      </Text>
      <View style={styles.materialSlider3Row}>
        <MaterialSlider1 style={styles.materialSlider3}></MaterialSlider1>
        <TextInput placeholder="e.g. 140" style={styles.textInput2}></TextInput>
        <FontAwesomeIcon name="dollar" style={styles.icon5}></FontAwesomeIcon>
        <Text style={styles.shabbat3}>/ Shabbat</Text>
      </View>
      <View style={styles.materialSlider4Row}>
        <MaterialSlider1 style={styles.materialSlider4}></MaterialSlider1>
        <TextInput placeholder="e.g. 40" style={styles.textInput3}></TextInput>
        <FontAwesomeIcon name="dollar" style={styles.icon3}></FontAwesomeIcon>
        <Text style={styles.stay}>/ Stay</Text>
      </View>
      <View style={styles.materialSlider5Row}>
        <MaterialSlider1 style={styles.materialSlider5}></MaterialSlider1>
        <TextInput placeholder="e.g. 35" style={styles.textInput5}></TextInput>
        <FontAwesomeIcon name="percent" style={styles.icon2}></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonViolet1Stack}>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet6>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet2}
        ></MaterialButtonViolet6>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet3}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.group6}>
        <View style={styles.materialButtonWithVioletText2Row}>
          <MaterialButtonWithVioletText11
            style={styles.materialButtonWithVioletText2}
          ></MaterialButtonWithVioletText11>
          <MaterialButtonViolet6
            style={styles.materialButtonViolet4}
          ></MaterialButtonViolet6>
        </View>
      </View>
      <View style={styles.materialSlider6Row}>
        <MaterialSlider1 style={styles.materialSlider6}></MaterialSlider1>
        <TextInput placeholder="e.g. 40" style={styles.textInput6}></TextInput>
        <FontAwesomeIcon name="dollar" style={styles.icon4}></FontAwesomeIcon>
        <Text style={styles.stay1}>/ Stay</Text>
      </View>
      <Text style={styles.extraGuests}>Extra guests</Text>
      <View style={styles.materialSlider7Row}>
        <MaterialSlider1 style={styles.materialSlider7}></MaterialSlider1>
        <TextInput placeholder="e.g. 10" style={styles.textInput7}></TextInput>
        <FontAwesomeIcon name="dollar" style={styles.icon7}></FontAwesomeIcon>
        <Text style={styles.guest}>/Guest</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  group5: {
    width: 426,
    height: 91,
    marginLeft: -6
  },
  group4: {
    width: 426,
    height: 91
  },
  group2: {
    width: 426,
    height: 91
  },
  rect1: {
    top: 0,
    left: 0,
    width: 426,
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
  pricing: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 138,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 173,
    marginLeft: -380,
    marginTop: 40
  },
  button3: {
    top: 30,
    left: 348,
    width: 62,
    height: 62,
    position: "absolute",
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
  rect1Stack: {
    width: 426,
    height: 92
  },
  loremIpsum1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 0,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum2: {
    top: 27,
    left: 17,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    justifyContent: "space-between",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum1Stack: {
    height: 28,
    marginTop: 52,
    marginLeft: 40,
    marginRight: 77
  },
  whatAmenities1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -51,
    marginLeft: 40,
    marginRight: 33
  },
  priceForShabbat: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 261,
    marginLeft: 41
  },
  fridaySaturday: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 41,
    marginRight: 76
  },
  setNightlyCharge: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -244,
    marginLeft: 40
  },
  loremIpsum5: {
    top: 22,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  materialSwitch5: {
    top: 0,
    left: 275,
    width: 45,
    height: 23,
    position: "absolute",
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum5Stack: {
    top: 0,
    left: 1,
    width: 320,
    height: 50,
    position: "absolute"
  },
  extraFees: {
    top: 1,
    left: 0,
    width: 94,
    height: 20,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  loremIpsum5StackStack: {
    width: 321,
    height: 50,
    marginTop: 504,
    marginLeft: 42
  },
  cleaningFee: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 113,
    marginLeft: 39
  },
  other: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 58,
    marginLeft: 39
  },
  sundayThursday3: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 4,
    marginLeft: 38,
    marginRight: 79
  },
  materialUnderlineTextbox: {
    width: 325,
    height: 43,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 10,
    marginLeft: 40
  },
  holidayPricing: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  loremIpsum7: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1
  },
  holidayPricingColumn: {
    width: 223
  },
  materialSwitch4: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    marginLeft: 58,
    marginTop: 9
  },
  holidayPricingColumnRow: {
    height: 35,
    flexDirection: "row",
    marginTop: -485,
    marginLeft: 39,
    marginRight: 49
  },
  materialSlider1: {
    width: 150,
    height: 30,
    backgroundColor: "rgba(0,88,155,0)",
    borderRadius: 50,
    marginTop: 7
  },
  textInput: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 21
  },
  icon6: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 9
  },
  night: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 8,
    marginTop: 10
  },
  materialSlider1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -348,
    marginLeft: 40,
    marginRight: 36
  },
  shabbatPricing: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  materialSwitch2: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    marginLeft: 147
  },
  shabbatPricingRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 61,
    marginLeft: 40,
    marginRight: 39
  },
  pricesFluctuate: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 40,
    marginRight: 77
  },
  materialSlider3: {
    width: 150,
    height: 30,
    marginTop: 7
  },
  textInput2: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    borderStyle: "solid",
    fontFamily: "roboto-regular",
    marginLeft: 21
  },
  icon5: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 7
  },
  shabbat3: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 5,
    marginTop: 10
  },
  materialSlider3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 74,
    marginLeft: 40,
    marginRight: 13
  },
  materialSlider4: {
    width: 150,
    height: 30,
    marginTop: 7
  },
  textInput3: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 21
  },
  icon3: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 3,
    marginTop: 7
  },
  stay: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 7,
    marginTop: 10
  },
  materialSlider4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 402,
    marginLeft: 41,
    marginRight: 46
  },
  materialSlider5: {
    width: 150,
    height: 30,
    marginTop: 5
  },
  textInput5: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 16
  },
  icon2: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 3,
    marginTop: 6
  },
  materialSlider5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -326,
    marginLeft: 41,
    marginRight: 103
  },
  materialButtonViolet1: {
    top: 0,
    width: 112,
    height: 45,
    position: "absolute",
    right: 0,
    shadowOpacity: 0.01
  },
  materialButtonViolet2: {
    top: 0,
    width: 112,
    height: 45,
    position: "absolute",
    right: 0,
    shadowOpacity: 0.01
  },
  materialButtonViolet3: {
    top: 0,
    width: 112,
    height: 45,
    position: "absolute",
    right: 0,
    shadowOpacity: 0.01
  },
  materialButtonViolet1Stack: {
    width: 112,
    height: 45,
    alignSelf: "flex-end",
    marginTop: 3163,
    marginRight: 16
  },
  group6: {
    width: 235,
    height: 45,
    flexDirection: "row",
    marginTop: -2721,
    marginLeft: 159
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    alignSelf: "flex-end",
    marginBottom: 3
  },
  materialButtonViolet4: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    marginLeft: 35
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    flex: 1
  },
  materialSlider6: {
    width: 150,
    height: 30,
    marginTop: 7
  },
  textInput6: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 21
  },
  icon4: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 7
  },
  stay1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 6,
    marginTop: 10
  },
  materialSlider6Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -123,
    marginLeft: 40,
    marginRight: 47
  },
  extraGuests: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -318,
    marginLeft: 39
  },
  materialSlider7: {
    width: 150,
    height: 30,
    marginTop: 7
  },
  textInput7: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 21
  },
  icon7: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 3,
    marginTop: 7
  },
  guest: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 7,
    marginTop: 10
  },
  materialSlider7Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 41,
    marginRight: 38
  }
});

export default Pricing;
