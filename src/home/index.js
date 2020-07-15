import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useHistory } from "react-router-dom";

import auth from '@react-native-firebase/auth';

//import all builder x files related to this directory
import Home from "./Home";
import Favorites from "../account/Favorites";
import Trips from "../account/Trips";
import Messages from "../messaging/messages";
import MyProfile from "../account/MyProfile";
import Messaging from "../messaging/chat";
import Welcome from "../login/Welcome";

export default function Index(props) {
    const [currentComponent, setCurrentComponent] = useState("Home");
    const [currentSearch, setCurrentSearch] = useState("");
    const [newFavorites, setNewFavorites] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (props.location.state && props.location.state.backHistory) {
            setCurrentComponent(props.location.state.backHistory)
        }
        if (props.location.state && props.location.state.currentSearch) {
            setCurrentSearch(props.location.state.currentSearch);
        }
        if (props.location.state && props.location.state.favorites) {
            setNewFavorites(props.location.state.favorites);
            setCurrentComponent("Favorites");
        }
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
            case "messaging":
                setCurrentComponent("Messages");
                // history.push("/messaging", { subroute: "messages" });
                break;
            case "messages":
                history.push("/chat")
                break;
            case "account":
                // { handleFooterMenu(page) }
                console.warn("from index/home passing current page: ", (page))
                console.warn("from index/home passing props.history: ", (history))
                history.push("/home")
                // history.push("/account")
                // console.warn("props values: ", (props))
                setCurrentComponent("Account");
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
            case "bookings":
                history.push("/account", { subroute: "bookings", currentSearch: currentSearch, backHistory });
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
                        handleFooterMenu(menuItem)
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

                    handleFooterMenu={(menuItem) => {
                        handleFooterMenu(menuItem)
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

                currentComponent === "Messages"
                &&
                //change component name to the new import 
                <Messages

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    handleFooterMenu={(menuItem) => {
                        handleFooterMenu(menuItem)
                    }}

                    handleFooterBar={(page) => {
                        handleFooterBar(page)
                    }}

                    showStayProfile={(backHistory) => { handleCard("stayProfile", backHistory); }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    // onBack={() => {
                    //     onBack();
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

                currentComponent === "Account"
                &&
                //change component name to the new import 
                <MyProfile

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    handleFooterMenu={(menuItem) => {
                        handleFooterMenu(menuItem)
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

                    handleFooterMenu={(menuItem) => {
                        handleFooterMenu(menuItem);
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