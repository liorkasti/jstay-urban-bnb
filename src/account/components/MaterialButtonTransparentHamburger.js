import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Hamburger from 'react-native-animated-hamburger';

function MaterialButtonTransparentHamburger(props) {
  // const [showMenu, setShowMenu] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => onShowMenu(showMenu)}
      style={[styles.container, props.style]}>
      {/* <Icon name="menu" style={styles.caption}></Icon> */}
      <Hamburger
        type="cross"
        underlayColor="transparent"
        style={[styles.container, props.style]}
      >
      </Hamburger>
    </TouchableOpacity>
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