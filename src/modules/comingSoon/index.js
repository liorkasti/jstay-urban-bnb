import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ComingSoonDark from "../comingSoon/ComingSoonDark";
import ComingSoonLight from "../comingSoon/ComingSoonLight";

function ComingSoon(props) {
  return (
    <View style={{ flex: 1 }}>
      {props.isLight ?
        <ComingSoonLight ComingSoonDirectory={props.ComingSoonDirectory} onBack={props.onBack} />
        : <ComingSoonDark ComingSoonDirectory={props.ComingSoonDirectory} onBack={props.onBack} />
      }
    </View>
  );
}


export default ComingSoon;
