import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import Messages from "./messages";
import Messaging from "./messaging";
import HeaderBarDark from "../components/HeaderBarDark"

export default function MessagesIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["Messages", "Messaging"];
    // const componentKeys = ["Messages", "Messaging"];

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

    return (
        <View style={styles.container}>
            <HeaderBarDark screenWidth={windowWidth} style={styles.header} header="Messages" onHome={() => { onHome() }} onBack={() => setComponentIndex(componentIndex - 1)} />
            {/* <ScrollView style={{ height: 1600 }} > */}
                {//Messages Component
                    //replace this string with the string 
                    //in componentKeys related to this import

                    componentKeys[componentIndex] === "Messages"
                    &&
                    //change component name to the new import 
                    <Messages
                        style={styles.componentStyle}

                        //if builder x component has next button
                        //it's button should have onPress={()=>{props.onNext}}
                        onNext={() => {
                            setComponentIndex(componentIndex + 1)
                        }}

                        onHome={() => { goToHome() }}

                        messaging={() => {
                            console.warn("setcomponentIndex for Messaging ")
                            setComponentIndex(componentIndex + 1)
                        }}
                    />
                }

                {//Messaging Component

                    componentKeys[componentIndex] === "Messaging"
                    &&
                    //change component name to the new import 
                    <Messaging
                        style={styles.componentStyle}
                        //if builder x component has next button
                        //it's button should have onPress={()=>{props.onNext}}
                        onNext={() => {
                            setComponentIndex(componentIndex + 1)
                        }}

                        //if builder x component has back button
                        //it's button should have onPress={()=>{props.onNext}}
                        onBack={() => {
                            setComponentIndex(componentIndex - 1)
                        }}

                        onHome={() => { goToHome() }}
                    />
                }
            {/* </ScrollView> */}
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
    scrollView: {
        height: 1600,
    },
});