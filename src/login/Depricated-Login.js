import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";
import MaterialButtonWithVioletText from "../components/MaterialButtonWithVioletText";
import MaterialButtonWithVioletText2 from "../components/MaterialButtonWithVioletText2";
import MaterialButtonWithVioletText3 from "../components/MaterialButtonWithVioletText3";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";

export default function Untitled(props) {
    const [showLogin, setShowLogin] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => { console.warn("show login", showLogin) }, [showLogin])


    return (
        <View style={{ flex: 1 }}>
            {
                showLogin ?
                    <View style={loginStyles.container} >
                        <View style={loginStyles.group}>
                            <View style={loginStyles.iconRow}>
                                <FeatherIcon name="mail" style={loginStyles.icon}></FeatherIcon>
                                <TextInput
                                    placeholder="email"
                                    placeholderTextColor="rgba(177,177,177,1)"
                                    selectionColor="rgba(155,155,155,1)"
                                    inlineImagePadding={0}
                                    style={loginStyles.textInput}
                                ></TextInput>
                            </View>
                        </View>
                        <Text style={loginStyles.loremIpsum}>
                            Please Enter Your Login Information:
                        </Text>
                        <View style={loginStyles.group2}>
                            <View style={loginStyles.icon2Row}>
                                <IoniconsIcon name="ios-lock" style={loginStyles.icon2}></IoniconsIcon>
                                <TextInput
                                    placeholder="password"
                                    placeholderTextColor="rgba(177,177,177,1)"
                                    secureTextEntry={true}
                                    selectionColor="rgba(177,177,177,1)"
                                    style={loginStyles.textInput3}
                                ></TextInput>
                            </View>
                        </View>
                        <View style={loginStyles.imageStack}>
                            <Image
                                source={require("./images/JStay_Logo.png")}
                                resizeMode="contain"
                                style={loginStyles.image}
                            ></Image>
                            <MaterialButtonWithVioletText
                                onPress={() => setShowLogin(false)}
                                text="Back"
                                style={loginStyles.materialButtonWithVioletText}
                            ></MaterialButtonWithVioletText>
                        </View>
                        <MaterialButtonWithVioletText3
                            onPress={props.loggedIn}
                            text1="Log In"
                            style={loginStyles.materialButtonLight}
                        ></MaterialButtonWithVioletText3>
                        <MaterialCheckboxWithLabel
                            onPress={() => { setChecked(!checked) }}
                            text1=""
                            checked={checked}
                            style={loginStyles.materialCheckboxWithLabel}
                        ></MaterialCheckboxWithLabel>
                    </View >
                    :
                    <View style={styles.container}>
                        <View style={styles.pathRowColumn}>
                            <View style={styles.pathRow}>
                                <Svg viewBox="0 0 44 63.01159786070548" style={styles.path}>
                                    <Path
                                        strokeWidth={1}
                                        fill="rgba(230, 230, 230,1)"
                                        stroke="rgba(230, 230, 230,1)"
                                        d="M0.00 0.01 C0.00 1.01 44.00 63.01 44.00 63.01 C44.00 63.01 0.00 -0.99 0.00 0.01 Z"
                                    ></Path>
                                </Svg>
                                <View style={styles.imageStack}>
                                    <Image
                                        source={require("./images/Jstay_081119_2-01.png")}
                                        resizeMode="contain"
                                        style={styles.image}
                                    ></Image>
                                    <MaterialButtonWithVioletText3
                                        text1="Continue with Facebook"
                                        style={styles.materialButtonWithVioletText34}
                                    ></MaterialButtonWithVioletText3>
                                    <MaterialButtonWithVioletText2
                                        onPress={() => { setShowLogin(true); }}
                                        text1="Log In"
                                        style={styles.materialButtonWithVioletText2}
                                    ></MaterialButtonWithVioletText2>
                                </View>
                            </View>
                            <MaterialButtonWithVioletText3
                                text1="Continue with Google"
                                style={styles.materialButtonWithVioletText12}
                            ></MaterialButtonWithVioletText3>
                            <MaterialButtonWithVioletText3
                                onPress={() => props.createAccount()}
                                text1="Create an Account"
                                style={styles.materialButtonWithVioletText32}
                            ></MaterialButtonWithVioletText3>
                        </View>
                        <View style={styles.pathRowColumnFiller}></View>
                        <Text style={styles.text}>
                            By tapping &#39;Continue with Facebook&#39;, &#39;Continue with
                            Google&#39; or &#39;Create an Account&#39; you agree to Jstays&#39;
                            Terms of Service, Payments Terms of Service, Privacy Policy and
                            Non-Discrimination Policy.
      </Text>
                    </View >

            }
        </View >
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,88,155,1)"
    },
    group: {
        height: 27,
        flexDirection: "row",
        marginTop: 360,
        marginLeft: 30,
        marginRight: 35
    },
    icon: {
        color: "rgba(177,177,177,1)",
        fontSize: 20,
        marginTop: 4
    },
    textInput: {
        width: 286,
        height: 27,
        backgroundColor: "rgba(230,230,230,0)",
        color: "#121212",
        borderColor: "rgba(2,172,235,1)",
        borderWidth: 0,
        borderBottomWidth: 1,
        textAlign: "left",
        marginLeft: 4
    },
    iconRow: {
        height: 27,
        flexDirection: "row",
        flex: 1
    },
    loremIpsum: {
        width: 283,
        height: 19,
        color: "rgba(2,172,235,1)",
        textAlign: "center",
        marginTop: -89,
        marginLeft: 46
    },
    group2: {
        height: 28,
        flexDirection: "row",
        marginTop: 81,
        marginLeft: 31,
        marginRight: 34
    },
    icon2: {
        color: "rgba(177,177,177,1)",
        fontSize: 28
    },
    textInput3: {
        width: 287,
        height: 23,
        color: "#121212",
        borderColor: "rgba(2,172,235,1)",
        borderWidth: 0,
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 5
    },
    icon2Row: {
        height: 28,
        flexDirection: "row",
        flex: 1,
        marginRight: -1
    },
    image: {
        top: 13,
        left: 71,
        height: 200,
        width: "auto",
        position: "absolute",
        right: 0
    },
    materialButtonWithVioletText: {
        top: 0,
        left: 0,
        width: 100,
        height: 36,
        position: "absolute"
    },
    imageStack: {
        height: 213,
        marginTop: -366,
        marginLeft: 15,
        marginRight: 89
    },
    materialButtonLight: {
        width: 299,
        height: 36,
        backgroundColor: "rgba(230,230,230,1)",
        borderRadius: 10,
        marginTop: 220,
        alignSelf: "center"
    },
    materialCheckboxWithLabel: {
        width: 139,
        height: 40,
        marginTop: -91,
        marginLeft: 19
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,88,155,1)"
    },
    path: {
        width: 29,
        height: 42,
        marginTop: 93
    },
    image: {
        top: 11,
        left: 0,
        height: 315,
        width: "auto",
        position: "absolute",
        right: 83
    },
    materialButtonWithVioletText34: {
        top: 286,
        left: 24,
        height: 52,
        backgroundColor: "rgba(230, 230, 230,1)",
        position: "absolute",
        right: 83,
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 0
    },
    materialButtonWithVioletText2: {
        top: 0,
        width: 108,
        height: 48,
        position: "absolute",
        right: 0
    },
    imageStack: {
        height: 338,
        flex: 1,
        marginLeft: 146
    },
    pathRow: {
        height: 338,
        flexDirection: "row"
    },
    materialButtonWithVioletText12: {
        height: 52,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 10,
        marginTop: 12,
        marginLeft: 199,
        marginRight: 83
    },
    materialButtonWithVioletText32: {
        height: 41,
        marginTop: 11,
        marginLeft: 224,
        marginRight: 109
    },
    pathRowColumn: {
        marginTop: 58,
        marginLeft: -121,
        marginRight: -18
    },
    pathRowColumnFiller: {
        flex: 1
    },
    text: {
        color: "rgba(168,219,243,1)",
        fontSize: 12,
        textAlign: "left",
        marginBottom: 54,
        marginLeft: 32,
        marginRight: 73
    }
});


