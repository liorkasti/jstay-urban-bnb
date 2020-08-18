import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native"
import { useHistory } from "react-router-dom";
//import all builder x files related to this directory
import HeaderBarDark from "../components/HeaderBarDark"

import auth, { firebase } from '@react-native-firebase/auth';
// import messaging from '@react-native-firebase/messaging';
// import firebase from 'firebase'; // 4.8.1

import Messages from "./messages";
import Chat from "./chat";
import Fire from "./Fire";

export default function MessagesIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    const [currentUserState, setCurrentUserState] = useState({})
    if (!currentUser || !currentUserState) {
        setTimeout(() => { setCurrentUserState(currentUser) }, 100)
        return (<View style={styles.container}><ActivityIndicator size="large" /></View>)
    }
    // const denodefaultAppMessaging = firebase.messaging();

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["Messages", "Chat"];


    const user = auth().currentUser;

    useEffect(() => {
        // console.warn("MessagesIndex page - ' " + componentKeys[componentIndex], "' page number - "  + componentIndex)
        console.warn("firebase current user data: ", user)
        // console.warn("firebase current user messaging: ", defaultAppMessaging)
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        }
        if (componentIndex < 0) {
            history.push("/home");
        }
    }, [componentIndex])

    const goToHome = () => {
        history.push("/home");
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    }

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

                    createAccount={() => { onCreateAccount() }}

                    login={() => {
                        console.warn("setcomponentIndex for login ")
                    }}

                    openMessage={() => {
                        console.warn("setcomponentIndex for Messaging ");
                        setComponentIndex(componentIndex + 1);
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
                    onBack={() => { setComponentIndex(componentIndex - 1) }}
                    messaging={() => {
                        console.warn("setcomponentIndex for Messaging ")
                        setComponentIndex(componentIndex + 1)
                    }}

                    checkAuth={checkAuth}
                // on= {on}
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