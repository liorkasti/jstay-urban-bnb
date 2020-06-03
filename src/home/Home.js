import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CityCards from "../components/CityCards";
import SearchDropdown from "../components/SearchDropdown";
import MaterialButtonWithVioletText21 from "../components/MaterialButtonWithVioletText21";
import MaterialButtonWithVioletText22 from "../components/MaterialButtonWithVioletText22";
import MaterialButtonWithVioletText23 from "../components/MaterialButtonWithVioletText23";
import MaterialButtonWithVioletText24 from "../components/MaterialButtonWithVioletText24";
import MaterialButtonWithVioletText25 from "../components/MaterialButtonWithVioletText25";
import MaterialButtonWithVioletText26 from "../components/MaterialButtonWithVioletText26";
import MaterialButtonWithVioletText28 from "../components/MaterialButtonWithVioletText28";
import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";
import MaterialCard5 from "../components/MaterialCard5";
import MapButton2 from "../components/MapButton2";
import JstayLogoDark from "../components/JstayLogoDark";
import SearchBar from "../components/SearchBar";
import MaterialCardWithRightButtons from "../components/MaterialCardWithRightButtons";

function Home(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <StatusBar barStyle="undefined" />
      <View style={styles.cityCardsStackStack}>
        <View style={styles.cityCardsStack}>
          <CityCards style={styles.cityCards}></CityCards>
          <Text style={styles.loremIpsum2}></Text>
          <SearchDropdown style={styles.searchDropdown}></SearchDropdown>
          <View style={styles.group1}>
            <View style={styles.rect9}>
              <View style={styles.button54Stack}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("MyStaysList")}
                  style={styles.button54}
                >
                  <View style={styles.materialButtonWithVioletText21Stack}>
                    <MaterialButtonWithVioletText21
                      style={styles.materialButtonWithVioletText21}
                    ></MaterialButtonWithVioletText21>
                    <View style={styles.rect3}></View>
                  </View>
                </TouchableOpacity>
                <MaterialButtonWithVioletText22
                  style={styles.materialButtonWithVioletText22}
                ></MaterialButtonWithVioletText22>
                <View style={styles.rect4}></View>
              </View>
              <View style={styles.materialButtonWithVioletText23Stack}>
                <MaterialButtonWithVioletText23
                  style={styles.materialButtonWithVioletText23}
                ></MaterialButtonWithVioletText23>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.materialButtonWithVioletText24Stack}>
                <MaterialButtonWithVioletText24
                  style={styles.materialButtonWithVioletText24}
                ></MaterialButtonWithVioletText24>
                <View style={styles.rect6}></View>
              </View>
              <View style={styles.materialButtonWithVioletText25Stack}>
                <MaterialButtonWithVioletText25
                  style={styles.materialButtonWithVioletText25}
                ></MaterialButtonWithVioletText25>
                <MaterialButtonWithVioletText26
                  style={styles.materialButtonWithVioletText26}
                ></MaterialButtonWithVioletText26>
                <View style={styles.rect7}></View>
                <View style={styles.rect8}></View>
                <MaterialButtonWithVioletText28 style={styles.materialButtonWithVioletText28} />
              </View>
            </View>
          </View>
        </View>
        <HeaderBar style={styles.headerBar}></HeaderBar>
        <Text style={styles.nearby}>Nearby</Text>
        <View style={styles.footerBar1Stack}>
          <FooterBar style={styles.footerBar1}></FooterBar>
          <TouchableOpacity style={styles.button4}>
            <MaterialCard5 style={styles.materialCard5}></MaterialCard5>
          </TouchableOpacity>
          <MapButton2 style={styles.mapButton2}></MapButton2>
          <FooterBar style={styles.footerBar2}></FooterBar>
        </View>
      </View>
      <Text style={styles.topStays}>Top Stays</Text>
      <View style={styles.bsD1Stack}>
        <Text style={styles.bsD1}>BS&quot;D</Text>
        <Text style={styles.bsD2}>BS&quot;D</Text>
      </View>
      <View style={styles.button52Stack}>
        <TouchableOpacity style={styles.button52}>
          <JstayLogoDark style={styles.jstayLogoDark}></JstayLogoDark>
        </TouchableOpacity>
        <SearchBar style={styles.searchBar}></SearchBar>
      </View>
      <MaterialCardWithRightButtons
        style={styles.materialCardWithRightButtons1}
      ></MaterialCardWithRightButtons>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  cityCards: {
    top: 62,
    left: 4,
    height: 342,
    position: "absolute",
    right: 3
  },
  loremIpsum2: {
    top: 201,
    left: 385,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  searchDropdown: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 345,
    right: 1
  },
  group1: {
    width: 207,
    height: 350,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect9: {
    width: 207,
    height: 350,
    backgroundColor: "rgba(0,88,155,1)"
  },
  button54: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText21: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect3: {
    top: 48,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText21Stack: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText22: {
    top: 49,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect4: {
    top: 98,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  button54Stack: {
    width: 207,
    height: 99,
    marginTop: 2
  },
  materialButtonWithVioletText23: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect5: {
    top: 49,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText23Stack: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText24: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect6: {
    top: 49,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText24Stack: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText25: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText26: {
    top: 49,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect7: {
    top: 49,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect8: {
    top: 94,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText28: {
    top: 95,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText25Stack: {
    width: 207,
    height: 145
  },
  cityCardsStack: {
    top: 0,
    left: 14,
    height: 712,
    position: "absolute",
    right: 13
  },
  headerBar: {
    top: 2,
    left: 0,
    height: 56,
    position: "absolute",
    right: 0
  },
  nearby: {
    top: 422,
    left: 22,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  footerBar1: {
    left: 0,
    height: 81,
    position: "absolute",
    bottom: 0,
    right: 0
  },
  button4: {
    top: 0,
    left: 4,
    height: 349,
    position: "absolute",
    right: 5
  },
  materialCard5: {
    height: 349,
    backgroundColor: "rgba(0,88,155,1)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  mapButton2: {
    position: "absolute",
    top: 182,
    left: 5,
    height: 60,
    width: 405
  },
  footerBar2: {
    left: 0,
    height: 81,
    position: "absolute",
    bottom: 0,
    right: 0
  },
  footerBar1Stack: {
    top: 461,
    left: 13,
    height: 349,
    position: "absolute",
    right: 13
  },
  cityCardsStackStack: {
    height: 810,
    marginTop: 101,
    marginLeft: -13,
    marginRight: -13
  },
  topStays: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 20,
    marginLeft: 6
  },
  bsD1: {
    top: 0,
    left: 0,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  bsD2: {
    top: 0,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    right: 0,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  bsD1Stack: {
    width: 23,
    height: 12,
    marginTop: -938,
    marginLeft: 353
  },
  button52: {
    top: 0,
    width: 62,
    height: 62,
    position: "absolute",
    right: 0
  },
  jstayLogoDark: {
    width: 62,
    height: 62
  },
  searchBar: {
    top: 11,
    left: 0,
    height: 39,
    position: "absolute",
    right: 55
  },
  button52Stack: {
    height: 62,
    marginTop: 8,
    marginLeft: 34,
    marginRight: 7
  },
  materialCardWithRightButtons1: {
    height: 266,
    marginTop: 861,
    marginLeft: 5,
    marginRight: 5
  }
});

export default Home;
