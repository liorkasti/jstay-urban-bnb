import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import Icon from "react-native-vector-icons/Entypo";
import MaterialSwitch1 from "../components/MaterialSwitch1";

function StayRules(props) {
  const [userAnswers, setUserAnswers] = useState({});

  const updateUserBool = (extention) => {
    const newUserAnswer = userAnswers;
    newUserAnswer[extention] = !userAnswers[extention]
    setUserAnswers({ ...newUserAnswer });
    props.onUserInput(newUserAnswer[extention], "hostListing/stayRules/" + extention);
  };

  
  const updateUserInput = (value, extention) => {
    const newUserAnswer = userAnswers;
    newUserAnswer[extention] = value;
    setUserAnswers({ ...newUserAnswer });
    props.onUserInput(newUserAnswer[extention], "hostListing/stayRules/" + extention);
  };


  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => updateUserInput(text, "additionalRules")}
        value={userAnswers["additionalRules"] || ""}
        placeholder="e.g. Only Kosher food in the house.."
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
      <Text style={styles.additionalRules}>Additional rules</Text>

      <View style={styles.materialButtonWithVioletText2Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText11>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet6>
      </View>



      <View style={styles.petsAllowed1Stack}>
        <Text style={styles.petsAllowed1}>Pets allowed</Text>
        <MaterialSwitch1
          onPress={(newValue) => updateUserBool("petsAllowed")}
          value={userAnswers["petsAllowed"]}
          style={styles.materialSwitch5}></MaterialSwitch1>
      </View>
      <View style={styles.loremIpsum3Row}>
        <Text style={styles.loremIpsum3}>
          Suitable for large families {"\n"}(7+)
        </Text>
        <View style={styles.loremIpsum3Filler}></View>
        <MaterialSwitch1
          onPress={(newValue) => updateUserBool("largeFamilies")}
          value={userAnswers["largeFamilies"]}
          style={styles.materialSwitch1}></MaterialSwitch1>
      </View>
      <View style={styles.materialSwitch2Stack}>
        <MaterialSwitch1
          onPress={(newValue) => updateUserBool("suitableInfants")}
          value={userAnswers["suitableInfants"]}
          style={styles.materialSwitch2}></MaterialSwitch1>
        <Text style={styles.loremIpsum4}>
          Suitable for infants {"\n"}(under 2 yrs)
        </Text>
      </View>
      <View style={styles.materialSwitch3Stack}>
        <MaterialSwitch1

          onPress={(newValue) => updateUserBool("suitableChildren")}
          value={userAnswers["suitableChildren"]}
          style={styles.materialSwitch3}></MaterialSwitch1>
        <Text style={styles.loremIpsum5}>
          Suitable for children {"\n"}(ages 2-13)
        </Text>
      </View>
      <View style={styles.materialSwitch4Stack}>
        <MaterialSwitch1
          onPress={(newValue) => updateUserBool("suitableStudents")}
          value={userAnswers["suitableStudents"]}
          style={styles.materialSwitch4}></MaterialSwitch1>
        <Text style={styles.petsAllowed2}>Suitable for students</Text>
      </View>
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}>
          Guests must clean before {"\n"}leaving
        </Text>
        <MaterialSwitch1
          onPress={(newValue) => updateUserBool("guestsClean")}
          value={userAnswers["guestsClean"]}
          style={styles.materialSwitch6}></MaterialSwitch1>
      </View>
      <View style={styles.loremIpsum2Row}>
        <Text style={styles.loremIpsum2}>Suitable for hosting meals</Text>
        <View style={styles.loremIpsum2Filler}></View>
        <MaterialSwitch1
          onPress={(newValue) => updateUserBool("suitableHosting")}
          value={userAnswers["suitableHosting"]}
          style={styles.materialSwitch8}></MaterialSwitch1>
      </View>
      <View style={styles.smokingAllowed1Row}>
        <Text style={styles.smokingAllowed1}>Smoking allowed</Text>
        <View style={styles.smokingAllowed1Filler}></View>
        <MaterialSwitch1
          onPress={(newValue) => updateUserBool("smoking")}
          value={userAnswers["smoking"]}
          style={styles.materialSwitch7}></MaterialSwitch1>
      </View>
      <Text style={styles.whatAmenities1}>Add guidelines for guests</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
    backgroundColor: "rgba(2,172,235,1)"
  },
  textInput1: {
    width: 364,
    height: 132,
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
    marginTop: 541,
    marginLeft: 24
  },
  additionalRules: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -158,
    marginLeft: 24
  },
  materialButtonWithVioletText2: {
    height: 36,
    opacity: 0.46,
    flex: 1,
    marginRight: 25
  },
  materialButtonViolet4: {
    height: 45,
    shadowOpacity: 0.01,
    width: 112
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 213,
    marginLeft: 138,
    marginRight: 20
  },
  group1: {
    height: 91,
    marginTop: -797
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7
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
  text2: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 112,
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
  },
  petsAllowed1: {
    top: 2,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSwitch5: {
    top: 0,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  petsAllowed1Stack: {
    width: 379,
    height: 26,
    marginTop: -753,
    marginLeft: 20
  },
  loremIpsum3: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch1: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum3Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 151,
    marginLeft: 20,
    marginRight: 15
  },
  materialSwitch2: {
    top: 0,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum4: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSwitch2Stack: {
    width: 379,
    height: 48,
    marginTop: -100,
    marginLeft: 20
  },
  materialSwitch3: {
    top: 3,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum5: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSwitch3Stack: {
    width: 379,
    height: 48,
    marginTop: -101,
    marginLeft: 20
  },
  materialSwitch4: {
    top: 0,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  petsAllowed2: {
    top: 2,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSwitch4Stack: {
    width: 379,
    height: 26,
    marginTop: -85,
    marginLeft: 20
  },
  loremIpsum1: {
    top: 2,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialSwitch6: {
    top: 0,
    width: 45,
    height: 23,
    position: "absolute",
    right: 0,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum1Stack: {
    width: 379,
    height: 50,
    marginTop: 234,
    marginLeft: 20
  },
  loremIpsum2: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch8: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  loremIpsum2Row: {
    height: 24,
    flexDirection: "row",
    marginTop: -120,
    marginLeft: 20,
    marginRight: 15
  },
  smokingAllowed1: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 2
  },
  smokingAllowed1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch7: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  smokingAllowed1Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 20,
    marginRight: 15
  },
  whatAmenities1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -320,
    marginLeft: 20,
    marginRight: -7
  }
});

export default StayRules;
