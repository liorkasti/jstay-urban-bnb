import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  ListView
} from "react-native";
import CityCards from "./components/CityCards";
import HeaderBar from "./components/HeaderBar";
import JstayLogoDark from "./components/JstayLogoDark";
import SearchBar from "./components/SearchBar";
import FooterBar from "./components/FooterBar";
import SearchDropdown from "./components/SearchDropdown";
import MaterialCardWithRightButtons from "./components/MaterialCardWithRightButtons";
import MaterialCard5 from "./components/MaterialCard5";
import MapButton2 from "./components/MapButton2";
import MaterialButtonWithVioletText21 from "./components/MaterialButtonWithVioletText21";
import MaterialButtonWithVioletText22 from "./components/MaterialButtonWithVioletText22";
import MaterialButtonWithVioletText23 from "./components/MaterialButtonWithVioletText23";
import MaterialButtonWithVioletText24 from "./components/MaterialButtonWithVioletText24";
import MaterialButtonWithVioletText25 from "./components/MaterialButtonWithVioletText25";
import MaterialButtonWithVioletText26 from "./components/MaterialButtonWithVioletText26";
import MaterialButtonWithVioletText28 from "./components/MaterialButtonWithVioletText28";


function Home(props) {
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [showMediumMap, setShowMediumMap] = useState(false);
  const [showFooterMenu, setShowFooterMenu] = useState(false);


  useEffect(() => { console.warn("show footer menu", showFooterMenu) }, [showFooterMenu])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(2,172,235,1)" />

      {/* HeaderBar */}
      <HeaderBar style={styles.headerBar}></HeaderBar>

      {/* SearchDropdown */}
      {showSearchOptions &&
        <SearchDropdown style={styles.searchDropdown}></SearchDropdown>
      }
      {/* todo: add toggleFilterHandler */}
      <View style={styles.searchBarContainer}>
        <SearchBar
          searchText={props.searchText}
          onPress={() => { setShowSearchOptions(true); }}
          style={styles.searchBar}
        />

        <Text style={styles.bsD1}>BS"D</Text>

        <TouchableOpacity onPress={() => { props.goHome() }} style={styles.jstayLogoDark}>
          <JstayLogoDark onPress={() => { props.goHome() }} />
        </TouchableOpacity>

        {/* todo: fix scrollView: */}
        {/*  City Cards - todo: cut past this inside the scrollView */}
        <CityCards showSearchResultsFor={(search) => { props.showSearchResultsFor(search) }}
          style={styles.cityCards} />

        {/* Nearby - todo: cut past this inside the scrollView */}
        <Text style={styles.nearby}>Nearby</Text>
        <TouchableOpacity style={styles.button4}>
          <MaterialCard5
            onPress={() => { props.showSearchResultsFor("local") }}
            style={styles.materialCard5} />
        </TouchableOpacity>

        {/* Top Stays - todo: cut past this inside the scrollView */}
        <Text style={styles.topStays}>Top Stays</Text>
        <TouchableOpacity style={styles.button4}>
          <MaterialCard5 onPress={() => { props.showSearchResultsFor("local") }} style={styles.materialCard5}></MaterialCard5>
        </TouchableOpacity>

      </View>

      {props.searchText ?
        // searchResults
        <ScrollView
          style={{ marginTop: 110, zIndex: 1 }}
          onScrollBeginDrag={() => {
            if (showSearchOptions || showFooterMenu) { setShowSearchOptions(false); setShowFooterMenu(false); }
          }}>
          <View style={styles.searchBarContainer}>
            <MaterialCardWithRightButtons
              onUserPress={(page) => props.onUserPress(page)}
              onPress={() => { props.showStayProfile("Home") }}
              style={styles.materialCardWithRightButtons}
            ></MaterialCardWithRightButtons>
            <StayResultCard
              bookStay={() => props.bookStay()}
              onPress={() => { props.showStayProfile() }}
              style={styles.stayResultCard1} />
          </View>
        </ScrollView>

        :
        //homeScreen
        <ScrollView style={{ marginTop: 110, zIndex: 1 }}

          onScrollBeginDrag={() => {
            if (showSearchOptions || showFooterMenu) { setShowSearchOptions(false); setShowFooterMenu(false); }
          }}>

          <View style={styles.searchBarContainer}>
            {/* City Cards */}
            <View style={styles.cityCardsStackStack}>
              <View style={styles.cityCardsStack}>
                {/* Around the globe */}
                <CityCards showSearchResultsFor={(search) => { props.showSearchResultsFor(search) }}
                  style={styles.cityCards} />
                <Text style={styles.loremIpsum2}></Text>
              </View>
              {/* Nearby */}
              <Text style={styles.nearby}>Nearby</Text>
            </View>
            <Text style={styles.topStays}>Top Stays</Text>
            <View style={styles.bsD1Stack}>
            </View>
            <MaterialCardWithRightButtons
              onUserPress={(page) => { props.onUserPress(page) }}
              onPress={() => { props.showStayProfile("Home") }}
              style={styles.materialCardWithRightButtons1} />
          </View>
          <View style={styles.footerBar1Stack}>
            <TouchableOpacity style={styles.button4}>
              <MaterialCard5
                onPress={() => { props.showSearchResultsFor("local") }}
                style={styles.materialCard5} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      }

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
        setShowFooterMenu={(newOption) => { setShowFooterMenu(newOption); }}
        showFooterMenu={showFooterMenu}
        handleFooterBar={(page) => { props.handleFooterBar(page) }}
        handleFooterMenu={(menuItem) => { props.handleFooterMenu(menuItem) }}
        style={styles.footerBar1}
      />

      {/* <Text allowFontScaling={false} style={styles.topStays}>Top Stays</Text>
      <Text allowFontScaling={false} style={styles.nearby}>Nearby</Text>
      <Text allowFontScaling={false} style={styles.bsD1}>BS&quot;D</Text>
      <Text allowFontScaling={false} style={styles.bsD2}>BS&quot;D</Text>

      <Text allowFontScaling={false} style={styles.loremIpsum2}></Text>
      <FooterBar style={styles.footerBar1}></FooterBar> */}
      {/* <SearchDropdown style={styles.searchDropdown}></SearchDropdown> */}
      {/* <MaterialCardWithRightButtons
        style={styles.materialCardWithRightButtons1}
      ></MaterialCardWithRightButtons> */}
      {/* <TouchableOpacity style={styles.button4}>
        <MaterialCard5 style={styles.materialCard5}></MaterialCard5>
      </TouchableOpacity>
      <MapButton2 style={styles.mapButton2}></MapButton2>
      <View style={styles.group1}>
        <View style={styles.rect9}></View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("MyStaysList")}
          style={styles.button54}
        >
          <MaterialButtonWithVioletText21
            style={styles.materialButtonWithVioletText21}
          ></MaterialButtonWithVioletText21>
        </TouchableOpacity>
        <MaterialButtonWithVioletText22
          style={styles.materialButtonWithVioletText22}
        ></MaterialButtonWithVioletText22>
        <MaterialButtonWithVioletText23
          style={styles.materialButtonWithVioletText23}
        ></MaterialButtonWithVioletText23>
        <MaterialButtonWithVioletText24
          style={styles.materialButtonWithVioletText24}
        ></MaterialButtonWithVioletText24>
        <MaterialButtonWithVioletText25
          style={styles.materialButtonWithVioletText25}
        ></MaterialButtonWithVioletText25>
        <MaterialButtonWithVioletText26
          style={styles.materialButtonWithVioletText26}
        ></MaterialButtonWithVioletText26>
        <View style={styles.rect3}></View>
        <View style={styles.rect4}></View>
        <View style={styles.rect5}></View>
        <View style={styles.rect6}></View>
        <View style={styles.rect7}></View>
        <View style={styles.rect8}></View>
        <MaterialButtonWithVioletText28
          style={styles.materialButtonWithVioletText28}
        ></MaterialButtonWithVioletText28>
      </View>
      <FooterBar style={styles.footerBar2}></FooterBar> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    backgroundColor: "rgba(2,172,235,1)",
  },
  cityCards: {
    top: 162,
    left: 4,
    height: 342,
    position: "absolute",
    right: 3
  },
  // cityCardsStackStack: {
  //   height: 810,
  //   marginTop: 101,
  //   marginLeft: -13,
  //   marginRight: -13
  // },
  // cityCardsStac: {
  //   top: 0,
  //   left: 14,
  //   height: 712,
  //   position: "absolute",
  //   right: 13
  // },
  headerBar: {
    top: 103,
    left: -13,
    height: 56,
    position: "absolute",
    right: -13
  },
  topStays: {
    top: 931,
    left: 6,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  nearby: {
    top: 523,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  bsD1: {
    top: 14,
    left: 353,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  bsD2: {
    top: 14,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    right: 38,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  button52: {
  },
  jstayLogoDark: {
    width: 'auto',
    right: -12,
    top: 36,
  },
  loremIpsum2: {
    top: 302,
    left: 386,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  searchBarContainer: {
    position: "absolute",
    flex: 1,
    width: '100%',
    alignItems: "center",
  },
  searchBar: {
    top: 45,
    height: 39,
    width: '90%',
    position: "absolute",
  },
  footerBar1: {
    left: "0%",
    width: "100%",
    height: 81,
    position: "absolute",
    bottom: -15
  },
  searchDropdown: {
    position: "absolute",
    margin: 0,
    paddingRight: 0,
    left: 0,
    top: 115,
    height: 345,
    right: 1,
    zIndex: 20
  },
  materialCardWithRightButtons: {
    top: 54,
    left: 27,
    width: 359,
    height: 266,
    position: "absolute"
  },
  stayResultCard1: {
    width: 359,
    height: 166,
    marginTop: 343,
    marginLeft: 27
  },
  materialCardWithRightButtons1: {
    top: 957,
    height: 266,
    position: "absolute",
    left: 5,
    right: 5
  },
  button4: {
    top: 562,
    left: 4,
    height: 349,
    position: "absolute",
    right: 4
  },
  materialCard5: {
    top: 0,
    left: "0%",
    width: "100%",
    height: 349,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  mapButton2: {
    position: "absolute",
    bottom: 80,
    left: 5,
    height: 60,
    width: 405,
    zIndex: 20
  },
  group1: {
    width: 207,
    height: 350,
    position: "absolute",
    right: 0,
    bottom: 83
  },
  rect9: {
    top: 0,
    left: 0,
    width: 207,
    height: 350,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  button54: {
    top: 2,
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
  materialButtonWithVioletText22: {
    top: 51,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText23: {
    top: 101,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText24: {
    top: 151,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText25: {
    top: 201,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText26: {
    top: 250,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect3: {
    top: 50,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect4: {
    top: 100,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect5: {
    top: 150,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect6: {
    top: 200,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect7: {
    top: 250,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect8: {
    top: 295,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText28: {
    top: 296,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  footerBar2: {
    left: "0%",
    width: "100%",
    height: 81,
    position: "absolute",
    bottom: -15
  }
});

export default Home;
