import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Dimensions } from 'react-native';

import DynamicQuestionnaire from "./DynamicQuestionnaire";
import Geolocation from '@react-native-community/geolocation';

export default function DynamicQuestionnaireController(props) {
    const [createAccount, setCreateAccount] = useState(true)
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([])
    const screenHeight = Dimensions.get('window').height;
    // const [questionIndex, setQuestionIndex] = useState(0);
    const [currentLocation, setCurrentLocation] = useState({});

    useEffect(() => {

        const newQuestions = [{
            question: "What's your name?",
            inputAnswers: ["First name", "Last name"],
        }, {
            question: "What's your email address??",
            inputAnswers: ["Email address"],
            optionalCheckBox: ["I dont want to recieve updates via email..."],
            optionalCheckBoxAnswer: [false],
            type: "email"
        }, {
            question: "Create a password",
            inputAnswers: ["password"],
            hideInput: true,
            regEx: ""
        }, {
            question: "When is your date of birth?",
            dateInputs: ["birthday"],
            dateInputAnswers: [],
            minDate: ["05-01-1900"],
            maxDate: [`${new Date().getDate().length > 1 ? new Date().getDate() : 0 + new Date().getDate()}-${new Date().getMonth().length > 1 ? new Date().getMonth() : 0 + new Date().getMonth()}-${new Date().getFullYear() - 16}`],
            calendarInput: true
        }, {
            question: "Do you keep kosher?",
            radioAnswers: ["No", "Yes, I keep standard Kashrut", "Yes, I keep Mehadrin Kashrut"]
        }, {
            question: "Is your stay gender specific?",
            radioAnswers: ["No", "Yes, Woman only", "Yes, Men only"]
        }, {
            question: "Stay type",
            dropdownAnswers: ["Apartment", "Serviced apartment", "House", "duplex", "dormitory", "Mens only dorms", "Womans only dorms", "unique space", "bed and breakfast", "Resort", "Serviced Apartment", "Nature Lodge", "Loft", "bungalow", "cabin", "cottage", "farmhouse", "houseboat", "hut", "tiny house", "townhouse", "Vila", "guesthouse", "guest suite", "camper/RV", "campsite", "cave", "tent", "tree-house", "Hotel", "Hostel",]
        },
        // {
        //     question: "multiple coordinate map (this is for displaying appartments in a cirtain search param)",
        //     pinCoordinates: []
        //     draggable: true
        // },
        // {
        //     question: "Is this where your stay is located",
        //     pinCoordinates: []
        //
        // },
        {
            question: "this map is for showing the area of the apparment (with extended randomized circle)",
            pinCoordinates: [currentLocation],
            disguisedLocation: true
        }];

        const newAnswers = [{
            question: "What's your name?",
            inputAnswers: ["First name", "Last name"],
        }, {
            question: "What's your email address??",
            inputAnswers: ["Email address"],
            optionalCheckBox: ["I dont want to recieve updates via email..."],
            optionalCheckBoxAnswer: [false],
            type: "email"
        }, {
            question: "Create a password",
            inputAnswers: ["password"],
            hideInput: true,
            regEx: ""
        }, {
            question: "When is your date of birth?",
            dateInputs: ["birthday"],
            dateInputAnswers: [],
            minDate: ["05-01-1900"],
            maxDate: [`${new Date().getDate().length > 1 ? new Date().getDate() : 0 + new Date().getDate()}-${new Date().getMonth().length > 1 ? new Date().getMonth() : 0 + new Date().getMonth()}-${new Date().getFullYear() - 16}`],
            calendarInput: true
        }, {
            question: "Do you keep kosher?",
            radioAnswers: ["No", "Yes, I keep standard Kashrut", "Yes, I keep Mehadrin Kashrut"]
        },
        {
            question: "Is your stay gender specific?",
            radioAnswers: ["No", "Yes, Woman only", "Yes, Men only"]
        },
        // {
        //     question: "multiple coordinate map (this is for displaying appartments in a cirtain search param)",
        //     pinCoordinates: []
        // },
        // {
        //     question: "Is this where your stay is located",
        //     pinCoordinates: []
        // },
        {
            question: "this map is for showing the area of the apparment (with extended randomized circle)",
            pinCoordinates: [currentLocation],
            disguisedLocation: true,
            draggable: true

        }];

        Geolocation.getCurrentPosition(info => {
            const newCurrentLocation = { latitude: info.coords.latitude, longitude: info.coords.longitude }
            setCurrentLocation(newCurrentLocation);
            console.warn([info.coords, info.coords.longitude])
        });
        setAnswers([...newAnswers])
        setQuestions([...newQuestions]);
    }, [])


    return (
        <View>
            <View style={{ height: screenHeight, backgroundColor: "rgba(2,172,235,1)" }}>
                <ScrollView >
                    <View style={{ alignItems: "flex-start", marginTop: 35 }}>
                        <Button title="< Back" style={{ left: 0 }} onPress={() => { props.backToLogin() }}></Button>
                    </View>
                    {createAccount &&
                        answers[0] &&
                        questions[0] && console.warn("does work") ||
                        questions.map((questionObject, index) => {
                            return (
                                <View style={{ flex: 1, flexDirection: "column" }}>
                                    <DynamicQuestionnaire
                                        key={"dynamic" + index}
                                        currentAnswer={answers[index]}
                                        currentQuestion={questionObject}
                                        updateAnswers={(newAnswer) => {
                                            const newAnswers = answers;
                                            newAnswers[index][newAnswer[2]][newAnswer[1]] = newAnswer[0];
                                            setAnswers(newAnswers);
                                        }}
                                    />
                                </View>

                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={{ height: 50, width: 300, flexDirection: "row", }}>
                {
                    /*questionIndex*/0 > 0
                        ?
                        <Button title="Back" onPress={() => pastQuestion()}> </Button>
                        : null
                }
                <Button
                    buttonStyles={{ width: 100 }}
                    title={questions.length - 1 === 0/*questionIndex*/ ? "Submit" : "Next"}
                    onPress={() => nextQuestion()}> </Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});