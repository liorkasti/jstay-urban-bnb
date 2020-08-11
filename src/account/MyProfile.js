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
import AccountDetails from "./components/AccountDetails";
import KashrutDetails from "./components/KashrutDetails";
import EmailDetails from "./components/EmailDetails";
import PhoneDetails from "./components/PhoneDetails";
import MaterialButtonWithVioletText46 from "../components/MaterialButtonWithVioletText46";
import MyStaysRating from "./components/MyStaysRating";
import MyKosherRating from "./components/MyKosherRating";
import ContinueFacebookButton from "./components/ContinueFacebookButton";
import ContinueGoogleButton from "./components/ContinueGoogleButton";
import MyProfileHeader from "./components/MyProfileHeader";


function MyProfile(props) {
  // console.warn("MyProfile : ", {props})
  const [showMenu, setShowMenu] = useState(false);

  const changeProfilePic = () => {
    console.warn("add change profile pic behavior")
  }

  // useEffect(() => { console.warn("show menu status: ", showMenu) }, showMenu)

  return (
    <View style={styles.container}>

      {props.showMenu &&
        <MyProfileMenu
        totalStays={props.totalStays}
          // onUserPress={(action) => props.onUserPress(action)}
          handleMenu={(menuItem) => {console.warn("what"); props.handleMenu(menuItem);  }}
          style={styles.headerMenu} />
      }
      {/* <MyProfileMenu onUserPress={(action) => props.onUserPress(action)} style={styles.headerMenu} /> */}

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

      <View style={styles.accountDetailsStack}>
        <Text style={styles.loremIpsum}></Text>
        <AccountDetails style={styles.myNameDetails}></AccountDetails>
        <KashrutDetails style={styles.kashrutDetails}></KashrutDetails>
        <EmailDetails style={styles.emailDetails}></EmailDetails>
        <PhoneDetails style={styles.phoneDetails}></PhoneDetails>
        <MaterialButtonWithVioletText46
          tag="See my reviews"
          onPress={() => { props.onUserPress("reviews") }}
          style={styles.materialButtonWithVioletText46}
        ></MaterialButtonWithVioletText46>
        <MyStaysRating style={styles.myStaysRating}></MyStaysRating>
        <MyKosherRating style={styles.myKosherRating}></MyKosherRating>
      </View>

      <View style={styles.buttonStack}>
        {/* Facebook btn */}
        <TouchableOpacity style={styles.button3}>
          <ContinueFacebookButton
            // onPress={() => props.facebookSignin}
            style={styles.continueFacebookButton}
          ></ContinueFacebookButton>
        </TouchableOpacity>
        {/* Google btn */}
        <TouchableOpacity
          onPress={props.googleSignin}
          style={styles.button2}>
          <ContinueGoogleButton
            onPress={props.googleSignin}
            style={styles.continueGoogleButton}
          ></ContinueGoogleButton>
        </TouchableOpacity>
      </View>
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
    // width: '100%',
    width: windowWidth,
    // height: windowHeight+120,
    height: windowHeight * 1.15,
    height: 850,
  },
  headerMenu: {
    position: "absolute",
    // zIndex: 3000,
    // top: 20,
    right: 0,
    // alignItems: "center",
  },
  image2Stack: {
    // top: 120,
    top: 40,
    // position: "absolute"
  },
  image2: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  materialButtonWithVioletText39: {
    top: -30,
    alignItems: "center",
  },
  accountDetailsStack: {
    position: "absolute",
    top: 230,
    // left: 28,
    left: '8%',
    zIndex: 1,
  },
  loremIpsum: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
  },
  myNameDetails: {
    position: "absolute",
    top: 0,
    height: 36,
  },
  myLocationDetails: {
    position: "absolute",
    top: "46.41%",
    left: 37,
    height: 36,
    right: 0
  },
  kashrutDetails: {
    top: 160,
    left: 0,
    position: "absolute",
    height: 26,
    height: 36,
    right: 0
  },
  emailDetails: {
    position: "absolute",
    top: 200,
    left: 31,
    left: 0,
    height: 36,
    right: 0
  },
  phoneDetails: {
    position: "absolute",
    top: 250,
    left: 0,
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
  materialButtonWithVioletText46: {
    top: 405,
    position: "absolute",
  },
  myStaysRating: {
    position: "absolute",
    top: 290,
    left: 0,
    height: 48,
    width: 159
  },
  myKosherRating: {
    position: "absolute",
    top: 350,
    left: 0,
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

  buttonStack: {
    top: 690,
    bottom: '5%',
    // bottom: 300,
    // marginTop: '20%',
    position: "absolute",
    alignItems: "center",
  },

  button3: {
    top: 0,
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
    top: 55,
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
