import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
  ScrollView,
} from "react-native";
import MaterialCard5 from "./components/MaterialCard5";
import CityCards from "./components/CityCards";
import SmallSeach from "./components/SmallSeach";
import HomeSearch from "./components/HomeSearch";
import HeaderBar from "./components/HeaderBar";
import JstayLogoDark from "./components/JstayLogoDark";
import StayCard from "./components/StayCard";
import CreateStayButton from "./components/CreateStayButton";
import FooterBar from "./components/FooterBar";
import MaterialButtonWithVioletText21 from "./components/MaterialButtonWithVioletText21";
import MaterialButtonWithVioletText22 from "./components/MaterialButtonWithVioletText22";
import MaterialButtonWithVioletText23 from "./components/MaterialButtonWithVioletText23";
import MaterialButtonWithVioletText24 from "./components/MaterialButtonWithVioletText24";
import MaterialButtonWithVioletText25 from "./components/MaterialButtonWithVioletText25";
import MaterialButtonWithVioletText26 from "./components/MaterialButtonWithVioletText26";
import MaterialButtonWithVioletText28 from "./components/MaterialButtonWithVioletText28";
import MapButton from "./components/MapButton";

function Home(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.button4Column}>
        <TouchableOpacity style={styles.button4}>
          <MaterialCard5 style={styles.materialCard5}></MaterialCard5>
        </TouchableOpacity>
        <View style={styles.cityCardsStackStack}>
          <View style={styles.cityCardsStack}>
            <CityCards style={styles.cityCards}></CityCards>
            <View style={styles.group2}>
              <View style={styles.rect10}>
                <SmallSeach style={styles.smallSeach}></SmallSeach>
              </View>
            </View>
          </View>
          <View style={styles.group}>
            <HomeSearch style={styles.homeSearch}></HomeSearch>
          </View>
          <StatusBar animated={false} hidden={false}></StatusBar>
          <HeaderBar style={styles.headerBar}></HeaderBar>
          <View style={styles.bsD1Stack}>
            <Text style={styles.bsD1}>BS&quot;D</Text>
            <Text style={styles.bsD2}>BS&quot;D</Text>
          </View>
          <TouchableOpacity style={styles.button52}>
            <JstayLogoDark style={styles.jstayLogoDark}></JstayLogoDark>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button3}>
          <StayCard style={styles.stayCard}></StayCard>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <CreateStayButton style={styles.createStayButton}></CreateStayButton>
        </TouchableOpacity>
        <Text style={styles.topStays}>Top Stays</Text>
        <Text style={styles.nearby}>Nearby</Text>
        <Text style={styles.becomeAHost}>Become A Host</Text>
      </View>
      <View style={styles.button4ColumnFiller}></View>
      <View style={styles.footerBarStackStack}>
        <View style={styles.footerBarStack}>
          <FooterBar style={styles.footerBar}></FooterBar>
          <View style={styles.group1}>
            <View style={styles.rect9}>
              <View style={styles.materialButtonWithVioletText21Stack}>
                <MaterialButtonWithVioletText21
                  style={styles.materialButtonWithVioletText21}
                ></MaterialButtonWithVioletText21>
                <MaterialButtonWithVioletText22
                  style={styles.materialButtonWithVioletText22}
                ></MaterialButtonWithVioletText22>
                <View style={styles.rect3}></View>
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
                <MaterialButtonWithVioletText28
                  style={styles.materialButtonWithVioletText28}
                ></MaterialButtonWithVioletText28>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button5}>
          <MapButton style={styles.mapButton}></MapButton>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  button4: {
    width: 405,
    height: 349,
    marginTop: 563,
    marginLeft: 18
  },
  materialCard5: {
    height: 349,
    backgroundColor: "rgba(0,88,155,1)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  cityCards: {
    top: 163,
    left: 5,
    width: 406,
    height: 342,
    position: "absolute"
  },
  group2: {
    top: 0,
    left: 0,
    width: 414,
    height: 448,
    position: "absolute",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  rect10: {
    width: 414,
    height: 448,
    backgroundColor: "rgba(2,172,235,1)",
    marginLeft: 10
  },
  smallSeach: {
    height: 421,
    marginTop: 14,
    marginLeft: 14,
    marginRight: 20
  },
  cityCardsStack: {
    top: 0,
    left: 13,
    width: 414,
    height: 505,
    position: "absolute"
  },
  group: {
    top: 49,
    left: 37,
    width: 319,
    height: 46,
    position: "absolute"
  },
  homeSearch: {
    width: 319,
    height: 46
  },
  headerBar: {
    top: 103,
    left: 0,
    width: 440,
    height: 56,
    position: "absolute"
  },
  bsD1: {
    top: 0,
    left: 3,
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
    right: 3,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  bsD1Stack: {
    top: 14,
    left: 363,
    width: 29,
    height: 12,
    position: "absolute"
  },
  button52: {
    top: 39,
    left: 358,
    width: 62,
    height: 62,
    position: "absolute"
  },
  jstayLogoDark: {
    width: 62,
    height: 62
  },
  cityCardsStackStack: {
    width: 440,
    height: 505,
    marginTop: -912
  },
  button3: {
    width: 405,
    height: 266,
    justifyContent: "center",
    marginTop: 466,
    marginLeft: 18
  },
  stayCard: {
    width: 405,
    height: 266
  },
  button2: {
    width: 405,
    height: 60,
    marginTop: 56,
    marginLeft: 18
  },
  createStayButton: {
    width: 405,
    height: 60
  },
  topStays: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -422,
    marginLeft: 19
  },
  nearby: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -426,
    marginLeft: 22
  },
  becomeAHost: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 716,
    marginLeft: 18
  },
  button4Column: {
    width: 440,
    marginLeft: -13
  },
  button4ColumnFiller: {
    flex: 1
  },
  footerBar: {
    left: 0,
    height: 80,
    position: "absolute",
    bottom: 0,
    right: 0
  },
  group1: {
    width: 207,
    height: 350,
    position: "absolute",
    right: 0,
    bottom: 76
  },
  rect9: {
    width: 207,
    height: 350,
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialButtonWithVioletText21: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText22: {
    top: 49,
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
  rect4: {
    top: 98,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText21Stack: {
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
  footerBarStack: {
    height: 426,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0
  },
  button5: {
    left: 5,
    width: 405,
    height: 66,
    position: "absolute",
    bottom: 91
  },
  mapButton: {
    width: 405,
    height: 66
  },
  footerBarStackStack: {
    height: 426,
    marginBottom: -1
  }
});

export default Home;
