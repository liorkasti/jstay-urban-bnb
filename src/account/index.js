import React, { useState, useEffect } from "react";
import {
    View, StyleSheet, Dimensions, Image,
    TouchableOpacity, Text, ScrollView, SafeAreaView, Constants
} from "react-native"
import { useHistory } from "react-router-dom";

import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

//import all builder x files related to this directory
import HeaderBarLight from "./components/HeaderBarLight";
import MyProfileHeader from "./components/MyProfileHeader";
import MyProfileMenu from "./components/MyProfileMenu";

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
    MyStaysList,
    MyProfile,
    EditProfile,
    EditMyKashrut,
    ContactUs,
    Bookings,
    CancelationGuest,
    CancelationHost,
    ConfirmedGuest,
    ConfirmedHost,
    GuestCardInfo,
    HoldACharge,
    NewRequest,
    PreviousHost,
    PreviousGuest,
    Trips,
    StayProfile,
    BookStay,
    PreBookingProfile,
    CheckIn,
    EditMyListings,
    Reviews,
};

export default function Index(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    const [backHistory, addBackHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const componentKeys = [
        "MyStaysList", "MyProfile", "EditProfile", "EditMyKashrut", "ContactUs",
        "Bookings", "CancelationGuest", "CancelationHost", "ConfirmedGuest",
        "ConfirmedHost", "GuestCardInfo", "HoldACharge",
        "NewRequest", "PreviousHost", "PreviousGuest", "Trips",
        "StayProfile", "BookStay", "PreBookingProfile", "CheckIn",
        "EditMyListings", "Reviews",
    ];


    const headers = {
        MyStaysList: "My Stays",
        MyProfile: "My Profile",
        EditeProfile: "Edit Profile",
        EditMyKashrut: "Kashrut",
        ContactUs: "Support",
        Bookings: "Bookings",
        CancelationGuest: "Cancelation",
        CancelationHost: "Cancelation",
        ConfirmedHost: "Confirmed",
        ConfirmedGuest: "Confirmed",
        GuestCardInfo: "Payments",
        HoldACharge: "Hold A Charge",
        NewRequest: "New Request",
        PreviousGuest: "Previous",
        PreviousHost: "Previous",
        Trips: "My Trips",
        StayProfile: "Stay Profile",
        BookStay: "Book This Stay",
        PreBookingProfile: "Profile",
        CheckIn: "Check-In",
        EditMyListings: "Edit Stay",
        Reviews: "Reviews",
    }

    let history = useHistory();

    const handleMenu = (menuItem) => {
        switch (menuItem) {
            case "myStaysList":
                consol.warn("Menu 'MyStaysList' call")
                // history.push("/MyStaysList");
                setComponentIndex("MyStaysList");
                break;
            case "editMyKashrut":
                consol.warn("Menu 'EditMyKashrut' call")
                // history.push("/EditMyKashrut");
                setComponentIndex("EditMyKashrut");
                break;
            case "guestCardInfo":
                consol.warn("Menu 'ConfirmedGuest' call")
                // history.push("/ConfirmedGuest");
                setComponentIndex("ConfirmedGuest");
                break;
            case "editeProfile":
                consol.warn("Menu 'EditeProfile' call")
                // history.push("/EditeProfile");
                setComponentIndex("EditeProfile");
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
        }
    };

    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //user finished create a stay
    function onHome() {
        history.push("/home");
    };

    async function signInWithGoogle() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        //   console.warn("id token", idToken);
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        console.warn("googleCredential", googleCredential);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    };

    const onLogout = () => {
        auth()
            .signOut()
            .then(() => {
                firebase.auth().signOut().then(function () {
                    console.log('Signed Out');
                }, function (error) {
                    console.error('Sign Out Error', error);
                });
                console.log('User signed out!', user)
                setTimeout(() => {
                    history.push("/")
                })
            }
            );
    }


    const signInWithFacebookHandler = () => {
        onFacebookButtonPress().then((res) => {
            history.push("/createAccount", { familyName: res.family_name, firstName: res.given_name, email: "email" });
            console.log("signed in with Facebook with:", res)
        })
    };

    const signInWithGoogleHandler = () => {
        signInWithGoogle().then((res) => {
            console.log("signed in with google with:", res)
            history.push("/", { familyName: res.family_name, firstName: res.given_name, email: "email" });
        })
    };

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
        console.warn("ACCOUNT/index.js componentKeys pic: " + componentKeys[componentIndex], componentIndex)

        if (props.location.state && props.location.state.backHistory) {
            setCurrentComponent(props.location.state.backHistory)
        }
        if (props.location.state && props.location.state.currentSearch) {
            setCurrentSearch(props.location.state.currentSearch);
        }

        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/account", { subroute: "MyProfile", backHistory: "Home" })
        }

        if (componentIndex < 0) {
            onHome()
        }

        if (props.location.state && props.location.state.subroute && typeof props.location.state.subroute === "string") {

            let newBackHistory = [...backHistory];
            newBackHistory[historyIndex] = props.location.state.subroute;
            addBackHistory(newBackHistory);
            setCurrentPage(props.location.state.subroute);
        }
    }, [componentIndex]);

    const onUserPress = (page) => {
        console.warn("ACCOUNT/index.js componentKeys pic: " + componentKeys[componentIndex], componentIndex)
        setCurrentPage(page);
        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex + 1] = page;
        addBackHistory(newBackHistory);
        setHistoryIndex(historyIndex + 1)
    }

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

                saveAndExit={() => {
                    setCurrentComponent("Home");
                    // onBack();
                }}
                messageHost={(message) => { onNewMessage(message) }}
                messageSupport={() => { onNewMessage({ support: true }) }}

                messageGuest={(message) => { onNewMessage(message) }}

                onEditStay={(page) => {
                    onEditStay(page);
                }}

                showMenu={showMenu} 
                // showMenu={() => setShowMenu(true)}
                // onShowMenu={() => { setShowMenu(!showMenu) }, console.warn("show menu status: ", showMenu), showMenu}

                goHome={() => {
                    onHome();
                }}

                deleteStay={() => {
                    console.warn("create delete stay behavior");
                    onBack();
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
                onUserPress={(page) => onUserPress(page)}

                handleMenu={(menuItem) => {
                    handleMenu(menuItem)
                }}

                facebookSignin={() => { signInWithFacebookHandler() }}

                googleSignin={() => signInWithGoogleHandler()}

                login={() => {
                    // console.warn("0000000000000 index/account setcomponentIndex for login ", props.user)
                    setHistoryIndex(historyIndex + 1)
                }}
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
                        onPress={props.googleSignin()}
                        handleMenu={(menuItem) => {
                            handleMenu(menuItem)
                        }}
                    />
                    :
                    <MyProfileHeader
                        screenWidth={windowWidth}
                        style={styles.header}
                        header={headers[currentPage || props.location.state.subroute]}
                        setShowMenu={() => { setShowMenu(!showMenu) }}                        onHome={() => { onHome() }}
                        onBack={() => onBack()}
                        onPress={props.googleSignin()}
                        handleMenu={(menuItem) => {
                            handleMenu(menuItem)
                        }}
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
        backgroundColor: "rgba(2,172,235,1)",
        flex: 1,
        flexDirection: "column",
        // height: windowHeight,
        // width: windowWidth,
        // width: '100%',
        // width: 'auto',
        // marginHorizontal: Dimensions.get('window').width < 400 ? 4 : 0,
    },

    header: {
        zIndex: 3000,
        width: '100%',
    },
});