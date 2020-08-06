import React, { Component, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, Dimensions, Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';

import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet22 from "../components/MaterialButtonViolet22";
import MaterialButtonViolet17 from "../components/MaterialButtonViolet17";

import Fire from "./Fire";

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const reference = database().ref('/user/messaging');

const currentUser = auth().currentUser;

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

const user = auth().currentUser;

export default function Chat(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([]);

    on(message =>
      setMessages(previousState => {
        GiftedChat.append(previousState.messages, message);
      })
    )

    console.warn("firebase current user data: ", currentUser);
    console.warn("firebase current user messages: ", messages);
   
    return () => {
      off();
    }
  }, [])


  const on = callback => {
    reference
      .limitToLast(20)
      .on('child_added', snapshot => callback(parse(snapshot)));
  }

  const send = messages => {
    messages.forEach(i => {
      const message = {
        text: i.text,
        timestamp: database.ServerValue.TIMESTAMP,
        user: i.user
      }
      console.warn('message: ', i);

      reference.push(message)
    });
  };

  const parse = message => {
    const { user, text, timestamp } = message.val()
    const { key: _id } = message
    const createdAt = new Date(timestamp)
    console.warn('message: ', message);

    return {
      _id,
      createdAt,
      text,
      user
    };
  };



  const get = callback => {
    reference.on('child_added', snapshot => callback(parse(snapshot)));
    console.warn('get: ', callback);
  }

  const off = () => {
    reference.off();
  }

  return (
    <>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button4}>
                <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button5}>
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
        //below are 2 different ways of calling a function from a callback.

        // onSend={(message)=>{send(message)}}
        onSend={send}
        user={{ 
          _id: currentUser.uid,
          name: currentUser.displayName
         }}
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
    borderBottomWidth: 5

  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
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
