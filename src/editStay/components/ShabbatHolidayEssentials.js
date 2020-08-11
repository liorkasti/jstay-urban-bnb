import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "./MaterialCheckbox1";

function ShabbatHolidayEssentials(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.shabbatHolliday1}>Shabbat/Holiday Essentials</Text>
      <View style={styles.button990Stack}>
        <TouchableOpacity style={styles.button990}>
          <View style={styles.materialCheckbox351Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox351}
            ></MaterialCheckbox1>
            <Text style={styles.shabbatLampS}>Shabbat Lamp(s)</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum74}>
          Please select what extras you provide to guests for Shabbat/holidays
        </Text>
      </View>
      <TouchableOpacity style={styles.button991}>
        <View style={styles.materialCheckbox352Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox352}
          ></MaterialCheckbox1>
          <Text style={styles.loremIpsum16}>Candlesticks And Candles</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button992}>
        <View style={styles.materialCheckbox353Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox353}
          ></MaterialCheckbox1>
          <Text style={styles.kiddushCup}>Kiddush Cup</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button993}>
        <View style={styles.materialCheckbox354Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox354}
          ></MaterialCheckbox1>
          <Text style={styles.loremIpsum17}>Challah Board/Knife/Cover</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.button994Stack}>
        <TouchableOpacity style={styles.button994}>
          <View style={styles.havdalaSetStack}>
            <Text style={styles.havdalaSet}>Havdala Set</Text>
            <MaterialCheckbox1
              style={styles.materialCheckbox356}
            ></MaterialCheckbox1>
          </View>
        </TouchableOpacity>
        <Text style={styles.candleSpices1}>Candle &amp; spices</Text>
        <TouchableOpacity style={styles.button995}>
          <View style={styles.materialCheckbox355Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox355}
            ></MaterialCheckbox1>
            <Text style={styles.loremIpsum18}>Shabbat Friendly Fridge</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum50}>
          Alarm and lights may be disabled
        </Text>
        <TouchableOpacity style={styles.button996}>
          <View style={styles.materialCheckbox357Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox357}
            ></MaterialCheckbox1>
            <Text style={styles.timeSwitch}>Time Switch</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.button997StackStack}>
        <View style={styles.button997Stack}>
          <TouchableOpacity style={styles.button997}>
            <View style={styles.materialCheckbox360Row}>
              <MaterialCheckbox1
                style={styles.materialCheckbox360}
              ></MaterialCheckbox1>
              <Text style={styles.shabbatElevator}>Shabbat Elevator</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.loremIpsum52}>
            Non-electric entrance key/code
          </Text>
        </View>
        <TouchableOpacity style={styles.button999}>
          <View style={styles.materialCheckbox3592Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox3592}
            ></MaterialCheckbox1>
            <Text style={styles.loremIpsum22}>Shabbat Friendly Entry</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.button998Stack}>
        <TouchableOpacity style={styles.button998}>
          <View style={styles.materialCheckbox3582Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox3582}
            ></MaterialCheckbox1>
            <Text style={styles.loremIpsum21}>Shabbat Friendly Parking</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum51}>
          Guests can park nearby without having to move over{"\n"}the weekend
        </Text>
      </View>
      <TouchableOpacity style={styles.button1000}>
        <View style={styles.materialCheckbox361Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox361}
          ></MaterialCheckbox1>
          <Text style={styles.groundFloor}>Ground Floor</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1001}>
        <View style={styles.materialCheckbox362Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox362}
          ></MaterialCheckbox1>
          <Text style={styles.liquidSoap}>Liquid Soap</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1002}>
        <View style={styles.materialCheckbox363Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox363}
          ></MaterialCheckbox1>
          <Text style={styles.shabbatKettle}>Shabbat Kettle</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1003}>
        <View style={styles.materialCheckbox364Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox364}
          ></MaterialCheckbox1>
          <Text style={styles.loremIpsum23}>Hot Plate/Food Warmer</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.button1004Stack}>
        <TouchableOpacity style={styles.button1004}>
          <View style={styles.materialCheckbox365Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox365}
            ></MaterialCheckbox1>
            <Text style={styles.sukkah}>Sukkah</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum53}>
          My stay comes with a ready built Sukkah during Sukkot
        </Text>
      </View>
      <View style={styles.button1005Stack}>
        <TouchableOpacity style={styles.button1005}>
          <View style={styles.materialCheckbox366Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox366}
            ></MaterialCheckbox1>
            <Text style={styles.loremIpsum24}>Sukkah Balcony/Garden</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum54}>
          My stay has space where guests can build a kosher {"\n"}sukkah
        </Text>
      </View>
      <TouchableOpacity style={styles.button1006}>
        <View style={styles.materialCheckbox367Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox367}
          ></MaterialCheckbox1>
          <Text style={styles.menorah}>Menorah</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.button1007Stack}>
        <TouchableOpacity style={styles.button1007}>
          <View style={styles.materialCheckbox368Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox368}
            ></MaterialCheckbox1>
            <Text style={styles.kosherForPassover}>Kosher For Passover</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum55}>
          My stay is Kashered and cleaned for Passover
        </Text>
      </View>
      <View style={styles.button1008Stack}>
        <TouchableOpacity style={styles.button1008}>
          <View style={styles.materialCheckbox369Row}>
            <MaterialCheckbox1
              style={styles.materialCheckbox369}
            ></MaterialCheckbox1>
            <Text style={styles.passoverKitchen}>Passover Kitchen</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.loremIpsum56}>
          My stay has a separated kitchen with Passover-only {"\n"}equipment
        </Text>
      </View>
      <View style={styles.group12}>
        <View style={styles.materialCheckbox370Row}>
          <MaterialCheckbox1
            style={styles.materialCheckbox370}
          ></MaterialCheckbox1>
          <Text style={styles.sederPlate}>Seder Plate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  shabbatHolliday1: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 6,
    marginLeft: 10
  },
  button990: {
    top: 32,
    left: 0,
    height: 40,
    position: "absolute",
    right: 24,
    flexDirection: "row"
  },
  materialCheckbox351: {
    width: 40,
    height: 40
  },
  shabbatLampS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox351Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 144
  },
  loremIpsum74: {
    top: 0,
    left: 10,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button990Stack: {
    height: 72,
    marginTop: 3,
    marginRight: 26
  },
  button991: {
    height: 40,
    flexDirection: "row",
    marginRight: 34
  },
  materialCheckbox352: {
    width: 40,
    height: 40
  },
  loremIpsum16: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox352Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 82
  },
  button992: {
    height: 40,
    flexDirection: "row",
    marginRight: 200
  },
  materialCheckbox353: {
    width: 40,
    height: 40
  },
  kiddushCup: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox353Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 34
  },
  button993: {
    height: 40,
    flexDirection: "row",
    marginRight: 49
  },
  materialCheckbox354: {
    width: 40,
    height: 40
  },
  loremIpsum17: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox354Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 60
  },
  button994: {
    top: 0,
    left: 1,
    height: 40,
    position: "absolute",
    right: 40
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
  havdalaSetStack: {
    width: 146,
    height: 40
  },
  candleSpices1: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button995: {
    top: 50,
    left: 0,
    height: 40,
    position: "absolute",
    right: 34,
    flexDirection: "row"
  },
  materialCheckbox355: {
    width: 40,
    height: 40
  },
  loremIpsum18: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox355Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 54
  },
  loremIpsum50: {
    top: 84,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button996: {
    top: 95,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox357: {
    width: 40,
    height: 40
  },
  timeSwitch: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox357Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 187
  },
  button994Stack: {
    height: 135,
    marginRight: 50
  },
  button997: {
    top: 15,
    left: 0,
    width: 335,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  materialCheckbox360: {
    width: 40,
    height: 40
  },
  shabbatElevator: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox360Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 145
  },
  loremIpsum52: {
    top: 0,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button997Stack: {
    top: 35,
    left: 0,
    width: 335,
    height: 55,
    position: "absolute"
  },
  button999: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox3592: {
    width: 40,
    height: 40
  },
  loremIpsum22: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox3592Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 99
  },
  button997StackStack: {
    height: 90,
    marginTop: 82,
    marginRight: 50
  },
  button998: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 63,
    flexDirection: "row"
  },
  materialCheckbox3582: {
    width: 40,
    height: 40
  },
  loremIpsum21: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox3582Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 12
  },
  loremIpsum51: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  button998Stack: {
    height: 67,
    marginTop: -172,
    marginRight: 51
  },
  button1000: {
    height: 40,
    flexDirection: "row",
    marginTop: 105,
    marginRight: 48
  },
  materialCheckbox361: {
    width: 40,
    height: 40
  },
  groundFloor: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox361Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 183
  },
  button1001: {
    height: 40,
    flexDirection: "row",
    marginRight: 48
  },
  materialCheckbox362: {
    width: 40,
    height: 40
  },
  liquidSoap: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox362Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 195
  },
  button1002: {
    height: 40,
    flexDirection: "row",
    marginRight: 48
  },
  materialCheckbox363: {
    width: 40,
    height: 40
  },
  shabbatKettle: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox363Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 170
  },
  button1003: {
    height: 40,
    flexDirection: "row",
    marginRight: 48
  },
  materialCheckbox364: {
    width: 40,
    height: 40
  },
  loremIpsum23: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox364Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 89
  },
  button1004: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 13,
    flexDirection: "row"
  },
  materialCheckbox365: {
    width: 40,
    height: 40
  },
  sukkah: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox365Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 234
  },
  loremIpsum53: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 0
  },
  button1004Stack: {
    height: 51,
    marginRight: 35
  },
  button1005: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox366: {
    width: 40,
    height: 40
  },
  loremIpsum24: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox366Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 84
  },
  loremIpsum54: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 3
  },
  button1005Stack: {
    height: 67,
    marginTop: 9,
    marginRight: 50
  },
  button1006: {
    height: 40,
    flexDirection: "row",
    marginTop: 8,
    marginRight: 34
  },
  materialCheckbox367: {
    width: 40,
    height: 40
  },
  menorah: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox367Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 235
  },
  button1007: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox368: {
    width: 40,
    height: 40
  },
  kosherForPassover: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox368Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 116
  },
  loremIpsum55: {
    top: 35,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 41
  },
  button1007Stack: {
    height: 52,
    marginRight: 48
  },
  button1008: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialCheckbox369: {
    width: 40,
    height: 40
  },
  passoverKitchen: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox369Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 169
  },
  loremIpsum56: {
    top: 34,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    right: 28
  },
  button1008Stack: {
    height: 67,
    marginTop: 8,
    marginRight: 25
  },
  group12: {
    height: 40,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 49
  },
  materialCheckbox370: {
    width: 40,
    height: 40
  },
  sederPlate: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  materialCheckbox370Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 196
  }
});

export default ShabbatHolidayEssentials;
