import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import SliderButtonHeader from "../components/SliderButtonHeader";
import WifiNamePasswordInput from "../components/WifiNamePasswordInput";
import ContactNumberInput from "../components/ContactNumberInput";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import Icon from "react-native-vector-icons/Entypo";

function CheckinInfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.whatAmenities1Stack}>
        <Text style={styles.whatAmenities1}>How can guests check-in?</Text>
        <Text style={styles.text4}>
          Guests will only recieve this information on day of arrival
        </Text>
      </View>
      <View style={styles.whatsTheCodeStack}>
        <Text style={styles.whatsTheCode}>What&#39;s the code?</Text>
        <TextInput
          placeholder="e.g. A1B2C3"
          placeholderTextColor="rgba(177,177,177,1)"
          autoCapitalize="sentences"
          autoCorrect={true}
          maxLength={200}
          multiline={true}
          returnKeyType="done"
          inlineImagePadding={0}
          numberOfLines={4}
          returnKeyLabel="Save"
          spellCheck={true}
          style={styles.textInput1}
        ></TextInput>
      </View>
      <View style={styles.textInput2Stack}>
        <TextInput
          placeholder="e.g. the key is left with the neighbour.."
          placeholderTextColor="rgba(177,177,177,1)"
          autoCapitalize="sentences"
          autoCorrect={true}
          maxLength={200}
          multiline={true}
          returnKeyType="done"
          inlineImagePadding={0}
          numberOfLines={4}
          returnKeyLabel="Save"
          spellCheck={true}
          style={styles.textInput2}
        ></TextInput>
        <Text style={styles.text3}>How do guests get the key?</Text>
      </View>
      <SliderButtonHeader
        text1=""
        style={styles.sliderButtonHeader}
      ></SliderButtonHeader>
      <View style={styles.meetAndGreet1Stack}>
        <Text style={styles.meetAndGreet1}>
          Add instructions for arriving guests
        </Text>
        <TextInput
          placeholder="e.g. go up the stairs, put in combination and turn bothdoor handles"
          placeholderTextColor="rgba(177,177,177,1)"
          autoCapitalize="sentences"
          autoCorrect={true}
          maxLength={200}
          multiline={true}
          returnKeyType="done"
          inlineImagePadding={0}
          numberOfLines={4}
          returnKeyLabel="Save"
          spellCheck={true}
          style={styles.textInput3}
        ></TextInput>
      </View>
      <WifiNamePasswordInput
        style={styles.wifiNamePasswordInput}
      ></WifiNamePasswordInput>
      <ContactNumberInput
        style={styles.contactNumberInput}
      ></ContactNumberInput>
      <View style={styles.materialButtonWithVioletText2Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText2Filler}></View>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet6>
      </View>
      <SliderButtonHeader
        text1="Key is left on/near property"
        text2="Hidden Key"
        style={styles.sliderButtonHeader2}
      ></SliderButtonHeader>
      <SliderButtonHeader
        text1="Guests can check in by themselves using a combination lock "
        text2="Self check-in"
        style={styles.sliderButtonHeader3}
      ></SliderButtonHeader>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.checkIn}>Check-In</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <TouchableOpacity style={styles.button3}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  whatAmenities1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 0,
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text4: {
    top: 23,
    left: 0,
    width: 259,
    height: 37,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  whatAmenities1Stack: {
    height: 60,
    marginTop: 120,
    marginLeft: 40,
    marginRight: 38
  },
  whatsTheCode: {
    top: 0,
    left: 1,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput1: {
    top: 22,
    left: 0,
    width: 336,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left"
  },
  whatsTheCodeStack: {
    width: 336,
    height: 62,
    marginTop: 74,
    marginLeft: 40
  },
  textInput2: {
    top: 23,
    left: 0,
    width: 336,
    height: 104,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left"
  },
  text3: {
    top: 0,
    left: 1,
    width: 323,
    height: 26,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput2Stack: {
    width: 336,
    height: 127,
    marginTop: 77,
    marginLeft: 40
  },
  sliderButtonHeader: {
    width: 335,
    height: 38,
    marginTop: 23,
    marginLeft: 40
  },
  meetAndGreet1: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput3: {
    top: 45,
    left: 0,
    width: 336,
    height: 104,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "calibri-regular",
    textAlign: "left"
  },
  meetAndGreet1Stack: {
    width: 336,
    height: 149,
    marginTop: 26,
    marginLeft: 40
  },
  wifiNamePasswordInput: {
    width: 336,
    height: 156,
    marginTop: 5,
    marginLeft: 40
  },
  contactNumberInput: {
    width: 336,
    height: 112,
    marginTop: 23,
    marginLeft: 40
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    marginTop: 6
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet4: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 159,
    marginRight: 20
  },
  sliderButtonHeader2: {
    width: 335,
    height: 38,
    marginTop: -776,
    marginLeft: 39
  },
  sliderButtonHeader3: {
    width: 335,
    height: 52,
    marginTop: -193,
    marginLeft: 41
  },
  group1: {
    height: 91,
    marginTop: -240
  },
  rect: {
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
  checkIn: {
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

export default CheckinInfo;
