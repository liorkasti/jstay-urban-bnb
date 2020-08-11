import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, SectionList, FlatList } from "react-native";

import ReadMessage from "./components/ReadMessage";
import UnreadMessage from "./components/UnreadMessage";
import Icon from "react-native-vector-icons/Entypo";
import MessageSearchBar from "../components/MessageSearchBar";


const messages = [
    {
        title: "search bar",
        data: [{ from: "JewBoy", read:false, index:0}],

    },
    {
        title: "something",
        data: [{ from: "Nachum", read: false, index: 1 }],

    },
    {
        title: "needs",
        data: [{ from: "sholli", read: false, index: 2 }],

    },
    {
        title: "to be in",
        data: [{ from: "Charles", read: true, index: 3 }],

    },
    {
        title: "title",
        data: [{ from: "Jamal", read: true, index: 4 }],

    },
    {
        title: "something",
        data: [{ from: "Shalom", read: true, index: 5 }],

    },
    {
        title: "needs",
        data: [{ from: "Moshe", read: true, index: 6 }],

    },
    {
        title: "to be in",
        data: [{ from: "Ali", read: true, index: 7 }],

    },
    {
        title: "title",
        data: [{ from: "Yanki", read: true, index: 8 }],

    },
    {
        title: "something",
        data: [{ from: "Elena", read: true, index: 9 }],

    },

];

export default function Messages(props) {
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        if (isRefreshing) {
            setTimeout(() => {
                setIsRefreshing(false);
            }, 1000)
        }
    }, [isRefreshing]);

    const Message = (props) => (
            <TouchableOpacity onPress={() => { props.onNext() }} style={styles.groupMessage} >
                {!props.read ?
                    <ReadMessage onPress={props.onNext} style={styles.unreadMessages} from={props.from} /> :
                    <UnreadMessage onPress={props.onNext} style={styles.unreadMessages} from={props.from} />

                }
            </TouchableOpacity>
   
    );

    return (
        <View style={styles.container}>

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
                            <View onPress={props.onHome} style={styles.image1Filler}></View>
                            <Image
                                source={require("../assets/images/jstay-icon-inverted8.png")}
                                resizeMode="contain"
                                style={styles.image1}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/*copy below*/}
            <View style={{ flex: 1, marginTop: 107, zIndex: 30 }} >
                <SectionList
                    refreshing={isRefreshing}
                    onRefresh={() => {setIsRefreshing(true)}}
                    progressViewOffset={100}
                    sections={messages}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    keyExtractor={(message, index) => index}
                    renderItem={({ item }) => <Message itemIndex={item.index} read={item.read} title={item} onNext={props.onNext} from={item.from} />}
                />
                {/* </ScrollView> */}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "rgba(2,172,235,1)"
    },
    unreadMessage: {
        position: "absolute",
        top: 164,
        left: 0,
        height: 60,
        right: 0
    },
    image1Filler: {
        flex: 1,
        flexDirection: "row",
        zIndex: 25
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    },
    unreadMessages: {
        position: "absolute",
        left: 0,
        height: 90,
        right: 0,
        marginVertical: 8,
    },
    group1: {
        top: 0,
        left: 0,
        height: 91,
        position: "absolute",
        right: 0,
        zIndex: 55,
        backgroundColor: "rgba(2,172,235,1)"
    },
    rect233: {
        top: 0,
        left: 0,
        height: 91,
        position: "absolute",
        borderColor: "rgba(0,88,155,1)",
        borderWidth: 0,
        borderBottomWidth: .7,
        right: 0,
        zIndex: 25
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
    button4: {
        top: 40,
        left: 6,
        width: 29,
        height: 40,
        position: "absolute"
    },
    button5: {
        top: 0,
        left: 0,
        width: 29,
        height: 40,
        position: "absolute"
    },
    icon1: {
        top: 0,
        left: 0,
        position: "absolute",
        color: "rgba(0,88,155,1)",
        fontSize: 40
    },
    button3: {
        top: 30,
        width: 62,
        height: 62,
        position: "absolute",
        right: 4
    },
    image1: {
        top: 0,
        left: "-0.01%",
        height: 62,
        position: "absolute",
        right: 0
    },
    bsD1: {
        top: 13,
        color: "rgba(177,177,177,1)",
        position: "absolute",
        right: 38,
        opacity: 0.35,
        fontSize: 10,
        fontFamily: "roboto-regular",
        zIndex: 25
    },
    groupMessage: {
        paddingBottom: 70,
        // position: "absolute",
        // left: 20,
        zIndex: 20
    },
    unreadSymbol: {
        color: 'red',
    }
});
