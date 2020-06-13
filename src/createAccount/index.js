import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native"
import { useHistory } from "react-router-dom";

import HeaderBarDark from "../components/HeaderBarDark"

//import all builder x files related to this directory
import ComingSoon from "../modules/comingSoon";
import AccountDetails from "./AccountDetails";
import MyDetails from "./MyDetails";
import ProfilePicture from "./ProfilePicture";
import MyKashrut from "./MyKashrut";

export default function CreateAccountIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    useEffect(() => {
        console.warn(componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        }
        if (componentIndex < 0) {
            history.push("/");
        }

    }, [componentIndex])

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["AccountDetails", "MyDetails", "MyKashrut", "ProfilePicture"];


    return (

        <View style={styles.container}>
            <HeaderBarDark screenWidth={windowWidth} style={styles.header} header="Create Account" onHome={() => { onHome() }} onBack={() => setComponentIndex(componentIndex - 1)} />
            {/* <ScrollView style={styles.scrollView}> */}

                {/* copy paste below component*/}
                {
                    //replace this string with the string 
                    //in componentKeys related to this import

                    componentKeys[componentIndex] === "AccountDetails"
                    &&
                    //change component name to the new import 
                    <AccountDetails

                        //if builder x component has next button
                        //it's button should have onPress={()=>{props.onNext}}
                        onNext={() => {
                            setComponentIndex(componentIndex + 1)
                        }}

                        onHome={() => { goToHome() }}

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
                    />
                }
                {
                    //replace this string with the string 
                    //in componentKeys related to this import

                    componentKeys[componentIndex] === "MyDetails"
                    &&
                    //change component name to the new import 
                    <MyDetails

                        //if builder x component has next button
                        //it's button should have onPress={()=>{props.onNext}}
                        onNext={() => {
                            setComponentIndex(componentIndex + 1)
                        }}

                        onHome={() => { goToHome() }}

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
                    />
                }
                {
                    //replace this string with the string 
                    //in componentKeys related to this import

                    componentKeys[componentIndex] === "MyKashrut"
                    &&
                    //change component name to the new import 
                    <MyKashrut

                        //if builder x component has next button
                        //it's button should have onPress={()=>{props.onNext}}
                        onNext={() => {
                            setComponentIndex(componentIndex + 1)
                        }}

                        onHome={() => { goToHome() }}

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
                    />
                }
                {
                    //replace this string with the string 
                    //in componentKeys related to this import

                    componentKeys[componentIndex] === "ProfilePicture"
                    &&
                    //change component name to the new import 
                    <ProfilePicture

                        //if builder x component has next button
                        //it's button should have onPress={()=>{props.onNext}}
                        onNext={() => {
                            setComponentIndex(componentIndex + 1)
                        }}

                        onHome={() => { goToHome() }}

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
                    />
                }
            {/* </ScrollView> */}
        </View>);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,88,155,1)",
        flex: 1,
        flexDirection: "column",
        width: windowWidth,
    },
    header: {
        zIndex: 20,
    },
    scrollView: {
        zIndex: 1,
        marginTop: 70
    },
});