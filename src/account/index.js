import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView, RefreshControl, Alert } from "react-native"
import { useHistory } from "react-router-dom";
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database";
const currentUser = auth().currentUser;

//import all builder x files related to this directory
import HeaderBarLight from "./components/HeaderBarLight";
import MyProfileHeader from "./components/MyProfileHeader";
import MyProfileMenu from "./components/MyProfileMenu";
import MaterialButtonShare2 from "./components/MaterialButtonShare2";

import CancelationGuest from "./CancelationGuest";
import CancelationHost from "./CancelationHost";

import ConfirmedGuest from "./ConfirmedGuest";
import ConfirmedHost from "./ConfirmedHost";
import EditProfile from "./EditProfile";
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
    editProfile: EditProfile,
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
    contactUs: "Support",
    editProfile: "Edit Profile",
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
    const [totalStays, setTotalStays] = useState(0);

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
    };

    const onDeleteAccount = () => {
        auth().currentUser
            .delete()
            .then(() => {
                console.log('User deleted account!')
                setTimeout(() => {
                    history.push("/")
                })
            }
            );
    }


    const onNewMessage = (message) => {
        history.push("/chat", { route: "/account", subroute: message })
    }

    const addToFavorites = (stay) => {
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
        if (currentUser) {
            database()
                .ref(`/users/generalInfo/${currentUser.uid}`)
                .once('value')
                .then(snapshot => {
                    const response = snapshot.val();
                    console.warn("total stays", response.myStays)
                    setTotalStays(response.myStays ? response.myStays.length - 1 : 0);
                })
        }

        if (props.location.state && props.location.state.subroute && typeof props.location.state.subroute === "string") {
            let newBackHistory = [...backHistory];
            newBackHistory[historyIndex] = props.location.state.subroute;
            addBackHistory(newBackHistory);
            setCurrentPage(props.location.state.subroute);
        }
    }, []);

    const deleteStay = (stay) => {
        const actualDelete = () => {
            setRefreshing(true);
            database()
                .ref(`/stays/${stay}/`)
                .set({
                    [stay]: null
                })
                .then(() => {
                    console.log("deleted stay from stays")
                });

            database()
                .ref(`/users/generalInfo/${currentUser.uid}`)
                .once('value')
                .then(snapshot => {
                    const response = snapshot.val();
                    let newMyStays = [];
                    for (let i = 0; i < response.myStays.length; i++) {
                        if (i !== response.myStays.indexOf(stay)) {
                            newMyStays.push(response.myStays[i])
                        }
                    }
                    database()
                        .ref(`/users/generalInfo/${currentUser.uid}/`)
                        .set({
                            myStays: newMyStays
                        })
                        .then(() => {
                            console.log("deleted stay from account")
                        });

                    console.log(response.myStays.indexOf(stay))
                    // setTotalStays(totalStays - 1);
                })
            setRefreshing(false);
        };

        Alert.alert(
            "Are you sure",
            "You cannot undo this action",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Delete", onPress: () => { actualDelete(); } }
            ],
            { cancelable: false }
        );

    }

    const onUserPress = (page, stay) => {
        if (page === "deleteStay") return deleteStay(stay);

        setCurrentPage(page);
        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex + 1] = page;
        addBackHistory(newBackHistory);
        setHistoryIndex(historyIndex + 1)
    }

    const handleCard = (action, backHistory) => {
        switch (action) {
            case "stayProfile":
                onUserPress("stayProfile");
                break;
            case "bookStay":
                onUserPress("bookStay");
                break;
            case "trips":
                onUserPress("trips");
                break;
            case "myKashrut":
                onUserPress("editMyKashrut");
                break;
            case "createStay":
                history.push("/createStay", { backHistory });
                break;
            case "myStaysList":
                onUserPress("myStaysList");
                break;
            case "newRequest":
                onUserPress("newRequest");
                break;
            case "logout":
                onLogout();
                break;
            case "deleteAccount":

                onDeleteAccount();
                break;

        }
    };


    const onBack = () => {
        if (showMenu) setShowMenu(false);
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
        return (<CurrentComponent
            style={styles.componentStyle}
            //if builder x component has next button
            //it's button should have onPress={()=>{props.onNext}}

            totalStays={totalStays}

            handleMenu={(subroute) => {
                handleCard(subroute);
            }}

            //if builder x component has back button
            //it's button should have onPress={()=>{props.onNext}}
            onBack={() => {
                onBack();
            }}

            onCreateStay={(requestSource) => {
                onCreateStay(requestSource);
            }}

            saveAndExit={() => {
                onBack();
            }}
            messageHost={(message) => { onNewMessage(message) }}
            messageSupport={() => { onNewMessage({ support: true }) }}

            messageGuest={(message) => { onNewMessage(message) }}

            onEditStay={(page) => {
                onEditStay(page);
            }}

            showMenu={showMenu}

            goHome={() => {
                onHome();
            }}

            addToFavorites={() => {
                addToFavorites();
            }}

            onDeleteAccount={() => {
                onLogout();
            }}

            onLogout={() => {
                onLogout();
            }}
            onUserPress={(page, stay) => onUserPress(page, stay)}
        />)
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
                    /> :
                    <MyProfileHeader
                        showMenu={showMenu}
                        setShowMenu={() => { setShowMenu(!showMenu) }}
                        onBack={() => onBack()}
                        style={styles.header}
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
            {currentPage === "myStaysList" &&
                <MaterialButtonShare2
                    onPress={() => { onCreateStay("myStaysList") }}
                    style={styles.materialButtonShare2}
                />
            }
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
        // padding: 10,
        // width: windowWidth,
        // height: windowHeight,
        backgroundColor: "rgba(2,172,235,1)",
        // flexDirection: "column",
        // width: "100%"
    },

    header: {
        zIndex: 3000,
        // width: windowWidth
    },
    materialButtonShare2: {
        position: "absolute",
        bottom: 80,
        zIndex: 300,
        width: 56,
        height: 56,
        marginLeft: 326
    },
});