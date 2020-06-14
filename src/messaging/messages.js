import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import UnreadMessage from "../components/UnreadMessage";
import UnreadMessages from "../components/UnreadMessages";
import Icon from "react-native-vector-icons/Entypo";
import MessageSearchBar from "../components/MessageSearchBar";

function Messages(props) {
    return (
        <View style={styles.container}>
            <UnreadMessage style={styles.unreadMessage}></UnreadMessage>
            <UnreadMessages style={styles.unreadMessages}></UnreadMessages>
            <View style={styles.group1}>
                <View style={styles.rect233}>
                    <Text style={styles.bsD1}>BS&quot;D</Text>
                    <View style={styles.button4RowRow}>
                        <View style={styles.button4Row}>
                            <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button4} >
                                <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button5}>
                                    <Icon name="chevron-left" style={styles.icon1}></Icon>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <Text style={styles.text}>Messages</Text>
                        </View>
                        <View style={styles.button4RowFiller}></View>
                        <TouchableOpacity onPress={props.onHome} style={styles.button3}>
                            <View  onPress={props.onHome} style={styles.image1Filler}></View>
                            <Image
                                source={require("../assets/images/jstay-icon-inverted8.png")}
                                resizeMode="contain"
                                style={styles.image1}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <MessageSearchBar style={styles.messageSearchBar}></MessageSearchBar>
            <UnreadMessages style={styles.unreadMessages1}></UnreadMessages>
            <UnreadMessages style={styles.unreadMessages2}></UnreadMessages>
            <UnreadMessages style={styles.unreadMessages3}></UnreadMessages>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(2,172,235,1)"
    },
    unreadMessage: {
        height: 60,
        marginTop: 164
    },
    unreadMessages: {
        height: 60,
        marginTop: 5
    },
    group1: {
        height: 91,
        marginTop: -289
    },
    rect233: {
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
        color: "rgba(0,88,155,1)",
        fontSize: 25,
        fontFamily: "roboto-700",
        textAlign: "center",
        marginLeft: 121,
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
    },
    messageSearchBar: {
        height: 56,
        marginTop: 7,
        marginLeft: 20,
        marginRight: 20
    },
    unreadMessages1: {
        height: 60,
        marginTop: 269
    },
    unreadMessages2: {
        height: 60,
        marginTop: -125
    },
    unreadMessages3: {
        height: 60,
        marginTop: -125
    }
});

export default Messages;
