import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions,Text } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import Accessibility from "./screens/Accessibility";
import Address from "./screens/Address";
import Amenities from "./screens/Amenities"
import ApartmentPinDrop from "./screens/ApartmentPinDrop";
import ChargesAndDeposites from "./screens/ChargesAndDeposites";
import CheckinInfo from "./screens/CheckinInfo";
import DescribeStay from "./screens/DescribeStay";
import HostBankInfo from "./screens/HostBankInfo";
import MobileVerification from "./screens/MobileVerification";
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
    MobileVerification,
    Nearby,
    Policies,
    Pricing,
    StayCalender,
    StayLayout,
    StayPictures,
    StayRules,
};

export default function Index(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array
    //the array should be in the order that the screens show up

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
        "MobileVerification",
        "Policies",
        "StayCalender"
    ];

    //user finished create a stay
    function onHome() {
        history.push("/home");
    };

    useEffect(() => {
        console.warn(componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            onHome();
        }

        if(componentIndex < 0){
            onHome();
        }
    }, [componentIndex]);

    const CurrentComponentRouter = (props) => {
        const CurrentComponent = components[componentKeys[componentIndex]];
        console.warn("current component",CurrentComponent)
        if(!CurrentComponent)return <View />
        return (<CurrentComponent
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

        onHome={() => {
            onHome();
        }}
         />)
    }

    return (
        <View style={styles.container}>
            {//dynamic component
                <CurrentComponentRouter />
            }
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        width: windowWidth,
        height: windowHeight
    }
});