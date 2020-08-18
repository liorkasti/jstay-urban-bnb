import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function ChildFriendlyAmenities(props) {
  const [userAnswers, setUserAnswers] = useState({});
  useEffect(() => {
    if (props.savedValuesState) {
      setUserAnswers(props.savedValuesState)
    }
  }, []);

  const updateUserBool = (extention) => {
    const newUserAnswer = userAnswers;
    newUserAnswer[extention] = !userAnswers[extention]
    setUserAnswers({ ...newUserAnswer });
    props.onUserInput({ newValue: newUserAnswer[extention], extention: extention });
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.childFriendly}>Child Friendly</Text>
      {/* Bars on Windows */}
      <TouchableOpacity style={styles.button1009}
        onPress={() => updateUserBool("childAmenities/windowBars")}>
        <View style={styles.materialCheckbox372Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("childAmenities/windowBars")}
            checked={userAnswers["childAmenities/windowBars"]}
            style={styles.materialCheckbox372}
          ></MaterialCheckbox1>
          <Text style={styles.barsOnWindows}>Bars on Windows</Text>
        </View>
      </TouchableOpacity>
      {/* Highchair */}
      <TouchableOpacity style={styles.button1013}
        onPress={() => updateUserBool("childAmenities/highChair")}>
        <MaterialCheckbox1
          onPress={() => updateUserBool("childAmenities/highChair")}
          checked={userAnswers["childAmenities/highChair"]}
          style={styles.materialCheckbox382}
        ></MaterialCheckbox1>
        <Text style={styles.highchair}>Highchair</Text>
      </TouchableOpacity>
      {/* Crib */}
      <TouchableOpacity style={styles.button1011}
        onPress={() => updateUserBool("childAmenities/crib")}>
        <MaterialCheckbox1
          onPress={() => updateUserBool("childAmenities/crib")}
          checked={userAnswers["childAmenities/crib"]}
          style={styles.materialCheckbox34102}
        ></MaterialCheckbox1>
        <Text style={styles.crib}>Crib</Text>
      </TouchableOpacity>
      {/* Stairwell Gat */}
      <TouchableOpacity style={styles.button1012}
        onPress={() => updateUserBool("childAmenities/stairwellGate")}>
        <View style={styles.materialCheckbox35932Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("childAmenities/stairwellGate")}
            checked={userAnswers["childAmenities/stairwellGate"]}
            style={styles.materialCheckbox35932}
          ></MaterialCheckbox1>
          <Text style={styles.stairwellGate}>Stairwell Gate</Text>
        </View>
      </TouchableOpacity>
      {/* Car Seat */}
      <View style={styles.button1014Stack}>
        <TouchableOpacity style={styles.button1014}
          onPress={() => updateUserBool("childAmenities/carSeat")}>
          <View style={styles.materialCheckbox392Row}>
            <MaterialCheckbox1
              onPress={() => updateUserBool("childAmenities/carSeat")}
              checked={userAnswers["childAmenities/carSeat"]}
              style={styles.materialCheckbox392}
            ></MaterialCheckbox1>
            <Text style={styles.carSeat2}>Car Seat</Text>
          </View>
        </TouchableOpacity>
        {/* Child Friendly Games/Toys */}
        <TouchableOpacity style={styles.button1015}
          onPress={() => updateUserBool("childAmenities/childGamesToys")}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("childAmenities/childGamesToys")}
            checked={userAnswers["childAmenities/childGamesToys"]}
            style={styles.materialCheckbox35933}
          ></MaterialCheckbox1>
          <Text style={styles.carSeat1}>Child Friendly Games/Toys</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.loremIpsum73}>
        Please select what extras you provide to guests traveling with children
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  childFriendly: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 10
  },
  button1009: {
    height: 40,
    flexDirection: "row",
    marginTop: 120
  },
  materialCheckbox372: {
    width: 40,
    height: 40
  },
  barsOnWindows: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox372Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 24
  },
  button1013: {
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox382: {
    width: 40,
    height: 40
  },
  highchair: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    flex: 1,
    marginTop: 10
  },
  button1011: {
    height: 40,
    flexDirection: "row",
    marginTop: -160
  },
  materialCheckbox34102: {
    width: 40,
    height: 40
  },
  crib: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    flex: 1,
    marginTop: 10
  },
  button1012: {
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox35932: {
    width: 40,
    height: 40
  },
  stairwellGate: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox35932Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 24
  },
  button1014: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox392: {
    width: 40,
    height: 40
  },
  carSeat2: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox392Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 3
  },
  button1015: {
    top: 39,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox35933: {
    width: 40,
    height: 40
  },
  carSeat1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    flex: 1,
    marginRight: 44,
    marginTop: 10
  },
  button1014Stack: {
    height: 79,
    marginTop: 80
  },
  loremIpsum73: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -278,
    marginLeft: 10
  }
});

export default ChildFriendlyAmenities;
