import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import MaterialButtonViolet23 from "../components/MaterialButtonViolet23";
import MaterialButtonViolet13 from "../components/MaterialButtonViolet13";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function PreviousGuest(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button6}>
        <View style={styles.group22}>
          <View style={styles.rect105}>
            <View style={styles.image10RowRow}>
             
              <TouchableOpacity onPress={()=>props.onUserPress("stayProfile")} style={styles.image10Row}>
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
              </TouchableOpacity>

              <View style={styles.image10RowFiller}></View>
              <TouchableOpacity onPress={()=>{props.onUserPress("preBookingProfile")}} style={styles.button7}>
                <Image
                  source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
                  resizeMode="stretch"
                  style={styles.image11}
                ></Image>
                <Text style={styles.host}>Host</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.checkedInRow}>
        <Text style={styles.checkedIn}>Checked-in</Text>
        <Text style={styles.checkedOut}>Checked-out</Text>
      </View>
      <View style={styles.checkOut3Row}>
        <Text style={styles.checkOut3}>04 March 2021</Text>
        <Text style={styles.checkOut2}>20 March 2021</Text>
      </View>
      <View style={styles.materialButtonViolet23Row}>
        <MaterialButtonViolet23
        tag="Book Again"
        onPress={() => { props.onUserPress("bookStay")}}
          style={styles.materialButtonViolet23}
        ></MaterialButtonViolet23>
        <MaterialButtonViolet13
        onPress={() =>props.messageHost({text:"I would like to book this stay again",automatic: false})}
          text1="Message Host"
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet13>

      </View>
      <View style={styles.checkOut5Row}>
        <Text style={styles.checkOut5}>15:00</Text>
        <Text style={styles.checkOut4}>11:00</Text>
      </View>
      
      <View style={styles.group23}>
        
      </View>
      <View style={styles.group24}>
        <View style={styles.rect13}>
          <View style={styles.image13Row}>
            <Image
              source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
              resizeMode="stretch"
              style={styles.image13}
            ></Image>
            <Text style={styles.text2}>
              Sholli was very kind and friendly, The kitchen had all Kosher
              options..
            </Text>
          </View>
          <View style={styles.endWrapperFillerRow}>
            <View style={styles.endWrapperFiller}></View>
            <View style={styles.icon111StackStackRow}>
              <View style={styles.icon111StackStack}>
                <View style={styles.icon111Stack}>
                  <FontAwesomeIcon
                    name="star"
                    style={styles.icon111}
                  ></FontAwesomeIcon>
                  <Text style={styles.stay12}>Stay</Text>
                </View>
                <FontAwesomeIcon
                  name="star"
                  style={styles.icon112}
                ></FontAwesomeIcon>
              </View>
              <View style={styles.icon113Stack}>
                <FontAwesomeIcon
                  name="star"
                  style={styles.icon113}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  name="star"
                  style={styles.icon114}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  name="star"
                  style={styles.icon115}
                ></FontAwesomeIcon>
              </View>
              <View style={styles.icon121StackStack}>
                <View style={styles.icon121Stack}>
                  <FontAwesomeIcon
                    name="star"
                    style={styles.icon121}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    name="star"
                    style={styles.icon122}
                  ></FontAwesomeIcon>
                  <Text style={styles.kosherFriendly12}>Kosher Friendly</Text>
                </View>
                <FontAwesomeIcon
                  name="star"
                  style={styles.icon123}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  name="star"
                  style={styles.icon124}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  name="star"
                  style={styles.icon125}
                ></FontAwesomeIcon>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.priceForYourStay1}>Pricing for your stay</Text>
      <View style={styles.night1Row}>
        <Text style={styles.night1}>Nightly rate</Text>
        <Text style={styles.night8}>$0.00</Text>
      </View>
      <View style={styles.night2Row}>
        <Text style={styles.night2}>Cleaning fee</Text>
        <Text style={styles.night9}>$0.00</Text>
      </View>
      <View style={styles.night3Row}>
        <Text style={styles.night3}>Other fees</Text>
        <Text style={styles.night10}>$0.00</Text>
      </View>
      <View style={styles.night4Row}>
        <Text style={styles.night4}>Deductable charge/s</Text>
        <Text style={styles.night11}>$0.00</Text>
      </View>
      <Text style={styles.night5}>
        These charges may have been refunded
      </Text>
      <View style={styles.night6Row}>
        <Text style={styles.night6}>Jstay fee</Text>
        <Text style={styles.night12}>$0.00</Text>
      </View>
      <View style={styles.night7Row}>
        <Text style={styles.night7}>Total</Text>
        <Text style={styles.night13}>$0.00</Text>
      </View>
      <Text style={styles.loremIpsum1}>$0.00/night x 0 nights</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  button6: {
    width: 380,
    height: 90,
    marginTop: 20,
    marginLeft: 10
  },
  group22: {
    width: 380,
    height: 90,
    marginLeft: 10
  },
  rect105: {
    width: 380,
    height: 82,
    borderRadius: 10,
    shadowOpacity: 0.01
  },
  image10: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage9: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  upcomingTrips1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  jerusalemIsrael: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
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
    flexDirection: "row"
  },
  image10RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button7: {
    width: 50,
    height: 64,
    marginTop: 3
  },
  image11: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "flex-end"
  },
  host: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 10
  },
  image10RowRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 13
  },
  checkedIn: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkedOut: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 81.5
  },
  checkedInRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 26,
    marginRight: 91
  },
  checkOut3: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut2: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 47
  },
  checkOut3Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 26,
    marginRight: 73
  },
  materialButtonViolet23: {
    width: 173,
    height: 45,
    borderRadius: 10
  },
  materialButtonViolet1: {
    width: 173,
    height: 45,
    marginLeft: 15
  },
  materialButtonViolet23Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 521,
    marginLeft: 26,
    marginRight: 27
  },
  checkOut5: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  checkOut4: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 132
  },
  checkOut5Row: {
    height: 24,
    flexDirection: "row",
    marginTop: -550,
    marginLeft: 26,
    marginRight: 154
  },
  group23: {
    height: 91,
    marginTop: -304
  },
  rect106: {
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
  previous: {
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
    height: 62,
    width: 62,
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
  group24: {
    height: 117,
    marginTop: 549,
    marginLeft: 28,
    marginRight: 28
  },
  rect13: {
    height: 117,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  image13: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  text2: {
    color: "rgba(230,230,230,1)",
    fontFamily: "roboto-regular",
    flex: 1,
    marginLeft: 20
  },
  image13Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 15,
    marginRight: 44
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon111: {
    top: 14,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 9,
    height: 20,
    width: 20
  },
  stay12: {
    top: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 0
  },
  icon111Stack: {
    top: 0,
    width: 29,
    height: 34,
    position: "absolute",
    right: 11
  },
  icon112: {
    top: 14,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 0,
    height: 20,
    width: 20
  },
  icon111StackStack: {
    width: 40,
    height: 34
  },
  icon113: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 36,
    height: 20,
    width: 18
  },
  icon114: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 17,
    height: 20,
    width: 20
  },
  icon115: {
    top: 0,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 0,
    height: 20,
    width: 18
  },
  icon113Stack: {
    width: 54,
    height: 20,
    marginRight: 23,
    marginTop: 14
  },
  icon121: {
    top: 14,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 77,
    height: 20,
    width: 20
  },
  icon122: {
    top: 14,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 60,
    height: 20,
    width: 18
  },
  kosherFriendly12: {
    top: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontFamily: "roboto-regular",
    right: 0
  },
  icon121Stack: {
    top: 0,
    width: 97,
    height: 34,
    position: "absolute",
    right: 0
  },
  icon123: {
    top: 14,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 40,
    height: 20,
    width: 20
  },
  icon124: {
    top: 14,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 20,
    height: 20,
    width: 20
  },
  icon125: {
    top: 14,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    right: 1,
    height: 20,
    width: 18
  },
  icon121StackStack: {
    width: 97,
    height: 34
  },
  icon111StackStackRow: {
    height: 34,
    flexDirection: "row"
  },
  endWrapperFillerRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 131,
    marginRight: 14
  },
  priceForYourStay1: {
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -427,
    marginLeft: 27
  },
  night1: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night8: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 27,
    marginRight: 25
  },
  night2: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night9: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night2Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 27,
    marginRight: 25
  },
  night3: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night10: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 25
  },
  night4: {
    width: 172,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night11: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 138
  },
  night4Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 25
  },
  night5: {
    width: 253,
    height: 25,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 27
  },
  night6: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night12: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 27,
    marginRight: 25
  },
  night7: {
    width: 103,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  night13: {
    width: 52,
    height: 22,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 207
  },
  night7Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 27,
    marginRight: 25
  },
  loremIpsum1: {
    color: "rgba(0,88,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -247,
    marginLeft: 27
  }
});

export default PreviousGuest;
