import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, Dimensions } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';

import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet22 from "../components/MaterialButtonViolet22";
import MaterialButtonViolet17 from "../components/MaterialButtonViolet17";

const messagesToMe = [{
    message: "hi",
    index: 0
},
{
    message: "good you?",
    index: 2
},
{
    message: "yeah that sounds great",
    index: 4
}]

const massagesFromMe = [{
    message: "Sup",
    index: 1
},
{
    message: "good",
    index: 3
},
{
    message: "yeah it does doesn't it",
    index: 5
}];

const messages = [{ message: "hello", sender: "sholly", timeSent: "epoc" },];

export default function Chat() {

    // helper method that is sends a message
    function handleSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage));
    }

    return (
        <View style={styles.screen}>
            <GiftedChat
                messages={messages}
                onSend={newMessage => handleSend(newMessage)}
                user={{ _id: 1 }}
            />
            {/* {
                messagesToMe.map((toMe) => {
                    massagesFromMe.map((fromMe) => {
                        return (
                            <View>
                                <View key={fromMe.index < toMe.index ? toMe.index + "container" : fromMe.index + "container"}>
                                    <Text>{fromMe.index < toMe.index ? toMe.message : fromMe.message}</Text>
                                </View>
                                <View key={fromMe.index > toMe.index ? toMe.index + "container" : fromMe.index + "container"}>
                                    <Text>{fromMe.index > toMe.index ? toMe.message : fromMe.message}</Text>
                                </View>
                            </View>
                        )
                    })
                })} */}
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});
