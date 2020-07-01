import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function SafetyAmenities(props) {
  const [userAnswers, setUserAnswers] = useState({});

  const updateUserBool = (extention) => {
    const newUserAnswer = userAnswers;
    newUserAnswer[extention] = !userAnswers[extention]
    setUserAnswers({ ...newUserAnswer });
    props.onUserInput({ newValue: newUserAnswer[extention], extention: extention });
  };

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => updateUserBool("fireExtinguisher")}
        style={styles.button29}>
        <View style={styles.materialCheckbox3410Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("fireExtinguisher")}
            checked={userAnswers["fireExtinguisher"]}
            style={styles.materialCheckbox3410}
          ></MaterialCheckbox1>
          <Text style={styles.fireExtinguisher}>Fire Extinguisher</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>Safety Amenities</Text>

      <TouchableOpacity
             onPress={() => updateUserBool("smokeDetector")}
      style={styles.button31}>
        <View style={styles.materialCheckbox37Row}>
          <MaterialCheckbox1
             onPress={() => updateUserBool("smokeDetector")}
             checked={userAnswers["smokeDetector"]}
            style={styles.materialCheckbox37}
          ></MaterialCheckbox1>
          <Text style={styles.smokeDetector}>Smoke Detector</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => updateUserBool("cabonMonoxideDetector")}
      style={styles.button32}>
        <View style={styles.materialCheckbox38Row}>
          <MaterialCheckbox1
          onPress={() => updateUserBool("cabonMonoxideDetector")}
          checked={userAnswers["cabonMonoxideDetector"]}
            style={styles.materialCheckbox38}
          ></MaterialCheckbox1>
          <Text style={styles.loremIpsum7}>Carbon Monoxide Detector</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={() => updateUserBool("fireEscape")}
      
      style={styles.button30}>
        <View style={styles.materialCheckbox3593Row}>
          <MaterialCheckbox1
          onPress={() => updateUserBool("fireEscape")}
          checked={userAnswers["fireEscape"]}
            style={styles.materialCheckbox3593}
          ></MaterialCheckbox1>
          <Text style={styles.fireEscape}>Fire Escape</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
            onPress={() => updateUserBool("firstAid")}
      
      style={styles.button33}>
        <View style={styles.materialCheckbox39Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("firstAid")}
            checked={userAnswers["firstAid"]}
            style={styles.materialCheckbox39}
          ></MaterialCheckbox1>
          <Text style={styles.firstAidKit}>First Aid Kit</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.loremIpsum9}>
        Check your local laws, which may require a working{"\n"}
        detector/extinguisher in every room/stay
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button29: {
    width: 384,
    height: 40,
    flexDirection: "row",
    marginTop: 64
  },
  materialCheckbox3410: {
    width: 40,
    height: 40
  },
  fireExtinguisher: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox3410Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 197
  },
  text: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -104,
    marginLeft: 10
  },
  button31: {
    height: 40,
    flexDirection: "row",
    marginTop: 120
  },
  materialCheckbox37: {
    width: 40,
    height: 40
  },
  smokeDetector: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox37Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 203
  },
  button32: {
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox38: {
    width: 40,
    height: 40
  },
  loremIpsum7: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox38Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 107
  },
  button30: {
    height: 40,
    flexDirection: "row",
    marginTop: -120
  },
  materialCheckbox3593: {
    width: 40,
    height: 40
  },
  fireEscape: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox3593Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 242
  },
  button33: {
    height: 40,
    flexDirection: "row",
    marginTop: 80
  },
  materialCheckbox39: {
    width: 40,
    height: 40
  },
  firstAidKit: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox39Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 242
  },
  loremIpsum9: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -240,
    marginLeft: 10
  }
});

export default SafetyAmenities;
