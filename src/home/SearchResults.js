import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function SearchResults(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4Row}>
            <TouchableOpacity style={styles.button4}>
              <TouchableOpacity style={styles.button5}>
                <EntypoIcon
                  name="chevron-left"
                  style={styles.icon1}
                ></EntypoIcon>
              </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.searchResults}>Search Results</Text>
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
      <View style={styles.group2}>
        <View style={styles.materialCardWithImageAndTitleStack}>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle}
          ></MaterialCardWithImageAndTitle>
          <FontAwesomeIcon
            name="certificate"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <FeatherIcon name="sunset" style={styles.icon3}></FeatherIcon>
          <MaterialCommunityIconsIcon
            name="bank"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="cellphone-key"
            style={styles.icon5}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.materialCardWithImageAndTitle2Stack}>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle2}
          ></MaterialCardWithImageAndTitle>
          <FontAwesomeIcon
            name="certificate"
            style={styles.icon22}
          ></FontAwesomeIcon>
          <FeatherIcon name="sunset" style={styles.icon32}></FeatherIcon>
          <MaterialCommunityIconsIcon
            name="bank"
            style={styles.icon42}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="cellphone-key"
            style={styles.icon52}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.materialCardWithImageAndTitle3Stack}>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle3}
          ></MaterialCardWithImageAndTitle>
          <FontAwesomeIcon
            name="certificate"
            style={styles.icon23}
          ></FontAwesomeIcon>
          <FeatherIcon name="sunset" style={styles.icon33}></FeatherIcon>
          <MaterialCommunityIconsIcon
            name="bank"
            style={styles.icon43}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="cellphone-key"
            style={styles.icon53}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <View style={styles.group5}>
        <View style={styles.materialCardWithImageAndTitle4Stack}>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle4}
          ></MaterialCardWithImageAndTitle>
          <FontAwesomeIcon
            name="certificate"
            style={styles.icon24}
          ></FontAwesomeIcon>
          <FeatherIcon name="sunset" style={styles.icon34}></FeatherIcon>
          <MaterialCommunityIconsIcon
            name="bank"
            style={styles.icon44}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="cellphone-key"
            style={styles.icon54}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <EntypoIcon name="chevron-down" style={styles.icon55}></EntypoIcon>
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
  searchResults: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 97,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 125,
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
    height: 92,
    marginLeft: -6
  },
  group2: {
    width: 359,
    height: 161,
    backgroundColor: "rgba(230, 230, 230,0.41)",
    borderRadius: 10,
    marginTop: 8,
    marginLeft: 27
  },
  materialCardWithImageAndTitle: {
    top: 0,
    left: 0,
    width: 359,
    height: 166,
    backgroundColor: "rgba(0,88,155,0)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  icon2: {
    top: 125,
    left: 213,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon3: {
    top: 125,
    left: 247,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon4: {
    top: 125,
    left: 287,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon5: {
    top: 125,
    left: 322,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  materialCardWithImageAndTitleStack: {
    width: 359,
    height: 166
  },
  group3: {
    width: 359,
    height: 166,
    backgroundColor: "rgba(230, 230, 230,0.41)",
    borderRadius: 10,
    marginTop: 21,
    marginLeft: 27
  },
  materialCardWithImageAndTitle2: {
    top: 0,
    left: 0,
    width: 359,
    height: 166,
    backgroundColor: "rgba(0,88,155,0)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  icon22: {
    top: 125,
    left: 213,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon32: {
    top: 125,
    left: 247,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon42: {
    top: 125,
    left: 287,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon52: {
    top: 125,
    left: 322,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  materialCardWithImageAndTitle2Stack: {
    width: 359,
    height: 166
  },
  group4: {
    width: 359,
    height: 166,
    backgroundColor: "rgba(230, 230, 230,0.41)",
    borderRadius: 10,
    marginTop: 14,
    marginLeft: 27
  },
  materialCardWithImageAndTitle3: {
    top: 0,
    left: 0,
    width: 359,
    height: 166,
    backgroundColor: "rgba(0,88,155,0)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  icon23: {
    top: 125,
    left: 213,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon33: {
    top: 125,
    left: 247,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon43: {
    top: 125,
    left: 287,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon53: {
    top: 125,
    left: 322,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  materialCardWithImageAndTitle3Stack: {
    width: 359,
    height: 166
  },
  group5: {
    width: 359,
    height: 166,
    backgroundColor: "rgba(230, 230, 230,0.41)",
    borderRadius: 10,
    marginTop: 12,
    marginLeft: 27
  },
  materialCardWithImageAndTitle4: {
    top: 0,
    left: 0,
    width: 359,
    height: 166,
    backgroundColor: "rgba(0,88,155,0)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  icon24: {
    top: 125,
    left: 213,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon34: {
    top: 125,
    left: 247,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon44: {
    top: 125,
    left: 287,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  icon54: {
    top: 125,
    left: 322,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  materialCardWithImageAndTitle4Stack: {
    width: 359,
    height: 166
  },
  icon55: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginTop: 24,
    marginLeft: 192
  }
});

export default SearchResults;
