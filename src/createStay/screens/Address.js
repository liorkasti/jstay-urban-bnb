import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import DropDown from "../components/DropDown";
import Icon from "react-native-vector-icons/Entypo";

function Address(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textStack}>
        <Text style={styles.text}>
          Guests will only receive exact address once they have booked your stay
        </Text>
        <Text style={styles.loremIpsum1}>
          Enter your stay&#39;s full address
        </Text>
      </View>
      <Text style={styles.country}>Country</Text>
      <View style={styles.streetAddressStack}>
        <Text style={styles.streetAddress}>Street Address</Text>
        <TextInput
          placeholder="e.g. 770 Eastern Parkway"
          placeholderTextColor="rgba(177,177,177,1)"
          style={styles.textInput8}
        ></TextInput>
      </View>
      <View style={styles.apartmentNoSuiteStack}>
        <Text style={styles.apartmentNoSuite}>Apartment No./Suite</Text>
        <TextInput
          placeholder="e.g. Apartment 1"
          placeholderTextColor="rgba(177,177,177,1)"
          
          style={styles.textInput9}
        ></TextInput>
      </View>
      <View style={styles.cityStack}>
        <Text style={styles.city}>City</Text>
        <TextInput
          placeholder="e.g. Brookyn "
          placeholderTextColor="rgba(177,177,177,1)"
          
          style={styles.textInput10}
        ></TextInput>
      </View>
      <View style={styles.stateOptionalStack}>
        <Text style={styles.stateOptional}>State (optional)</Text>
        <TextInput
          placeholder="e.g. New York"
          placeholderTextColor="rgba(177,177,177,1)"
          
          style={styles.textInput11}
        ></TextInput>
      </View>
      <View style={styles.postalCodeStack}>
        <Text style={styles.postalCode}>Postal Code</Text>
        <TextInput
          placeholder="e.g. 11213"
          placeholderTextColor="rgba(177,177,177,1)"
          
          style={styles.textInput12}
        ></TextInput>
      </View>
      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet6}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.neighbourhoodStack}>
        <Text style={styles.neighbourhood}>Neighbourhood</Text>
        <TextInput
          placeholder="e.g. Crown Heights"
          placeholderTextColor="rgba(177,177,177,1)"
          
          style={styles.textInput13}
        ></TextInput>
      </View>
      <DropDown
        textInput1="User's current country"
        style={styles.dropDown}
      ></DropDown>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: 200,
    backgroundColor: "rgba(2,172,235,1)",
  },
  text: {
    top: 21,
    left: 0,
    width: 301,
    height: 30,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  loremIpsum1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textStack: {
    width: 301,
    height: 51,
    marginTop: 30,
    marginLeft: 21
  },
  country: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 16,
    marginLeft: 21
  },
  streetAddress: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput8: {
    top: 14,
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
  streetAddressStack: {
    width: 362,
    height: 64,
    marginTop: 62,
    marginLeft: 20
  },
  apartmentNoSuite: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput9: {
    top: 16,
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
  apartmentNoSuiteStack: {
    width: 362,
    height: 66,
    marginTop: 13,
    marginLeft: 20
  },
  city: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput10: {
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
  cityStack: {
    width: 362,
    height: 70,
    marginTop: 12,
    marginLeft: 20
  },
  stateOptional: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput11: {
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
  stateOptionalStack: {
    width: 362,
    height: 70,
    marginTop: 13,
    marginLeft: 20
  },
  postalCode: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput12: {
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
  postalCodeStack: {
    width: 362,
    height: 70,
    marginTop: 14,
    marginLeft: 20
  },
  materialButtonWithVioletText1: {
    height: 36,
    opacity: 0.46,
    flex: 1,
    marginRight: 32,
    marginTop: 4
  },
  materialButtonViolet6: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 137,
    marginLeft: 150,
    marginRight: 16
  },
  neighbourhood: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput13: {
    top: 16,
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
  neighbourhoodStack: {
    width: 362,
    height: 66,
    marginTop: -165,
    marginLeft: 20
  },
  dropDown: {
    width: 280,
    height: 41,
    marginTop: -531,
    marginLeft: 20
  },
  group1: {
    width: 414,
    height: 91,
    marginTop: -258
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7
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
  text14: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 126,
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
  }
});

export default Address;
