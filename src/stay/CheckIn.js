import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialButtonViolet13 from "../components/MaterialButtonViolet13";
import MaterialButtonViolet20 from "../components/MaterialButtonViolet20";
import Icon from "react-native-vector-icons/Entypo";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.wiFi}>WiFi</Text>
      <Text style={styles.name}>Name:</Text>
      <View style={styles.passwordStack}>
        <Text style={styles.password}>Password:</Text>
        <Text style={styles.text}>Cottage</Text>
      </View>
      <Text style={styles.text1}>Cottage123</Text>
      <Text style={styles.hostsRules2}>Host&#39;s Rules</Text>
      <View style={styles.night5Stack}>
        <Text style={styles.night5}>
          You must clean and turn off AC when leaving etc..
        </Text>
        <MaterialButtonViolet13
          text1="I'm In!"
          style={styles.materialButtonViolet20}
        ></MaterialButtonViolet13>
        <MaterialButtonViolet20
          text1="Message Host"
          style={styles.materialButtonViolet21}
        ></MaterialButtonViolet20>
      </View>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.directionsForEntryStack}>
        <Text style={styles.directionsForEntry}>Directions for Entry</Text>
        <Text style={styles.night3}>
          You will find an arched entranceway with a white gate, go down a few
          steps and enter door code, turn both handles..{"\n"}
          {"\n"}Dont forget to turn on hot water!
        </Text>
      </View>
      <View style={styles.jerusalemIsrael2Stack}>
        <Text style={styles.jerusalemIsrael2}>
          Entrance Combination /{"\n"}Hidden key
        </Text>
        <Text style={styles.night4}>
          1525678{"\n"}
          {"\n"}key is under the doormat
        </Text>
      </View>
      <Text style={styles.fullAddress}>Full Address</Text>
      <View style={styles.checkInFromRow}>
        <Text style={styles.checkInFrom}>Check-In from:</Text>
        <Text style={styles.night1}>15:30</Text>
        <Text style={styles.today}>Today</Text>
      </View>
      <Text style={styles.night2}>
        51 Harav Shmuel Baruch{"\n"}Jerusalem{"\n"}Israel{"\n"}15253
      </Text>
      <View style={styles.group1}>
        <View style={styles.rect2}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.checkIn2}>Check-In</Text>
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
  wiFi: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 580,
    marginLeft: 40
  },
  name: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3,
    marginLeft: 40
  },
  password: {
    top: 28,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  text: {
    top: 0,
    left: 0,
    width: 330,
    height: 35,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  passwordStack: {
    width: 330,
    height: 45,
    marginTop: 1,
    marginLeft: 40
  },
  text1: {
    width: 330,
    height: 35,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 40
  },
  hostsRules2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 5,
    marginLeft: 40
  },
  night5: {
    top: 0,
    left: 12,
    width: 330,
    height: 90,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialButtonViolet20: {
    top: 65,
    left: 186,
    width: 173,
    height: 45,
    position: "absolute"
  },
  materialButtonViolet21: {
    top: 65,
    left: 0,
    width: 173,
    height: 45,
    position: "absolute",
    borderRadius: 10
  },
  night5Stack: {
    width: 359,
    height: 110,
    marginTop: 1,
    marginLeft: 28
  },
  loremIpsum: {
    color: "rgba(2,172,235,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: -725,
    marginLeft: 28
  },
  directionsForEntry: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  night3: {
    top: 23,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular",
    right: 0
  },
  directionsForEntryStack: {
    height: 113,
    marginTop: 171,
    marginLeft: 40,
    marginRight: 44
  },
  jerusalemIsrael2: {
    top: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular",
    left: 0,
    right: 12
  },
  night4: {
    top: 47,
    left: 0,
    width: 330,
    height: 65,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  jerusalemIsrael2Stack: {
    height: 112,
    marginTop: 44,
    marginLeft: 40,
    marginRight: 44
  },
  fullAddress: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -394,
    marginLeft: 40
  },
  checkInFrom: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  night1: {
    width: 57,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 12,
    marginTop: 2
  },
  today: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 4
  },
  checkInFromRow: {
    height: 24,
    flexDirection: "row",
    marginTop: -62,
    marginLeft: 40,
    marginRight: 114
  },
  night2: {
    width: 207,
    height: 70,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 38,
    marginLeft: 40
  },
  group1: {
    height: 91,
    marginTop: -260
  },
  rect2: {
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
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  checkIn2: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 121,
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

export default Untitled2;
