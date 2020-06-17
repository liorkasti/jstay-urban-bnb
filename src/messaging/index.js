import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useHistory } from "react-router-dom";
//import all builder x files related to this directory
import HeaderBarDark from "../components/HeaderBarDark"
import Messages from "./messages";
import Chat from "./chat";

export default function MessagesIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["Messages", "Chat"];

    const goToHome = () => {
        history.push("/home");
    }

    useEffect(() => {
        console.warn(componentKeys[componentIndex], componentIndex)
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        }
        if (componentIndex < 0) {
            history.push("/home");
        }
    }, [componentIndex])

    return (
        <View style={styles.container}>
            {/* <HeaderBarDark screenWidth={windowWidth} style={styles.header} header="Messages" onHome={() => { onHome() }} onBack={() => setComponentIndex(componentIndex - 1)} /> */}
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
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    onHome={() => { goToHome() }}

                    openMessage={() => {
                        console.warn("setcomponentIndex for Messaging ")
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }

            {//Messages Component
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "Chat"
                &&
                //change component name to the new import 
                <Chat
                    style={styles.componentStyle}

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                    otherUserName={"sholli"}
                    onHome={() => { goToHome() }}
                    onBack={()=>{setComponentIndex(componentIndex -1)}}
                    messaging={() => {
                        console.warn("setcomponentIndex for Messaging ")
                        setComponentIndex(componentIndex + 1)
                    }}
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