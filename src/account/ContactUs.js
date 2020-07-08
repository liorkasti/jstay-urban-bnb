import React, { Component } from "react";
import { StyleSheet, View, Text,Linking } from "react-native";
import CupertinoButtonInfo from "./components/CupertinoButtonInfo";
import CupertinoButtonInfo1 from "./components/CupertinoButtonInfo1";

function ContactUs(props) {
  return (
    <View style={styles.container}>
      <CupertinoButtonInfo
      onPress={() =>props.messageSupport()}
        bookings="Message Us"
        style={styles.cupertinoButtonInfo1}
      ></CupertinoButtonInfo>
      <View style={styles.cupertinoButtonInfo2Stack}>
        <CupertinoButtonInfo1
        onPress={() =>{Linking.openURL('https://wa.me/442038076318?text=I\'m%20interested%20in%20your%20car%20for%20sale')      }}
          saveChanges="WhatsApp Us"
          style={styles.cupertinoButtonInfo2}
        ></CupertinoButtonInfo1>
        <Text style={styles.loremIpsum3}>
          Corporate support{"\n"}
          {"\n"}If you are a looking to partner with Jstay or you are a company
          with similar interests contact us here.{"\n"}
          {"\n"}Please note:{"\n"}our offices are shut on Shabbat and jewish
          holidays.
        </Text>
      </View>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}></Text>
        <Text style={styles.loremIpsum2}>
          Customer support{"\n"}
          {"\n"}At Jstay we pride ourselves on outstanding customer service, to
          avoid unneccesary waiting check our FAQ page, if you have any other
          questions concerning our app feel free to message our team and we will
          get back to you as soon as one of our agents become available/{"\n"}
          {"\n"}Please note:{"\n"}our offices are shut on Shabbat and jewish
          holidays.
        </Text>
      </View>
      <Text style={styles.loremIpsum4}>
        Emergency contact{"\n"}
        {"\n"}If you are unable to check-in and cant get in touch with host, or
        host cant get hold of guest call us on{"\n"}
        {"\n"}*57829 {"\n"}
        {"\n"}Please note:{"\n"}our offices are shut on Shabbat and jewish
        holidays.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  rect1: {
    width: 414,
    height: 91,
    borderWidth: 0,
    borderColor: "rgba(0,88,155,1)",
    borderBottomWidth: 1
  },
  cupertinoButtonInfo1: {
    height: 45,
    width: 173,
    borderRadius: 10,
    marginTop: 223,
    marginLeft: 30
  },
  cupertinoButtonInfo2: {
    height: 45,
    width: 173,
    position: "absolute",
    left: 0,
    borderRadius: 10,
    top: 130
  },
  loremIpsum3: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    width: 330,
    top:-10,
    height: 144,
  },
  cupertinoButtonInfo2Stack: {
    width: 342,
    height: 144,
    marginTop: 40,
    marginLeft: 30
  },
  loremIpsum: {
    top: 75,
    left: 51,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14
  },
  loremIpsum2: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    width: 338,
    height: 191,
    left: 0
  },
  loremIpsumStack: {
    width: 338,
    height: 191,
    marginTop: -438,
    marginLeft: 30
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    width: 334,
    height: 163,
    marginTop: 329,
    marginLeft: 30
  }
});

export default ContactUs;
