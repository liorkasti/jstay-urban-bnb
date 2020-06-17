import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function Favorites(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { props.showStayProfile("Favorites") }} style={styles.group2}>
        <View style={styles.group1}>
          <View style={styles.rect2}>
            <View style={styles.image2Row}>
              <Image
                source={require("../assets/images/Cottage1.jpg")}
                resizeMode="stretch"
                style={styles.image2}
              ></Image>
              <View style={styles.theCottageStack}>
                <Text style={styles.theCottage}>The Cottage</Text>
                <Text style={styles.jerusalemIsrael13}>Jerusalem, Israel</Text>
              </View>
              <FontAwesomeIcon
                name="trash-o"
                style={styles.icon3}
              ></FontAwesomeIcon>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { props.showStayProfile("Favorites") }} style={styles.group3}>
        <View style={styles.group12}>
          <View style={styles.rect22}>
            <View style={styles.image22Row}>
              <Image
                source={require("../assets/images/Cottage1.jpg")}
                resizeMode="stretch"
                style={styles.image22}
              ></Image>
              <View style={styles.theCottage2Stack}>
                <Text style={styles.theCottage2}>The Cottage</Text>
                <Text style={styles.jerusalemIsrael12}>Jerusalem, Israel</Text>
              </View>
              <FontAwesomeIcon
                name="trash-o"
                style={styles.icon32}
              ></FontAwesomeIcon>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.group13}>
        <View style={styles.rect23}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button4} >
                <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button5}>
                  <EntypoIcon
                    name="chevron-left"
                    style={styles.icon1}
                  ></EntypoIcon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.favorites}>Favorites</Text>
            </View>
            <View style={styles.button4RowFiller}></View>

            <TouchableOpacity onPress={props.onHome} style={styles.button3}>
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "rgba(2,172,235,1)"
  },
  group2: {
    height: 90,
    marginTop: 103,
    marginLeft: 32,
    marginRight: 32
  },
  group1: {
    height: 90
  },
  rect2: {
    height: 90,
    backgroundColor: "rgba(230,230,230,0.41)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01,
    flexDirection: "row"
  },
  image2: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage: {
    top: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular",
    left: 2
  },
  jerusalemIsrael13: {
    top: 22,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  theCottageStack: {
    width: 113,
    height: 39,
    marginLeft: 7,
    marginTop: 18
  },
  icon3: {
    color: "rgba(182,182,182,1)",
    fontSize: 20,
    height: 20,
    width: 17,
    marginLeft: 97,
    marginTop: 3
  },
  image2Row: {
    height: 75,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 7,
    marginTop: 7
  },
  group3: {
    height: 90,
    marginTop: 10,
    marginLeft: 32,
    marginRight: 32
  },
  group12: {
    height: 90
  },
  rect22: {
    height: 90,
    backgroundColor: "rgba(230,230,230,0.41)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01,
    flexDirection: "row"
  },
  image22: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage2: {
    top: 0,
    left: 1,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  jerusalemIsrael12: {
    top: 22,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  theCottage2Stack: {
    width: 111,
    height: 39,
    marginLeft: 7,
    marginTop: 18
  },
  icon32: {
    color: "rgba(182,182,182,1)",
    fontSize: 20,
    height: 20,
    width: 17,
    marginLeft: 99,
    marginTop: 3
  },
  image22Row: {
    height: 75,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 7,
    marginTop: 7
  },
  group13: {
    height: 91,
    marginTop: -293
  },
  rect23: {
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
  favorites: {
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


