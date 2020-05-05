import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialSwitch1 from "./MaterialSwitch1";
import MaterialCheckbox2 from "./MaterialCheckbox2";
import MaterialCheckbox3 from "./MaterialCheckbox3";
import MaterialCheckbox4 from "./MaterialCheckbox4";
import MaterialCheckbox5 from "./MaterialCheckbox5";

function KosherKitchenAmenities(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.kosherKitchenRow}>
        <Text style={styles.kosherKitchen}>Kosher Kitchen</Text>
        <View style={styles.kosherKitchenFiller}></View>
        <MaterialSwitch1 style={styles.materialSwitch2}></MaterialSwitch1>
      </View>
      <View style={styles.countertopsColumnRow}>
        <View style={styles.countertopsColumn}>
          <Text style={styles.countertops}>Countertops</Text>
          <Text style={styles.sinkS}>Sink(s)</Text>
          <Text style={styles.dishesAndCups}>Dishes And Cups</Text>
          <Text style={styles.cutlery}>Cutlery</Text>
          <Text style={styles.potsPans}>Pots/Pans</Text>
          <Text style={styles.cookinUtensils}>Cookin Utensils</Text>
          <Text style={styles.ovenS}>Oven(s)</Text>
          <Text style={styles.microwaveS}>Microwave(s)</Text>
          <Text style={styles.crocPotS}>Croc Pot(s)</Text>
          <Text style={styles.toasterOvenS}>Toaster Oven(s)</Text>
          <Text style={styles.cookStoveTopS}>Cook/Stove Top(s)</Text>
          <Text style={styles.dishwasherS}>Dishwasher(s)</Text>
        </View>
        <View style={styles.countertopsColumnFiller}></View>
        <View style={styles.group12}>
          <View style={styles.button66StackStackStack}>
            <View style={styles.button66StackStack}>
              <View style={styles.button66Stack}>
                <TouchableOpacity style={styles.button66}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox210}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy}>Dairy</Text>
              </View>
              <View style={styles.button67Stack}>
                <TouchableOpacity style={styles.button67}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox311}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy1}>Dairy</Text>
              </View>
              <View style={styles.button68Stack}>
                <TouchableOpacity style={styles.button68}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox315}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy2}>Dairy</Text>
              </View>
              <View style={styles.button69Stack}>
                <TouchableOpacity style={styles.button69}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox319}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy3}>Dairy</Text>
              </View>
              <View style={styles.button70Stack}>
                <TouchableOpacity style={styles.button70}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox323}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy4}>Dairy</Text>
              </View>
              <View style={styles.button71Stack}>
                <TouchableOpacity style={styles.button71}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox327}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy5}>Dairy</Text>
              </View>
              <View style={styles.button72Stack}>
                <TouchableOpacity style={styles.button72}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox331}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy6}>Dairy</Text>
              </View>
              <View style={styles.button73Stack}>
                <TouchableOpacity style={styles.button73}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox335}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy7}>Dairy</Text>
              </View>
              <View style={styles.button74Stack}>
                <TouchableOpacity style={styles.button74}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox339}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy8}>Dairy</Text>
              </View>
              <View style={styles.button75Stack}>
                <TouchableOpacity style={styles.button75}>
                  <MaterialCheckbox2
                    style={styles.materialCheckbox343}
                  ></MaterialCheckbox2>
                </TouchableOpacity>
                <Text style={styles.dairy9}>Dairy</Text>
              </View>
              <View style={styles.group11Stack}>
                <View style={styles.group11}>
                  <View style={styles.button76Row}>
                    <TouchableOpacity style={styles.button76}>
                      <MaterialCheckbox2
                        style={styles.materialCheckbox347}
                      ></MaterialCheckbox2>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button77}>
                      <MaterialCheckbox3
                        style={styles.materialCheckbox348}
                      ></MaterialCheckbox3>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button98}>
                      <MaterialCheckbox4
                        style={styles.materialCheckbox349}
                      ></MaterialCheckbox4>
                    </TouchableOpacity>
                    <View style={styles.group3}>
                      <MaterialCheckbox5
                        style={styles.materialCheckbox350}
                      ></MaterialCheckbox5>
                    </View>
                  </View>
                </View>
                <Text style={styles.dairy10}>Dairy</Text>
                <Text style={styles.meat10}>Meat</Text>
                <Text style={styles.pareve10}>Pareve</Text>
                <Text style={styles.passover12}>Passover</Text>
              </View>
              <View style={styles.rect2Stack}>
                <View style={styles.rect2}>
                  <View style={styles.button984Row}>
                    <TouchableOpacity style={styles.button984}>
                      <MaterialCheckbox2
                        style={styles.materialCheckbox213}
                      ></MaterialCheckbox2>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button985}>
                      <MaterialCheckbox3
                        style={styles.materialCheckbox3595}
                      ></MaterialCheckbox3>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button986}>
                      <MaterialCheckbox4
                        style={styles.materialCheckbox411}
                      ></MaterialCheckbox4>
                    </TouchableOpacity>
                    <View style={styles.rect3}>
                      <MaterialCheckbox5
                        style={styles.materialCheckbox59}
                      ></MaterialCheckbox5>
                    </View>
                  </View>
                </View>
                <Text style={styles.dairy11}>Dairy</Text>
                <Text style={styles.meat11}>Meat</Text>
                <Text style={styles.pareve11}>Pareve</Text>
                <Text style={styles.passover13}>Passover</Text>
              </View>
            </View>
            <View style={styles.button87StackStack}>
              <View style={styles.button87Stack}>
                <TouchableOpacity style={styles.button87}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox310}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat}>Meat</Text>
              </View>
              <View style={styles.button86Stack}>
                <TouchableOpacity style={styles.button86}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox312}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat1}>Meat</Text>
              </View>
              <View style={styles.button85Stack}>
                <TouchableOpacity style={styles.button85}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox316}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat2}>Meat</Text>
              </View>
              <View style={styles.button84Stack}>
                <TouchableOpacity style={styles.button84}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox320}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat3}>Meat</Text>
              </View>
              <View style={styles.button83Stack}>
                <TouchableOpacity style={styles.button83}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox324}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat4}>Meat</Text>
              </View>
              <View style={styles.button82Stack}>
                <TouchableOpacity style={styles.button82}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox328}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat5}>Meat</Text>
              </View>
              <View style={styles.button81Stack}>
                <TouchableOpacity style={styles.button81}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox332}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat6}>Meat</Text>
              </View>
              <View style={styles.button80Stack}>
                <TouchableOpacity style={styles.button80}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox336}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat7}>Meat</Text>
              </View>
              <View style={styles.button79Stack}>
                <TouchableOpacity style={styles.button79}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox340}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat8}>Meat</Text>
              </View>
              <View style={styles.button78Stack}>
                <TouchableOpacity style={styles.button78}>
                  <MaterialCheckbox3
                    style={styles.materialCheckbox344}
                  ></MaterialCheckbox3>
                </TouchableOpacity>
                <Text style={styles.meat9}>Meat</Text>
              </View>
            </View>
            <View style={styles.button88StackStack}>
              <View style={styles.button88Stack}>
                <TouchableOpacity style={styles.button88}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox49}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve}>Pareve</Text>
              </View>
              <View style={styles.button89Stack}>
                <TouchableOpacity style={styles.button89}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox313}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button90}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox317}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve1}>Pareve</Text>
                <Text style={styles.pareve2}>Pareve</Text>
              </View>
              <View style={styles.button91Stack}>
                <TouchableOpacity style={styles.button91}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox321}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve3}>Pareve</Text>
              </View>
              <View style={styles.button92Stack}>
                <TouchableOpacity style={styles.button92}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox325}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve4}>Pareve</Text>
              </View>
              <View style={styles.button93Stack}>
                <TouchableOpacity style={styles.button93}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox329}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve5}>Pareve</Text>
              </View>
              <View style={styles.button94Stack}>
                <TouchableOpacity style={styles.button94}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox333}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve6}>Pareve</Text>
              </View>
              <View style={styles.button95Stack}>
                <TouchableOpacity style={styles.button95}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox337}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve7}>Pareve</Text>
              </View>
              <View style={styles.button96Stack}>
                <TouchableOpacity style={styles.button96}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox341}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve8}>Pareve</Text>
              </View>
              <View style={styles.button97Stack}>
                <TouchableOpacity style={styles.button97}>
                  <MaterialCheckbox4
                    style={styles.materialCheckbox345}
                  ></MaterialCheckbox4>
                </TouchableOpacity>
                <Text style={styles.pareve9}>Pareve</Text>
              </View>
            </View>
            <View style={styles.button99StackStack}>
              <View style={styles.button99Stack}>
                <TouchableOpacity style={styles.button99}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox57}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover2}>Passover</Text>
              </View>
              <View style={styles.button100Stack}>
                <TouchableOpacity style={styles.button100}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox314}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover3}>Passover</Text>
              </View>
              <View style={styles.button101Stack}>
                <TouchableOpacity style={styles.button101}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox318}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover4}>Passover</Text>
              </View>
              <View style={styles.button102Stack}>
                <TouchableOpacity style={styles.button102}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox322}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover5}>Passover</Text>
              </View>
              <View style={styles.button103Stack}>
                <TouchableOpacity style={styles.button103}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox326}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover6}>Passover</Text>
              </View>
              <View style={styles.button104Stack}>
                <TouchableOpacity style={styles.button104}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox330}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover7}>Passover</Text>
              </View>
              <View style={styles.button105Stack}>
                <TouchableOpacity style={styles.button105}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox334}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover8}>Passover</Text>
              </View>
              <View style={styles.group2Stack}>
                <View style={styles.group2}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox338}
                  ></MaterialCheckbox5>
                </View>
                <Text style={styles.passover9}>Passover</Text>
              </View>
              <View style={styles.button106Stack}>
                <TouchableOpacity style={styles.button106}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox342}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover10}>Passover</Text>
              </View>
              <View style={styles.button107Stack}>
                <TouchableOpacity style={styles.button107}>
                  <MaterialCheckbox5
                    style={styles.materialCheckbox346}
                  ></MaterialCheckbox5>
                </TouchableOpacity>
                <Text style={styles.passover11}>Passover</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.loremIpsum46}>
        Please select in accordance to what you provide guests
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  kosherKitchen: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 7
  },
  kosherKitchenFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialSwitch2: {
    width: 45,
    height: 23,
    borderRadius: 50,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  kosherKitchenRow: {
    height: 27,
    flexDirection: "row",
    marginRight: 6
  },
  countertops: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  sinkS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  dishesAndCups: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 22
  },
  cutlery: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 18
  },
  potsPans: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  cookinUtensils: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  ovenS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  microwaveS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  crocPotS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  toasterOvenS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  cookStoveTopS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  dishwasherS: {
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20
  },
  countertopsColumn: {
    width: 166,
    marginTop: 10,
    marginBottom: 16
  },
  countertopsColumnFiller: {
    flex: 1,
    flexDirection: "row"
  },
  group12: {
    width: 161,
    height: 486
  },
  button66: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox210: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button66Stack: {
    top: 0,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button67: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox311: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy1: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button67Stack: {
    top: 40,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button68: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox315: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy2: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button68Stack: {
    top: 80,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button69: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox319: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy3: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button69Stack: {
    top: 120,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button70: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox323: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy4: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button70Stack: {
    top: 160,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button71: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox327: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy5: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button71Stack: {
    top: 200,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button72: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox331: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy6: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button72Stack: {
    top: 240,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button73: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox335: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy7: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button73Stack: {
    top: 280,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button74: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox339: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy8: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button74Stack: {
    top: 320,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button75: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox343: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  dairy9: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button75Stack: {
    top: 360,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  group11: {
    top: 0,
    left: 0,
    width: 160,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  button76: {
    width: 40,
    height: 40
  },
  materialCheckbox347: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  button77: {
    width: 40,
    height: 40
  },
  materialCheckbox348: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  button98: {
    width: 40,
    height: 40
  },
  materialCheckbox349: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  group3: {
    width: 40,
    height: 40
  },
  materialCheckbox350: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  button76Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  dairy10: {
    top: 35,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  meat10: {
    top: 35,
    left: 48,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  pareve10: {
    top: 35,
    left: 83,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  passover12: {
    top: 35,
    left: 120,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  group11Stack: {
    top: 400,
    left: 0,
    width: 162,
    height: 59,
    position: "absolute"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 160,
    height: 40,
    position: "absolute",
    flexDirection: "row"
  },
  button984: {
    width: 40,
    height: 40
  },
  materialCheckbox213: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  button985: {
    width: 40,
    height: 40
  },
  materialCheckbox3595: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  button986: {
    width: 40,
    height: 40
  },
  materialCheckbox411: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  rect3: {
    width: 40,
    height: 40
  },
  materialCheckbox59: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  button984Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  dairy11: {
    top: 36,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  meat11: {
    top: 36,
    left: 48,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  pareve11: {
    top: 36,
    left: 83,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  passover13: {
    top: 36,
    left: 120,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  rect2Stack: {
    top: 440,
    left: 0,
    width: 162,
    height: 60,
    position: "absolute"
  },
  button66StackStack: {
    top: 0,
    left: 0,
    width: 162,
    height: 500,
    position: "absolute"
  },
  button87: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox310: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button87Stack: {
    top: 0,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button86: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox312: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat1: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button86Stack: {
    top: 40,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button85: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox316: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat2: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button85Stack: {
    top: 80,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button84: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox320: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat3: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button84Stack: {
    top: 120,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button83: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox324: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat4: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button83Stack: {
    top: 160,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button82: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox328: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat5: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button82Stack: {
    top: 200,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button81: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox332: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat6: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button81Stack: {
    top: 240,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button80: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox336: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat7: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button80Stack: {
    top: 280,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button79: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox340: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat8: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button79Stack: {
    top: 320,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button78: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox344: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  meat9: {
    top: 35,
    left: 8,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button78Stack: {
    top: 360,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button87StackStack: {
    top: 0,
    left: 40,
    width: 40,
    height: 407,
    position: "absolute"
  },
  button88: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox49: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button88Stack: {
    top: 0,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button89: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox313: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  button90: {
    top: 39,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox317: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve1: {
    top: 34,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  pareve2: {
    top: 74,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button89Stack: {
    top: 41,
    left: 0,
    width: 40,
    height: 86,
    position: "absolute"
  },
  button91: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox321: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve3: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button91Stack: {
    top: 120,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button92: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox325: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve4: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button92Stack: {
    top: 160,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button93: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox329: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve5: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button93Stack: {
    top: 200,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button94: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox333: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve6: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button94Stack: {
    top: 240,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button95: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox337: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve7: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button95Stack: {
    top: 280,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button96: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox341: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve8: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button96Stack: {
    top: 320,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button97: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox345: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  pareve9: {
    top: 35,
    left: 3,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button97Stack: {
    top: 360,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button88StackStack: {
    top: 0,
    left: 80,
    width: 40,
    height: 407,
    position: "absolute"
  },
  button99: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox57: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover2: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button99Stack: {
    top: 0,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button100: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox314: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover3: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button100Stack: {
    top: 40,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button101: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox318: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover4: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button101Stack: {
    top: 80,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button102: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox322: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover5: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button102Stack: {
    top: 120,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button103: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox326: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover6: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button103Stack: {
    top: 160,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button104: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox330: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover7: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button104Stack: {
    top: 200,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button105: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox334: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover8: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button105Stack: {
    top: 240,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  group2: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox338: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover9: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  group2Stack: {
    top: 280,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button106: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox342: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover10: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button106Stack: {
    top: 320,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button107: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox346: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  passover11: {
    top: 35,
    left: 0,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "roboto-700"
  },
  button107Stack: {
    top: 360,
    left: 0,
    width: 42,
    height: 59,
    position: "absolute"
  },
  button99StackStack: {
    top: 0,
    left: 120,
    width: 42,
    height: 419,
    position: "absolute"
  },
  button66StackStackStack: {
    width: 162,
    height: 500
  },
  countertopsColumnRow: {
    height: 486,
    flexDirection: "row",
    marginTop: 48
  },
  loremIpsum46: {
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -531
  }
});

export default KosherKitchenAmenities;
