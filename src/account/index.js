import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView } from "react-native"
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
    cancelation: Cancelation,
    confirmed: Confirmed,
    editeProfile: EditeProfile,
    editMyKashrut: EditMyKashrut,
    guestCardInfo: GuestCardInfo,
    holdACharge: HoldACharge,
    myProfile: MyProfile,
    myStaysList: MyStaysList,
    newRequest: NewRequest,
    previous: Previous,
    trips: Trips,
    stayProfile: StayProfile,
    bookStay: BookStay,
    preBookingProfile: PreBookingProfile,
    checkIn: CheckIn,
    editMyListings: EditMyListings,
    reviews: Reviews,
};


const headers = {
    cancelation: "Cancelation",
    confirmed: "Confirmed",
    editeProfile: "Edit Profile",
    editMyKashrut: "Kashrut",
    guestCardInfo: "Payments",
    holdACharge: "Hold A Charge",
    myProfile: "My Profile",
    myStaysList: "My Stays",
    newRequest: "New Request",
    previous: "Previous",
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

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array
    //the array should be in the order that the screens show up


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

    const onCreateStay = (from) => {
        history.push("/createStay", { route: "/account", subroute: from })
    }

    const onEditStay = (from) => {
        history.push("/editStay", { subroute: from })
    }
    useEffect(() => {
        console.warn(currentPage)
    }, [currentPage])

    useEffect(() => {
        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex] = props.location.state.subroute;
        addBackHistory(newBackHistory);
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
        />)
    };



    return (
        <View style={styles.container}>
            {/*dynamic component*/}
            {
                console.warn(props.location.state.subroute) || 
                currentPage === "myProfile" ||
                props.location.state.subroute === "myProfile" ? 
                <HeaderBarLight
                    screenWidth={windowWidth}
                    style={styles.header}
                    header={headers[currentPage || props.location.state.subroute]}
                    onHome={() => { onHome() }}
                    onBack={() => onBack()}
                /> : <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.text}>My Profile</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <MaterialButtonTransparentHamburger
              onPress={() => {
                setShowMenu(!showMenu)
              }}
              style={styles.materialButtonTransparentHamburger}
            ></MaterialButtonTransparentHamburger>
          </View>
        </View>
      </View>
            }
            
            <ScrollView style={{   zIndex: 1,
        backgroundColor: "rgba(2,172,235,1)",
        marginTop:  70}}>
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

    scrollView: {
     
    },
    header: {
        zIndex: 20,
    },
});