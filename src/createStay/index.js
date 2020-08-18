import React, { useState, useEffect } from "react";
import {
    View, StyleSheet, Dimensions, Image,
    TouchableOpacity, Text, ScrollView, SafeAreaView, Constants
} from "react-native"
import { useHistory } from "react-router-dom";

import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database";

import EntypoIcon from "react-native-vector-icons/Entypo";
import HeaderBarLight from "./components/HeaderBarLight";

//import all builder x files related to this directory
import Accessibility from "./screens/Accessibility";
import Address from "./screens/Address";
import Amenities from "./screens/Amenities"
import ApartmentPinDrop from "./screens/ApartmentPinDrop";
import ChargesAndDeposites from "./screens/ChargesAndDeposites";
import CheckinInfo from "./screens/CheckinInfo";
import DescribeStay from "./screens/DescribeStay";
import HostBankInfo from "./screens/HostBankInfo";
import Nearby from "./screens/Nearby";
import Policies from "./screens/Policies";
import Pricing from "./screens/Pricing";
import StayCalender from "./screens/StayCalender";
import StayPictures from "./screens/StayPictures";
import StayLayout from "./screens/StayLayout";
import StayRules from "./screens/StayRules";

const components = {
    Accessibility,
    Address,
    Amenities,
    ApartmentPinDrop,
    ChargesAndDeposites,
    CheckinInfo,
    DescribeStay,
    HostBankInfo,
    Nearby,
    Policies,
    Pricing,
    StayCalender,
    StayLayout,
    StayPictures,
    StayRules,
};
const currentUser = auth().currentUser;
let createdAt = "";
let stayUID = "";

export default function Index(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    const [totalAnswers, setTotalAnswers] = useState([]);
    const [currentStayIndex, setCurrentStayIndex] = useState();

    //this send user to route if they want to create a stay
    let history = useHistory();
    stayUID = `${currentUser.uid}+${createdAt}`;

    //add the import as a string to this array
    //the array should be in the order that the screens show up
    // 
    useEffect(() => {
        createdAt = new Date().getTime();
        setTimeout(() => {
            database()
                .ref(`/users/generalInfo/${currentUser.uid}`)
                .once('value')
                .then(snapshot => {
                    const response = snapshot.val();
                    console.warn("total stays", response.myStays)
                    if (response.myStays) {
                        setCurrentStayIndex(response.myStays.length);
                    } else {
                        setCurrentStayIndex(0);
                    }
                    updateUserStayList(response);
                });
        }, 200)
    }, [])

    const updateUserStayList = (userFireData) => {
        const myStays = userFireData.myStays ? [...userFireData.myStays, stayUID] : [stayUID];
        database()
            .ref(`/users/generalInfo/${currentUser.uid}`)
            .update({ myStays })
            .then((res) => {
                console.warn("this is the response for update", myStays)
            })
    };

    const componentKeys = [
        "DescribeStay",
        "Address",
        "ApartmentPinDrop",
        "StayLayout",
        "StayPictures",
        "Amenities",
        "Nearby",
        "StayRules",
        "Accessibility",
        "ChargesAndDeposites",
        "Pricing",
        "HostBankInfo",
        "CheckinInfo",
        "Policies",
        "StayCalender"
    ];

    const headers = {
        DescribeStay: "Describe Your Stay",
        Address: "Address",
        ApartmentPinDrop: "Location",
        StayLayout: "Layouts",
        StayPictures: "Pictures",
        Amenities: "Amenties",
        Nearby: "Nearby",
        StayRules: "Stay Rules",
        Accessibility: "Accessibility",
        ChargesAndDeposites: "Charges & Deposites",
        Pricing: "Pricing",
        HostBankInfo: "Payments",
        CheckinInfo: "Check-In",
        MobileVerification: "Verification",
        Policies: "Policies",
        StayCalender: "Calender"
    }

    //user finished create a stay
    function onHome() {
        history.push("/home");
    };

    useEffect(() => {
        // console.warn("windowWidth: " + windowWidth)
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/account", { subroute: "stayProfile", backHistory: "Home" })
        }

        if (componentIndex < 0) {
            onHome();
        }

    }, [componentIndex]);

    const updateUserInput = (value, key) => {
        database()
            .ref(`stays/${stayUID}`)
            .update({ [key]: value })
            .then((res) => {
                console.warn("this is the response for update", res)
            })
    };

    const CurrentComponentRouter = (props) => {
        const CurrentComponent = components[componentKeys[componentIndex]];
        console.warn("current component", CurrentComponent)
        if (!CurrentComponent) return <View />
        return (
            <CurrentComponent
                stayUID={stayUID}

                style={styles.componentStyle}
                //if builder x component has next button
                //it's button should have onPress={()=>{props.onNext}}
                onNext={() => {
                    setComponentIndex(componentIndex + 1)
                }}

                //if builder x component has back button
                //it's button should have onPress={()=>{props.onNext}}
                onBack={() => {
                    setComponentIndex(componentIndex - 1)
                }}

                //if builder x component has skip button
                //it's button should have onPress={()=>{props.onNext}}
                onSkip={() => {
                    setComponentIndex(componentIndex + 1)
                }}

                onUserInput={(value, key) => {
                    updateUserInput(value, key);
                }}

                currentAnswers={totalAnswers[componentIndex]}

                // setShowTypeDropDown={() => { setShowTypeDropDown(!showTypeDropDown) }}
                // showTypeDropDown={showTypeDropDown}

                onHome={() => {
                    onHome();
                }}
            />)
    }

    return (
        <View style={styles.container}>
            <HeaderBarLight
                // screenWidth={windowWidth}
                style={styles.header}
                header={headers[componentKeys[componentIndex]]}
                onHome={() => { onHome() }}
                onBack={() => setComponentIndex(componentIndex - 1)}
            />

            <ScrollView contentOffset={{ x: 0 }} style={styles.scrollView}>
                <CurrentComponentRouter />
            </ScrollView>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        backgroundColor: "rgba(2,172,235,1)",
        flex: 1,
        flexDirection: "column",
        height: windowHeight,
        width: windowWidth,
        alignItems: "center",
    },
    header: {
        zIndex: 100000,
        paddingBottom: 15
    },
    scrollView: {
        zIndex: 1,
        marginTop: 80
    },
});