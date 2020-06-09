import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import Accessibility from "./screens/Accessibility";
import Address from "./screens/Address";
import Amenities from "./screens/Amenities";
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
import StayLayout from "./screens/StayLayout";
import StayPictures from "./screens/StayPictures";
import StayRules from "./screens/StayRules";

const components = {
accessibility:Accessibility,
address: Address,
amenities: Amenities,
apartmentPinDrop: ApartmentPinDrop,
chargesAndDeposites: ChargesAndDeposites,
checkinInfo: CheckinInfo,
describeStay: DescribeStay,
hostBankInfo: HostBankInfo,
mobileVerification: MobileVerification,
nearby: Nearby,
policies: Policies,
pricing: Pricing,
stayCalender: StayCalender,
stayLayout: StayLayout,
stayPictures: StayPictures,
stayRules: StayRules,
};

export default function Index(props) {
    const [backHistory, addBackHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState("");

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array
    //the array should be in the order that the screens show up


    //user finished create a stay
    function onHome() {
        history.push("/home");
    };


    useEffect(() => {
        const newCurrentPage = props.location.state.subroute;
        setCurrentPage(newCurrentPage);
    }, []);

    const onUserPress = (page) => {
        setCurrentPage(page);
        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex + 1] = page;
        addBackHistory(newBackHistory);
        setHistoryIndex(historyIndex + 1)
    }

    const onBack = () => {
        if (historyIndex - 1 < 0) {
                history.push("/account", {subroute: "editMyListings"})
        } else {
            setCurrentPage(backHistory[historyIndex - 1]);
            setHistoryIndex(historyIndex - 1);
        }
    }

    const CurrentComponentRouter = () => {

        if (!components[props.location.state.subroute]) return <View />
        const CurrentComponent = components[currentPage || props.location.state.subroute];
        return (<CurrentComponent
            style={styles.componentStyle}
            //if builder x component has next button
            //it's button should have onPress={()=>{props.onNext}}


            //if builder x component has back button
            //it's button should have onPress={()=>{props.onNext}}
            onBack={() => {
                onBack();
            }}

            onCreateStay={(requestSource)=>{
                onCreateStay(requestSource);
            }}

            goHome={() => {
                onHome();
            }}
            onDeleteAccount={()=>{
                onLogout();
            }}
            onLogout={()=>{
                onLogout();
            }}
            onUserPress={(page) => onUserPress(page)}
        />)
    }

    return (
        <View style={styles.container}>
            {/*dynamic component*/}
                <CurrentComponentRouter />
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