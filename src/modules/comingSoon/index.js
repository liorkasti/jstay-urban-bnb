import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ComingSoonDark from "./ComingSoonDark";
import ComingSoonLight from "./ComingSoonLight";

function comingSoon(props) {
  return (
    <View style={styles.container}>
        {props.isLight ? 
        <ComingSoonLight ComingSoonDirectory={props.ComingSoonDirectory} onBack={props.onBack}/>
        : <ComingSoonDark ComingSoonDirectory={props.ComingSoonDirectory} onBack={props.onBack}/>
    }
  </View>
  );
}

const styles = StyleSheet.create({
 
});

export default ComingSoon;
