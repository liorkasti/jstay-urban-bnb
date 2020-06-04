import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import Accessibility from "./Accessibility";
import Address from "./Address";
import Amenities from "./Amenities"
import ApartmentPinDrop from "./ApartmentPinDrop";
import BookStay from "./BookStay";
import ChargesAndDeposites from "./ChargesAndDeposites";
import CheckIn from "./CheckIn";
import CheckinInfo from "./CheckinInfo";
import DescribeStay from "./DescribeStay";
import EditMyListings from "./EditMyListings"
import HostBankInfo from "./HostBankInfo";
import MobileVerification from "./MobileVerification";
import Nearby from "./Nearby";
import Policies from "./Policies";
import PreBookingProfile from "./PreBookingProfile";
import Pricing from "./Pricing";
import ReviewGuest from "./ReviewGuest";
import ReviewHost from "./ReviewHost";
import Reviews from "./Reviews";
import StayCalender from "./StayCalender";
import StayPictures from "./StayPictures";
import StayRules from "./StayRules";
import VerifyNumber from "./VerifyNumber";

const components = {
    Accessibility,
    Address,
    Amenities,
    ApartmentPinDrop,
    BookStay,
    ChargesAndDeposites,
    CheckIn,
    CheckinInfo,
    DescribeStay,
    EditMyListings,
    HostBankInfo,
    MobileVerification,
    Nearby,
    Policies,
    PreBookingProfile,
    Pricing,
    ReviewGuest,
    ReviewHost,
    Reviews,
    StayCalender,
    StayPictures,
    StayRules,
    VerifyNumber
};

export default function LoginIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array 
    //the array should be in the order that the screens show up

    //user finished create a stay
    function onSuccessfulLogin() {
        history.push("/home");
    };

    function onCreateAccount() {
        history.push("/createAccount");
    }

    useEffect(() => {
        console.warn(componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        }
    }, [componentIndex])
    const componentKeys = ["Welcome", "Login"];

    const currentComponentRouter = () => {
        const currentComponent = components[componentKeys[componentIndex]]
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
                    login={() => {
                        setComponentIndex(componentIndex + 1)
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