import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import ComingSoon from "../modules/comingSoon";
import MyDetails from "./MyDetails";
import ProfilePicture from "./ProfilePicture";
import MyKashrut from "./MyKashrut";

export default function CreateAccountIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    useEffect(() => {
        if (props.location.state) {
            
        };
    }, [])

    useEffect(() => {
        console.warn(componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        };
        if (componentIndex < 0) {
            history.push("/");
        };
    }, [componentIndex])

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["MyDetails", "MyKashrut", "ProfilePicture"];

    return (
        <View style={styles.container}>
            {/* copy paste below component*/}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
});