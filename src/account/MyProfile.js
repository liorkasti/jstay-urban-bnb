import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions
} from "react-native";
import MaterialButtonWithVioletText32 from "./components/MaterialButtonWithVioletText32";
import MyProfileMenu from "./components/MyProfileMenu";
import MyNameDetails from "./components/MyNameDetails";
import DateBirthDetails from "./components/DateBirthDetails";
import MyLocationDetails from "./components/MyLocationDetails";
import TitleDetails from "./components/TitleDetails";
import KashrutDetails from "./components/KashrutDetails";
import EmailDetails from "./components/EmailDetails";
import PhoneDetails from "./components/PhoneDetails";
import MaterialButtonViolet15 from "./components/MaterialButtonViolet15";
import MaterialButtonViolet16 from "./components/MaterialButtonViolet16";
import MaterialButtonWithVioletText46 from "../components/MaterialButtonWithVioletText46";
import MyStaysRating from "./components/MyStaysRating";
import MyKosherRating from "./components/MyKosherRating";
import ContinueFacebookButton from "./components/ContinueFacebookButton";
import ContinueGoogleButton from "./components/ContinueGoogleButton";

import HeaderBarLight from "./components/HeaderBarLight";
import MyProfileHeader from "./components/MyProfileHeader";


function MyProfile(props) {
  // console.warn("MyProfile : ", {props})
  const [showMenu, setShowMenu] = useState(false);

  const changeProfilePic = () => {
    console.warn("add change profile pic behavior")
  }

  useEffect(() => { console.warn("show menu status: ", showMenu) }, showMenu)

  return (
    <View style={styles.container}>
      <MyProfileHeader
        // onUserPress={(action) => props.onUserPress(action)}
        onPress={() => onShowMenu(!showMenu), console.log('onShowMenu', showMenu)}
        // style={styles.headerMenu}
      />

      {/* {props.showMenu &&
        <MyProfileMenu
          // onUserPress={(action) => props.onUserPress(action)}
          onPress={() => onShowMenu(!showMenu), console.warn("show menu status: ", showMenu)}
          style={styles.headerMenu} />
      } */}
      <MyProfileMenu onUserPress={(action) => props.onUserPress(action)} style={styles.headerMenu} />

      <View style={styles.image2Stack}>
        {/*TODO: add image picker for single image*/}
        <TouchableOpacity onPress={() => { changeProfilePic() }} >
          <Image
            source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
            resizeMode="stretch"
            style={styles.image2}
          >
          </Image>
          <MaterialButtonWithVioletText32
            onPress={() => { changeProfilePic() }}
            style={styles.materialButtonWithVioletText39}
          ></MaterialButtonWithVioletText32>
        </TouchableOpacity>
      </View>

      <Text style={styles.loremIpsum}></Text>
      <MyNameDetails style={styles.myNameDetails}></MyNameDetails>
      <DateBirthDetails style={styles.dateBirthDetails}></DateBirthDetails>
      <MyLocationDetails style={styles.myLocationDetails}></MyLocationDetails>
      <TitleDetails style={styles.titleDetails}></TitleDetails>
      <KashrutDetails style={styles.kashrutDetails}></KashrutDetails>
      <EmailDetails style={styles.emailDetails}></EmailDetails>
      <PhoneDetails style={styles.phoneDetails}></PhoneDetails>

      {/* Facebook btn */}
      <TouchableOpacity style={styles.button3}>
        <ContinueFacebookButton
          // onPress={() => props.facebookSignin}
          style={styles.continueFacebookButton}
        ></ContinueFacebookButton>
      </TouchableOpacity>
      {/* <MaterialButtonViolet15
        style={styles.materialButtonViolet15}
      ></MaterialButtonViolet15> */}
      {/* Google btn */}


      <TouchableOpacity
        onPress={props.googleSignin}
        style={styles.button2}>
        <ContinueGoogleButton
          onPress={props.googleSignin}
          style={styles.continueGoogleButton}
        ></ContinueGoogleButton>
      </TouchableOpacity>
      {/* <MaterialButtonViolet16
        onPress={props.googleSignin}
        style={styles.materialButtonViolet16}
      ></MaterialButtonViolet16> */}



      <MaterialButtonWithVioletText46
        tag="See my reviews"
        onPress={() => { props.onUserPress("reviews") }}
        style={styles.materialButtonWithVioletText46}
      ></MaterialButtonWithVioletText46>
      <MyStaysRating style={styles.myStaysRating}></MyStaysRating>
      <MyKosherRating style={styles.myKosherRating}></MyKosherRating>
    </View>

  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)",
    alignItems: "center",
  },
  headerMenu: {
    // position: "absolute",
    // top: -90,
    // right: 0,
  },
  image2Stack: {
    top: 120,
    // maxWidth: 100,
    // height: 350,
    position: "absolute"
  },
  image2: {
    width: 150,
    height: 150,
    // position: "absolute",
    borderRadius: 100
  },
  materialButtonWithVioletText39: {
    top: 120,
    // left: 0,
    // right: 0,
    // width: 100,
    // height: 36,
  },
  loremIpsum: {
    top: 280,
    left: 52,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 20
  },
  myNameDetails: {
    position: "absolute",
    top: "37.39%",
    left: 35,
    height: 36,
    right: 0
  },
  dateBirthDetails: {
    position: "absolute",
    top: "41.8%",
    left: 31,
    height: 36,
    right: 0
  },
  myLocationDetails: {
    position: "absolute",
    top: "46.41%",
    left: 37,
    height: 36,
    right: 0
  },
  kashrutDetails: {
    position: "absolute",
    top: "50.73%",
    left: 33,
    height: 36,
    right: 0
  },
  emailDetails: {
    position: "absolute",
    top: "55.2%",
    left: 31,
    height: 36,
    right: 0
  },
  phoneDetails: {
    position: "absolute",
    top: "60.13%",
    left: 31,
    height: 38,
    right: 0
  },
  titleDetails: {
    position: "absolute",
    top: "32.88%",
    left: 30,
    height: 36,
    right: 0
  },
  materialButtonViolet15: {
    top: "83.1%",
    left: 31,
    height: 45,
    position: "absolute",
    borderRadius: 10,
    right: 28
  },
  materialButtonViolet16: {
    top: "89.39%",
    left: 30,
    height: 45,
    position: "absolute",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    right: 28
  },
  materialButtonWithVioletText46: {
    top: "77.04%",
    top: 600,
    // height: 40,
    // height: 'auto',
    position: "absolute",
    right: 153,
    left: 28
  },
  myStaysRating: {
    position: "absolute",
    top: "64.84%",
    left: 29,
    height: 48,
    width: 159
  },
  myKosherRating: {
    position: "absolute",
    top: "71.25%",
    left: 30,
    height: 49,
    width: 159
  },
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36,
    position: "absolute",
    top: 46,
    right: 20
  },
  materialButtonViolet22: {
    height: 0,
    width: 0,
    position: "absolute",
    left: "0%",
    top: 5
  },
  materialButtonViolet25: {
    height: 0,
    width: "0%",
    position: "absolute",
    left: "0%",
    top: -5,
    borderWidth: 0,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1
  },
  materialButtonViolet26: {
    height: 50,
    width: "99.52%",
    position: "absolute",
    left: "52.3%",
    top: 0,
    borderWidth: 0,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1
  },
  materialButtonViolet27: {
    height: 0,
    width: "0%",
    position: "absolute",
    left: "0%",
    top: 5,
    borderWidth: 0,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1
  },
  materialButtonViolet30: {
    height: 50,
    width: 180,
    position: "absolute",
    left: "0.5%",
    top: 199
  },
  rect2: {
    top: 92,
    left: 207,
    width: 207,
    height: 350,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  group: {
    top: 93,
    width: 207,
    height: 344,
    position: "absolute",
    right: 0
  },
  button6: {
    top: 0,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText47: {
    top: 0,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText48: {
    top: 49,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText49: {
    top: 99,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText50: {
    top: 149,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText51: {
    top: 199,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText52: {
    top: 248,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText53: {
    top: 294,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  rect3: {
    top: 385,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect4: {
    top: 143,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect5: {
    top: 193,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect6: {
    top: 243,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect7: {
    top: 293,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect8: {
    top: 338,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonViolet25: {
    height: 0,
    width: 32,
    borderWidth: 0,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1,
    marginTop: -692
  },

  button3: {
    top: 680,
    width: 352,
    height: 62,
    position: "absolute"
  },
  continueFacebookButton: {
    width: 352,
    height: 62,
    paddingLeft: 16,
    paddingRight: 16,
    position: "absolute"
  },
  button2: {
    top: 755,
    width: 352,
    height: 62,
    position: "absolute"
  },
  continueGoogleButton: {
    top: 0,
    left: 0,
    width: 352,
    height: 62,
    paddingLeft: 16,
    paddingRight: 16,
    position: "absolute"
  },
});

export default MyProfile;
