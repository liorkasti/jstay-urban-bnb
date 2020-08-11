import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import CupertinoStepper1 from "../components/CupertinoStepper1";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import Icon from "react-native-vector-icons/Entypo";

function StayLayout(props) {
const [answers, setAnswers] = useState({});

const onChangeLayout = (number, path) => {
  props.onUserInput(number, path, "hostListing")
  const newUserAnswer = answers;
  newUserAnswer[path] = number || 0;
  setAnswers({ ...newUserAnswer });
};


  return (
    <View style={styles.container}>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>How many bedrooms are there?</Text>
        <Text style={styles.text}>
          Children&#39;s bedrooms and smaller guestrooms should be counted as
          half bedrooms
        </Text>
      </View>
      <View style={styles.loremIpsum2StackRow}>
        <View style={styles.loremIpsum2Stack}>
          <Text style={styles.loremIpsum2}></Text>
          <Text style={styles.text3}>Master</Text>
          <Text style={styles.loremIpsum12}></Text>
        </View>
        <Text style={styles.text4}>Full</Text>
        <Text style={styles.text5}>Half</Text>
      </View>
      <Text style={styles.loremIpsum3}>How many bathrooms are there?</Text>
      <Text style={styles.loremIpsum4}>Is there outdoor space?</Text>
      <Text style={styles.extras}>Are there any common areas?</Text>
      <View style={styles.loremIpsum8Stack}>
        <Text style={styles.loremIpsum8}>How many guests can stay?</Text>
        <Text style={styles.text2}>
          Kindly check that you have enough beds to accommodate all guests
          comfortably
        </Text>
        <Text style={styles.loremIpsum10}></Text>
      </View>
      <View style={styles.loremIpsum9StackRow}>
        <View style={styles.loremIpsum9Stack}>
          <Text style={styles.loremIpsum9}></Text>
          <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "bedrooms/master")}}
            text1="master"
            currentValue={answers["bedrooms/master"]}
            style={styles.cupertinoStepper3}
          ></CupertinoStepper1>
        </View>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "bedrooms/full")}}
          text1="full"
          currentValue={answers["bedrooms/full"]}
          style={styles.cupertinoStepper2}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "bedrooms/half")}}
          text1="half"
          currentValue={answers["bedrooms/half"]}
          style={styles.cupertinoStepper1}
        ></CupertinoStepper1>
      </View>
      <Text style={styles.text1}>
        Half bathrooms do not include shower or bathtub
      </Text>
      <View style={styles.text6Row}>
        <Text style={styles.text6}>Ensuite</Text>
        <Text style={styles.text7}>Full</Text>
        <Text style={styles.text8}>Half</Text>
      </View>
      <View style={styles.loremIpsum11StackRow}>
        <View style={styles.loremIpsum11Stack}>
          <Text style={styles.loremIpsum11}></Text>
          <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "outdoorSpaces/garden")}}
            text1="garden"
          currentValue={answers["outdoorSpaces/garden"]}
            style={styles.cupertinoStepper18}
          ></CupertinoStepper1>
        </View>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "outdoorSpaces/balcony")}}
          text1=""
          currentValue={answers["outdoorSpaces/balcony"]}
          style={styles.cupertinoStepper17}
        ></CupertinoStepper1>
        <CupertinoStepper1
          currentValue={answers["outdoorSpaces/patio"]}
          onChange={(newNumber)=>{onChangeLayout(newNumber, "outdoorSpaces/patio")}}
          text1="patio"
          style={styles.cupertinoStepper16}
        ></CupertinoStepper1>
      </View>
      <View style={styles.text9Row}>
        <Text style={styles.text9}>Adults</Text>
        <Text style={styles.text10}>Children</Text>
      </View>
      <View style={styles.loremIpsum13StackStackRow}>
        <View style={styles.loremIpsum13StackStack}>
          <View style={styles.loremIpsum13Stack}>
            <Text style={styles.loremIpsum13}></Text>
            <CupertinoStepper1
          currentValue={answers["commonAreas/diningRoom"]}
          onChange={(newNumber)=>{onChangeLayout(newNumber, "commonAreas/diningRoom")}}
              text1="dining room"
              style={styles.cupertinoStepper24}
            ></CupertinoStepper1>
          </View>
          <Text style={styles.loremIpsum14}></Text>
        </View>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "commonAreas/living")}}
          text1="Living Room"
          currentValue={answers["commonAreas/living"]}
          style={styles.cupertinoStepper23}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "commonAreas/office")}}
          text1="Office"
          currentValue={answers["commonAreas/office"]}
          style={styles.cupertinoStepper22}
        ></CupertinoStepper1>
      </View>
      <View style={styles.text12Row}>
        <Text style={styles.text12}>Garden</Text>
        <Text style={styles.text13}>Balcony</Text>
        <Text style={styles.text14}>Patio</Text>
      </View>
      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText1Filler}></View>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet6>
      </View>
      <View style={styles.cupertinoStepper6Row}>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "bathrooms/ensuite")}}
          text1="Ensuite"
          currentValue={answers["bathrooms/ensuite"]}
          style={styles.cupertinoStepper6}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "bathrooms/full")}}
          text1="Full"
          currentValue={answers["bathrooms/full"]}
          style={styles.cupertinoStepper5}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "bathrooms/half")}}
          text1="Half"
          currentValue={answers["bathrooms/half"]}
          style={styles.cupertinoStepper10}
        ></CupertinoStepper1>
      </View>
      <View style={styles.cupertinoStepper9Row}>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "guestAmount/adult")}}
          text1="Adults"
          currentValue={answers["guestAmount/adult"]}

          style={styles.cupertinoStepper9}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "guestAmount/child")}}
          text1="Children"
          currentValue={answers["guestAmount/child"]}
          style={styles.cupertinoStepper8}
        ></CupertinoStepper1>
      </View>
      <View style={styles.text15Row}>
        <Text style={styles.text15}>Dining Room</Text>
        <Text style={styles.text16}>Living Room</Text>
        <Text style={styles.text17}>Office</Text>
      </View>
      <Text style={styles.loremIpsum15}>How many beds are there?</Text>
      <View style={styles.loremIpsum16StackRow}>
        <View style={styles.loremIpsum16Stack}>
          <Text style={styles.loremIpsum16}></Text>
          <Text style={styles.text19}>Single</Text>
          <Text style={styles.loremIpsum18}></Text>
        </View>
        <Text style={styles.text20}>Double</Text>
        <Text style={styles.text21}>King size</Text>
      </View>
      <Text style={styles.text18}>
        Help guests understand the sleeping arrangements
      </Text>
      <View style={styles.loremIpsum17StackRow}>
        <View style={styles.loremIpsum17Stack}>
          <Text style={styles.loremIpsum17}></Text>
          <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "beds/single")}}
            text1="Single"
          currentValue={answers["beds/single"]}
            style={styles.cupertinoStepper27}
          ></CupertinoStepper1>
        </View>
        <CupertinoStepper1
          text1="Double"
          onChange={(newNumber)=>{onChangeLayout(newNumber, "beds/double")}}
          currentValue={answers["beds/double"]}
          style={styles.cupertinoStepper26}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "beds/king")}}
          currentValue={answers["beds/king"]}
          text1="King"
          style={styles.cupertinoStepper25}
        ></CupertinoStepper1>
      </View>
      <View style={styles.text22Row}>
        <Text style={styles.text22}>Floor mattress</Text>
        <Text style={styles.text23}>Sofa bed</Text>
        <Text style={styles.text24}>Crib</Text>
      </View>
      <View style={styles.cupertinoStepper30Row}>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "beds/floorMattress")}}
          text1="Floor mattress"
          currentValue={answers["beds/floorMattress"]}
          style={styles.cupertinoStepper30}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "beds/sofa")}}
          text1="Crib"
          currentValue={answers["beds/sofa"]}
          style={styles.cupertinoStepper29}
        ></CupertinoStepper1>
        <CupertinoStepper1
          onChange={(newNumber)=>{onChangeLayout(newNumber, "beds/crib")}}
          text1="Sofa bed"
          currentValue={answers["beds/crib"]}
          style={styles.cupertinoStepper28}
        ></CupertinoStepper1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: 990,
    backgroundColor: "rgba(2,172,235,1)",

  },
  loremIpsum: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text: {
    top: 22,
    left: 0,
    width: 316,
    height: 29,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsumStack: {
    width: 316,
    height: 51,
    marginTop: 30,
    marginLeft: 30
  },
  loremIpsum2: {
    top: 6,
    left: 20,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text3: {
    top: 0,
    left: 0,
    width: 88,
    height: 22,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  loremIpsum12: {
    top: 6,
    left: 9,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum2Stack: {
    width: 88,
    height: 22
  },
  text4: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 42
  },
  text5: {
    width: 89,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 40
  },
  loremIpsum2StackRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 30,
    marginRight: 35
  },
  loremIpsum3: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 246,
    marginLeft: 30
  },
  loremIpsum4: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 245,
    marginLeft: 31
  },
  extras: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 86,
    marginLeft: 30
  },
  loremIpsum8: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text2: {
    top: 23,
    left: 0,
    width: 352,
    height: 37,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum10: {
    top: 48,
    left: 30,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum8Stack: {
    width: 352,
    height: 60,
    marginTop: -274,
    marginLeft: 30
  },
  loremIpsum9: {
    top: 17,
    left: 89,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  cupertinoStepper3: {
    top: 0,
    left: 0,
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10
  },
  loremIpsum9Stack: {
    width: 94,
    height: 29
  },
  cupertinoStepper2: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 34
  },
  cupertinoStepper1: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 36
  },
  loremIpsum9StackRow: {
    height: 29,
    flexDirection: "row",
    marginTop: -490,
    marginLeft: 29,
    marginRight: 33
  },
  text1: {
    width: 312,
    height: 20,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 296,
    marginLeft: 30
  },
  text6: {
    width: 87,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  text7: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 37
  },
  text8: {
    width: 91,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 39
  },
  text6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 35,
    marginRight: 35
  },
  loremIpsum11: {
    top: 14,
    left: 29,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  cupertinoStepper18: {
    top: 0,
    left: 0,
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10
  },
  loremIpsum11Stack: {
    width: 94,
    height: 29
  },
  cupertinoStepper17: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 35
  },
  cupertinoStepper16: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 34
  },
  loremIpsum11StackRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 192,
    marginLeft: 31,
    marginRight: 32
  },
  text9: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  text10: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 40
  },
  text9Row: {
    height: 22,
    flexDirection: "row",
    marginTop: -102,
    marginLeft: 31,
    marginRight: 163
  },
  loremIpsum13: {
    top: 5,
    left: 27,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  cupertinoStepper24: {
    top: 0,
    left: 0,
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10
  },
  loremIpsum13Stack: {
    top: 0,
    left: 0,
    width: 94,
    height: 29,
    position: "absolute"
  },
  loremIpsum14: {
    top: 5,
    left: 16,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum13StackStack: {
    width: 94,
    height: 29,
    marginTop: 1
  },
  cupertinoStepper23: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 36,
    marginTop: 1
  },
  cupertinoStepper22: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 33
  },
  loremIpsum13StackStackRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 164,
    marginLeft: 31,
    marginRight: 32
  },
  text12: {
    width: 87,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 1
  },
  text13: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 41
  },
  text14: {
    width: 89,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 34,
    marginTop: 1
  },
  text12Row: {
    height: 23,
    flexDirection: "row",
    marginTop: -110,
    marginLeft: 35,
    marginRight: 38
  },
  materialButtonWithVioletText1: {
    width: 88,
    height: 36,
    opacity: 0.46,
    marginTop: 3
  },
  materialButtonWithVioletText1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet1: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 141,
    marginLeft: 157,
    marginRight: 14
  },
  cupertinoStepper6: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10
  },
  cupertinoStepper5: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 31
  },
  cupertinoStepper10: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 34
  },
  cupertinoStepper6Row: {
    height: 29,
    flexDirection: "row",
    marginTop: -489,
    marginLeft: 32,
    marginRight: 35
  },
  cupertinoStepper9: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10
  },
  cupertinoStepper8: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 33
  },
  cupertinoStepper9Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 111,
    marginLeft: 31,
    marginRight: 162
  },
  text15: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 1
  },
  text16: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 43,
    marginTop: 1
  },
  text17: {
    width: 86,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 39
  },
  text15Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 224,
    marginLeft: 31,
    marginRight: 35
  },
  loremIpsum15: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -706,
    marginLeft: 27
  },
  loremIpsum16: {
    top: 19,
    left: 17,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  text19: {
    top: 0,
    left: 0,
    width: 88,
    height: 22,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  loremIpsum18: {
    top: 19,
    left: 6,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum16Stack: {
    width: 88,
    height: 22
  },
  text20: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 39,
    marginTop: 2
  },
  text21: {
    width: 89,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 43,
    marginTop: 2
  },
  loremIpsum16StackRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 67,
    marginLeft: 31,
    marginRight: 34
  },
  text18: {
    width: 360,
    height: 18,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -91,
    marginLeft: 27
  },
  loremIpsum17: {
    top: 27,
    left: 85,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  cupertinoStepper27: {
    top: 0,
    left: 0,
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0
  },
  loremIpsum17Stack: {
    width: 94,
    height: 29,
    marginTop: 1
  },
  cupertinoStepper26: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 30
  },
  cupertinoStepper25: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 39
  },
  loremIpsum17StackRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 31,
    marginRight: 32
  },
  text22: {
    width: 95,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  text23: {
    width: 90,
    height: 22,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 37,
    marginTop: 3
  },
  text24: {
    width: 89,
    height: 40,
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 44,
    marginTop: 3
  },
  text22Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 81,
    marginLeft: 30,
    marginRight: 29
  },
  cupertinoStepper30: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10
  },
  cupertinoStepper29: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 34
  },
  cupertinoStepper28: {
    width: 94,
    height: 29,
    backgroundColor: "#08aceb",
    borderRadius: 10,
    marginLeft: 36
  },
  cupertinoStepper30Row: {
    height: 29,
    flexDirection: "row",
    marginTop: -73,
    marginLeft: 31,
    marginRight: 31
  },
  group1: {
    height: 91,
    marginTop: -430
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
  layouts: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 127,
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
    width: 62,
    height: 62,
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

export default StayLayout;
