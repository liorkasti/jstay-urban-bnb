import React, { Component, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, Dimensions, Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';

import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonViolet22 from "../components/MaterialButtonViolet22";
import MaterialButtonViolet17 from "../components/MaterialButtonViolet17";

import Fire from "./Fire";
import auth, { firebase } from '@react-native-firebase/auth';
// import firebase from 'firebase'; // 4.8.1

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

  // static navigationOptions = ({ navigation }) => ({
  //   title: (navigation.state.params || {}).name || 'Chat!',
  // });

  // state = {
  //   messages: [],
  // };

  // get user() {
  //   return {
  //     _id: Fire.uid,
  //     name: this.props.navigation.state.params.name,
  //   }
  // }

  useEffect(() => {
    setMessages([
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
    ]),

      on(message =>
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message),
        }))
      );
    off();

    console.warn("firebase current user data: ", user)
    console.warn("firebase current user messages: ", messages)



  }, [])


  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    })
  }

  send = messages => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }
      console.warn('messages: ', messages);

      this.db.push(message)
    });
  };

  parse = message => {
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



  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    console.warn('get: ', callback);
  }



  // get db() {
  //   return firebase.database().ref("messages");
  // }

  // off() {
  //   this.db.off();
  // }

  // get uid() {
  //   return (firebase.auth().currentUser || {}).uid
  // }

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
        // onSend={newMessage => handleSend(newMessage)}
        onSend={{ send }}
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
