import React, { useState,useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { sendValue } from "../LoginHandler"

function MaterialIconTextbox4(props) {
  const [value, setValue] = useState("");
  
  useEffect(()=>{
      sendValue({value, type: "email", url: undefined })
  },[value]);

  return (
    <View style={[styles.container, props.style]}>
      <Icon name="email-outline" style={styles.iconStyle}></Icon>
      <TextInput
        value={value}
        autoCompleteType="email"
        placeholder={props.textInput1 || "Label"}
        placeholderTextColor="rgba(177,177,177,1)"
        style={styles.inputStyle}
        onChangeText={(res)=>{setValue(res);}}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "rgba(177,177,177,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialIconTextbox4;
