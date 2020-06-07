import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, ScrollView } from "react-native";
import CityCards from "./components/CityCards";
import SearchDropdown from "./components/SearchDropdown";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import MaterialCard5 from "./components/MaterialCard5";
import MapButton2 from "./components/MapButton2";
import JstayLogoDark from "./components/JstayLogoDark";
import SearchBar from "./components/SearchBar";
import MaterialCardWithRightButtons from "./components/MaterialCardWithRightButtons";
import FooterMenuDropdown from "./components/FooterMenuDropdown";


function Home(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="rgba(2,172,235,1)" />
        <View style={styles.cityCardsStackStack}>
          <View style={styles.cityCardsStack}>
            {/* Around the globe */}
            <CityCards style={styles.cityCards}></CityCards>
            <Text style={styles.loremIpsum2}></Text>
          </View>
          {/* HeaderBar */}
          <HeaderBar style={styles.headerBar}></HeaderBar>
          {/* Nearby */}
          <Text style={styles.nearby}>Nearby</Text>
          <View style={styles.footerBar1Stack}>
            <TouchableOpacity style={styles.button4}>
              <MaterialCard5 style={styles.materialCard5}></MaterialCard5>
            </TouchableOpacity>
            <MapButton2 style={styles.mapButton2}></MapButton2>
          </View>

          {/* SearchDropdown */}
          {/* <SearchDropdown style={styles.searchDropdown}></SearchDropdown> */}
        </View>

        <Text style={styles.topStays}>Top Stays</Text>
        <View style={styles.bsD1Stack}>
          <Text style={styles.bsD1}>BS"D</Text>
        </View>

        <View style={styles.button52Stack}>
          <TouchableOpacity style={styles.jstayLogoDark}>
            <JstayLogoDark />
          </TouchableOpacity>
          {/* todo: add toggleFilterHandler */}
          <SearchBar style={styles.searchBar}></SearchBar>
        </View>
        <MaterialCardWithRightButtons style={styles.materialCardWithRightButtons1} />
        {/* FooterMenuDropdown */}
        {/* <FooterMenuDropdown /> */}
        {/* Footer */}
        <FooterBar style={styles.footerBar1}></FooterBar>
        {/* <FooterBar style={styles.footerBar2}></FooterBar> */}
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
    margin: 0,
    paddingRight: 0,
    left: 0,
    top: 0,
    height: 345,
    right: 1
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
    // position: "absolute",
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
    right: -10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    // opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  bsD2: {
    top: 0,
    color: "rgba(0,88,155,1)",
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
    top: -42,
    left: 180,
    height: 39,
    position: "absolute",
    // right: 55
  },
  searchBar: {
    top: 11,
    left: -20,
    height: 39,
    position: "absolute",
    right: 65
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
