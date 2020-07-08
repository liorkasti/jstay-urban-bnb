import React, { Component, useState, useEffect } from "react";
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

export default function Chat(props) {
const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages( [
            {
              _id: 3,
              text: 'Hello',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
            {
                _id: 2,
                text: 'shuup yeah',
                createdAt: new Date(),
                user: {
                  _id: 1,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
              {
                _id: 1,
                text: 'you what?',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
          ])
    },[])

    // helper method that is sends a message
    function handleSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage));
    }

    return (
        <>
    <View style={styles.group1}>
    <View style={styles.rect}>
      <Text style={styles.bsD1}>BS&quot;D</Text>
      <View style={styles.button4RowRow}>
        <View style={styles.button4Row}>
          <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
            <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
              <Icon name="chevron-left" style={styles.icon1}></Icon>
            </TouchableOpacity>
          </TouchableOpacity>
        <Text style={styles.text14}>{props.otherUserName}</Text>
        </View>
        <View style={styles.button4RowFiller}></View>
        <TouchableOpacity onPress={props.onHome} style={styles.button3}>
          <View style={styles.image1Filler}></View>
          <Image
            source={require("../assets/images/jstay-icon-inverted8.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  </View>
            <GiftedChat
                messages={messages}
                onSend={newMessage => handleSend(newMessage)}
                user={{ _id: 1 }}
            />
    </>
           
    )
}


const styles = StyleSheet.create({
    group1: {
        width: 414,
        height: 91,
        backgroundColor: "#02aceb",
        borderBottomColor: "rgba(0,88,155,1)",
        borderBottomWidth: 1.4

      },
      rect: {
        height: 91,
        borderColor: "rgba(0,88,155,1)",
        borderWidth: 0,
        borderBottomWidth: .7
      },
      bsD1: {
        color: "rgba(177,177,177,1)",
        opacity: 0.35,
        fontSize: 10,
        fontFamily: "roboto-regular",
        alignSelf: "flex-end",
        marginTop: 13,
        marginRight: 38
      },
      button4: {
        width: 29,
        height: 40
      },
      button5: {
        width: 29,
        height: 40
      },
      icon1: {
        color: "rgba(0,88,155,1)",
        fontSize: 40
      },
    text: {
        top: 48,
        left: "37.57%",
        color: "rgba(0,88,155,1)",
        position: "absolute",
        fontSize: 25,
        fontFamily: "roboto-regular",
        textAlign: "center"
    },
      text14: {
        color: "rgba(0,88,155,1)",
        fontSize: 25,
        fontFamily: "roboto-regular",
        textAlign: "center",
        marginLeft: 143,
        marginTop: 8
      },
      button4Row: {
        height: 40,
        flexDirection: "row",
        marginTop: 10
      },
      button4RowFiller: {
        flex: 1,
        flexDirection: "row"
      },
      button3: {
        width: 62,
        height: 62,
        flexDirection: "row"
      },
      image1Filler: {
        flex: 1,
        flexDirection: "row"
      },
      image1: {
        height: 62,
        width: 62
      },
      button4RowRow: {
        height: 62,
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 6,
        marginRight: 4
      }
});
