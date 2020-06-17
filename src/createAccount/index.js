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
import auth from '@react-native-firebase/auth';

const imagePickerOptionsoptions = {
    title: 'Profile Picture',
    storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true,
        waitUntilSaved: true
    },
};

const user = auth().currentUser;

export default function CreateAccountIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    const [backHistory, setbackHistory] = useState("");
    const [photoPath, setPhotoPath] = useState({isUri: true, builtIn: true});

    const [userAccountDetails,setUserAccountDetails] = useState({});
    //this send user to route if they want to create a stay
    let history = useHistory();


    useEffect(() => {
        if (props.location.state) {
            setbackHistory(props.location.state);
            setPhotoPath({isUri:false, url: props.location.state.photoUrl})
            if (!props.location.state.showPassword) {
                setComponentIndex(1);
            }
            console.warn("props for create account index", props.location.state)
        };
    }, []);


    const saveUserInfo = (userInfo) => {
        console.warn("new userInfo", userInfo);
        let newUserInfo = userAccountDetails;
        newUserInfo.userInfo = userInfo.userInfo;
        setUserAccountDetails(newUserInfo);
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
                setPhotoPath({ isUri: true, uri: source.uri })
                saveUserInfo({ isUri: true, uri: source.uri })

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            }
        });
    }

    const uploadToFireBase = async (uri) => {
        console.warn("user", user)
        const reference = storage().ref(`images/profilePictures/${user.uid}.png`);
        // path to existing file on filesystem
        const pathToFile = uri;
        console.warn("the uri is", uri);
        // uploads file
        const response = await reference.putFile(pathToFile);
        return response;
    }

    const deleteAccount = () => {
        user.delete().then(function () {
            setTimeout(() => {
                history.push("/")
            })
        }).catch(function (error) {
            history.push("/")
            console.warn("error from delete account", error)
        });
    }

    useEffect(() => {
        console.warn(componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            if(photoPath.isUri){
                uploadToFireBase(photoPath.uri);
            }
            history.push("/home");
        };
        if (componentIndex < (backHistory ? 1 : 0)) {
            if (backHistory) {
                deleteAccount();
            } else {
                history.push("/");
            }
        };
    }, [componentIndex])

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["AccountDetails", "MyDetails", "MyKashrut", "ProfilePicture"];

    if (backHistory && componentIndex === 0) return <View />;

    return (

        <View style={styles.container}>
            <HeaderBarDark screenWidth={windowWidth} style={styles.header} header="Create Account" onHome={() => { onHome() }} onBack={() => setComponentIndex(componentIndex - 1)} />
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
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

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

                componentKeys[componentIndex] === "MyDetails"
                &&
                //change component name to the new import 
                <MyDetails

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    familyName={backHistory.familyName}
                    firstName={backHistory.firstName}
                    email={backHistory.email}

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

                componentKeys[componentIndex] === "MyKashrut"
                &&
                //change component name to the new import 
                <MyKashrut

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    saveKashrut={(selectedKashrut) => {
                        saveUserInfo({ selectedKashrut: selectedKashrut })
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
                        addProfilePicture(true);
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    photoPath={photoPath}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    addProfilePicture={() => { addProfilePicture() }}
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