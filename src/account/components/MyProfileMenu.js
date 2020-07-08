import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import MaterialButtonWithVioletText21 from "../components/MaterialButtonWithVioletText21";
import MaterialButtonWithVioletText22 from "../components/MaterialButtonWithVioletText22";
import MaterialButtonWithVioletText23 from "../components/MaterialButtonWithVioletText23";
import MaterialButtonWithVioletText24 from "../components/MaterialButtonWithVioletText24";
import MaterialButtonWithVioletText25 from "../components/MaterialButtonWithVioletText25";
import MaterialButtonWithVioletText26 from "../components/MaterialButtonWithVioletText26";
import MaterialButtonWithVioletText28 from "../components/MaterialButtonWithVioletText28";

const MyProfileMenu = function MyProfileMenu(props) {
    return (
        <View style={styles.container}>
            <View style={styles.rect2}>
                <View style={styles.groupFiller}></View>
                <View style={styles.group}>
                    <View style={styles.button6Stack}>
                        <TouchableOpacity
                            style={styles.button6}
                        >
                            <View
                                style={styles.materialButtonWithVioletText47Filler}
                            ></View>

                            <MaterialButtonWithVioletText21
                                onPress={() => props.onUserPress("myStaysList")}
                                caption="My Stays"
                                style={styles.materialButtonWithVioletText47}
                            ></MaterialButtonWithVioletText21>
                        </TouchableOpacity>
                        <MaterialButtonWithVioletText22
                            onPress={() => props.onUserPress("newRequest")}
                            tag="Booking Requests"
                            style={styles.materialButtonWithVioletText48}
                        ></MaterialButtonWithVioletText22>
                        <View style={styles.rect4}></View>
                    </View>
                    <View style={styles.materialButtonWithVioletText49Stack}>
                        <MaterialButtonWithVioletText23
                            tag="Kashrut"
                            onPress={() => { props.onUserPress("editMyKashrut") }}
                            style={styles.materialButtonWithVioletText49}
                        ></MaterialButtonWithVioletText23>
                        <View style={styles.rect5}></View>
                    </View>
                    <View style={styles.materialButtonWithVioletText50Stack}>
                        <MaterialButtonWithVioletText24
                            tag="Payment Details"
                            onPress={() => { props.onUserPress("guestCardInfo"); }}
                            style={styles.materialButtonWithVioletText50}
                        ></MaterialButtonWithVioletText24>
                        <View style={styles.rect6}></View>
                    </View>

                    <View style={styles.materialButtonWithVioletText51Stack}>
                        <TouchableOpacity onPress={() => { props.onUserPress("editeProfile") }}>
                            <MaterialButtonWithVioletText25
                                tag="Edit Profile"
                                onPress={() => { props.onUserPress("editeProfile") }}
                                style={styles.materialButtonWithVioletText51}
                            ></MaterialButtonWithVioletText25>
                        </TouchableOpacity>
                        <MaterialButtonWithVioletText26
                            onPress={() => { props.onDeleteAccount() }}
                            tag="Delete Account"
                            style={styles.materialButtonWithVioletText52}
                        ></MaterialButtonWithVioletText26>
                        <MaterialButtonWithVioletText28
                            onPress={() => props.onLogout()}
                            tag="logout"
                            style={styles.materialButtonWithVioletText53}
                        ></MaterialButtonWithVioletText28>
                        <View style={styles.rect3}></View>
                        <View style={styles.rect7}></View>
                        <View style={styles.rect8}></View>
                    </View>

                </View>
            </View>

        </View>
        )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(2,172,235,1)",
    },
    rect1: {
        top: 0,
        left: 0,
        width: 414,
        height: 91,
        position: "absolute",
        borderColor: "rgba(0,88,155,1)",
        borderWidth: 0,
        borderBottomWidth: 4
    },
    materialButtonViolet22: {
        height: 0,
        width: 0,
        position: "absolute",
        left: 0,
        top: 0
    },
    materialButtonViolet27: {
        height: 0,
        width: 32,
        position: "absolute",
        left: 0,
        top: 0,
        borderWidth: 0,
        borderColor: "rgba(2,172,235,1)",
        borderBottomWidth: 1
    },
    materialButtonViolet22Stack: {
        width: 32,
        height: 1,
        marginTop: 5
    },
    bsD1: {
        color: "rgba(177,177,177,1)",
        opacity: 0.35,
        fontSize: 10,
        fontFamily: "roboto-regular",
        alignSelf: "flex-end",
        marginTop: 7,
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
    text: {
        color: "rgba(0,88,155,1)",
        fontSize: 25,
        fontFamily: "roboto-regular",
        textAlign: "center",
        marginLeft: 115,
        marginTop: 8
    },
    button4Row: {
        height: 40,
        flexDirection: "row"
    },
    button4RowFiller: {
        flex: 1,
        flexDirection: "row"
    },
    materialButtonTransparentHamburger: {
        height: 36,
        width: 36,
        marginTop: 6
    },
    button4RowRow: {
        height: 42,
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 6,
        marginRight: 20
    },
    materialButtonViolet26: {
        height: 50,
        width: 412,
        position: "absolute",
        left: 217,
        top: 0,
        borderWidth: 0,
        borderColor: "rgba(2,172,235,1)",
        borderBottomWidth: 1
    },
    rect1Stack: {
        width: 629,
        height: 91,
        zIndex: 40
    },
    image2: {
        top: 29,
        width: 150,
        height: 150,
        position: "absolute",
        borderRadius: 100,
        left: 130,
        overflow: "hidden"
    },
    image2_imageStyle: {},
    materialButtonWithVioletText39: {
        width: 100,
        height: 36,
        marginTop: 114,
        marginLeft: 25
    },
    materialButtonViolet30: {
        height: 50,
        width: 180,
        position: "absolute",
        left: 0,
        top: 107
    },
    rect2: {
        top: 0,
        left: 205,
        width: 207,
        height: 350,
        backgroundColor: "rgba(0,88,155,1)",
        position: "absolute",
        flexDirection: "row",
        zIndex: 20

    },
    groupFiller: {
        flex: 1,
        flexDirection: "row"
    },
    group: {
        width: 207,
        height: 344,
        alignItems: "flex-end",
        marginTop: 1
    },
    button6: {
        top: 0,
        width: 207,
        height: 50,
        position: "absolute",
        right: 0,
        flexDirection: "row"
    },
    materialButtonWithVioletText47Filler: {
        flex: 1,
        flexDirection: "row"
    },
    materialButtonWithVioletText47: {
        width: 207,
        height: 50
    },
    materialButtonWithVioletText48: {
        top: 49,
        width: 207,
        height: 50,
        position: "absolute",
        right: 0
    },
    rect4: {
        top: 50,
        width: 174,
        height: 1,
        backgroundColor: "rgba(2,172,235,1)",
        position: "absolute",
        right: 20
    },
    button6Stack: {
        width: 207,
        height: 99
    },
    materialButtonWithVioletText49: {
        top: 0,
        width: 207,
        height: 50,
        position: "absolute",
        right: 0
    },
    rect5: {
        top: 1,
        width: 174,
        height: 1,
        backgroundColor: "rgba(2,172,235,1)",
        position: "absolute",
        right: 20
    },
    materialButtonWithVioletText49Stack: {
        width: 207,
        height: 50
    },
    materialButtonWithVioletText50: {
        top: 0,
        width: 207,
        height: 50,
        position: "absolute",
        right: 0
    },
    rect6: {
        top: 1,
        width: 174,
        height: 1,
        backgroundColor: "rgba(2,172,235,1)",
        position: "absolute",
        right: 20
    },
    materialButtonWithVioletText50Stack: {
        width: 207,
        height: 50
    },
    materialButtonWithVioletText51: {
        top: 0,
        width: 207,
        height: 50,
        position: "absolute",
        right: 0
    },
    materialButtonWithVioletText52: {
        top: 49,
        width: 207,
        height: 50,
        position: "absolute",
        right: 0,
        zIndex: 20
    },
    materialButtonWithVioletText53: {
        top: 95,
        width: 207,
        height: 50,
        position: "absolute",
        right: 0,
        zIndex: 20

    },
    rect3: {
        top: 93,
        width: 174,
        height: 1,
        backgroundColor: "rgba(2,172,235,1)",
        position: "absolute",
        right: 20
    },
    rect7: {
        top: 1,
        width: 174,
        height: 1,
        backgroundColor: "rgba(2,172,235,1)",
        position: "absolute",
        right: 20
    },
    rect8: {
        top: 46,
        width: 174,
        height: 1,
        backgroundColor: "rgba(2,172,235,1)",
        position: "absolute",
        right: 20
    },
    materialButtonWithVioletText51Stack: {
        width: 207,
        height: 145
    },
    image2Stack: {
        top: 0,
        left: 0,
        width: 412,
        height: 350,
        position: "absolute"
    },
    loremIpsum: {
        top: 188,
        left: 50,
        color: "rgba(230,230,230,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-regular",
        lineHeight: 20
    },
    myNameDetails: {
        position: "absolute",
        top: 243,
        left: 33,
        height: 36,
        right: 0,
        zIndex: 0
    },
    dateBirthDetails: {
        position: "absolute",
        top: 283,
        left: 29,
        height: 36,
        right: 0,
        zIndex: 0

    },
    myLocationDetails: {
        position: "absolute",
        top: 324,
        left: 35,
        height: 36,
        right: 0,
        zIndex: 0

    },
    titleDetails: {
        position: "absolute",
        top: 203,
        left: 28,
        height: 36,
        right: 0,
        zIndex: 0

    },
    image2StackStack: {
        height: 360,
        marginTop: 1,
        marginLeft: 2
    },
    kashrutDetails: {
        height: 36,
        marginTop: 3,
        marginLeft: 33,
        zIndex: 0

    },
    emailDetails: {
        height: 36,
        marginTop: 4,
        marginLeft: 31,

    },
    phoneDetails: {
        height: 38,
        marginTop: 8,
        marginLeft: 31,
        zIndex: 0

    },
    materialButtonViolet15: {
        height: 45,
        borderRadius: 10,
        marginTop: 168,
        marginLeft: 31,
        marginRight: 28
    },
    materialButtonViolet16: {
        height: 45,
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 0,
        marginTop: 11,
        marginLeft: 30,
        marginRight: 28
    },
    materialButtonWithVioletText46: {
        height: 30,
        marginTop: -156,
        marginLeft: 14,
        marginRight: 153
    },
    myStaysRating: {
        height: 48,
        width: 159,
        marginTop: -139,
        marginLeft: 29
    },
    myKosherRating: {
        height: 49,
        width: 159,
        marginTop: 9,
        marginLeft: 30
    },
    materialButtonViolet25: {
        height: 0,
        width: 32,
        borderWidth: 0,
        borderColor: "rgba(2,172,235,1)",
        borderBottomWidth: 1,
        marginTop: -692
    }
});
export default MyProfileMenu;
