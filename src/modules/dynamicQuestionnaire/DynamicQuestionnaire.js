import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, SafeAreaView, ScrollView } from 'react-native';
import { CheckBox } from "react-native-elements";
import DatePicker from 'react-native-datepicker'
import DropdownMenu from 'react-native-dropdown-menu';
import MapView, { Marker, Circle } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

export default function DynamicQuestionnaire(props) {
    const [currentValue, setCurrentValue] = useState([]);
    const [currentLocation, setCurrentLocation] = useState({});


    const getAddress = ({ latitude, longitude }) => {
        console.warn(latitude, longitude)
        // Geocoder.from(latitude, longitude)
        //     .then(json => {
        //         console.warn(json)
        //         var addressComponent = json.results[0].address_components[0];
        //         console.warn(addressComponent);
        //     })
        //     .catch(error => console.warn(error.origin));
    };

    useEffect(() => {
        if (currentValue[0])
            props.updateAnswers(currentValue)
    }, [currentValue]);

    useEffect(() => {
        if (props.currentQuestion.pinCoordinates) {
            Geolocation.getCurrentPosition(info => {
                const newCurrentLocation = { latitude: info.coords.latitude, longitude: info.coords.longitude }
                setCurrentLocation(newCurrentLocation);
                console.warn([info.coords, info.coords.longitude])
            });
        }
    }, []);

    return (
        <SafeAreaView style={{ marginTop: 100, marginLeft: 30, height: "100%", width: "100%" }}>
            <View >
                <Text>{props.currentQuestion.question}</Text>
                {
                    props.currentQuestion.inputAnswers &&
                    props.currentQuestion.inputAnswers
                        .map((inputAnswer, index) => {
                            let value = "";
                            if (
                                currentValue[1] === index &&
                                currentValue[2] === "inputAnswers"
                            ) {
                                console.warn("input answers = currentvalue", props.currentAnswer.inputAnswers, props.currentQuestion.inputAnswers)
                                value = currentValue[0]
                            } else if (
                                props.currentQuestion.inputAnswers[index] ===
                                props.currentAnswer.inputAnswers[index]
                            ) {
                                console.warn("why is this showing up", props.currentAnswer.inputAnswers, props.currentQuestion.inputAnswers)
                                value = "";
                            } else {
                                value = props.currentAnswer.inputAnswers[index]
                                console.warn("else", props.currentAnswer.inputAnswers[index])
                            }
                            return (
                                <TextInput
                                    secureTextEntry={props.currentQuestion.hideInput}
                                    value={
                                        value
                                    }
                                    textContentType={props.currentAnswer.type === "email" ? "emailAddress" : "none"}
                                    keyboardType={props.currentAnswer.type === "email" ? "email-address" : "default"}
                                    placeholder={inputAnswer}
                                    onChangeText={(event) => {
                                        const newValue = [event, index, "inputAnswers"];
                                        console.warn("is the new value correct", newValue)
                                        setCurrentValue(newValue);
                                    }}
                                    key={inputAnswer + index}
                                />
                            )
                        })
                }
                {
                    props.currentQuestion.optionalCheckBox &&
                    props.currentQuestion.optionalCheckBox
                        .map((text, index) => {
                            return (<CheckBox
                                containerStyle={{ backgroundColor: "rgba(2,172,235,1)", borderColor: "rgba(2,172,235,1)" }}
                                key={index}
                                size={40}
                                checked={(
                                    currentValue[1] === index &&
                                    currentValue[2] === "optionalCheckBoxAnswer"
                                ) ?
                                    currentValue[0] :
                                    (props.currentAnswer.optionalCheckBoxAnswer[index])
                                }
                                title={text}
                                onPress={() => {
                                    let newAnswer = [];
                                    if (currentValue[1] === index) {
                                        newAnswer = [!currentValue[0], index, "optionalCheckBoxAnswer"]
                                    } else {
                                        newAnswer = [!props.currentAnswer.optionalCheckBoxAnswer[index], index, "optionalCheckBoxAnswer"]
                                    }
                                    setCurrentValue(newAnswer);
                                }} />)
                        })
                }
                {
                    props.currentQuestion.dateInputs &&
                    props.currentQuestion.dateInputs
                        .map((text, index) => {
                            const newDate = new Date();
                            return (
                                <DatePicker
                                    key={index}
                                    onDateChange={(date) => {
                                        setCurrentValue([date, index, "dateInputs"]);
                                    }}
                                    style={{ width: 200, backgroundColor: "white" }}
                                    date={
                                        currentValue[2] === "dateInputs" && currentValue[1] === index ?
                                            currentValue[0] :
                                            props.currentAnswer.dateInputAnswers[index] === props.currentQuestion.dateInputAnswers[index] ?
                                                `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}` :
                                                props.currentAnswer.dateInputAnswers[index]
                                    }
                                    mode="date"
                                    placeholder="select date"
                                    format="DD-MM-YYYY"
                                    minDate={props.currentAnswer.minDate[index]}
                                    maxDate={props.currentAnswer.maxDate[index]}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                />)
                        })
                }
                {
                    props.currentQuestion.radioAnswers &&
                    props.currentQuestion.radioAnswers
                        .map((text, index) => {
                            return (<CheckBox
                                containerStyle={{ backgroundColor: "rgba(2,172,235,1)", borderColor: "rgba(2,172,235,1)" }}
                                key={index}
                                checked={currentValue[0] === index ?
                                    true :
                                    props.currentAnswer.radioAnswers[index] === props.currentAnswer.radioAnswers[index] ?
                                        false :
                                        props.currentAnswer.radioAnswers[index]
                                }
                                title={text}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                onPress={() => {
                                    const newAnswer = [index, index, "radioAnswers"]
                                    setCurrentValue(newAnswer);
                                }} />)

                        })
                }
                {
                    props.currentQuestion.dropdownAnswers &&
                    <View style={{ flex: 1, paddingBottom: 200 }}>
                        <View style={{ height: 64 }} />
                        <DropdownMenu
                            style={{ flex: 1, borderColor: "rgba(2,172,235,1)" }}
                            bgColor={"rgba(2,172,235,1)"}
                            tintColor={'#666666'}
                            activityTintColor={'blue'}
                            // arrowImg={}      
                            // checkImage={}   
                            // optionTextStyle={{color: '#333333'}}
                            // titleStyle={{color: '#333333'}} 
                            maxHeight={150}
                            handler={(index) => setCurrentValue([props.currentQuestion.dropdownAnswers[index], index, "dropdownAnswers"])}
                            data={[props.currentQuestion.dropdownAnswers]}
                        >
                        </DropdownMenu>
                    </View>
                }
                {
                    props.currentQuestion.pinCoordinates &&
                    !!currentLocation.longitude &&
                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: currentLocation.latitude,
                                longitude: currentLocation.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            {
                                !!props.currentQuestion.pinCoordinates.length &&
                                props.currentQuestion.pinCoordinates.map((coordinate, index) => {
                                    return (
                                        props.currentQuestion.draggable ?
                                            <Marker
                                                index={"location coordinates" + 1}
                                                draggable
                                                onDragEnd={(e) => {
                                                    const newCurrentLocation = { latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude }
                                                    getAddress(newCurrentLocation);
                                                    setCurrentLocation(newCurrentLocation);
                                                }}
                                                coordinate={coordinate}
                                            />
                                            :
                                            props.currentQuestion.disguisedLocation ?
                                                <Marker
                                                    index={"coordinates" + index}
                                                    coordinate={{ latitude: coordinate.latitude, longitude: coordinate.longitude }}
                                                />
                                                :
                                                <Circle
                                                    radius={350}
                                                    index={"coordinates" + 1}
                                                    fillColor={"rgba(2,172,235,.4)"}
                                                    center={{
                                                        latitude: coordinate.latitude + Math.random() * .003,
                                                        longitude: coordinate.longitude + Math.random() * .003
                                                    }}
                                                />
                                    )
                                })
                            }
                        </MapView>
                    </View>
                }
            </View >
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: -300,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        height: 300,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});