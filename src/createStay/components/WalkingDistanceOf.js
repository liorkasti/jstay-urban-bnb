import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function WalkingDistanceOf(props) {
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
          onPress={(newValue)=>updateUserBool( "kosherRestaurants")}
      style={styles.loremIpsum12StackRow}>
        <View style={styles.loremIpsum12Stack}>
          <Text style={styles.loremIpsum12}></Text>
          <MaterialCheckbox1
          checked={userAnswers["kosherRestaurants"]}

          onPress={(newValue)=>updateUserBool( "kosherRestaurants")}
            style={styles.materialCheckbox53}
          ></MaterialCheckbox1>
        </View>
        <Text style={styles.kosherRestaurants}>Kosher Restaurants</Text>
      </TouchableOpacity>

      <Text style={styles.walkingDistance1}>Within Walking Distance of..</Text>
      <TouchableOpacity 
          onPress={(newValue)=>updateUserBool( "synagogues")}
      style={styles.materialCheckbox52Row}>
        <MaterialCheckbox1
          checked={userAnswers["synagogues"]}
          onPress={(newValue)=>updateUserBool( "synagogues")}
          style={styles.materialCheckbox52}
        ></MaterialCheckbox1>
        <Text style={styles.synagogues}>Synagogues</Text>
        <Text style={styles.loremIpsum13}></Text>
      </TouchableOpacity>
      <View style={styles.button8Stack}>
        <TouchableOpacity 
          onPress={(newValue)=>updateUserBool( "jewishCommunity")}
          style={styles.button8}>
          <View style={styles.materialCheckbox51Row}>
            <MaterialCheckbox1
          checked={userAnswers["jewishCommunity"]}

          onPress={(newValue)=>updateUserBool( "jewishCommunity")}
              style={styles.materialCheckbox51}
            ></MaterialCheckbox1>
            <Text style={styles.jewishCommunity}>Jewish Community</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum14}>
          My stay is within a 10 minute walk of the following
        </Text>
      </View>
      <TouchableOpacity
          onPress={(newValue)=>updateUserBool( "kosherShops")}
          style={styles.button9}>
        <View style={styles.materialCheckbox54Row}>
          <MaterialCheckbox1
          checked={userAnswers["kosherShops"]}
          onPress={(newValue)=>updateUserBool( "kosherShops")}
            style={styles.materialCheckbox54}
          ></MaterialCheckbox1>
          <Text style={styles.kosherShops}>Kosher Shops</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={(newValue)=>updateUserBool( "womensMikvah")}
          style={styles.materialCheckbox55Row}>
        <MaterialCheckbox1
          checked={userAnswers["womensMikvah"]}
          onPress={(newValue)=>updateUserBool( "womensMikvah")}
          style={styles.materialCheckbox55}
        ></MaterialCheckbox1>
        <Text style={styles.womensMikvah}>Women&#39;s Mikvah</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={(newValue)=>updateUserBool( "mensMikvah")}
      style={styles.mensMikvah2Stack}>
        <Text style={styles.mensMikvah2}>Men&#39;s Mikvah</Text>
        <MaterialCheckbox1
          checked={userAnswers["mensMikvah"]}
          onPress={(newValue)=>updateUserBool( "mensMikvah")}
          style={styles.materialCheckbox56}
        ></MaterialCheckbox1>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={(newValue)=>updateUserBool( "jewishDaycare")}
      
      style={styles.jewishDaycareStack}>
        <Text style={styles.jewishDaycare}>Jewish Daycare</Text>
        <MaterialCheckbox1
          checked={userAnswers["jewishDaycare"]}
          onPress={(newValue)=>updateUserBool( "jewishDaycare")}
          style={styles.materialCheckbox562}
        ></MaterialCheckbox1>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum12: {
    top: 16,
    left: 30,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox53: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum12Stack: {
    width: 40,
    height: 40
  },
  kosherRestaurants: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  loremIpsum12StackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 121,
    marginRight: 170
  },
  walkingDistance1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -161,
    marginLeft: 7
  },
  materialCheckbox52: {
    width: 40,
    height: 40
  },
  synagogues: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  loremIpsum13: {
    color: "rgba(230,230,230,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 26,
    marginTop: 13
  },
  materialCheckbox52Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 57,
    marginRight: 210
  },
  button8: {
    top: 16,
    left: 0,
    width: 319,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox51: {
    width: 40,
    height: 40
  },
  jewishCommunity: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox51Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 109
  },
  loremIpsum14: {
    top: 0,
    left: 7,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button8Stack: {
    width: 319,
    height: 56,
    marginTop: -96
  },
  button9: {
    width: 163,
    height: 40,
    flexDirection: "row",
    marginTop: 80
  },
  materialCheckbox54: {
    width: 40,
    height: 40
  },
  kosherShops: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox54Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  materialCheckbox55: {
    width: 40,
    height: 40
  },
  womensMikvah: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox55Row: {
    height: 40,
    flexDirection: "row",
    marginRight: 195
  },
  mensMikvah2: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox56: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  mensMikvah2Stack: {
    width: 159,
    height: 40
  },
  jewishDaycare: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox562: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  jewishDaycareStack: {
    width: 179,
    height: 40
  }
});

export default WalkingDistanceOf;
