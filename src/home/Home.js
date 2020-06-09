import React, { useState } from "react";
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
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [showMediumMap, setShowMediumMap] = useState(false);

  return (
    <View style={styles.container}>
      {/* SearchDropdown */}
      {showSearchOptions &&
        <SearchDropdown style={styles.searchDropdown}></SearchDropdown>
      }
      {/* todo: add toggleFilterHandler */}
      <SearchBar
        onPress={() => { setShowSearchOptions(true) }}
        style={styles.searchBar}
      />

      <ScrollView onScrollBeginDrag={() => { if (showSearchOptions) setShowSearchOptions(false); }}>
        <StatusBar backgroundColor="rgba(2,172,235,1)" />
        <View style={styles.cityCardsStackStack}>
          <View style={styles.cityCardsStack}>
            {/* Around the globe */}
            <CityCards showSearchResultsFor={(search) => { props.showSearchResultsFor(search) }} style={styles.cityCards}></CityCards>
            <Text style={styles.loremIpsum2}></Text>
          </View>
          {/* HeaderBar */}
          <HeaderBar style={styles.headerBar}></HeaderBar>
          {/* Nearby */}
          <Text style={styles.nearby}>Nearby</Text>
          <View style={styles.footerBar1Stack}>
            <TouchableOpacity style={styles.button4}>
              <MaterialCard5 onPress={() => { props.showSearchResultsFor("local") }} style={styles.materialCard5}></MaterialCard5>
            </TouchableOpacity>

          </View>

        </View>

        <Text style={styles.topStays}>Top Stays</Text>
        <View style={styles.bsD1Stack}>
          <Text style={styles.bsD1}>BS"D</Text>
        </View>
        <TouchableOpacity style={styles.jstayLogoDark}>
          <JstayLogoDark />
        </TouchableOpacity>

        <MaterialCardWithRightButtons onPress={()=>{props.showStayProfile("home")}} style={styles.materialCardWithRightButtons1} />
        {/* FooterMenuDropdown */}
        {/* <FooterMenuDropdown /> */}
      </ScrollView>
      {/* Map */}
      {!showMediumMap ?
        <MapButton2
          onPress={() => setShowMediumMap(true)}
          style={styles.mapButton2}
        />
        : null //TODO: replace map with half screen map 
      }
      {/* Footer */}
      <FooterBar
        handleFooterBar={(page) => { props.handleFooterBar(page) }}
        handleFooterMenu={(menuItem) => { props.handleFooterMenu(menuItem) }}
        style={styles.footerBar1}
      />
      {/* <FooterBar style={styles.footerBar2}></FooterBar> */}

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
    fontFamily: "roboto-regular"
  },
  footerBar1: {
    left: 0,
    height: 81,
    // position: fixed,
    bottom: -10,
    right: 0
  },
  button4: {
    top: 0,
    left: 4,
    height: 349,
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
    bottom: 80,
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
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 6
  },
  bsD1: {
    top: 0,
    left: "20%",
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
    // width: 23,
    // height: 12,
    marginTop: -938,
    left: "68%",
  },
  button52: {
    top: 0,
    width: 62,
    height: 62,
    position: "absolute",
    right: 0
  },
  jstayLogoDark: {
    top: "3.5%",
    left: "30%",
    height: 0,
    position: "absolute",
    right: "20%"
  },
  searchBar: {
    top: "7%",
    position: "absolute",
    right: "22%",
    left: "22%",
  },
  materialCardWithRightButtons1: {
    height: 266,
    marginTop: 861,
    marginLeft: 5,
    marginRight: 5
  }
});

export default Home;
