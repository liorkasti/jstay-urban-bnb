import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function ShabbatHolidayEssentials(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.shabbatHolliday1}>Shabbat/Holiday Essentials</Text>
      <TouchableOpacity style={styles.button990}>
        <Text style={styles.shabbatLampS}>Shabbat Lamp(s)</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox351}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button991}>
        <Text style={styles.loremIpsum16}>Candlesticks And Candles</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox352}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button992}>
        <Text style={styles.kiddushCup}>Kiddush Cup</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox353}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button993}>
        <Text style={styles.loremIpsum17}>Challah Board/Knife/Cover</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox354}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button994}>
        <Text style={styles.havdalaSet}>Havdala Set</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox356}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.candleSpices1}>Candle &amp; spices</Text>
      <TouchableOpacity style={styles.button995}>
        <Text style={styles.loremIpsum18}>Shabbat Friendly Fridge</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox355}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <Text style={styles.loremIpsum50}>Alarm and lights may be disabled</Text>
      <TouchableOpacity style={styles.button996}>
        <MaterialCheckbox1
          style={styles.materialCheckbox357}
        ></MaterialCheckbox1>
        <Text style={styles.timeSwitch}>Time Switch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button997}>
        <Text style={styles.shabbatElevator}>Shabbat Elevator</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox360}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button998}>
        <Text style={styles.loremIpsum21}>Shabbat Friendly Parking</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox3582}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button999}>
        <Text style={styles.loremIpsum22}>Shabbat Friendly Entry</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox3592}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1000}>
        <Text style={styles.groundFloor}>Ground Floor</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox361}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1001}>
        <Text style={styles.liquidSoap}>Liquid Soap</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox362}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1002}>
        <Text style={styles.shabbatKettle}>Shabbat Kettle</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox363}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1003}>
        <Text style={styles.loremIpsum23}>Hot Plate/Food Warmer</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox364}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1004}>
        <Text style={styles.sukkah}>Sukkah</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox365}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1005}>
        <Text style={styles.loremIpsum24}>Sukkah Balcony/Garden</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox366}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1006}>
        <Text style={styles.menorah}>Menorah</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox367}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1007}>
        <Text style={styles.kosherForPassover}>Kosher For Passover</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox368}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1008}>
        <Text style={styles.passoverKitchen}>Passover Kitchen</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox369}
        ></MaterialCheckbox1>
      </TouchableOpacity>
      <View style={styles.group12}>
        <Text style={styles.sederPlate}>Seder Plate</Text>
        <MaterialCheckbox1
          style={styles.materialCheckbox370}
        ></MaterialCheckbox1>
      </View>
      <Text style={styles.loremIpsum51}>
        Guests can park nearby without having to move over{"\n"}the weekend
      </Text>
      <Text style={styles.loremIpsum52}>Non-electric entrance key/code</Text>
      <Text style={styles.loremIpsum53}>
        My stay comes with a ready built Sukkah during Sukkot
      </Text>
      <Text style={styles.loremIpsum54}>
        My stay has space where guests can build a kosher {"\n"}sukkah
      </Text>
      <Text style={styles.loremIpsum55}>
        My stay is Kashered and cleaned for Passover
      </Text>
      <Text style={styles.loremIpsum56}>
        My stay has a separated kitchen with Passover-only {"\n"}equipment
      </Text>
      <Text style={styles.loremIpsum74}>
        Please select what extras you provide to guests for Shabbat/holidays
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  shabbatHolliday1: {
    top: 6,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  button990: {
    top: 65,
    left: 0,
    height: 40,
    position: "absolute",
    right: 49
  },
  shabbatLampS: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox351: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button991: {
    top: 105,
    left: 0,
    height: 40,
    position: "absolute",
    right: 34
  },
  loremIpsum16: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox352: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button992: {
    top: 145,
    left: 0,
    height: 40,
    position: "absolute",
    right: 200
  },
  kiddushCup: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox353: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button993: {
    top: 185,
    left: 0,
    height: 40,
    position: "absolute",
    right: 49
  },
  loremIpsum17: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox354: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button994: {
    top: 225,
    left: 1,
    height: 40,
    position: "absolute",
    right: 89
  },
  havdalaSet: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox356: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  candleSpices1: {
    top: 259,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button995: {
    top: 275,
    left: 0,
    height: 40,
    position: "absolute",
    right: 84
  },
  loremIpsum18: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox355: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum50: {
    top: 309,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button996: {
    top: 320,
    left: 0,
    height: 40,
    position: "absolute",
    right: 49
  },
  materialCheckbox357: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  timeSwitch: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  button997: {
    top: 492,
    left: 0,
    width: 335,
    height: 40,
    position: "absolute"
  },
  shabbatElevator: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox360: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button998: {
    top: 360,
    left: 0,
    height: 40,
    position: "absolute",
    right: 114
  },
  loremIpsum21: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox3582: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button999: {
    top: 442,
    left: 0,
    height: 40,
    position: "absolute",
    right: 49
  },
  loremIpsum22: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox3592: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1000: {
    top: 532,
    left: 0,
    height: 40,
    position: "absolute",
    right: 48
  },
  groundFloor: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox361: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1001: {
    top: 572,
    left: 0,
    height: 40,
    position: "absolute",
    right: 48
  },
  liquidSoap: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox362: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1002: {
    top: 612,
    left: 0,
    height: 40,
    position: "absolute",
    right: 48
  },
  shabbatKettle: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox363: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1003: {
    top: 652,
    left: 0,
    height: 40,
    position: "absolute",
    right: 48
  },
  loremIpsum23: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox364: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1004: {
    top: 692,
    left: 0,
    height: 40,
    position: "absolute",
    right: 48
  },
  sukkah: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox365: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1005: {
    top: 752,
    left: 0,
    height: 40,
    position: "absolute",
    right: 49
  },
  loremIpsum24: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox366: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1006: {
    top: 827,
    left: 0,
    height: 40,
    position: "absolute",
    right: 34
  },
  menorah: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox367: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1007: {
    top: 867,
    left: 0,
    height: 40,
    position: "absolute",
    right: 48
  },
  kosherForPassover: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox368: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button1008: {
    top: 927,
    left: 0,
    height: 40,
    position: "absolute",
    right: 24
  },
  passoverKitchen: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox369: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  group12: {
    top: 1007,
    left: 0,
    height: 40,
    position: "absolute",
    right: 49
  },
  sederPlate: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  materialCheckbox370: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum51: {
    top: 394,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 50
  },
  loremIpsum52: {
    top: 477,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  loremIpsum53: {
    top: 726,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 33
  },
  loremIpsum54: {
    top: 786,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 52
  },
  loremIpsum55: {
    top: 902,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 88
  },
  loremIpsum56: {
    top: 961,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 51
  },
  loremIpsum74: {
    top: 33,
    left: 10,
    width: "91.03%",
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default ShabbatHolidayEssentials;
