import React, { useState, useEffect } from "./node_modules/react";
import { View, StyleSheet, Dimensions } from "react-native"
import { useHistory } from "./node_modules/react-router-dom";

//import all builder x files related to this directory
import Accessibility from "./Accessibility";
import Address from "./Address";
import Amenities from "./Amenities"
import ApartmentPinDrop from "./ApartmentPinDrop";
import BookStay from "../../stay/BookStay";
import ChargesAndDeposites from "./ChargesAndDeposites";
import CheckIn from "../../stay/CheckIn";
import CheckinInfo from "./CheckinInfo";
import DescribeStay from "./DescribeStay";
import EditMyListings from "../../stay/EditMyListings"
import HostBankInfo from "./HostBankInfo";
import MobileVerification from "./MobileVerification";
import Nearby from "./Nearby";
import Policies from "./Policies";
import PreBookingProfile from "../../stay/PreBookingProfile";
import Pricing from "./Pricing";
import ReviewGuest from "../../stay/ReviewGuest";
import ReviewHost from "../../stay/ReviewHost";
import Reviews from "../../stay/Reviews";
import StayCalender from "./StayCalender";
import StayPictures from "./StayPictures";
import StayLayout from "./StayLayout";
import StayRules from "./StayRules";
import VerifyNumber from "../../stay/VerifyNumber";

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

export default function LoginIndex(props) {
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
    }, [componentIndex]);

    const currentComponentRouter = () => {
        const CurrentComponent = components[componentKeys[componentIndex]];
        console.warn(CurrentComponent)
        return <CurrentComponent />
    }

    return (
        <View style={styles.container}>

            {//dynamic component

                componentKeys[componentIndex] === "Login"
                &&
                //change component name to the new import 
                <currentComponentRouter
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
                />
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