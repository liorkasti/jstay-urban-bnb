import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, StatusBar } from "react-native";
import CalendarCard from "../components/CalendarCard";
import MaterialButtonViolet12 from "../components/MaterialButtonViolet12";
import Icon from "react-native-vector-icons/Entypo";

function StayCalender({ props }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(2,172,235,1)" />

      <Text style={styles.blockDates}>Make sure your dates are correct</Text>
      <View style={styles.calendarCardStack}>
        <CalendarCard style={styles.calendarCard}></CalendarCard>
        <Text style={styles.blockDates1}>
          That&#39;s it, you&#39;re all done!
        </Text>
        <Text style={styles.text}>
          Block or free up dates before publishing your stay, you can also edit
          calendar after set-up is complete
        </Text>
      </View>
      <MaterialButtonViolet12
        onPress={props.onNext}
        style={styles.materialButtonViolet12}
      ></MaterialButtonViolet12>
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)",
    width: windowWidth,
    height: windowHeight
  },
  blockDates: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 21,
    marginLeft: 30
  },
  calendarCard: {
    position: "absolute",
    top: 72,
    maxWidth: 450,
    left: 0,
    height: 420,
    right: 0
  },
  blockDates1: {
    top: 431,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text: {
    top: 0,
    left: 0,
    width: 'auto',
    height: 'auto',
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  calendarCardStack: {
    height: 455,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 34
  },
  materialButtonViolet12: {
    height: 58,
    borderRadius: 10,
    marginTop: 41,
    marginLeft: 30,
    marginRight: 24
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
  calendar: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 123,
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
    marginTop: -728
  }
});

export default StayCalender;
