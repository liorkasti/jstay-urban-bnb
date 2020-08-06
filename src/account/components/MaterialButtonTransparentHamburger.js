import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Hamburger from 'react-native-animated-hamburger';
import MyProfileMenu from "./MyProfileMenu";

function MaterialButtonTransparentHamburger(props) {

  return (
    <TouchableOpacity
      onPress={() => { props.onPress() }}
    // onPress={() => showMenu(), console.warn("MaterialButtonTransparentHamburger show menu status: ", showMenu)}
    >
      {/* <Icon name="menu" style={styles.caption}></Icon> */}

      <Hamburger
        type="cross"
        active={props.showMenu}
        onPress={() => { props.onPress(); }}
        underlayColor="transparent" style={[styles.container, props.style]}
      >
      </Hamburger>

      {/* {props.showMenu &&
        <MyProfileMenu
          // onUserPress={(action) => props.onUserPress(action)}
          onPress={() => onShowMenu(!showMenu), console.warn("show menu status: ", showMenu)}
          style={styles.headerMenu} />
      } */}
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2
  },
  caption: {
    color: "rgba(0,88,155,1)",
    fontSize: 24
  }
});

export default MaterialButtonTransparentHamburger;