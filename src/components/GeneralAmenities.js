import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";
import { Center } from "@builderx/utils";

function GeneralAmenities(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>
        You will be able to add more amenities after{"\n"}you publish your stay.
      </Text>
      <Text style={styles.whatAmenities}>
        What amenities will you offer your guests?
      </Text>
      <Text style={styles.loremIpsum2}></Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.essentials}>Essentials</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox110}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.kitchen2}>Kitchen</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox211}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.kitchenette}>Kitchenette</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox3583}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.wiFi}>WiFi</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox410}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
        <Text style={styles.tv}>TV</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox58}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6}>
        <Text style={styles.freeParking}>Free Parking</Text>
        <MaterialCheckbox1 style={styles.materialCheckbox6}></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button7}>
        <Text style={styles.drivewayGarage}>Driveway/Garage</Text>
        <MaterialCheckbox1 style={styles.materialCheckbox7}></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button8}>
        <Text style={styles.frontYard}>Front Yard</Text>
        <MaterialCheckbox1 style={styles.materialCheckbox8}></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button9}>
        <Text style={styles.backYard}>Back Yard</Text>
        <MaterialCheckbox1 style={styles.materialCheckbox9}></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button14}>
        <Text style={styles.loremIpsum39}></Text>
        <Text style={styles.clothingHangers}>Clothing Hangers</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox14}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum4}></Text>
      <TouchableOpacity style={styles.button10}>
        <Text style={styles.heating}>Heating</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox10}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button11}>
        <Text style={styles.airConditioning}>Air Conditioning</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox11}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button12}>
        <Text style={styles.washingMachine}>Washing Machine</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox12}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button13}>
        <Text style={styles.dryer}>Dryer</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox13}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button15}>
        <Text style={styles.clothingIronPress}>Clothing Iron/Press</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox15}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button16}>
        <Text style={styles.mirrors}>Mirrors</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox16}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button18}>
        <Text style={styles.hairDryer}>Hair Dryer</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox18}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button19}>
        <Text style={styles.workspaceOffice}>Workspace/Office</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox19}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button20}>
        <Text style={styles.gym}>Gym</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox212}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button21}>
        <Text style={styles.sauna}>Sauna</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox22}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button22}>
        <Text style={styles.swimmingPool}>Swimming Pool</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox23}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button23}>
        <Text style={styles.bathtub}>Bathtub</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox25}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button24}>
        <Text style={styles.jacuzzi}>Jacuzzi</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox26}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button25}>
        <Text style={styles.elevator}>Elevator</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox27}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button26}>
        <Text style={styles.fireplace}>Fireplace</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox28}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button27}>
        <Text style={styles.firePit}>Fire Pit</Text>
        <Center vertical>
          <MaterialCheckbox1
            style={styles.materialCheckbox29}
          ></MaterialCheckbox1>
        </Center>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button28}>
        <Text style={styles.bbq}>BBQ</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox30}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum27}>
        Full Kitchen that guests can use to cook
      </Text>
      <Text style={styles.loremIpsum28}>Space that guests can use to cook</Text>
      <Text style={styles.loremIpsum29}>Available in all stay areas</Text>
      <TouchableOpacity style={styles.button17}>
        <Text style={styles.shampooShowerSoap}>Shampoo/Shower Soap</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox17}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum31}>
        A work table or desk that guests can use
      </Text>
      <Text style={styles.text}>
        Towels, Bedsheets, Soap, Toilet paper, Pillows
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum: {
    top: 45,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 44,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  whatAmenities: {
    top: 0,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    right: 0,
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  loremIpsum2: {
    top: 50,
    left: 27,
    width: 1,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    justifyContent: "space-between",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button: {
    top: 82,
    left: 1,
    width: 156,
    height: 40,
    position: "absolute"
  },
  essentials: {
    top: 10,
    left: 40,
    width: "74.29%",
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox110: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button2: {
    top: 141,
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
  button3: {
    top: 190,
    left: 0,
    width: 146,
    height: 40,
    position: "absolute"
  },
  kitchenette: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox3583: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button4: {
    top: 240,
    left: 0,
    width: 79,
    height: 40,
    position: "absolute"
  },
  wiFi: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox410: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button5: {
    top: 290,
    left: 0,
    width: 65,
    height: 40,
    position: "absolute"
  },
  tv: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox58: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button6: {
    top: 330,
    left: 0,
    width: 151,
    height: 40,
    position: "absolute"
  },
  freeParking: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox6: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button7: {
    top: 370,
    left: 0,
    width: 192,
    height: 40,
    position: "absolute"
  },
  drivewayGarage: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox7: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button8: {
    top: 410,
    left: 0,
    width: 131,
    height: 40,
    position: "absolute"
  },
  frontYard: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox8: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button9: {
    top: 450,
    left: 0,
    width: 129,
    height: 40,
    position: "absolute"
  },
  backYard: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox9: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button14: {
    top: 650,
    left: 0,
    width: 194,
    height: 40,
    position: "absolute"
  },
  loremIpsum39: {
    top: 18,
    left: 51,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  clothingHangers: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox14: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum4: {
    top: 641,
    left: 70,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button10: {
    top: 490,
    left: 0,
    width: 109,
    height: 40,
    position: "absolute"
  },
  heating: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox10: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button11: {
    top: 530,
    left: 0,
    width: 182,
    height: 40,
    position: "absolute"
  },
  airConditioning: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox11: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button12: {
    top: 570,
    left: 0,
    width: 198,
    height: 40,
    position: "absolute"
  },
  washingMachine: {
    top: 10,
    left: 40,
    width: 158,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox12: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button13: {
    top: 610,
    left: 0,
    width: 87,
    height: 40,
    position: "absolute"
  },
  dryer: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox13: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button15: {
    top: 690,
    left: 0,
    width: 212,
    height: 40,
    position: "absolute"
  },
  clothingIronPress: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox15: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button16: {
    top: 730,
    left: 0,
    width: 104,
    height: 40,
    position: "absolute"
  },
  mirrors: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox16: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button18: {
    top: 810,
    left: 0,
    width: 128,
    height: 40,
    position: "absolute"
  },
  hairDryer: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox18: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button19: {
    top: 850,
    left: 0,
    width: 199,
    height: 40,
    position: "absolute"
  },
  workspaceOffice: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox19: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button20: {
    top: 900,
    left: 0,
    width: 81,
    height: 40,
    position: "absolute"
  },
  gym: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox212: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button21: {
    top: 940,
    left: 0,
    width: 95,
    height: 40,
    position: "absolute"
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
  button22: {
    top: 980,
    left: 0,
    width: 179,
    height: 40,
    position: "absolute"
  },
  swimmingPool: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox23: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button23: {
    top: 1020,
    left: 0,
    width: 109,
    height: 40,
    position: "absolute"
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
  button24: {
    top: 1060,
    left: 0,
    width: 107,
    height: 40,
    position: "absolute"
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
  button25: {
    top: 1100,
    left: 0,
    width: 111,
    height: 40,
    position: "absolute"
  },
  elevator: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox27: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button26: {
    top: 1140,
    left: 0,
    width: 120,
    height: 40,
    position: "absolute"
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
  button27: {
    top: 1180,
    left: 0,
    width: 102,
    height: 40,
    position: "absolute"
  },
  firePit: {
    top: 10,
    left: 40,
    width: 62,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox29: {
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button28: {
    top: 1220,
    left: 0,
    width: 79,
    height: 40,
    position: "absolute"
  },
  bbq: {
    top: 10,
    left: 40,
    width: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox30: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum27: {
    top: 174,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum28: {
    top: 224,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum29: {
    top: 274,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button17: {
    top: 770,
    left: 0,
    width: 251,
    height: 40,
    position: "absolute"
  },
  shampooShowerSoap: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox17: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum31: {
    top: 884,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  text: {
    top: 116,
    left: 10,
    width: "78.25%",
    height: 26,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default GeneralAmenities;
