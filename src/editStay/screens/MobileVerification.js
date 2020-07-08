import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialSpinner from "../components/MaterialSpinner";
import MaterialButtonWithVioletText17 from "../components/MaterialButtonWithVioletText17";
import Icon from "react-native-vector-icons/Entypo";

function MobileVerification(props) {
  return (
    <View style={styles.container}>
      <View style={styles.whatAmenities1Stack}>
        <Text style={styles.whatAmenities1}>Please verify contact number</Text>
        <Text style={styles.loremIpsum1}>
          Sent via SMS to number you have provided
        </Text>
      </View>
      <View style={styles.textInput1Row}>
        <TextInput
          placeholder="+972"
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
          style={styles.textInput1}
        ></TextInput>
        <TextInput
          placeholder="50 000 0000"
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
      </View>
      <View style={styles.textInput3Row}>
        <TextInput
          placeholder="000000"
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
          style={styles.textInput3}
        ></TextInput>
        <MaterialSpinner style={styles.materialSpinner1}></MaterialSpinner>
      </View>
      <MaterialButtonWithVioletText17
        style={styles.materialButtonWithVioletText17}
      ></MaterialButtonWithVioletText17>
      <Text style={styles.pricesFluctuate1}>
        Add a contact number for guests to call when they arrive (can be number
        for the host or a management team)
      </Text>
      <Text style={styles.didNotReceiveSms}>Did not receive SMS</Text>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.verification}>Verification</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  whatAmenities1: {
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
  whatAmenities1Stack: {
    width: 270,
    height: 40,
    marginTop: 120,
    marginLeft: 40
  },
  textInput1: {
    width: 70,
    height: 40,
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
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  textInput2: {
    width: 234,
    height: 40,
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
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginLeft: 10
  },
  textInput1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 176,
    marginLeft: 40,
    marginRight: 60
  },
  textInput3: {
    width: 80,
    height: 40,
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
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  materialSpinner1: {
    width: 27,
    height: 22,
    marginTop: 8
  },
  textInput3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -206,
    marginLeft: 40,
    marginRight: 267
  },
  materialButtonWithVioletText17: {
    width: 121,
    height: 36,
    marginTop: 167,
    marginLeft: 250
  },
  pricesFluctuate1: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -129,
    marginLeft: 40
  },
  didNotReceiveSms: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -74,
    marginLeft: 40
  },
  group1: {
    height: 91,
    marginTop: -284
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
  verification: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 108,
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

export default MobileVerification;
