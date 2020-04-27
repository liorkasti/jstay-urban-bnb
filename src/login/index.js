import React, { useState, useEffect } from "react";
import { View } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import ComingSoon from "../modules/comingSoon";

export default function Login(props) {
    const [componentIndex, setComponentIndex] = useState(0);

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["Login"];

    //user finished create a stay
    function onSuccessfulLogin() {
        history.push("/home");
    };

    useEffect(() => {
        //this is if they press next on the last screen in the list
        if(componentIndex >componentKeys.length){
            history.push("/home");
        }
    },[componentIndex])

    return (
        <View style={{ backgroundColor: "green" }}>
            {/* copy paste below component*/}

            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[setComponentIndex] === "ComingSoon"
                &&
                //change component name to the new import 
                <ComingSoon /*coming soon requires */ comingSoonPath="login"

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
                />
            }
        </View>
    );
}
