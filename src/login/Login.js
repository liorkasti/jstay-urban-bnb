import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import MaterialButtonWithVioletText from "../components/MaterialButtonWithVioletText";
import MaterialIconTextbox4 from "../components/MaterialIconTextbox4";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import Icon from "react-native-vector-icons/Feather";
import MaterialButtonWithVioletText15 from "../components/MaterialButtonWithVioletText15";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialButtonLight from "../components/MaterialButtonLight";
import MaterialButtonWithVioletText12 from "../components/MaterialButtonWithVioletText12";

import MaterialButtonWithVioletText1 from "../components/MaterialButtonWithVioletText1";
import Svg, { Path } from "react-native-svg";
import MaterialButtonWithVioletText2 from "../components/MaterialButtonWithVioletText2";
import MaterialButtonWithVioletText3 from "../components/MaterialButtonWithVioletText3";
import MaterialButtonViolet from "../components/MaterialButtonViolet";



export default function Login(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => { console.log("show login", showLogin) }, [showLogin])

  async function onGoogleButtonPress() {
    console.warn("on google button press", onGoogleButtonPress)
    // Get the users ID token
    let idToken = "";
    GoogleSignin.signIn().then((res) => {
      console.warn(res, res.idToken)
      return res.idToken;
    }).then((idToken) => {



      console.warn("this is the id token", idToken)
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.warn("google credential", googleCredential)
      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential).then((res) => { console.error(res) });
    }
    ).catch((err) => { console.warn("error from google signin".err) })
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1052652425814-4a76tojt3tc8a92hc245qr6c3jvgcr7j.apps.googleusercontent.com',
    });

  }, [])

  return (
    <View style={{ flex: 1 }}>
      {
        showLogin ?
          //Login View:
          <View>
            <View style={loginStyles.materialButtonWithVioletTextColumn}>
              <MaterialButtonWithVioletText
                style={loginStyles.materialButtonWithVioletText}
              ></MaterialButtonWithVioletText>
              <View style={loginStyles.materialIconTextbox4Stack}>
                <MaterialIconTextbox4
                  placeholder="email"
                  placeholderTextColor="rgba(177,177,177,1)"
                  selectionColor="rgba(155,155,155,1)"
                  inlineImagePadding={0}
                  style={loginStyles.materialIconTextbox4}
                ></MaterialIconTextbox4>
                <Text style={loginStyles.loremIpsum2}></Text>
              </View>
              <Text style={loginStyles.bsD1}>BS&quot;D</Text>
              <View style={loginStyles.myDetails1Stack}>
                <Text style={loginStyles.myDetails1}>
                  Please enter your log in information
          </Text>
                <Image
                  source={require("../assets/images/JStay-Logo-blue-shin7.png")}
                  resizeMode="contain"
                  style={loginStyles.image1}
                ></Image>
              </View>
            </View>
            <View style={loginStyles.materialButtonWithVioletTextColumnFiller}></View>
            <View style={loginStyles.groupStackStackColumn}>
              <View style={loginStyles.groupStackStack}>
                <View style={loginStyles.groupStack}>
                  <View style={loginStyles.group}></View>
                  <View style={loginStyles.group3}>
                    <View style={loginStyles.materialRightIconTextbox1Stack}>
                      <MaterialRightIconTextbox1
                        placeholder="password"
                        placeholderTextColor="rgba(177,177,177,1)"
                        secureTextEntry={true}
                        selectionColor="rgba(177,177,177,1)"
                        style={styles.materialRightIconTextbox1}
                      ></MaterialRightIconTextbox1>
                      <TouchableOpacity style={styles.button}></TouchableOpacity>
                    </View>
                  </View>
                  <Icon name="lock" style={loginStyles.icon}></Icon>
                </View>
                <View style={loginStyles.group2Stack}>
                  <View style={loginStyles.group2}></View>
                  <MaterialButtonWithVioletText15
                    style={loginStyles.materialButtonWithVioletText15}
                  ></MaterialButtonWithVioletText15>
                </View>
                <MaterialCheckboxWithLabel
                  text1=""
                  style={loginStyles.materialCheckboxWithLabel}
                ></MaterialCheckboxWithLabel>
              </View>
              <MaterialButtonLight
                style={loginStyles.materialButtonLight}
              ></MaterialButtonLight>
              <MaterialButtonWithVioletText12
                style={loginStyles.materialButtonWithVioletText12}
              ></MaterialButtonWithVioletText12>
            </View>
            <StatusBar></StatusBar>
          </View>

          :
          //WelcomePage View:
          <View style={{ flex: 1 }}>
            <View style={styles.materialButtonWithVioletText12Column}>
              <MaterialButtonWithVioletText1
                text1="Continue with Google"
                style={styles.materialButtonWithVioletText12}
              ></MaterialButtonWithVioletText1>
              <View style={styles.pathRow}>
                <Svg viewBox="0 0 44 63.01159786070548" style={styles.path}>
                  <Path
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    d="M0.00 0.01 C0.00 1.01 44.00 63.01 44.00 63.01 C44.00 63.01 0.00 -0.99 0.00 0.01 Z"
                  ></Path>
                </Svg>
                <Image
                  source={require("../assets/images/JStay-Logo-blue-shin6.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
              </View>
              <TouchableOpacity style={styles.button}>
                <View style={styles.materialButtonWithVioletText2Filler}></View>
                <MaterialButtonWithVioletText2
                  onPress={() => { setShowLogin(true); }}
                  text1="Log In"
                  style={styles.materialButtonWithVioletText2}
                ></MaterialButtonWithVioletText2>
              </TouchableOpacity>
              <MaterialButtonWithVioletText3
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                text1="Continue with Google"
                style={styles.materialButtonWithVioletText32}
              ></MaterialButtonWithVioletText3>
              <MaterialButtonWithVioletText3
                onPress={() => props.createAccount()}
                text1="Create an Account"
                style={styles.materialButtonWithVioletText32}
              ></MaterialButtonWithVioletText3>
              <MaterialButtonViolet
                style={styles.materialButtonViolet}
              ></MaterialButtonViolet>
              <Text style={styles.bsD}>BS&quot;D</Text>
            </View>
            <View style={styles.materialButtonWithVioletText12ColumnFiller}></View>
            <Text style={styles.text}>
              By tapping &#39;Continue with Facebook&#39;, &#39;Continue with
              Google&#39; or &#39;Create an Account&#39; you agree to Jstays&#39;
              Terms of Service, Payments Terms of Service, Privacy Policy and
              Non-Discrimination Policy.
          </Text>
          </View>
      }
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialButtonWithVioletText12: {
    width: 352,
    height: 62,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    marginTop: 412,
    marginLeft: 152
  },
  path: {
    width: 29,
    height: 42,
    marginTop: 14
  },
  image2: {
    height: 150,
    flex: 1,
    marginLeft: 92
  },
  pathRow: {
    height: 150,
    flexDirection: "row",
    marginTop: -350,
    marginRight: 14
  },
  button: {
    width: 108,
    height: 48,
    flexDirection: "row",
    marginTop: -247,
    marginLeft: 441
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonWithVioletText2: {
    width: 108,
    height: 48
  },
  materialButtonWithVioletText32: {
    width: 187,
    height: 31,
    marginTop: 431,
    marginLeft: 236
  },
  materialButtonViolet: {
    width: 352,
    height: 62,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: -200,
    marginLeft: 152
  },
  bsD: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: -399,
    marginRight: 52
  },
  materialButtonWithVioletText12Column: {
    marginTop: 13,
    marginLeft: -121,
    marginRight: -14
  },
  materialButtonWithVioletText12ColumnFiller: {
    flex: 1
  },
  text: {
    width: 304,
    height: 60,
    color: "rgba(168,219,243,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginBottom: 54,
    marginLeft: 35
  }
});

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)"
  },
  materialButtonWithVioletText: {
    width: 100,
    height: 36,
    marginTop: 27,
    marginLeft: 10
  },
  materialIconTextbox4: {
    left: 0,
    height: 43,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  loremIpsum2: {
    top: 10,
    left: 9,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  materialIconTextbox4Stack: {
    height: 43,
    marginTop: 272,
    marginLeft: 21,
    marginRight: 34
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: -378,
    marginRight: 38
  },
  myDetails1: {
    left: 48,
    width: 322,
    height: 20,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    bottom: 0,
    fontSize: 20,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  image1: {
    top: 0,
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  myDetails1Stack: {
    height: 168,
    marginTop: 114
  },
  materialButtonWithVioletTextColumn: {
    marginTop: 14
  },
  materialButtonWithVioletTextColumnFiller: {
    flex: 1
  },
  group: {
    top: 0,
    left: 1,
    height: 27,
    position: "absolute",
    right: 1
  },
  group3: {
    left: 40,
    height: 43,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  materialRightIconTextbox1: {
    top: 0,
    left: 0,
    height: 43,
    position: "absolute",
    right: 0
  },
  button: {
    top: 0,
    left: 271,
    width: 40,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  materialRightIconTextbox1Stack: {
    height: 43
  },
  icon: {
    position: "absolute",
    color: "rgba(177,177,177,1)",
    fontSize: 22,
    left: 0,
    bottom: 11
  },
  groupStack: {
    left: 0,
    height: 51,
    position: "absolute",
    bottom: 81,
    right: 0
  },
  group2: {
    top: 0,
    left: 0,
    height: 28,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText15: {
    left: 21,
    width: 108,
    height: 36,
    position: "absolute",
    bottom: 0,
    opacity: 0.46
  },
  group2Stack: {
    top: 42,
    left: 2,
    height: 52,
    position: "absolute",
    right: 1
  },
  materialCheckboxWithLabel: {
    left: 27,
    width: 139,
    height: 40,
    position: "absolute",
    bottom: 0
  },
  groupStackStack: {
    height: 132,
    marginBottom: 216,
    marginRight: 5
  },
  materialButtonLight: {
    width: 353,
    height: 62,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 10,
    marginBottom: 13,
    marginLeft: 3
  },
  materialButtonWithVioletText12: {
    width: 116,
    height: 36,
    opacity: 0.46,
    marginLeft: 122
  },
  groupStackStackColumn: {
    marginBottom: 40,
    marginLeft: 29,
    marginRight: 29
  }
});
