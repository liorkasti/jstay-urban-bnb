import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet22 from "../components/MaterialButtonViolet22";
import MaterialButtonViolet17 from "../components/MaterialButtonViolet17";
//BX CHAT:
function Conversation(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <View style={styles.rect1}>
          <View style={styles.button4Row}>
            <TouchableOpacity style={styles.button4}>
              <TouchableOpacity style={styles.button5}>
                <Icon name="chevron-left" style={styles.icon1}></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.sholli}>Sholli</Text>
            <Image
              source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
              resizeMode="stretch"
              style={styles.image1}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.group2Stack}>
        <View style={styles.group2}></View>
        <View style={styles.rect104}>
          <MaterialButtonViolet22
            text1="Book"
            style={styles.materialButtonViolet173}
          ></MaterialButtonViolet22>
          <View style={styles.loremIpsum3StackRow}>
            <View style={styles.loremIpsum3Stack}>
              <Text style={styles.loremIpsum3}>18/11/2021</Text>
              <Text style={styles.text33}>
                Hi Sholli, my wife and I are traveling to Jerusalem this weekend
                with our three children, your place looks lovely.. we keep
                strictly kosher and would love to book
              </Text>
            </View>
            <Text style={styles.loremIpsum11}>06:46</Text>
          </View>
          <View style={styles.loremIpsum8Row}>
            <Text style={styles.loremIpsum8}>06:48</Text>
            <Text style={styles.hiThere}>
              Hi there David, that sounds lovely we would love to host you and
              your family.
            </Text>
          </View>
          <View style={styles.thankYou3Row}>
            <Text style={styles.thankYou3}>Thank you!</Text>
            <Text style={styles.loremIpsum10}>06:49</Text>
            <Text style={styles.thankYou2}></Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button6}>
          <TouchableOpacity style={styles.button7}>
            <View style={styles.image10Row}>
              <Image
                source={require("../assets/images/Cottage1.jpg")}
                resizeMode="stretch"
                style={styles.image10}
              ></Image>
              <View style={styles.theCottage9Column}>
                <Text style={styles.theCottage9}>The Cottage</Text>
                <View style={styles.upcomingTrips1Stack}>
                  <Text style={styles.upcomingTrips1}></Text>
                  <Text style={styles.jerusalemIsrael}>Jerusalem, Israel</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.group23}>
        <View style={styles.textInputStack}>
          <TextInput placeholder="" style={styles.textInput}></TextInput>
          <MaterialButtonViolet17
            style={styles.materialButtonViolet17}
          ></MaterialButtonViolet17>
        </View>
      </View>
      <View style={styles.group24}>
        <View style={styles.textInput2Stack}>
          <TextInput placeholder="" style={styles.textInput2}></TextInput>
          <MaterialButtonViolet17
            style={styles.materialButtonViolet172}
          ></MaterialButtonViolet17>
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
  group1: {
    top: 0,
    left: -6,
    width: 426,
    height: 91,
    position: "absolute"
  },
  rect1: {
    top: 0,
    left: 0,
    width: 426,
    height: 86,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute"
  },
  sholli: {
    top: 48,
    left: 183,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  button4: {
    top: 40,
    left: 6,
    width: 29,
    height: 40,
    position: "absolute"
  },
  button5: {
    top: 0,
    left: 0,
    width: 29,
    height: 40,
    position: "absolute"
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  image1: {
    top: "3.35%",
    left: 340,
    width: 50,
    height: 50,
    position: "absolute",
    borderRadius: 100
  },
  group2: {
    top: 399,
    left: 32,
    width: 350,
    height: 90,
    position: "absolute"
  },
  rect104: {
    top: 91,
    left: 7,
    width: 400,
    height: 458,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    borderLeftWidth: 0
  },
  group23: {
    top: 560,
    left: 7,
    width: 400,
    height: 59,
    position: "absolute"
  },
  textInput: {
    top: 0,
    left: 0,
    width: 400,
    height: 59,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    fontFamily: "roboto-regular"
  },
  materialButtonViolet17: {
    top: 10,
    left: 300,
    width: 88,
    height: 38,
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.49
  },
  button6: {
    top: 100,
    left: 5,
    width: 380,
    height: 90,
    position: "absolute"
  },
  button7: {
    top: 0,
    left: 10,
    width: 380,
    height: 90,
    position: "absolute"
  },
  image10: {
    top: 7,
    left: 7,
    width: 100,
    height: 75,
    position: "absolute",
    borderRadius: 10
  },
  theCottage9: {
    top: 7,
    left: 110,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  upcomingTrips1: {
    top: 31,
    left: 120,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  jerusalemIsrael: {
    top: 31,
    left: 120,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-700"
  },
  group24: {
    top: 810,
    left: 7,
    width: 400,
    height: 59,
    position: "absolute"
  },
  textInput2: {
    top: 0,
    left: 0,
    width: 400,
    height: 59,
    backgroundColor: "rgba(230,230,230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    fontFamily: "roboto-regular"
  },
  materialButtonViolet172: {
    top: 10,
    left: 300,
    width: 88,
    height: 38,
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.49
  },
  loremIpsum3: {
    top: 182,
    left: 176,
    color: "rgba(182,182,182,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  text33: {
    top: 201,
    left: 19,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular",
    borderWidth: 2,
    borderColor: "rgba(0,88,155,1)",
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderRadius: 10,
    width: 284,
    height: 98,
    textAlign: "left"
  },
  loremIpsum8: {
    top: 343,
    left: 54,
    color: "rgba(182,182,182,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  loremIpsum10: {
    top: 389,
    left: 113,
    color: "rgba(182,182,182,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  thankYou2: {
    top: 399,
    left: 311,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  materialButtonViolet173: {
    top: 101,
    left: 300,
    width: 100,
    height: 36,
    position: "absolute",
    borderRadius: 10
  },
  hiThere: {
    top: 317,
    left: 105,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular",
    borderWidth: 2,
    borderColor: "rgba(0,88,155,1)",
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderRadius: 10,
    width: 291,
    height: 45,
    textAlign: "left"
  },
  loremIpsum11: {
    top: 280,
    left: 311,
    color: "rgba(182,182,182,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  thankYou3: {
    top: 383,
    left: 19,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular",
    borderWidth: 2,
    borderColor: "rgba(0,88,155,1)",
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderRadius: 10,
    width: 86,
    height: 22,
    textAlign: "left"
  }
});

export default Untitled1;
