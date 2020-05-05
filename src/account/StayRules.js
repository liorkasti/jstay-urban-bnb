import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import RulesSwitches from "../components/RulesSwitches";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function StayRules(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1StackColumn}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
            <Text style={styles.bsD1}>BS&quot;D</Text>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.stayRules}>Stay Rules</Text>
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
        <RulesSwitches style={styles.rulesSwitches}></RulesSwitches>
        <TextInput
          placeholder="e.g. Only Kosher food in the house.."
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
        <Text style={styles.additionalRules}>Additional rules</Text>
      </View>
      <View style={styles.rect1StackColumnFiller}></View>
      <View style={styles.endWrapperFillerRow}>
        <View style={styles.endWrapperFiller}></View>
        <View style={styles.materialButtonWithVioletText2Row}>
          <MaterialButtonWithVioletText11
            style={styles.materialButtonWithVioletText2}
          ></MaterialButtonWithVioletText11>
          <MaterialButtonViolet6
            style={styles.materialButtonViolet4}
          ></MaterialButtonViolet6>
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
  rect1: {
    top: 0,
    left: 0,
    height: 86,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 0,
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
  stayRules: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 119,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 153,
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
    height: 92
  },
  rulesSwitches: {
    height: 302,
    marginTop: 28,
    marginLeft: 30,
    marginRight: 32
  },
  textInput1: {
    width: 364,
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
    marginTop: 49,
    marginLeft: 30
  },
  additionalRules: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: -163,
    marginLeft: 30,
    marginRight: 242
  },
  rect1StackColumn: {
    marginLeft: -6,
    marginRight: -6
  },
  rect1StackColumnFiller: {
    flex: 1
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    marginRight: 35,
    marginBottom: 3
  },
  materialButtonViolet4: {
    height: 45,
    shadowOpacity: 0.01,
    width: 112
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  endWrapperFillerRow: {
    height: 45,
    flexDirection: "row",
    marginBottom: 28,
    marginLeft: 159,
    marginRight: 20
  }
});

export default StayRules;
