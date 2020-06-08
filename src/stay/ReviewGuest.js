import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import LargeTextInput from "../createStay/components/LargeTextInput";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialButtonWithVioletText49 from "../createStay/components/MaterialButtonWithVioletText49";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ReviewGuest(props) {
  return (
    <View style={styles.container}>
      <View style={styles.theCottage1Stack}>
        <Text style={styles.theCottage1}>How did your guest do?</Text>
        <Text style={styles.text}>
          Please review your guest, describing the condition of your stay after
          their departure, and whether your experience with them was positive or
          negative
        </Text>
      </View>
      <LargeTextInput
        textInput1="e.g. David left our home neat and tidy, and kept all my kosher dishes separate"
        style={styles.largeTextInput}
      ></LargeTextInput>
      <View style={styles.overallRatingStack}>
        <Text style={styles.overallRating}>Overall Rating</Text>
        <Text style={styles.text1}>
          Rate based on overall observance of rules, etc..
        </Text>
        <View style={styles.group2}>
          <View style={styles.icon111Row}>
            <FeatherIcon name="star" style={styles.icon111}></FeatherIcon>
            <View style={styles.icon112Stack}>
              <FeatherIcon name="star" style={styles.icon112}></FeatherIcon>
              <FeatherIcon name="star" style={styles.icon113}></FeatherIcon>
            </View>
            <FeatherIcon name="star" style={styles.icon114}></FeatherIcon>
            <FeatherIcon name="star" style={styles.icon115}></FeatherIcon>
          </View>
        </View>
      </View>
      <View style={styles.kosherObservanceStack}>
        <Text style={styles.kosherObservance}>Kosher Observance</Text>
        <Text style={styles.text2}>Rate based on Kashrut observance</Text>
        <View style={styles.group3}>
          <View style={styles.icon116Row}>
            <FeatherIcon name="star" style={styles.icon116}></FeatherIcon>
            <View style={styles.icon117Stack}>
              <FeatherIcon name="star" style={styles.icon117}></FeatherIcon>
              <FeatherIcon name="star" style={styles.icon118}></FeatherIcon>
            </View>
            <FeatherIcon name="star" style={styles.icon119}></FeatherIcon>
            <FeatherIcon name="star" style={styles.icon120}></FeatherIcon>
          </View>
        </View>
      </View>
      <MaterialButtonWithVioletText49
        style={styles.materialButtonWithVioletText49}
      ></MaterialButtonWithVioletText49>
      <View style={styles.group4}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                  <EntypoIcon
                    name="chevron-left"
                    style={styles.icon121}
                  ></EntypoIcon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.text3}>Review Guest</Text>
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
  theCottage1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text: {
    top: 23,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  theCottage1Stack: {
    height: 55,
    marginTop: 116,
    marginLeft: 30,
    marginRight: 44
  },
  largeTextInput: {
    height: 132,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 20
  },
  overallRating: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text1: {
    top: 21,
    left: 0,
    width: 300,
    height: 23,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  group2: {
    top: 37,
    left: 0,
    width: 175,
    height: 35,
    position: "absolute",
    flexDirection: "row"
  },
  icon111: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon112: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon113: {
    top: 0,
    left: 35,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon112Stack: {
    width: 70,
    height: 35
  },
  icon114: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon115: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon111Row: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  overallRatingStack: {
    width: 300,
    height: 72,
    marginTop: 3,
    marginLeft: 30
  },
  kosherObservance: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text2: {
    top: 21,
    left: 0,
    width: 280,
    height: 18,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  group3: {
    top: 37,
    left: 0,
    width: 175,
    height: 35,
    position: "absolute",
    flexDirection: "row"
  },
  icon116: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon117: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon118: {
    top: 0,
    left: 35,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon117Stack: {
    width: 70,
    height: 35
  },
  icon119: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon120: {
    color: "rgba(0,88,155,1)",
    fontSize: 35
  },
  icon116Row: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  kosherObservanceStack: {
    width: 280,
    height: 72,
    marginTop: 13,
    marginLeft: 30
  },
  materialButtonWithVioletText49: {
    height: 36,
    marginTop: 107,
    marginLeft: 157,
    marginRight: 157
  },
  group4: {
    height: 91,
    marginTop: -646
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
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
  icon121: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  text3: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
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

export default ReviewGuest;
