import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import DropDownPicker from 'react-native-dropdown-picker';

function DropDown(props) {
  if (!props.hostListing) return (<View />)
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textInput7Stack}>
        <DropDownPicker
          items={props.hostListing}
          defaultValue={props.hostListing[0].value}
          // placeholder={props.textInput1 || "United States of America"}
          dropDownStyle={styles.textInput8}
          dropDownMaxHeight= {190}
          style={styles.textInput7}
          onChangeItem={item => { props.onChange(item.value); }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput8: {
    top: 1,
    left: 0,
    width: 280,
    height: 100,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    paddingHorizontal: 10
  },
  textInput7: {
    top: 1,
    left: 0,
    width: 280,
    height: 40,
    backgroundColor: "rgba(230,230,230,1)",
    color: "#121212",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    fontFamily: "roboto-regular",
    paddingHorizontal: 10
  },
  icon4: {
    top: 0,
    left: 239,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  textInput7Stack: {
    width: 280,
    height: 42
  }
});

export default DropDown;
