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
import MaterialButtonViolet21 from "../components/MaterialButtonViolet21";
import MaterialButtonViolet22 from "../components/MaterialButtonViolet22";
import MaterialButtonViolet17 from "../components/MaterialButtonViolet17";

function Untitled4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1StackStack}>
        <View style={styles.group1Stack}>
          <View style={styles.group1}>
            <View style={styles.rect1}>
              <View style={styles.button4Row}>
                <TouchableOpacity style={styles.button4}>
                  <TouchableOpacity style={styles.button5}>
                    <Icon name="chevron-left" style={styles.icon1}></Icon>
                  </TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.david}>David</Text>
                <Image
                  source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
                  resizeMode="stretch"
                  style={styles.image1}
                ></Image>
              </View>
            </View>
          </View>
          <View style={styles.rect2}>
            <MaterialButtonViolet21
              style={styles.materialButtonViolet21}
            ></MaterialButtonViolet21>
            <MaterialButtonViolet22
              style={styles.materialButtonViolet22}
            ></MaterialButtonViolet22>
            <View style={styles.loremIpsum3Row}>
              <Text style={styles.loremIpsum3}>06:46</Text>
              <View style={styles.text3Stack}>
                <Text style={styles.text3}>
                  Hi Sholli, my wife and I are traveling to Jerusalem this
                  weekend with our three children, your place looks lovely.. we
                  keep strictly kosher and would love to book
                </Text>
                <Text style={styles.loremIpsum4}>18/11/2021</Text>
              </View>
            </View>
            <View style={styles.hiThere1Row}>
              <Text style={styles.hiThere1}>
                Hi there David, that sounds lovely we would love to host you and
                your family.
              </Text>
              <Text style={styles.loremIpsum2}>06:48</Text>
            </View>
            <View style={styles.loremIpsum1Row}>
              <Text style={styles.loremIpsum1}>06:49</Text>
              <Text style={styles.thankYou1}>Thank you!</Text>
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
                    <Text style={styles.jerusalemIsrael}>
                      Jerusalem, Israel
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View style={styles.group2}></View>
      </View>
      <View style={styles.group3}>
        <View style={styles.textInputStack}>
          <TextInput placeholder="" style={styles.textInput}></TextInput>
          <MaterialButtonViolet17
            style={styles.materialButtonViolet17}
          ></MaterialButtonViolet17>
        </View>
      </View>
      <View style={styles.group4}>
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
    left: 0,
    width: 426,
    height: 91,
    position: "absolute"
  },
  rect1: {
    width: 426,
    height: 86,
    backgroundColor: "rgba(2,172,235,1)",
    flexDirection: "row"
  },
  button4: {
    width: 29,
    height: 40,
    marginTop: 19
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  david: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginLeft: 148,
    marginTop: 27
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 100
  },
  button4Row: {
    height: 59,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 6,
    marginTop: 21
  },
  rect2: {
    top: 90,
    left: 13,
    width: 400,
    height: 458,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 10
  },
  materialButtonViolet21: {
    width: 100,
    height: 36,
    borderRadius: 10,
    marginTop: 11,
    marginLeft: 293
  },
  materialButtonViolet22: {
    width: 100,
    height: 36,
    borderRadius: 10,
    marginTop: 8,
    marginLeft: 293
  },
  loremIpsum3: {
    color: "rgba(182,182,182,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 98
  },
  text3: {
    top: 19,
    left: 0,
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
  loremIpsum4: {
    top: 0,
    left: 62,
    color: "rgba(182,182,182,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  text3Stack: {
    width: 284,
    height: 117,
    marginLeft: 10
  },
  loremIpsum3Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 58,
    marginRight: 9
  },
  hiThere1: {
    color: "rgba(0,88,155,1)",
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
  loremIpsum2: {
    color: "rgba(182,182,182,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginLeft: 3,
    marginTop: 26
  },
  hiThere1Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 13,
    marginRight: 52
  },
  loremIpsum1: {
    color: "rgba(182,182,182,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 6
  },
  thankYou1: {
    color: "rgba(0,88,155,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    borderWidth: 2,
    borderColor: "rgba(0,88,155,1)",
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderRadius: 10,
    width: 86,
    height: 22,
    textAlign: "left",
    marginLeft: 5
  },
  loremIpsum1Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 256,
    marginRight: 12
  },
  button6: {
    top: 100,
    left: 11,
    width: 380,
    height: 90,
    position: "absolute"
  },
  button7: {
    width: 380,
    height: 90,
    marginLeft: 10
  },
  image10: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage9: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  upcomingTrips1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  jerusalemIsrael: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-700"
  },
  upcomingTrips1Stack: {
    width: 108,
    height: 17
  },
  theCottage9Column: {
    width: 111,
    marginLeft: 3,
    marginBottom: 34
  },
  image10Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 159
  },
  group1Stack: {
    top: 0,
    left: 0,
    width: 426,
    height: 548,
    position: "absolute"
  },
  group2: {
    top: 399,
    left: 38,
    width: 350,
    height: 90,
    position: "absolute"
  },
  group1StackStack: {
    width: 426,
    height: 548,
    marginLeft: -6
  },
  group3: {
    width: 400,
    height: 59,
    marginTop: 12,
    marginLeft: 7
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
  textInputStack: {
    width: 400,
    height: 59
  },
  group4: {
    width: 400,
    height: 59,
    marginTop: 191,
    marginLeft: 7
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
  textInput2Stack: {
    width: 400,
    height: 59
  }
});

export default Untitled4;
