import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import MaterialSwitch1 from "../components/MaterialSwitch1";
import Icon from "react-native-vector-icons/Entypo";
import MaterialSlider1 from "../components/MaterialSlider1";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";

function Policies(props) {
  return (
    <View style={styles.container}>
      <View style={styles.lengthOfStayColumnRowColumn}>
        <View style={styles.lengthOfStayColumnRow}>
          <View style={styles.lengthOfStayColumn}>
            <Text style={styles.lengthOfStay}>Length of stay</Text>
            <Text style={styles.loremIpsum1}>
              Add min/max length a guest can stay
            </Text>
          </View>
          <MaterialSwitch1 style={styles.materialSwitch1}></MaterialSwitch1>
        </View>
        <Text style={styles.cancelationPolicy}>Cancelation policy</Text>
        <View style={styles.availibilityColumnRow}>
          <View style={styles.availibilityColumn}>
            <Text style={styles.availibility}>Availibility</Text>
            <Text style={styles.loremIpsum}>
              How far in advance can guests book
            </Text>
          </View>
          <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
        </View>
        <View style={styles.group1}>
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}>
              <Text style={styles.bsD1}>BS&quot;D</Text>
              <View style={styles.button4Row}>
                <TouchableOpacity style={styles.button4}>
                  <TouchableOpacity style={styles.button5}>
                    <Icon name="chevron-left" style={styles.icon1}></Icon>
                  </TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.policies}>Policies</Text>
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
        <View style={styles.materialSlider3Row}>
          <MaterialSlider1 style={styles.materialSlider3}></MaterialSlider1>
          <TextInput placeholder="0" style={styles.textInput2}></TextInput>
          <Text style={styles.monthS}>Month/s</Text>
        </View>
        <View style={styles.turnOverBreakColumnRow}>
          <View style={styles.turnOverBreakColumn}>
            <Text style={styles.turnOverBreak}>Turn-over break</Text>
            <Text style={styles.loremIpsum2}>
              Block day/s between each booking
            </Text>
          </View>
          <MaterialSwitch1 style={styles.materialSwitch3}></MaterialSwitch1>
        </View>
        <Text style={styles.checkInOutTimes}>
          What time can guests check-in/out?
        </Text>
        <View style={styles.materialSlider4Row}>
          <MaterialSlider1 style={styles.materialSlider4}></MaterialSlider1>
          <TextInput placeholder="0" style={styles.textInput3}></TextInput>
          <Text style={styles.dayS}>Day/s</Text>
        </View>
        <View style={styles.loremIpsum4ColumnRow}>
          <View style={styles.loremIpsum4Column}>
            <Text style={styles.loremIpsum4}></Text>
            <Text style={styles.loremIpsum3}>Check-in is availible from</Text>
          </View>
          <TextInput placeholder="00:00" style={styles.textInput4}></TextInput>
        </View>
        <View style={styles.loremIpsum5Row}>
          <Text style={styles.loremIpsum5}>Guests must check-out by</Text>
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
        <MaterialButtonViolet6
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet6>
        <View style={styles.materialButtonWithVioletText2Row}>
          <MaterialButtonWithVioletText11
            style={styles.materialButtonWithVioletText2}
          ></MaterialButtonWithVioletText11>
          <View style={styles.materialButtonWithVioletText2Filler}></View>
          <MaterialButtonViolet6
            style={styles.materialButtonViolet2}
          ></MaterialButtonViolet6>
        </View>
      </View>
      <View style={styles.lengthOfStayColumnRowColumnFiller}></View>
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
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  lengthOfStayColumn: {
    width: 231
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
  lengthOfStayColumnRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 121,
    marginLeft: 36,
    marginRight: 52
  },
  cancelationPolicy: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 565,
    marginLeft: 36
  },
  availibility: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginLeft: 1
  },
  loremIpsum: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  availibilityColumn: {
    width: 226
  },
  materialSwitch2: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    marginLeft: 66
  },
  availibilityColumnRow: {
    height: 34,
    flexDirection: "row",
    marginTop: -410,
    marginLeft: 37,
    marginRight: 52
  },
  group1: {
    width: 426,
    height: 91,
    marginTop: -364
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
  policies: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 133,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 169,
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
  minimum: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSlider1: {
    width: 150,
    height: 30,
    marginTop: 6
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
    marginLeft: 17,
    marginTop: 28
  },
  minimumColumnRow: {
    height: 58,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 38,
    marginRight: 54
  },
  maximum: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSlider2: {
    width: 150,
    height: 30,
    marginTop: 6
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
    marginLeft: 17,
    marginTop: 28
  },
  maximumColumnRow: {
    height: 58,
    flexDirection: "row",
    marginLeft: 38,
    marginRight: 54
  },
  materialSlider3: {
    width: 150,
    height: 30,
    marginTop: 8
  },
  textInput2: {
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
  monthS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 17,
    marginTop: 10
  },
  materialSlider3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 85,
    marginLeft: 38,
    marginRight: 44
  },
  turnOverBreak: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  loremIpsum2: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 1
  },
  turnOverBreakColumn: {
    width: 217
  },
  materialSwitch3: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    marginLeft: 76
  },
  turnOverBreakColumnRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 36,
    marginRight: 52
  },
  checkInOutTimes: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 92,
    marginLeft: 36
  },
  materialSlider4: {
    width: 150,
    height: 30,
    marginTop: 8
  },
  textInput3: {
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
  dayS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 17,
    marginTop: 10
  },
  materialSlider4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -106,
    marginLeft: 38,
    marginRight: 68
  },
  loremIpsum4: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum3: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  loremIpsum4Column: {
    width: 222,
    marginBottom: 10
  },
  textInput4: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 32
  },
  loremIpsum4ColumnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 71,
    marginLeft: 37,
    marginRight: 55
  },
  loremIpsum5: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  textInput5: {
    width: 80,
    height: 40,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 24
  },
  loremIpsum5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 37,
    marginRight: 55
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
    marginLeft: 17,
    marginTop: 10
  },
  materialSlider5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 38,
    marginRight: 68
  },
  loremIpsum6: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -64,
    marginLeft: 37
  },
  materialButtonViolet1: {
    width: 112,
    height: 1,
    shadowOpacity: 0.01,
    alignSelf: "flex-end",
    marginTop: 3004,
    marginRight: 22
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
    marginTop: -2942,
    marginLeft: 174,
    marginRight: 22
  },
  lengthOfStayColumnRowColumn: {
    marginLeft: -6,
    marginRight: -6
  },
  lengthOfStayColumnRowColumnFiller: {
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
