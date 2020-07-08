import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialButtonPrimary5 from "../components/MaterialButtonPrimary5";
import Icon from "react-native-vector-icons/Entypo";

function CancelationHost(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.lengthOfStay1}>
        Are you sure you would like to cancel?
      </Text>
      <Text style={styles.fullRefund}>Your guests will recieve a full refund</Text>
      <TextInput
        placeholder="e.g. my plans have changed"
        placeholderTextColor="rgba(177,177,177,1)"
        autoCapitalize="sentences"
        autoCorrect={true}
        maxLength={200}
        multiline={true}
        returnKeyType="done"
        inlineImagePadding={0}
        numberOfLines={4}
        returnKeyLabel="Save"
        spellCheck={true}
        style={styles.textInput1}
      ></TextInput>
      <Text style={styles.pleaseTellUsWhy}>Please tell us why:</Text>
      <Text style={styles.night1}>Total refund: $0.00</Text>
      <MaterialButtonPrimary5
      onPress={() =>props.messageHost("cancelation")}
        style={styles.materialButtonPrimary5}
      ></MaterialButtonPrimary5>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)",
  },
  lengthOfStay1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginRight: 42
  },
  textInput1: {
    width: 399,
    height: 119,
    backgroundColor: "rgba(230, 230, 230,0.3)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.03,
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginTop: 43,
    marginLeft: 7
  },

  fullRefund: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    marginLeft: 40
  },
  pleaseTellUsWhy: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -136,
    marginLeft: 30
  },
  night1: {
    width: 174,
    height: 24,
    color: "rgba(0,88,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 128,
    marginLeft: 30
  },
  materialButtonPrimary5: {
    width: 180,
    height: 36,
    borderRadius: 10,
    marginTop: 6,
    marginLeft: 193
  },
  group1: {
    height: 91,
    marginTop: -381
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 13,
    marginRight: 38
  },
  button4: {
    width: 29,
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  cancelation: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 105,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 10
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    height: 62,
    width: 62,
    flexDirection: "row"
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4RowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  }
});

export default CancelationHost;
