import React, { useState, useEffect } from "react";
import { View, StyleSheet} from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import Home from "./Home";

export default function Index(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    

    
    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["ComingSoon"];

    return (
        <View style={styles.container}>
            {/* copy paste below component*/}
            
            {
                //replace this string with the string 
                //in componentKeys related to this import
                
                componentKeys[componentIndex] === "ComingSoon"
                &&
                //change component name to the new import 
                <Home comingSoonDirectory="home"
                    
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
});