import React, { useState, useEffect } from "react";
import {
    View, StyleSheet, Dimensions, Image,
    TouchableOpacity, Text, ScrollView, SafeAreaView, Constants
} from "react-native"
import { useHistory } from "react-router-dom";

import auth from '@react-native-firebase/auth';

//import all builder x files related to this directory

import HeaderBarLight from "./components/HeaderBarLight";
import Cancelation from "./Cancelation";
import Confirmed from "./Confirmed";
import EditeProfile from "./EditeProfile";
import EditMyKashrut from "./EditMyKashrut";
import GuestCardInfo from "./GuestCardInfo";
import HoldACharge from "./HoldACharge";
import MyProfile from "./MyProfile";
import MyStaysList from "./MyStaysList";
import NewRequest from "./NewRequest";
import Previous from "./Previous";
import Trips from "./Trips";
import StayProfile from "./StayProfile";
import BookStay from "./BookStay";
import PreBookingProfile from "./PreBookingProfile";
import CheckIn from "./CheckIn";
import EditMyListings from "./EditMyListings";
import Reviews from "./Reviews";

const components = {
    Cancelation,
    Confirmed,
    EditeProfile,
    EditMyKashrut,
    GuestCardInfo,
    HoldACharge,
    MyProfile,
    MyStaysList,
    NewRequest,
    Previous,
    Trips,
    StayProfile,
    BookStay,
    PreBookingProfile,
    CheckIn,
    EditMyListings,
    Reviews,
    // cancelation: Cancelation,
    // confirmed: Confirmed,
    // editeProfile: EditeProfile,
    // editMyKashrut: EditMyKashrut,
    // guestCardInfo: GuestCardInfo,
    // holdACharge: HoldACharge,
    // myProfile: MyProfile,
    // myStaysList: MyStaysList,
    // newRequest: NewRequest,
    // previous: Previous,
    // trips: Trips,
    // stayProfile: StayProfile,
    // bookStay: BookStay,
    // preBookingProfile: PreBookingProfile,
    // checkIn: CheckIn,
    // editMyListings: EditMyListings,
    // reviews: Reviews,
};

export default function Index(props) {
    const [render, rerender] = useState(0);
    const [backHistory, addBackHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState("");
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array
    // the array should be in the order that the screens show up
    const componentKeys = [
        "MyStaysList",
        "MyProfile",
        "EditMyKashrut",
        "GuestCardInfo",
    ];

    const headers = {
        MyProfile: "My Profile",
        MyStaysList: "My Stays List",
        EditMyKashrut: "Edit My Kashrut",
        GuestCardInfo: "Payment Info",
    }

    //user finished create a stay
    function onHome() {
        history.push("/home");
    };

    useEffect(() => {
        console.warn("account/index.js componentKeys pic: " +  componentKeys[componentIndex], componentIndex)
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/account", { subroute: "stayProfile", backHistory: "Home" })
        }

        if (componentIndex < 0) {
            history.push("/home");
            // onHome()
        }

        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        }

        if (componentIndex < 0) {
            history.push("/home");
        }

    }, [componentIndex]);


    // useEffect(() => {
    //     let newBackHistory = [...backHistory];
    //     newBackHistory[historyIndex] = props.location.state.subroute;
    //     addBackHistory(newBackHistory);
    // }, []);


    const onBack = () => {
        if (historyIndex - 1 < 0) {
            const prevPage = props.location.state.backHistory;
            console.warn(prevPage)
            const currentSearch = props.location.state.currentSearch;
            history.push("/home", { currentSearch: currentSearch, backHistory: prevPage })
        } else {
            setCurrentPage(backHistory[historyIndex - 1]);
            setHistoryIndex(historyIndex - 1);
        }
    }

    const CurrentComponentRouter = () => {
        if (!components[props.location.state.subroute]) return
        <View />
        const CurrentComponent = components[currentPage || props.location.state.subroute];
        return (
            <CurrentComponent
                style={styles.componentStyle}
                //if builder x component has next button
                //it's button should have onPress={()=>{props.onNext}}


                //if builder x component has back button
                //it's button should have onPress={()=>{props.onNext}}
                onBack={() => {
                    onBack();
                }}

                onCreateStay={(requestSource) => {
                    onCreateStay(requestSource);
                }}

                onEditStay={(page) => {
                    onEditStay(page);
                }}

                goHome={() => {
                    onHome();
                }}
                deleteStay={() => {
                    console.warn("create delete stay behavior");
                    onBack();
                }}
                onDeleteAccount={() => {
                    onLogout();
                }}
                onLogout={() => {
                    onLogout();
                }}
                onUserPress={(page) => onUserPress(page)}
            />
        )
    }

    const onLogout = () => {

        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
                setTimeout(() => {
                    history.push("/")
                })
            }
            );
    }

    const onCreateStay = (from) => {
        history.push("/createStay", { route: "/account", subroute: from })
    }

    const onEditStay = (from) => {
        history.push("/editStay", { subroute: from })
    }



    const onUserPress = (page) => {
        console.log("hello handleHamburgerMenu request page: ", (page))

        // let newBackHistory = [...backHistory];
        // setCurrentPage(page);
        // newBackHistory[historyIndex + 1] = page;
        // addBackHistory(newBackHistory);
        // setHistoryIndex(historyIndex + 1)
    }


    const handleHamburgerMenu = (page) => {
        console.log("hello handleHamburgerMenu request page: ", (page))

        switch (page) {
            case "myStaysList":
                console.log("hello handleHamburgerMenu myStpage request: ", (page))
                // setCurrentPage(page);

                let newBackHistory = [...backHistory];
                newBackHistory[historyIndex + 1] = page;
                addBackHistory(newBackHistory);
                setHistoryIndex(historyIndex + 1)
                handleHamburgerMenu("/MyStaysList");
                history.push("/MyStaysList");
                break;
            case "logout":
                auth()
                    .signOut()
                    .then(() => {
                        console.log('User signed out!')
                        setTimeout(() => {
                            history.push("/")
                        })
                    })
                break;
            case "profile":
                history.push("/account", { subroute: "myProfile" });
                break;
            case "kashrut":
                history.push("/account", { subroute: "editMyKashrut" })
                break;
            case "paymentDetails":
                history.push("/account", { subroute: "guestCardInfo" })
                break;
        }
    };



    return (
        <View styles={{ zIndex: 1, marginTop: 70 }}>
            <HeaderBarLight
                screenWidth={windowWidth}
                style={styles.header}
                header={headers[componentKeys[componentIndex]]}
                onHome={() => { onHome() }}
                onBack={() => setComponentIndex(componentIndex - 1)}
            />

            <ScrollView style={styles.scrollView}>
                <CurrentComponentRouter
                    header={headers[componentKeys[componentIndex]]}
                    onHome={() => { onHome() }}
                    onBack={() => setComponentIndex(componentIndex - 1)}
                    screenWidth={windowWidth}
                />
            </ScrollView>
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
    },
    header: {
        zIndex: 20,
    },
    scrollView: {
        zIndex: 1,
        marginTop: 70
    },
});