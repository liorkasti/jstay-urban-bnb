import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import Home from "./Home";
import Favorites from "./Favorites"
import SearchResults from "./SearchResults";

export default function Index(props) {
    const [currentComponent, setCurrentComponent] = useState("Home");
    const [currentSearch, setCurrentSearch] = useState("");

    const history = useHistory();

    useEffect(() => {
        if(props.location.state && props.location.state.backHistory){
            setCurrentComponent(props.location.state.backHistory)
        }
        if (props.location.state && props.location.state.currentSearch) {
            setCurrentSearch(props.location.state.currentSearch);
        }
    }, [])

    const handleFooterMenu = (menuItem) => {
        switch (menuItem) {
            case "createStay":
                history.push("/createStay");
                break;
            case "logout":
                history.push("/");
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
        // createStay 
        // myProfile = myProfile
        // kashrut = kashrut select
        // paymentDetails = carddetails
        // faq = faq
    };

    onBack = () => {
        if (currentSearch) {
            setCurrentComponent("SearchResults")
        } else {
            setCurrentComponent("Home")
        }
    }

    const handleFooterBar = (page) => {
        switch (page) {
            case "favorites":
                setCurrentComponent("Favorites")
                break;
            case "trips":
                history.push("/account", { subroute: "trips" });
                break;
        }
    };

    const handleCard = (action,backHistory) => {
        switch (action) {
            case "stayProfile":
                history.push("/account", { subroute: "stayProfile", currentSearch: currentSearch, backHistory: backHistory });
                break;
            case "bookStay":
                history.push("/account", { subroute: "bookStay", currentSearch: currentSearch });
                break;
        }
    };

    return (
        <View style={styles.container}>
            {/* copy paste below component*/}

            {
                //replace this string with the string 
                //in componentKeys related to this import

                currentComponent === "Home"
                &&
                //change component name to the new import 
                <Home

                    showSearchResultsFor={(search) => {
                        setCurrentComponent("SearchResults");
                        setCurrentSearch(search);
                    }}

                    handleFooterMenu={(menuItem) => {
                        handleFooterMenu(menuItem)
                    }}

                    onUserPress={(page)=>{
                        handleCard(page);
                    }}

                    showStayProfile={(backHistory) => { handleCard("stayProfile",backHistory); }}

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

                    showStayProfile={(backHistory) => { handleCard("stayProfile",backHistory); }}

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

                    showStayProfile={(backHistory) => { handleCard("stayProfile",backHistory); }}

                    handleFooterMenu={(menuItem) => {
                        handleFooterMenu(menuItem);
                    }}

                    bookStay={() => {
                        handleCard("bookStay")
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
});