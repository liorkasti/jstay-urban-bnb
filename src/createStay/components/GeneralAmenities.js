import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function GeneralAmenities(props) {
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
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          You will be able to add more amenities after you publish your
          stay.
        </Text>
        <Text style={styles.whatAmenities}>
          What amenities will you offer your guests?
        </Text>
        <Text style={styles.loremIpsum2}></Text>
      </View>

      <View style={styles.buttonStackStack}>
        <View style={styles.buttonStack}>
          <TouchableOpacity
            onPress={() => updateUserBool("generalAmenities/essentials")}
            style={styles.button}>
            <View style={styles.materialCheckbox110Row}>
              <MaterialCheckbox1
                onPress={() => updateUserBool("generalAmenities/essentials")}
                checked={userAnswers["generalAmenities/essentials"]}
                style={styles.materialCheckbox110}
              ></MaterialCheckbox1>
              <Text style={styles.essentials}>Essentials</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>
            Towels, Bedsheets, Soap, Toilet paper, Pillows
          </Text>
        </View>

        <View style={styles.button2Stack}>
          <TouchableOpacity
            onPress={() => updateUserBool("generalAmenities/kitchen")}

            style={styles.button2}>
            <View style={styles.kitchen2Stack}>
              <Text style={styles.kitchen2}>Kitchen</Text>
              <MaterialCheckbox1
                onPress={() => updateUserBool("generalAmenities/kitchen")}
                checked={userAnswers["generalAmenities/kitchen"]}
                style={styles.materialCheckbox211}
              ></MaterialCheckbox1>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum27}>
            Full Kitchen that guests can use to cook
          </Text>
        </View>

        <View style={styles.button3Stack}>
          <TouchableOpacity
            onPress={() => updateUserBool("generalAmenities/kitchenette")}

            style={styles.button3}>
            <View style={styles.materialCheckbox3583Row}>
              <MaterialCheckbox1
                onPress={() => updateUserBool("generalAmenities/kitchenette")}
                checked={userAnswers["generalAmenities/kitchenette"]}
                style={styles.materialCheckbox3583}
              ></MaterialCheckbox1>
              <Text style={styles.kitchenette}>Kitchenette</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum28}>
            Space that guests can use to cook
          </Text>
        </View>

        <View style={styles.button4Stack}>
          <TouchableOpacity
            onPress={() => updateUserBool("generalAmenities/wifi")}
            style={styles.button4}>
            <View style={styles.materialCheckbox410Row}>
              <MaterialCheckbox1
                onPress={() => updateUserBool("generalAmenities/wifi")}
                checked={userAnswers["generalAmenities/wifi"]}
                style={styles.materialCheckbox410}
              ></MaterialCheckbox1>
              <Text style={styles.wiFi}>WiFi</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum29}>Available in all stay areas</Text>
        </View>

        <TouchableOpacity onPress={() => updateUserBool("generalAmenities/tv")} style={styles.button5}>
          <View style={styles.materialCheckbox58Row}>
            <MaterialCheckbox1
              onPress={() => updateUserBool("generalAmenities/tv")}
              checked={userAnswers["generalAmenities/tv"]}
              style={styles.materialCheckbox58}
            ></MaterialCheckbox1>
            <Text style={styles.tv}>TV</Text>
          </View>
        </TouchableOpacity>

      </View>

      <TouchableOpacity onPress={() => updateUserBool("generalAmenities/freeParking")} style={styles.button6}>
        <View style={styles.materialCheckbox6Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/freeParking")}
            checked={userAnswers["generalAmenities/freeParking"]}
            style={styles.materialCheckbox6}
          ></MaterialCheckbox1>
          <Text style={styles.freeParking}>Free Parking</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/drivewayOrGarage")}
        style={styles.button7}>
        <View style={styles.materialCheckbox7Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/drivewayOrGarage")}
            checked={userAnswers["generalAmenities/drivewayOrGarage"]}
            style={styles.materialCheckbox7}
          ></MaterialCheckbox1>
          <Text style={styles.drivewayGarage}>Driveway/Garage</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/frontYard")}

        style={styles.button8}>
        <View style={styles.materialCheckbox8Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/frontYard")}
            checked={userAnswers["generalAmenities/frontYard"]}

            style={styles.materialCheckbox8}
          ></MaterialCheckbox1>
          <Text style={styles.frontYard}>Front Yard</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/backYard")}

        style={styles.button9}>
        <View style={styles.materialCheckbox9Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/backYard")}
            checked={userAnswers["generalAmenities/backYard"]}

            style={styles.materialCheckbox9}
          ></MaterialCheckbox1>
          <Text style={styles.backYard}>Back Yard</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/clothingHangers")}

        style={styles.button14}>
        <View style={styles.materialCheckbox14Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/clothingHangers")}
            checked={userAnswers["generalAmenities/clothingHangers"]}

            style={styles.materialCheckbox14}
          ></MaterialCheckbox1>
          <View style={styles.loremIpsum39Stack}>
            <Text style={styles.clothingHangers}>Clothing Hangers</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.loremIpsum4Stack}>
        <Text style={styles.loremIpsum4}></Text>
        <TouchableOpacity
          onPress={() => updateUserBool("generalAmenities/dryer")}

          style={styles.button13}>
          <View style={styles.materialCheckbox13Row}>
            <MaterialCheckbox1
              onPress={() => updateUserBool("generalAmenities/dryer")}
              checked={userAnswers["generalAmenities/dryer"]}
              style={styles.materialCheckbox13}
            ></MaterialCheckbox1>
            <Text style={styles.dryer}>Dryer</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/heating")}

        style={styles.button10}>
        <View style={styles.materialCheckbox10Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/heating")}
            checked={userAnswers["generalAmenities/heating"]}

            style={styles.materialCheckbox10}
          ></MaterialCheckbox1>
          <Text style={styles.heating}>Heating</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/aircon")}

        style={styles.button11}>
        <View style={styles.materialCheckbox11Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/aircon")}
            checked={userAnswers["generalAmenities/aircon"]}

            style={styles.materialCheckbox11}
          ></MaterialCheckbox1>
          <Text style={styles.airConditioning}>Air Conditioning</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/washingMachine")}

        style={styles.button12}>
        <View style={styles.materialCheckbox12Row}>
          <MaterialCheckbox1
            checked={userAnswers["generalAmenities/washingMachine"]}
            onPress={() => updateUserBool("generalAmenities/washingMachine")}

            style={styles.materialCheckbox12}
          ></MaterialCheckbox1>
          <Text style={styles.washingMachine}>Washing Machine</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/iron")}

        style={styles.button15}>
        <View style={styles.materialCheckbox15Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/iron")}
            checked={userAnswers["generalAmenities/iron"]}

            style={styles.materialCheckbox15}
          ></MaterialCheckbox1>
          <Text style={styles.clothingIronPress}>Clothing Iron/Press</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/mirrors")}
        style={styles.button16}>
        <View style={styles.materialCheckbox16Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/mirrors")}
            checked={userAnswers["generalAmenities/mirrors"]}
            style={styles.materialCheckbox16}
          ></MaterialCheckbox1>
          <Text style={styles.mirrors}>Mirrors</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/hairDryer")}

        style={styles.button18}>
        <View style={styles.materialCheckbox18Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/hairDryer")}
            checked={userAnswers["generalAmenities/hairDryer"]}

            style={styles.materialCheckbox18}
          ></MaterialCheckbox1>
          <Text style={styles.hairDryer}>Hair Dryer</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.button19StackStack}>
        <View style={styles.button19Stack}>
          <TouchableOpacity
            onPress={() => updateUserBool("generalAmenities/workspace")}

            style={styles.button19}>
            <View style={styles.materialCheckbox19Row}>
              <MaterialCheckbox1

                onPress={() => updateUserBool("generalAmenities/workspace")}
                checked={userAnswers["generalAmenities/workspace"]}

                style={styles.materialCheckbox19}
              ></MaterialCheckbox1>
              <Text style={styles.workspaceOffice}>Workspace/Office</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum31}>
            A work table or desk that guests can use
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => updateUserBool("generalAmenities/gym")}

          style={styles.button20}>
          <View style={styles.materialCheckbox212Row}>
            <MaterialCheckbox1
              onPress={() => updateUserBool("generalAmenities/gym")}
              checked={userAnswers["generalAmenities/gym"]}
              style={styles.materialCheckbox212}
            ></MaterialCheckbox1>
            <Text style={styles.gym}>Gym</Text>
          </View>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/sauna")}

        style={styles.button21}>
        <View style={styles.saunaStack}>
          <Text style={styles.sauna}>Sauna</Text>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/sauna")}
            checked={userAnswers["generalAmenities/sauna"]}
            style={styles.materialCheckbox22}
          ></MaterialCheckbox1>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/swimmingPool")}
        style={styles.button22}>
        <View style={styles.materialCheckbox23Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/swimmingPool")}
            checked={userAnswers["generalAmenities/swimmingPool"]}
            style={styles.materialCheckbox23}
          ></MaterialCheckbox1>
          <Text style={styles.swimmingPool}>Swimming Pool</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/bathtub")}
        style={styles.button23}>
        <View style={styles.bathtubStack}>
          <Text style={styles.bathtub}>Bathtub</Text>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/bathtub")}
            checked={userAnswers["generalAmenities/bathtub"]}
            style={styles.materialCheckbox25}
          ></MaterialCheckbox1>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/jacuzzi")}
        style={styles.button24}>
        <View style={styles.jacuzziStack}>
          <Text style={styles.jacuzzi}>Jacuzzi</Text>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/jacuzzi")}
            checked={userAnswers["generalAmenities/jacuzzi"]}
            style={styles.materialCheckbox26}
          ></MaterialCheckbox1>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/elevator")}
        style={styles.button25}>
        <View style={styles.materialCheckbox27Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/elevator")}
            checked={userAnswers["generalAmenities/elevator"]}
            style={styles.materialCheckbox27}
          ></MaterialCheckbox1>
          <Text style={styles.elevator}>Elevator</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/fireplace")}
        style={styles.button26}>
        <View style={styles.fireplaceStack}>
          <Text style={styles.fireplace}>Fireplace</Text>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/fireplace")}
            checked={userAnswers["generalAmenities/fireplace"]}
            style={styles.materialCheckbox28}
          ></MaterialCheckbox1>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/firePit")}

        style={styles.button27}>
        <View style={styles.materialCheckbox29Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/firePit")}
            checked={userAnswers["generalAmenities/firePit"]}
            style={styles.materialCheckbox29}
          ></MaterialCheckbox1>
          <Text style={styles.firePit}>Fire Pit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/bbq")}
        style={styles.button28}>
        <View style={styles.materialCheckbox30Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/bbq")}
            checked={userAnswers["generalAmenities/bbq"]}
            style={styles.materialCheckbox30}
          ></MaterialCheckbox1>
          <Text style={styles.bbq}>BBQ</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => updateUserBool("generalAmenities/shampooSoap")}
        style={styles.button17}>
        <View style={styles.materialCheckbox17Row}>
          <MaterialCheckbox1
            onPress={() => updateUserBool("generalAmenities/shampooSoap")}
            checked={userAnswers["generalAmenities/shampooSoap"]}
            style={styles.materialCheckbox17}
          ></MaterialCheckbox1>
          <Text style={styles.shampooShowerSoap}>Shampoo/Shower Soap</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum: {
    top: 45,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 44,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  whatAmenities: {
    top: 0,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 0,
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum2: {
    top: 50,
    left: 17,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    justifyContent: "space-between",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsumStack: {
    height: 78,
    marginLeft: 10
  },
  button: {
    top: 0,
    left: 0,
    width: 156,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox110: {
    width: 40,
    height: 40
  },
  essentials: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox110Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  text: {
    top: 34,
    left: 9,
    width: 274,
    height: 26,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  buttonStack: {
    top: 0,
    left: 1,
    width: 283,
    height: 60,
    position: "absolute"
  },
  button2: {
    top: 0,
    left: 0,
    width: 107,
    height: 40,
    position: "absolute"
  },
  kitchen2: {
    top: 9,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox211: {
    top: 0,
    left: 0,
    width: 42,
    height: 40,
    position: "absolute"
  },
  kitchen2Stack: {
    width: 106,
    height: 40
  },
  loremIpsum27: {
    top: 33,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button2Stack: {
    top: 59,
    left: 0,
    width: 258,
    height: 50,
    position: "absolute"
  },
  button3: {
    top: 0,
    left: 0,
    width: 146,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox3583: {
    width: 40,
    height: 40
  },
  kitchenette: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox3583Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  loremIpsum28: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button3Stack: {
    top: 108,
    left: 0,
    width: 223,
    height: 51,
    position: "absolute"
  },
  button4: {
    top: 0,
    left: 0,
    width: 79,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox410: {
    width: 40,
    height: 40
  },
  wiFi: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox410Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  loremIpsum29: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button4Stack: {
    top: 158,
    left: 0,
    width: 166,
    height: 51,
    position: "absolute"
  },
  button5: {
    top: 208,
    left: 0,
    width: 65,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox58: {
    width: 40,
    height: 40
  },
  tv: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox58Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  buttonStackStack: {
    width: 284,
    height: 248,
    marginTop: 4
  },
  button6: {
    width: 151,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox6: {
    width: 40,
    height: 40
  },
  freeParking: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox6Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button7: {
    width: 192,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox7: {
    width: 40,
    height: 40
  },
  drivewayGarage: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox7Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button8: {
    width: 131,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox8: {
    width: 40,
    height: 40
  },
  frontYard: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox8Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  button9: {
    width: 129,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox9: {
    width: 40,
    height: 40
  },
  backYard: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox9Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button14: {
    width: 194,
    height: 40,
    flexDirection: "row",
    marginTop: 160
  },
  materialCheckbox14: {
    width: 40,
    height: 40
  },
  loremIpsum39: {
    top: 8,
    left: 11,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  clothingHangers: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  loremIpsum39Stack: {
    width: 230,
    height: 24,
    marginTop: 10
  },
  materialCheckbox14Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  loremIpsum4: {
    top: 31,
    left: 70,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button13: {
    top: 0,
    left: 0,
    width: 87,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox13: {
    width: 40,
    height: 40
  },
  dryer: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox13Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  loremIpsum4Stack: {
    width: 87,
    height: 40,
    marginTop: -80
  },
  button10: {
    width: 109,
    height: 40,
    flexDirection: "row",
    marginTop: -160
  },
  materialCheckbox10: {
    width: 40,
    height: 40
  },
  heating: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox10Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button11: {
    width: 182,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox11: {
    width: 40,
    height: 40
  },
  airConditioning: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox11Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  button12: {
    width: 198,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox12: {
    width: 40,
    height: 40
  },
  washingMachine: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox12Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button15: {
    width: 212,
    height: 40,
    flexDirection: "row",
    marginTop: 80
  },
  materialCheckbox15: {
    width: 40,
    height: 40
  },
  clothingIronPress: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox15Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  button16: {
    width: 104,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox16: {
    width: 40,
    height: 40
  },
  mirrors: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox16Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  button18: {
    width: 128,
    height: 40,
    flexDirection: "row",
    marginTop: 40
  },
  materialCheckbox18: {
    width: 40,
    height: 40
  },
  hairDryer: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox18Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  button19: {
    top: 0,
    left: 0,
    width: 199,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox19: {
    width: 40,
    height: 40
  },
  workspaceOffice: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox19Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  loremIpsum31: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button19Stack: {
    top: 0,
    left: 0,
    width: 262,
    height: 51,
    position: "absolute"
  },
  button20: {
    top: 50,
    left: 0,
    width: 81,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox212: {
    width: 40,
    height: 40
  },
  gym: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox212Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button19StackStack: {
    width: 262,
    height: 90
  },
  button21: {
    width: 95,
    height: 40
  },
  sauna: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox22: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  saunaStack: {
    width: 95,
    height: 40
  },
  button22: {
    width: 179,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox23: {
    width: 40,
    height: 40
  },
  swimmingPool: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox23Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  button23: {
    width: 109,
    height: 40
  },
  bathtub: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox25: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  bathtubStack: {
    width: 108,
    height: 40
  },
  button24: {
    width: 107,
    height: 40
  },
  jacuzzi: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox26: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  jacuzziStack: {
    width: 107,
    height: 40
  },
  button25: {
    width: 111,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox27: {
    width: 40,
    height: 40
  },
  elevator: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox27Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button26: {
    width: 120,
    height: 40
  },
  fireplace: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox28: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  fireplaceStack: {
    width: 120,
    height: 40
  },
  button27: {
    width: 102,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox29: {
    width: 40,
    height: 40
  },
  firePit: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox29Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  button28: {
    width: 79,
    height: 40,
    flexDirection: "row"
  },
  materialCheckbox30: {
    width: 40,
    height: 40
  },
  bbq: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox30Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  button17: {
    width: 251,
    height: 40,
    flexDirection: "row",
    marginTop: -490
  },
  materialCheckbox17: {
    width: 40,
    height: 40
  },
  shampooShowerSoap: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox17Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  }
});

export default GeneralAmenities;
