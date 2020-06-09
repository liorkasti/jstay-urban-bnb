import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import MaterialSlider1 from "../components/MaterialSlider1";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import Icon from "react-native-vector-icons/Entypo";

function Policies(props) {
  return (
    <View style={styles.container}>
      <View style={styles.lengthOfStayStackRowColumn}>
        <View style={styles.lengthOfStayStackRow}>
          <View style={styles.lengthOfStayStack}>
            <Text style={styles.lengthOfStay}>Length of stay</Text>
            <Text style={styles.loremIpsum1}>
              Add min/max length a guest can stay
            </Text>
          </View>
          <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
        </View>
        <Text style={styles.cancellationPolicy}>Cancellation policy</Text>
        <View style={styles.availabilityStackRow}>
          <View style={styles.availabilityStack}>
            <Text style={styles.availability}>Availability</Text>
            <Text style={styles.loremIpsum}>
              Choose how far in advance guests can book
            </Text>
          </View>
          <View style={styles.availabilityStackFiller}></View>
          <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
        </View>
        <View style={styles.minimumColumnRow}>
          <View style={styles.minimumColumn}>
            <Text style={styles.minimum}>Minimum</Text>
            <MaterialSlider1 style={styles.materialSlider1}></MaterialSlider1>
          </View>
          <TextInput placeholder="0" style={styles.textInput}></TextInput>
          <Text style={styles.nightS}>Night/s</Text>
        </View>
        <View style={styles.maximumColumnRow}>
          <View style={styles.maximumColumn}>
            <Text style={styles.maximum}>Maximum</Text>
            <MaterialSlider1 style={styles.materialSlider2}></MaterialSlider1>
          </View>
          <TextInput placeholder="0" style={styles.textInput1}></TextInput>
          <Text style={styles.nightS2}>Night/s</Text>
        </View>
        <View style={styles.textInput2RowRow}>
          <View style={styles.textInput2Row}>
            <TextInput placeholder="0" style={styles.textInput2}></TextInput>
            <Text style={styles.monthS}>Month/s</Text>
          </View>
          <MaterialSlider1 style={styles.materialSlider3}></MaterialSlider1>
        </View>
        <View style={styles.turnOverBreakRow}>
          <Text style={styles.turnOverBreak}>Turn-over break</Text>
          <View style={styles.turnOverBreakFiller}></View>
          <MaterialSwitch1 style={styles.materialSwitch3}></MaterialSwitch1>
        </View>
        <Text style={styles.loremIpsum2}>Block day/s between each booking</Text>
        <Text style={styles.checkInOutTimes}>
          What time can guests check-in/out?
        </Text>
        <View style={styles.textInput3RowRow}>
          <View style={styles.textInput3Row}>
            <TextInput placeholder="0" style={styles.textInput3}></TextInput>
            <Text style={styles.dayS}>Day/s</Text>
          </View>
          <MaterialSlider1 style={styles.materialSlider4}></MaterialSlider1>
        </View>
        <View style={styles.loremIpsum3Row}>
          <Text style={styles.loremIpsum3}>Check-in is available from</Text>
          <View style={styles.loremIpsum3Filler}></View>
          <TextInput placeholder="00:00" style={styles.textInput4}></TextInput>
        </View>
        <View style={styles.loremIpsum4Stack}>
          <Text style={styles.loremIpsum4}></Text>
          <Text style={styles.text7}>
            Check-in on Friday is automatically at least 2 hours before Shabbat
            and check-out on Saturday is at least an hour after Shabbat
          </Text>
        </View>
        <View style={styles.loremIpsum5Row}>
          <Text style={styles.loremIpsum5}>Guests must check-out by</Text>
          <View style={styles.loremIpsum5Filler}></View>
          <TextInput placeholder="00:00" style={styles.textInput5}></TextInput>
        </View>
        <View style={styles.materialSlider5Row}>
          <MaterialSlider1 style={styles.materialSlider5}></MaterialSlider1>
          <TextInput placeholder="0" style={styles.textInput6}></TextInput>
          <Text style={styles.dayS1}>Day/s</Text>
        </View>
        <Text style={styles.loremIpsum6}>
          Free cancelation prior to check-in
        </Text>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet6>
        <View style={styles.materialButtonWithVioletText2Row}>
          <MaterialButtonWithVioletText11
            style={styles.materialButtonWithVioletText2}
          ></MaterialButtonWithVioletText11>
          <View style={styles.materialButtonWithVioletText2Filler}></View>
          <MaterialButtonViolet6 onPress={props.onNext}
            style={styles.materialButtonViolet2}
          ></MaterialButtonViolet6>
        </View>
        <View style={styles.bsD1Stack}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.group1}>
            <View style={styles.rect}>
              <Text style={styles.bsD12}>BS&quot;D</Text>
              <View style={styles.button4RowRow}>
                <View style={styles.button4Row}>
                  <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
                    <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                      <Icon name="chevron-left" style={styles.icon1}></Icon>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text style={styles.text8}>Policies</Text>
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
      <View style={styles.lengthOfStayStackRowColumnFiller}></View>
      <MaterialButtonWithVioletText11
        style={styles.materialButtonWithVioletText1}
      ></MaterialButtonWithVioletText11>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  lengthOfStay: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum1: {
    top: 23,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  lengthOfStayStack: {
    width: 231,
    height: 40
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    marginLeft: 62,
    marginTop: 4
  },
  lengthOfStayStackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 121,
    marginLeft: 30,
    marginRight: 46
  },
  cancellationPolicy: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 595,
    marginLeft: 30
  },
  availability: {
    top: 0,
    left: 1,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum: {
    top: 21,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  availabilityStack: {
    width: 212,
    height: 54
  },
  availabilityStackFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch2: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  availabilityStackRow: {
    height: 54,
    flexDirection: "row",
    marginTop: -465,
    marginLeft: 31,
    marginRight: 46
  },
  minimum: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSlider1: {
    width: 150,
    height: 30,
    marginTop: 2
  },
  minimumColumn: {
    width: 150,
    marginBottom: 2
  },
  textInput: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 21,
    marginTop: 18
  },
  nightS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 7,
    marginTop: 31
  },
  minimumColumnRow: {
    height: 58,
    flexDirection: "row",
    marginTop: -200,
    marginLeft: 32,
    marginRight: 56
  },
  maximum: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSlider2: {
    width: 150,
    height: 30,
    marginTop: 2
  },
  maximumColumn: {
    width: 150,
    marginBottom: 2
  },
  textInput1: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 21,
    marginTop: 18
  },
  nightS2: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 7,
    marginTop: 28
  },
  maximumColumnRow: {
    height: 58,
    flexDirection: "row",
    marginLeft: 32,
    marginRight: 56
  },
  textInput2: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  monthS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 7,
    marginTop: 10
  },
  textInput2Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 171
  },
  materialSlider3: {
    height: 30,
    flex: 1,
    marginRight: 185,
    marginLeft: -335,
    marginTop: 8
  },
  textInput2RowRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 87,
    marginLeft: 32,
    marginRight: 47
  },
  turnOverBreak: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  turnOverBreakFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch3: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  turnOverBreakRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 30,
    marginRight: 46
  },
  loremIpsum2: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1,
    marginLeft: 31
  },
  checkInOutTimes: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 75,
    marginLeft: 30
  },
  textInput3: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  dayS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 17,
    marginTop: 10
  },
  textInput3Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 171
  },
  materialSlider4: {
    height: 30,
    flex: 1,
    marginRight: 171,
    marginLeft: -321,
    marginTop: 8
  },
  textInput3RowRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -112,
    marginLeft: 32,
    marginRight: 61
  },
  loremIpsum3: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  textInput4: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  loremIpsum3Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 133,
    marginLeft: 31,
    marginRight: 49
  },
  loremIpsum4: {
    top: 12,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  text7: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  loremIpsum4Stack: {
    height: 42,
    marginTop: -109,
    marginLeft: 31,
    marginRight: 49
  },
  loremIpsum5: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum5Filler: {
    flex: 1,
    flexDirection: "row"
  },
  textInput5: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular"
  },
  loremIpsum5Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 73,
    marginLeft: 31,
    marginRight: 49
  },
  materialSlider5: {
    width: 150,
    height: 30,
    marginTop: 8
  },
  textInput6: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 21
  },
  dayS1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 7,
    marginTop: 10
  },
  materialSlider5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 59,
    marginLeft: 32,
    marginRight: 71
  },
  loremIpsum6: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -64,
    marginLeft: 31
  },
  materialButtonViolet1: {
    width: 112,
    height: 1,
    shadowOpacity: 0.01,
    alignSelf: "flex-end",
    marginTop: 2964,
    marginRight: 16
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 35,
    opacity: 0.46,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet2: {
    width: 112,
    height: 35,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText2Row: {
    height: 35,
    flexDirection: "row",
    marginTop: -2906,
    marginLeft: 168,
    marginRight: 16
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
  text8: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 127,
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
    marginTop: -904
  },
  lengthOfStayStackRowColumn: {},
  lengthOfStayStackRowColumnFiller: {
    flex: 1
  },
  materialButtonWithVioletText1: {
    width: 88,
    height: 1,
    opacity: 0.46,
    marginBottom: -2825,
    marginLeft: 168
  }
});

export default Policies;
