import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useHistory } from "react-router-dom";

import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database"

//import all builder x files related to this directory
import Home from "./Home";
import Favorites from "../account/Favorites";
import Trips from "../account/Trips";

const currentUser = auth().currentUser;

export default function Index(props) {
    const [currentComponent, setCurrentComponent] = useState("Home");
    const [currentSearch, setCurrentSearch] = useState("");
    const [newFavorites, setNewFavorites] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (props.location.state && props.location.state.backHistory) {
            setCurrentComponent(props.location.state.backHistory)
        };
        if (props.location.state && props.location.state.currentSearch) {
            setCurrentSearch(props.location.state.currentSearch);
        };
        if (props.location.state && props.location.state.favorites) {
            setNewFavorites(props.location.state.favorites);
            setCurrentComponent("Favorites");
        };
        database()
            .ref(`/stays/${currentUser.uid}`)
            .once('value')
            .then(snapshot => {
                console.log('User data: ', snapshot.val());
            });
    }, [])


    const handleFooterBar = (page) => {
        switch (page) {
            case "favorites":
                // history.push("/account", { subroute:"Favorites"});
                setCurrentComponent("Favorites");
                break;
            case "trips":
                setCurrentComponent("Trips");
                // history.push("/account", { subroute: "trips" });
                break;
            case "messages":
                history.push("/chat")
                break;
            case "account":
                history.push("/account", { subroute: "myProfile" })
                break;
        }
    };

    const handleCard = (action, backHistory) => {
        switch (action) {
            case "stayProfile":
                history.push("/account", { subroute: "stayProfile", currentSearch: currentSearch, backHistory });
                break;
            case "bookStay":
                history.push("/account", { subroute: "bookStay", currentSearch: currentSearch, backHistory });
                break;
            case "trips":
                history.push("/account", { subroute: "trips", currentSearch: currentSearch, backHistory });
                break;
            case "myKashrut":
                history.push("/account", { subroute: "editMyKashrut", currentSearch: currentSearch, backHistory })
                break;
            case "createStay":
                history.push("/createStay", { currentSearch: currentSearch, backHistory });
                break;
            case "myStaysList":
                history.push("/account", { subroute: "myStaysList", currentSearch: currentSearch, backHistory });
                break;
            case "newRequest":
                history.push("/account", { subroute: "newRequest", currentSearch: currentSearch, backHistory });
                break;
            // case "bookings":
            //     history.push("/account", { subroute: "bookings", currentSearch: currentSearch, backHistory });
            //     break;

        }
    };


    const handleProfileMenu = (menuItem) => {
        switch (menuItem) {
            case "createStay":
                history.push("/createStay");
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
        <View style={styles.flexContainer}>
            {/* copy paste below component*/}

            {
                //replace this string with the string 
                //in componentKeys related to this import

                currentComponent === "Home"
                &&
                //change component name to the new import 
                <Home

                    showSearchResultsFor={(search) => {
                        setCurrentSearch(search);
                    }}

                    searchText={currentSearch}

                    goHome={() => {
                        setCurrentSearch("")
                    }}

                    handleFooterMenu={(menuItem) => {
                        handleFooterMenu(menuItem)
                    }}

                    onUserPress={(page) => {
                        handleCard(page, currentComponent);
                    }}

                    bookStay={() => {
                        handleCard("bookStay")
                    }}

                    showStayProfile={(backHistory) => { handleCard("stayProfile", backHistory); }}

                    handleFooterBar={(page) => {
                        handleFooterBar(page)
                    }}

                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                currentComponent === "Favorites"
                &&
                //change component name to the new import 
                <Favorites

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    handleFooterMenu={(menuItem) => {
                        handleMenu(menuItem)
                    }}

                    handleFooterBar={(page) => {
                        handleFooterBar(page)
                    }}

                    showStayProfile={(backHistory) => { handleCard("stayProfile", backHistory); }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        onBack();
                    }}

                    // onBack={() => {
                    //     setComponentIndex(componentIndex - 1)
                    // }}

                    onHome={() => {
                        setCurrentComponent("Home");
                    }}
                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                currentComponent === "Trips"
                &&
                //change component name to the new import 
                <Trips

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    handleFooterBar={(page) => {
                        handleFooterBar(page)
                    }}

                    showStayProfile={(backHistory) => { handleCard("stayProfile", backHistory); }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        // onBack();
                        setCurrentComponent("Home");
                    }}

                    onHome={() => {
                        setCurrentComponent("Home");
                    }}
                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                currentComponent === "SearchResults"
                &&
                //change component name to the new import 
                <SearchResults

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}

                    showStayProfile={(backHistory) => { handleCard("stayProfile", backHistory); }}

                    handleProfileMenu={(menuItem) => {
                        handleProfileMenu(menuItem);
                    }}

                    handleFooterBar={(page) => {
                        handleFooterBar(page)
                    }}
                    searchText={currentSearch}
                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setCurrentComponent("Home");
                    }}

                    onHome={() => {
                        setCurrentComponent("Home");
                    }}
                //if builder x component has skip button
                //it's button should have onPress={()=>{props.onNext}}

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
        alignItems: "center",
    },
    flexContainer: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "rgba(2,172,235,1)",
    }
});