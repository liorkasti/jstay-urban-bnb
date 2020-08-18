import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Platform } from "react-native"
import { useHistory } from "react-router-dom";

import HeaderBarDark from "../components/HeaderBarDark"

//import all builder x files related to this directory
import AccountDetails from "./AccountDetails";
import MyDetails from "./MyDetails";
import ProfilePicture from "./ProfilePicture";
import MyKashrut from "./MyKashrut";

import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database";
// const usersCollection = firestore().collection('Users');

const imagePickerOptionsoptions = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true,
        waitUntilSaved: true
    },
};

const user = auth().currentUser;
let refrence = "";

const setRefrence = () => {
    refrence = database().ref('/users/generalInfo/' + user.uid);
};

export default function CreateAccountIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    const [profilePictureUri, setProfilePictureUri] = useState("");
    const [currentLoginAccount, setCurrentLoginAccount] = useState({});
    const [didCreateAccount, setDidCreateAccount] = useState(true);
    const [showNothing, setShowNothing] = useState(true);
    const [totalAnswers, setTotalAnswers] = useState([]);

    //this send user to route if they want to create a stay
    let history = useHistory();



    const updateUserInput = (value, extention) => {
        refrence.update({ [extention]: value }).then((res) => {
            console.warn("this is the response for update", res)
        })
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        setTimeout(() => {
            if (user) {
                setComponentIndex(componentIndex + 1);
                setDidCreateAccount(false);
                setShowNothing(false);
            }
        }, 300)

        if (props.location.state) {
            // console.warn("props for create account index", props.location.state)
        };
        return subscriber;
    }, []);

    function onAuthStateChanged(user) {
        if (user) {
            setRefrence();
        }
    }

    const addProfilePicture = () => {
        ImagePicker.showImagePicker(imagePickerOptionsoptions, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: (Platform.OS === 'android') ? response.uri : response.uri.replace('file://', '') };
                uploadToFireBase().then((res) => {
                    console.log("upload file to firebase response", res)
                })
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };


                setProfilePictureUri(source.uri);
            }
        });
    }

    const uploadToFireBase = async (uri) => {
        const reference = storage().ref('black-t-shirt-sm.png');
        // path to existing file on filesystem
        const pathToFile = uri;
        // uploads file
        const response = await reference.putFile(pathToFile);
        return response;
    }

    useEffect(() => {
        // console.warn("user collection",usersCollection);
        console.warn("CreateAccountIndex page: ", componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        };
        if (componentIndex < 1 && !didCreateAccount) {
            setShowNothing(true);
            user.delete().then(() => {
                history.push("/");
            })
        };
        if (componentIndex < 0) {
            history.push("/")
        }
    }, [componentIndex])

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    // const componentKeys = ["MyDetails", "MyKashrut", "ProfilePicture"];
    const componentKeys = ["AccountDetails", "MyDetails", "MyKashrut", "ProfilePicture"];

    const createAccountWithEmail = () => {
        const { email, password } = currentLoginAccount;

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            });
    }
    if (showNothing) return <View />;
    return (

        <View style={styles.container}>
            <HeaderBarDark screenWidth={windowWidth}
                style={styles.header} header="Create Account"
                onHome={() => { onHome() }}
                onBack={() => setComponentIndex(componentIndex - 1)}
            />

            {/* <ScrollView style={styles.scrollView}> */}

            {/* copy paste below component*/}
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "AccountDetails"
                &&
                //change component name to the new import 
                <AccountDetails

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    // onNext={() => {
                    //     if(currentLoginAccount.email && currentLoginAccount.email){
                    //         setComponentIndex(componentIndex + 1);
                    //         createAccountWithEmail();
                    //     }
                    // }}

                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    onUserInput={({ email, password }) => {
                        const newCurrentLoginAccount = currentLoginAccount;
                        if (email) newCurrentLoginAccount.email = email;
                        if (password) newCurrentLoginAccount.password = password;
                        setCurrentLoginAccount(newCurrentLoginAccount)
                    }}

                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "MyDetails"
                &&
                //change component name to the new import 
                <MyDetails

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                    onUserInput={(value, key) => { 
                        console.warn("onUserInput (value, key): ", value, key)
                        // updateUserInput(value, key) 
                    }}

                    onUserInput={() => { }}

                    onHome={() => { goToHome() }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onUserInput={(value, key) => {
                        updateUserInput(value, key);
                    }}

                    currentAnswers={totalAnswers[componentIndex]}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "MyKashrut"
                &&
                //change component name to the new import 
                <MyKashrut

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onUserPress={(value) => { updateUserInput(value, "kashrutLevel") }}

                    onHome={() => { goToHome() }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "ProfilePicture"
                &&
                //change component name to the new import 
                <ProfilePicture

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        updateUserInput(true, "didFinishAccountSetup")
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    profilePictureUri={profilePictureUri}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    addProfilePicture={() => {
                        addProfilePicture();
                    }}
                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {/* </ScrollView> */}
        </View>);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,88,155,1)",
        flex: 1,
        flexDirection: "column",
        width: windowWidth,
    },
    header: {
        zIndex: 20,
    }
});
