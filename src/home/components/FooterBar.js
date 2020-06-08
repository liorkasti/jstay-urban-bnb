import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FooterMenuDropdown from "../components/FooterMenuDropdown";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MaterialBasicFooter1(props) {
  const [showFooterMenu, setShowFooterMenu] = useState(false);

  return (
    <View style={[styles.container, props.style]}>

      {/*dropdown menu for account */}
      {
        showFooterMenu &&
        <FooterMenuDropdown handleFooterMenu={(menuItem)=>{props.handleFooterMenu(menuItem)}} style={styles.materialBasicFooter1} />
      }

      <TouchableOpacity onPress={()=>{props.handleFooterBar("favorites"); }} style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="home-heart"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.handleFooterBar("trips")} style={styles.activebtnWrapper}>
        <MaterialCommunityIconsIcon
          name="airplane-landing"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.activeText}>My Trips</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnWrapper2}>
        {props.hasMessages &&
          <MaterialCommunityIconsIcon
            name={`numeric-${props.ammountOfMessages}-box`}
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
        }
        <MaterialCommunityIconsIcon
          name="message-processing"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn2Text}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setShowFooterMenu(!showFooterMenu);
        }}
        style={styles.btnWrapper3}>

        {
          props.needToFinishProfile &&
          <FontAwesomeIcon
            name="exclamation"
            style={styles.icon5}
          ></FontAwesomeIcon>
        }
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn3Text}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  materialBasicFooter1: {
    left: "300%",
    height: 700,
    // position: "relaative",
    right: 0,
    bottom: 48
  },
  btnWrapper1: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  activebtnWrapper: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    paddingTop: 6,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    paddingTop: 0,
    opacity: 0.8,
    marginTop: 0
  },
  activeText: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  btnWrapper2: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    flexWrap: "nowrap",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn2Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  btnWrapper3: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    flexWrap: "nowrap",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn3Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    fontFamily: "roboto-regular",
    textAlign: "center"
  }
});

export default MaterialBasicFooter1;
