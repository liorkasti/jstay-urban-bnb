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
     
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}>
          You will be able to change pricing once your stay has been published
        </Text>
        <Text style={styles.whatAmenities1}>
          How will you charge your guests?
        </Text>
        <Text style={styles.loremIpsum2}></Text>
      </View>
      <Text style={styles.fridaySaturday}>
        Friday afternoon check-in 2 hours before Shabbat{"\n"}Saturday night
        checkout 1 hour after Shabbat
      </Text>
      <Text style={styles.setNightlyCharge}>Set nightly charge</Text>
      <Text style={styles.loremIpsum5}>
        Add set non-refundable fees for every booking
      </Text>
      <View style={styles.cleaningFeeStackRow}>
        <View style={styles.cleaningFeeStack}>
          <Text style={styles.cleaningFee}>Cleaning fee</Text>
          <Text style={styles.sundayThursday6}>
            This is a one off fee per booking
          </Text>
        </View>
        <MaterialSwitch1 style={styles.materialSwitch6}></MaterialSwitch1>
      </View>
      <View style={styles.otherStackRow}>
        <View style={styles.otherStack}>
          <Text style={styles.other}>Other</Text>
          <Text style={styles.sundayThursday7}>
            This is a one off fee per booking
          </Text>
        </View>
        <MaterialSwitch1 style={styles.materialSwitch7}></MaterialSwitch1>
      </View>
      <View style={styles.sundayThursday3Stack}>
        <Text style={styles.sundayThursday3}>Please describe this charge</Text>
        <MaterialUnderlineTextbox
          style={styles.materialUnderlineTextbox}
        ></MaterialUnderlineTextbox>
      </View>
      <View style={styles.holidayPricingRow}>
        <Text style={styles.holidayPricing}>Holiday pricing</Text>
        <View style={styles.holidayPricingFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch4}></MaterialSwitch1>
      </View>
      <Text style={styles.loremIpsum7}>High-season and Chagim (Yom Tov)</Text>
      <View style={styles.materialSlider1Row}>
        <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
        <FontAwesomeIcon name="dollar" style={styles.icon6}></FontAwesomeIcon>
        <TextInput placeholder="e.g. 100" style={styles.textInput}></TextInput>
      </View>
      <View style={styles.shabbatPricingRow}>
        <Text style={styles.shabbatPricing}>Shabbat Pricing</Text>
        <View style={styles.shabbatPricingFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch8}></MaterialSwitch1>
      </View>
      <Text style={styles.pricesFluctuate}>
        Prices fluctuate over the weekend
      </Text>
      <View style={styles.materialSlider3Row}>
        <MaterialSlider1 style={styles.materialSlider3}></MaterialSlider1>
        <FontAwesomeIcon name="dollar" style={styles.icon5}></FontAwesomeIcon>
        <TextInput placeholder="e.g. 140" style={styles.textInput2}></TextInput>
      </View>
      <View style={styles.materialSlider4Row}>
        <MaterialSlider1 style={styles.materialSlider4}></MaterialSlider1>
        <FontAwesomeIcon name="dollar" style={styles.icon3}></FontAwesomeIcon>
        <TextInput placeholder="e.g. 40" style={styles.textInput3}></TextInput>
      </View>
      <View style={styles.materialSlider5Row}>
        <MaterialSlider1 style={styles.materialSlider5}></MaterialSlider1>
        <TextInput placeholder="e.g. 35" style={styles.textInput5}></TextInput>
        <FontAwesomeIcon name="percent" style={styles.icon2}></FontAwesomeIcon>
      </View>
      <View style={styles.extraGuestsStackRow}>
        <View style={styles.extraGuestsStack}>
          <Text style={styles.extraGuests}>Extra guests</Text>
          <Text style={styles.sundayThursday5}>
            Add a charge per extra guest a night
          </Text>
        </View>
        <MaterialSwitch1 style={styles.materialSwitch5}></MaterialSwitch1>
      </View>
      <View style={styles.materialButtonViolet1Stack}>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet6>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet2}
        ></MaterialButtonViolet6>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet3}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.materialButtonWithVioletText2Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText2Filler}></View>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.materialSlider6Row}>
        <MaterialSlider1 style={styles.materialSlider6}></MaterialSlider1>
        <FontAwesomeIcon name="dollar" style={styles.icon4}></FontAwesomeIcon>
        <TextInput placeholder="e.g. 40" style={styles.textInput6}></TextInput>
      </View>
      <Text style={styles.extraFees}>Extra Fees</Text>
      <View style={styles.materialSlider7Row}>
        <MaterialSlider1 style={styles.materialSlider7}></MaterialSlider1>
        <FontAwesomeIcon name="dollar" style={styles.icon7}></FontAwesomeIcon>
        <TextInput placeholder="e.g. 10" style={styles.textInput7}></TextInput>
      </View>
      <View style={styles.textInput8Stack}>
        <TextInput placeholder="e.g. 6" style={styles.textInput8}></TextInput>
        <Text style={styles.sundayThursday4}>After how many guest(s)?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: 1100,
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
  bsD1: {
    top: 14,
    left: 354,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  group7: {
    top: 0,
    left: 0,
    height: 91,
    position: "absolute",
    right: 0
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
  text9: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 132,
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
  bsD1Stack: {
    height: 91,
    marginLeft: 6,
    marginRight: 6
  },
  loremIpsum1: {
    top: 44,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 0,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  whatAmenities1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum2: {
    top: 53,
    left: 17,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    justifyContent: "space-between",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum1Stack: {
    height: 77,
    marginTop: 26,
    marginLeft: 40,
    marginRight: 75
  },
  fridaySaturday: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 226,
    marginLeft: 39,
    marginRight: 34
  },
  setNightlyCharge: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -252,
    marginLeft: 40
  },
  loremIpsum5: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 395,
    marginLeft: 40
  },
  cleaningFee: {
    top: 0,
    left: 1,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  sundayThursday6: {
    top: 19,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 0,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  cleaningFeeStack: {
    height: 36,
    flex: 1,
    marginRight: 81,
    marginTop: 3
  },
  materialSwitch6: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  cleaningFeeStackRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 181,
    marginLeft: 39,
    marginRight: 49
  },
  other: {
    top: 0,
    left: 3,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  sundayThursday7: {
    top: 19,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 0,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  otherStack: {
    height: 36,
    flex: 1,
    marginRight: 84,
    marginTop: 3
  },
  materialSwitch7: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  otherStackRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 71,
    marginLeft: 39,
    marginRight: 46
  },
  sundayThursday3: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 36,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  materialUnderlineTextbox: {
    top: 14,
    left: 2,
    width: 325,
    height: 43,
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 1
  },
  sundayThursday3Stack: {
    height: 57,
    marginTop: 13,
    marginLeft: 41,
    marginRight: 46
  },
  holidayPricing: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  holidayPricingFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch4: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  holidayPricingRow: {
    height: 24,
    flexDirection: "row",
    marginTop: -552,
    marginLeft: 38,
    marginRight: 51
  },
  loremIpsum7: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1,
    marginLeft: 38
  },
  materialSlider1: {
    width: 150,
    height: 30,
    backgroundColor: "rgba(0,88,155,0)",
    borderRadius: 50,
    marginTop: 7
  },
  icon6: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 5,
    marginTop: 9
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
    marginLeft: 1
  },
  materialSlider1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -293,
    marginLeft: 40,
    marginRight: 123
  },
  shabbatPricing: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 1
  },
  shabbatPricingFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch8: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  shabbatPricingRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 40,
    marginRight: 51
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
  icon5: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 5,
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
    marginLeft: 1
  },
  materialSlider3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 40,
    marginRight: 123
  },
  materialSlider4: {
    width: 150,
    height: 30,
    marginTop: 7
  },
  icon3: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 6
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
    marginLeft: 2
  },
  materialSlider4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 457,
    marginLeft: 43,
    marginRight: 120
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
    marginTop: -361,
    marginLeft: 41,
    marginRight: 101
  },
  extraGuests: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  sundayThursday5: {
    top: 21,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 0,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  extraGuestsStack: {
    height: 38,
    flex: 1,
    marginRight: 46
  },
  materialSwitch5: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    marginTop: 2
  },
  extraGuestsStackRow: {
    height: 38,
    flexDirection: "row",
    marginTop: 73,
    marginLeft: 39,
    marginRight: 51
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
    marginTop: 3128,
    marginRight: 16
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    marginTop: 6
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet4: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    marginTop: -2737,
    marginLeft: 150,
    marginRight: 28
  },
  materialSlider6: {
    width: 150,
    height: 30,
    marginTop: 19
  },
  icon4: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 5,
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
    marginLeft: 1
  },
  materialSlider6Row: {
    height: 49,
    flexDirection: "row",
    marginTop: -117,
    marginLeft: 43,
    marginRight: 121
  },
  extraFees: {
    width: 94,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -510,
    marginLeft: 41
  },
  materialSlider7: {
    width: 150,
    height: 30,
    marginTop: 7
  },
  icon7: {
    color: "rgba(230,230,230,1)",
    fontSize: 25,
    marginLeft: 4,
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
    marginLeft: 2
  },
  materialSlider7Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 83,
    marginLeft: 40,
    marginRight: 123
  },
  textInput8: {
    top: 0,
    left: 169,
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
  sundayThursday4: {
    top: 12,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 75,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  textInput8Stack: {
    height: 40,
    marginTop: 10,
    marginLeft: 41,
    marginRight: 124
  }
});

export default Pricing;
