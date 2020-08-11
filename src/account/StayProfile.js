import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import StayLocationDetails from "../createStay/components/StayLocationDetails";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaxStayDetails from "../createStay/components/MaxStayDetails";
import BedroomDetails from "../createStay/components/BedroomDetails";
import OveralStayRating from "../createStay/components/OveralStayRating";
import OveralKashrutRating from "../createStay/components/OveralKashrutRating";
import AddToFavoritesButton from "../createStay/components/AddToFavoritesButton";
import RequestToBookButton from "../createStay/components/RequestToBookButton";
import MessageHostButton from "../createStay/components/MessageHostButton";
import MaterialButtonWithVioletText16 from "../createStay/components/MaterialButtonWithVioletText16";
import MaterialButtonWithVioletText50 from "../createStay/components/MaterialButtonWithVioletText50";
import MaterialButtonWithVioletText30 from "../createStay/components/MaterialButtonWithVioletText30";
import CheckAvailabilityButton from "../createStay/components/CheckAvailabilityButton";

function StayProfile(props) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 850 }}>
        <View style={styles.image2StackStackStack}>
          <View style={styles.image2StackStack}>
            <View style={styles.image2Stack}>

              <Text style={styles.theCottage}>The Cottage</Text>
              <View style={styles.group1}>
              </View>
            </View>

            <ScrollView
              showsHorizontalScrollIndicator={false}
               horizontal={true}
                contentContainerStyle={{ width: 630 }}>
              <Image
                source={require("../assets/images/Cottage.jpg")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <ImageBackground
                source={require("../assets/images/Cottage_2.jpg")}
                resizeMode="contain"
                style={styles.image3}
                imageStyle={styles.image3_imageStyle}
              >
              </ImageBackground>
            </ScrollView>

            <TouchableOpacity onPress={() => props.onUserPress("preBookingProfile")} style={styles.button6}>
              <Image
                source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
                resizeMode="stretch"
                style={styles.image11}
              ></Image>
              <Text style={styles.host}>Host</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loremIpsumStack}>
            <Text style={styles.loremIpsum}></Text>
            <Text style={styles.text}>
              Beautiful cozy cottage in Central Jerusalem, within walking distance
              to the Shuk, beautiful parks and the Central Bus Station
          </Text>
          </View>
        </View>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon
            name="certificate"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <Text style={styles.listedAsKosher}>Listed as{"\n"}Kosher</Text>
          <StayLocationDetails style={styles.stayLocation}></StayLocationDetails>
        </View>
        <View style={styles.icon4Row}>
          <MaterialCommunityIconsIcon
            name="cellphone-key"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.selfCheckIn}>Self {"\n"}check-in</Text>
          <EntypoIcon name="home" style={styles.icon33}></EntypoIcon>
          <Text style={styles.entirePlace}>Entire place</Text>
        </View>
        <View style={styles.icon5Row}>
          <FeatherIcon name="sunset" style={styles.icon5}></FeatherIcon>
          <Text style={styles.shabbatFriendly}>Shabbat {"\n"}friendly</Text>
          <MaxStayDetails style={styles.maxStayDetails}></MaxStayDetails>
        </View>
        <View style={styles.icon6Row}>
          <MaterialCommunityIconsIcon
            name="bank"
            style={styles.icon6}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.sukkahInclueded}>Sukkah options</Text>
          <BedroomDetails style={styles.bedroomDetails}></BedroomDetails>
        </View>
        <View style={styles.overalStayRatingColumnRow}>
          <View style={styles.overalStayRatingColumn}>
            <OveralStayRating style={styles.overalStayRating}></OveralStayRating>
            <OveralKashrutRating
              style={styles.overalKashrutRating}
            ></OveralKashrutRating>
          </View>
          <AddToFavoritesButton
          onPress={() =>props.addToFavorites()}
            style={styles.addToFavoritesButton}
          ></AddToFavoritesButton>
        </View>
        <Text style={styles.rating}>Rating</Text>
        <View style={styles.requestToBookButtonRow}>
          <RequestToBookButton
            onPress={() => { props.onUserPress("bookStay"); }}
            style={styles.requestToBookButton}
          ></RequestToBookButton>
          <MessageHostButton onPress={()=>props.messageHost()} style={styles.messageHostButton}></MessageHostButton>
        </View>
        <View style={styles.materialButtonWithVioletText16StackStack}>
          <View style={styles.materialButtonWithVioletText16Stack}>
            <MaterialButtonWithVioletText16
            tag="Amenities"
              style={styles.materialButtonWithVioletText16}
            ></MaterialButtonWithVioletText16>
            <Text style={styles.night1}>
              You must clean and turn off AC when leaving etc..
          </Text>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon32}></EntypoIcon>
          <MaterialButtonWithVioletText50
            style={styles.materialButtonWithVioletText31}
          ></MaterialButtonWithVioletText50>
        </View>
        <Text style={styles.essentials}>Essentials</Text>
        <View style={styles.kitchen2Stack}>
          <Text style={styles.kitchen2}>Kitchen</Text>
          <Text style={styles.loremIpsum1}>
            Full kitchen that guests can use to cook
        </Text>
        </View>
        <Text style={styles.wiFi}>WiFi</Text>
        <Text style={styles.text1}>
          Towels, bedsheets, soap, toilet paper, pillows
      </Text>
        <Text style={styles.shabbatLampS}>Shabbat Lamp(s)</Text>
        <Text style={styles.loremIpsum16}>Candlesticks And Candles</Text>
        <Text style={styles.kiddushCup}>Kiddush Cup</Text>
        <View style={styles.materialButtonWithVioletText30Stack}>
          <MaterialButtonWithVioletText30
          onPress={() =>props.onUserPress("reviews")}
            style={styles.materialButtonWithVioletText30}
          ></MaterialButtonWithVioletText30>
          <Text style={styles.hostsRules3}>Host&#39;s Rules</Text>
        </View>
        <Text style={styles.text2}>
          Free cancellations until 3 days prior to check-in
      </Text>
        <Text style={styles.shabbatHolliday1}>Shabbat/Holiday Essentials</Text>
        <CheckAvailabilityButton
          style={styles.checkAvailabilityButton}
        ></CheckAvailabilityButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -90,
    backgroundColor: "rgba(2,172,235,1)",
  },
  image2: {
    top: 87,
    left: 10,
    width: 250,
    height: 200,
    position: "absolute"
  },
  theCottage: {
    top: 286,
    left: 30,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  group1: {
    top: 0,
    left: 0,
    height: 91,
    position: "absolute",
    right: 0
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7
  },
  bsD12: {
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
  icon110: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  stayInfo: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 123,
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
  },
  image2Stack: {
    top: 0,
    left: 0,
    height: 310,
    position: "absolute",
    right: 106
  },
  image3: {
    top: 87,
    left: 270,
    width: 250,
    height: 200,
    position: "absolute"
  },
  image3_imageStyle: {},
  icon7: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    height: 35,
    width: 30,
    marginTop: 85,
    marginLeft: 110
  },
  bsD1: {
    top: 14,
    left: 354,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  button6: {
    top: 287,
    left: 344,
    height: 64,
    position: "absolute",
    width: 50
  },
  image11: {
    height: 50,
    borderRadius: 100,
    width: 50
  },
  host: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 10
  },
  image2StackStack: {
    top: 0,
    left: 0,
    height: 351,
    position: "absolute",
    right: 0
  },
  loremIpsum: {
    top: 10,
    left: 2,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  text: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  loremIpsumStack: {
    top: 315,
    left: 30,
    height: 60,
    position: "absolute",
    right: 180
  },
  image2StackStackStack: {
    height: 375,
    marginRight: -106
  },
  icon2: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginTop: 1
  },
  listedAsKosher: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 6,
    marginTop: 2
  },
  stayLocation: {
    height: 34,
    width: 131,
    marginLeft: 75
  },
  icon2Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 32,
    marginRight: 86
  },
  icon4: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  selfCheckIn: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 5,
    marginTop: 1
  },
  icon33: {
    color: "rgba(0,88,155,1)",
    fontSize: 30,
    marginLeft: 79
  },
  entirePlace: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 5,
    marginTop: 10
  },
  icon4Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 96,
    marginLeft: 30,
    marginRight: 110
  },
  icon5: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  shabbatFriendly: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 5
  },
  maxStayDetails: {
    height: 34,
    width: 126,
    marginLeft: 76
  },
  icon5Row: {
    height: 34,
    flexDirection: "row",
    marginTop: -123,
    marginLeft: 30,
    marginRight: 91
  },
  icon6: {
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  sukkahInclueded: {
    width: 65,
    height: 42,
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginLeft: 5
  },
  bedroomDetails: {
    height: 33,
    width: 110,
    marginLeft: 71
  },
  icon6Row: {
    height: 42,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 30,
    marginRight: 103
  },
  overalStayRating: {
    height: 48,
    width: 160
  },
  overalKashrutRating: {
    height: 47,
    width: 160,
    marginLeft: 1
  },
  overalStayRatingColumn: {
    width: 161
  },
  addToFavoritesButton: {
    height: 73,
    width: 99,
    marginLeft: 106
  },
  overalStayRatingColumnRow: {
    height: 95,
    flexDirection: "row",
    marginTop: 282,
    marginLeft: 29,
    marginRight: 19
  },
  rating: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -126,
    marginLeft: 30
  },
  requestToBookButton: {
    height: 58,
    width: 180
  },
  messageHostButton: {
    height: 58,
    width: 180,
    marginLeft: 5
  },
  requestToBookButtonRow: {
    height: 58,
    flexDirection: "row",
    marginTop: -96,
    marginLeft: 26,
    marginRight: 23
  },
  materialButtonWithVioletText16: {
    top: 80,
    left: -15,
    width: 130,
    height: 36,
    position: "absolute"
  },
  night1: {
    top: 0,
    left: 0,
    width: 330,
    height: 90,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialButtonWithVioletText16Stack: {
    top: 0,
    left: 0,
    width: 330,
    height: 116,
    position: "absolute"
  },
  icon32: {
    top: 83,
    left: 113,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 30
  },
  materialButtonWithVioletText31: {
    top: 80,
    left: 292,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText16StackStack: {
    width: 392,
    height: 118,
    marginTop: 208,
    marginLeft: 27
  },
  essentials: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 7,
    marginLeft: 32
  },
  kitchen2: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum1: {
    top: 20,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  kitchen2Stack: {
    width: 246,
    height: 37,
    marginTop: 36,
    marginLeft: 31
  },
  wiFi: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 8,
    marginLeft: 31
  },
  text1: {
    width: 275,
    height: 26,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -104,
    marginLeft: 33
  },
  shabbatLampS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 134,
    marginLeft: 30
  },
  loremIpsum16: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 11,
    marginLeft: 30
  },
  kiddushCup: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 11,
    marginLeft: 31
  },
  materialButtonWithVioletText30: {
    top: 0,
    left: 0,
    width: 122,
    height: 36,
    position: "absolute"
  },
  hostsRules3: {
    top: 32,
    left: 14,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialButtonWithVioletText30Stack: {
    width: 125,
    height: 56,
    marginTop: -461,
    marginLeft: 13
  },
  text2: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -380,
    marginLeft: 30,
    marginRight: 74
  },
  shabbatHolliday1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 626,
    marginLeft: 30
  },
  checkAvailabilityButton: {
    height: 58,
    width: 363,
    marginTop: -629,
    marginLeft: 26
  }
});

export default StayProfile;
