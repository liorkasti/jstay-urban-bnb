import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native"
import { useHistory } from "react-router-dom";

//login and firebase
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import database from "@react-native-firebase/database";

//import all builder x files related to this directory
import Welcome from "./Welcome";
import Login from "./Login";


export default function LoginIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    const [currentUser, setCurrentUser] = useState();
    
    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["Welcome", "Login"];

    //user finished create a stay
    function onSuccessfulLogin() {
        history.push("/home");
    };

    useState(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        
        return subscriber;
    },[]);

    useEffect(() => {
        if(currentUser){
        database()
        .ref(`/users/generalInfo/${currentUser.uid}`)
        .once('value')
        .then(snapshot => {
            snapshot.val();
            if (snapshot.didFinishAccountSetup) {
                history.push("/home");
            }else{
                history.push("/createAccount");
            }
        });
    }
    },[currentUser])

    function onCreateAccount() {
        history.push("/createAccount");
    }

   

    useEffect(() => {
        // console.warn(componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        }
    }, [componentIndex])


    function onAuthStateChanged(user) {
        if (user) { 
            setCurrentUser(user);
         } 
        console.warn("auth state did change with:", user)
      }

    async function signInWithGoogle() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        //   console.warn("id token", idToken);
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        console.warn("googleCredential", googleCredential);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }


    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    };

    const signInWithFacebookHandler = () => {
        onFacebookButtonPress().then((res) => {
            // console.log("signed in with google with:", res)
        })
    };

    const signInWithGoogleHandler = () => {
        signInWithGoogle().then((res) => {
            // console.log("signed in with google with:", res)
        })
    };


    return (
        <View style={styles.container}>
            {//WelcomePage Component
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "Welcome"
                &&
                //change component name to the new import 
                <Welcome
                    style={styles.componentStyle}

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    createAccount={() => onCreateAccount()}

                    facebookSignin={() => { signInWithFacebookHandler() }}

                    googleSignin={() => signInWithGoogleHandler()}

                    login={() => {
                        // console.warn("setcomponentIndex for login ")
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }

            {//Login Component

                componentKeys[componentIndex] === "Login"
                &&
                //change component name to the new import 
                <Login
                    style={styles.componentStyle}
                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

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

                    createAccount={() => { onCreateAccount() }}

                    login={() => {
                        // console.warn("setcomponentIndex for login ")
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        width: windowWidth,
        height: windowHeight
    }
});