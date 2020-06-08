import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import StayResultCard from "./components/StayResultCard";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import MaterialCardWithRightButtons from "./components/MaterialCardWithRightButtons";
import JstayLogoDark from "./components/JstayLogoDark";
import SearchBar from "./components/SearchBar";
import MapButtonClosed from "./components/MapButtonClosed";

function SearchResults(props) {
  return (
    <View style={styles.container}>
      <View style={styles.stayResultCard2Stack}>
        <StayResultCard style={styles.stayResultCard2}></StayResultCard>
        <FooterBar handleFooterBar={(page) => { props.handleFooterBar(page) }} handleFooterMenu={(menuItem) => { props.handleFooterMenu(menuItem) }} style={styles.footerBar1}></FooterBar>
      </View>
      <Text style={styles.bsD1}>BS&quot;D</Text>
      <StayResultCard style={styles.stayResultCard3}></StayResultCard>
      <View style={styles.headerBar1Stack}>
        <HeaderBar style={styles.headerBar1}></HeaderBar>
       
        <MaterialCardWithRightButtons
        onPress={()=>{props.showStayProfile()}}
          style={styles.materialCardWithRightButtons}
        ></MaterialCardWithRightButtons>

      </View>
      <View style={styles.button5Stack}>
        <TouchableOpacity style={styles.button5}>
          <JstayLogoDark style={styles.jstayLogoDark}></JstayLogoDark>
        </TouchableOpacity>
        <SearchBar style={styles.searchBar1}></SearchBar>
      </View>
      <StayResultCard onPress={()=>{props.showStayProfile()}} style={styles.stayResultCard1}></StayResultCard>
      <MapButtonClosed style={styles.mapButtonClosed}></MapButtonClosed>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  stayResultCard2: {
    top: 0,
    left: 27,
    height: 166,
    position: "absolute",
    width: 359
  },
  footerBar1: {
    left: 0,
    height: 81,
    position: "absolute",
    bottom: 49,
    right: 0
  },
  stayResultCard2Stack: {
    height: 166,
    marginTop: 794
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    marginTop: -946,
    marginLeft: 354
  },
  stayResultCard3: {
    height: 166,
    width: 359,
    marginTop: 591,
    marginLeft: 27
  },
  headerBar1: {
    top: 0,
    left: 0,
    width: 440,
    height: 56,
    position: "absolute"
  },
  materialCardWithRightButtons: {
    top: 54,
    left: 41,
    width: 359,
    height: 266,
    position: "absolute"
  },
  headerBar1Stack: {
    width: 440,
    height: 320,
    marginTop: -680,
    marginLeft: -13
  },
  button5: {
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
  searchBar1: {
    top: 11,
    left: 0,
    height: 39,
    position: "absolute",
    right: 55
  },
  button5Stack: {
    height: 62,
    marginTop: -389,
    marginLeft: 34,
    marginRight: 7
  },
  stayResultCard1: {
    width: 359,
    height: 166,
    marginTop: 343,
    marginLeft: 27
  },
  mapButtonClosed: {
    height: 60,
    width: 408,
    marginTop: 363,
    marginLeft: 4
  }
});

export default SearchResults;
