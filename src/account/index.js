import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView,RefreshControl } from "react-native"
import { useHistory } from "react-router-dom";


import auth from '@react-native-firebase/auth';

//import all builder x files related to this directory
import HeaderBarLight from "./components/HeaderBarLight";
import MyProfileHeader from "./components/MyProfileHeader";
import MyProfileMenu from "./components/MyProfileMenu";

import CancelationGuest from "./CancelationGuest";
import CancelationHost from "./CancelationHost";

import ConfirmedGuest from "./ConfirmedGuest";
import ConfirmedHost from "./ConfirmedHost";
import EditeProfile from "./EditeProfile";
import EditMyKashrut from "./EditMyKashrut";
import GuestCardInfo from "./GuestCardInfo";
import HoldACharge from "./HoldACharge";
import MyProfile from "./MyProfile";
import MyStaysList from "./MyStaysList";
import NewRequest from "./NewRequest";
import PreviousGuest from "./PreviousGuest";
import PreviousHost from "./PreviousHost";
import Trips from "./Trips";
import StayProfile from "./StayProfile";
import BookStay from "./BookStay";
import PreBookingProfile from "./PreBookingProfile";
import CheckIn from "./CheckIn";
import EditMyListings from "./EditMyListings";
import Reviews from "./Reviews";
import Bookings from "./Bookings";
import ContactUs from "./ContactUs";

const components = {
    bookings: Bookings,
    cancelationGuest: CancelationGuest,
    cancelationHost: CancelationHost,
    confirmedGuest: ConfirmedGuest,
    confirmedHost: ConfirmedHost,
    contactUs: ContactUs,
    editeProfile: EditeProfile,
    editMyKashrut: EditMyKashrut,
    guestCardInfo: GuestCardInfo,
    holdACharge: HoldACharge,
    myProfile: MyProfile,
    myStaysList: MyStaysList,
    newRequest: NewRequest,
    previousHost: PreviousHost,
    previousGuest: PreviousGuest,
    trips: Trips,
    stayProfile: StayProfile,
    bookStay: BookStay,
    preBookingProfile: PreBookingProfile,
    checkIn: CheckIn,
    editMyListings: EditMyListings,
    reviews: Reviews,
};


const headers = {
    bookings: "Bookings",
    cancelationGuest: "Cancelation",
    cancelationHost: "Cancelation",
    confirmedHost: "Confirmed",
    confirmedGuest: "Confirmed",
    contactUs:"Support",
    editeProfile: "Edit Profile",
    editMyKashrut: "Kashrut",
    guestCardInfo: "Payments",
    holdACharge: "Hold A Charge",
    myProfile: "My Profile",
    myStaysList: "My Stays",
    newRequest: "New Request",
    previousGuest: "Previous",
    previousHost: "Previous",
    trips: "My Trips",
    stayProfile: "Stay Profile",
    bookStay: "Book This Stay",
    preBookingProfile: "Profile",
    checkIn: "Check-In",
    editMyListings: "Edit Stay",
    reviews: "Reviews",
}

export default function Index(props) {
    const [backHistory, addBackHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array
    //the array should be in the order that the screens show up


    function wait(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }

    //user finished create a stay
    function onHome() {
        history.push("/home");
    };

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


    const onNewMessage = (message) => {
        history.push("/chat", { route: "/account", subroute: message })
    }

    const addToFavorites = (stay)=>{
        history.push("/home", { subroute: "/favorites", newData: stay, favorites: true, backHistory })
    }

    const onCreateStay = (from) => {
        history.push("/createStay", { route: "/account", subroute: from })
    }

    const onEditStay = (from) => {
        history.push("/editStay", { subroute: from })
    }
    useEffect(() => {
        console.warn(backHistory)
    }, [backHistory])

    useEffect(() => {
        if (props.location.state && props.location.state.subroute && typeof props.location.state.subroute === "string") {

        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex] = props.location.state.subroute;
        addBackHistory(newBackHistory);
        setCurrentPage(props.location.state.subroute);
        }
    }, []);

    const onUserPress = (page) => {
        setCurrentPage(page);
        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex + 1] = page;
        addBackHistory(newBackHistory);
        setHistoryIndex(historyIndex + 1)
    }



    const onBack = () => {
        if(showMenu)setShowMenu(false);
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
        if (!components[props.location.state.subroute]) return <View />
        const CurrentComponent = components[currentPage || props.location.state.subroute];
        return (
        
        <CurrentComponent
            style={styles.componentStyle}
            //if builder x component has next button
            //it's button should have onPress={()=>{props.onNext}}


            //if builder x component has back button
            //it's button should have onPress={()=>{props.onNext}}
            onBack={() => {
                // onBack();
                setCurrentComponent("Home");
            }}

            onCreateStay={(requestSource) => {
                onCreateStay(requestSource);
            }}

            saveAndExit={()=>{
                setCurrentComponent("Home");
                // onBack();
            }}
            messageHost={(message)=>{onNewMessage(message)}}
            messageSupport={()=>{onNewMessage({support:true})}}

            messageGuest={(message)=>{onNewMessage(message)}}

            onEditStay={(page) => {
                onEditStay(page);
            }}

            showMenu={showMenu}

            goHome={() => {
                onHome();
            }}
            deleteStay={() => {
                console.warn("create delete stay behavior");
                onBack();
            }}

            addToFavorites={()=>{
                addToFavorites();
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
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    
        wait(2000).then(() => setRefreshing(false));
      }, [refreshing]);
    

    return (
        <View style={styles.container}>
            {/*dynamic component*/}
            {
                currentPage !== "myProfile" ?
                    <HeaderBarLight
                        screenWidth={windowWidth}
                        style={styles.header}
                        header={headers[currentPage || props.location.state.subroute]}
                        onHome={() => { onHome() }}
                        onBack={() => onBack()}
                    />
                    :
                    <MyProfileHeader
                        screenWidth={windowWidth}
                        style={styles.header}
                        header={headers[currentPage || props.location.state.subroute]}
                        setShowMenu={() => { setShowMenu(!showMenu) }}
                        onBack={() => { onBack()}}
                    />
            }
            <ScrollView style={{
                zIndex: 1,
                backgroundColor: "rgba(2,172,235,1)",
            }}
                onScrollBeginDrag={() => {
                    if (showMenu) { setShowMenu(false); }
                }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }>
                <CurrentComponentRouter />
            </ScrollView>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "rgba(2,172,235,1)",
        flex: 1,
        flexDirection: "column"
    },

    header: {
        zIndex: 3000,
    },
});