import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialCheckbox1 from "../components/MaterialCheckbox1";
import MaterialCheckbox2 from "../components/MaterialCheckbox2";
import MaterialCheckbox3 from "../components/MaterialCheckbox3";
import MaterialCheckbox4 from "../components/MaterialCheckbox4";
import MaterialCheckbox5 from "../components/MaterialCheckbox5";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import Icon from "react-native-vector-icons/Entypo";

function Untitled5(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <Image
        source={require("../images/jstay_icon_final_inverted_colors_-_Palette_e6e6e6.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.amenities}>Amenities</Text>
      <View style={styles.group11}>
        <Text style={styles.loremIpsum}>
          You will be able to add more amenities after you publish your stay.
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
          <Text style={styles.kitchennete}>Kitchennete</Text>
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
          <MaterialCheckbox1
            style={styles.materialCheckbox6}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button7}>
          <Text style={styles.drivewayGarage}>Driveway/Garage</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox7}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button8}>
          <Text style={styles.frontYard}>Front Yard</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox8}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button9}>
          <Text style={styles.backYard}>Back Yard</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox9}
          ></MaterialCheckbox1>
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
          <Text style={styles.hotTub}>Hot Tub</Text>
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
          <MaterialCheckbox1
            style={styles.materialCheckbox29}
          ></MaterialCheckbox1>
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
        <Text style={styles.loremIpsum28}>
          Space where guests can use to cook
        </Text>
        <Text style={styles.loremIpsum29}>Continuous throughout</Text>
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
          Towels, Bedsheets, Soap, Toilet paper, pillows
        </Text>
      </View>
      <View style={styles.group9}>
        <Text style={styles.safetyAmenities}>Safety Amenities</Text>
        <TouchableOpacity style={styles.button31}>
          <Text style={styles.smokeDetector}>Smoke Detector</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox37}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button32}>
          <Text style={styles.loremIpsum7}>Carbon Monoxide Detector</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox38}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button29}>
          <Text style={styles.fireExtinguisher}>Fire Extinguisher</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox3410}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button30}>
          <Text style={styles.fireEscape}>Fire Escape</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox3593}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button33}>
          <Text style={styles.firstAidKit}>First Aid Kit</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox39}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <Text style={styles.loremIpsum9}>
          Check your local laws, which may reqire a working
          detector/extinguisher in every room/stay
        </Text>
      </View>
      <View style={styles.group8}>
        <Text style={styles.jewishHome}>Jewish Home</Text>
        <TouchableOpacity style={styles.button34}>
          <Text style={styles.mezuzot}>Mezuzot</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox40}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button35}>
          <Text style={styles.charityBox}>Charity Box</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox42}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button36}>
          <Text style={styles.loremIpsum10}>Jewish Reading Material</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox43}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button37}>
          <Text style={styles.seforim}>Seforim</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox44}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button38}>
          <Text style={styles.loremIpsum11}>Benchers/Birkat Hamazon</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox45}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button39}>
          <Text style={styles.siddur}>Siddur</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox46}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button40}>
          <Text style={styles.kosherMeals}>Kosher Meals</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox48}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <Text style={styles.loremIpsum13}></Text>
        <Text style={styles.loremIpsum32}>
          My stay has mezuzot fixed to doorways
        </Text>
        <Text style={styles.loremIpsum33}>Jewish magazines and books</Text>
        <Text style={styles.loremIpsum34}>
          A selection of jewish study books
        </Text>
        <Text style={styles.loremIpsum36}>
          We offer a selection kosher food, free or for a fee
        </Text>
      </View>
      <View style={styles.group7}>
        <TouchableOpacity style={styles.button43}>
          <Text style={styles.loremIpsum12}></Text>
          <Text style={styles.kosherRestaurants}>Kosher Restaurants</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox53}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <Text style={styles.walkingDistance}>Within Walking Distance of..</Text>
        <TouchableOpacity style={styles.button42}>
          <Text style={styles.synagogueS}>Synagogue(s)</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox52}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button41}>
          <Text style={styles.jewishCommunity}>Jewish Community</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox51}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button44}>
          <Text style={styles.kosherShops}>Kosher Shops</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox54}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button45}>
          <Text style={styles.womensMikvah}>Women&#39;s Mikvah</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox55}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button46}>
          <Text style={styles.mensMikvah2}>Men&#39;s Mikvah</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox56}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <Text style={styles.loremIpsum35}></Text>
        <Text style={styles.loremIpsum37}>
          My stay is within a 10 minute walk of the following:
        </Text>
      </View>
      <View style={styles.group5}>
        <Text style={styles.kosherKitchen}>Kosher Kitchen</Text>
        <Text style={styles.countertops}>Countertops</Text>
        <Text style={styles.dishesAndCups}>Dishes And Cups</Text>
        <Text style={styles.cutlery}>Cutlery</Text>
        <Text style={styles.potsPans}>Pots/Pans</Text>
        <Text style={styles.cookinUtensils}>Cookin Utensils</Text>
        <Text style={styles.ovenS}>Oven(s)</Text>
        <Text style={styles.sinkS}>Sink(s)</Text>
        <Text style={styles.microwaveS}>Microwave(s)</Text>
        <Text style={styles.crocPotS}>Croc Pot(s)</Text>
        <Text style={styles.toasterOvenS}>Toaster Oven(s)</Text>
        <Text style={styles.cookStoveTopS}>Cook/Stove Top(s)</Text>
        <View style={styles.group4}>
          <TouchableOpacity style={styles.button66}>
            <MaterialCheckbox2
              style={styles.materialCheckbox210}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button87}>
            <MaterialCheckbox3
              style={styles.materialCheckbox310}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button88}>
            <MaterialCheckbox4
              style={styles.materialCheckbox49}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button99}>
            <MaterialCheckbox5
              style={styles.materialCheckbox57}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button67}>
            <MaterialCheckbox2
              style={styles.materialCheckbox311}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button86}>
            <MaterialCheckbox3
              style={styles.materialCheckbox312}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button89}>
            <MaterialCheckbox4
              style={styles.materialCheckbox313}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button100}>
            <MaterialCheckbox5
              style={styles.materialCheckbox314}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button68}>
            <MaterialCheckbox2
              style={styles.materialCheckbox315}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button85}>
            <MaterialCheckbox3
              style={styles.materialCheckbox316}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button90}>
            <MaterialCheckbox4
              style={styles.materialCheckbox317}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button101}>
            <MaterialCheckbox5
              style={styles.materialCheckbox318}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button69}>
            <MaterialCheckbox2
              style={styles.materialCheckbox319}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button84}>
            <MaterialCheckbox3
              style={styles.materialCheckbox320}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button91}>
            <MaterialCheckbox4
              style={styles.materialCheckbox321}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button102}>
            <MaterialCheckbox5
              style={styles.materialCheckbox322}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button70}>
            <MaterialCheckbox2
              style={styles.materialCheckbox323}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button83}>
            <MaterialCheckbox3
              style={styles.materialCheckbox324}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button92}>
            <MaterialCheckbox4
              style={styles.materialCheckbox325}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button103}>
            <MaterialCheckbox5
              style={styles.materialCheckbox326}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button71}>
            <MaterialCheckbox2
              style={styles.materialCheckbox327}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button82}>
            <MaterialCheckbox3
              style={styles.materialCheckbox328}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button93}>
            <MaterialCheckbox4
              style={styles.materialCheckbox329}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button104}>
            <MaterialCheckbox5
              style={styles.materialCheckbox330}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button72}>
            <MaterialCheckbox2
              style={styles.materialCheckbox331}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button81}>
            <MaterialCheckbox3
              style={styles.materialCheckbox332}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button94}>
            <MaterialCheckbox4
              style={styles.materialCheckbox333}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button105}>
            <MaterialCheckbox5
              style={styles.materialCheckbox334}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button73}>
            <MaterialCheckbox2
              style={styles.materialCheckbox335}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button80}>
            <MaterialCheckbox3
              style={styles.materialCheckbox336}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button95}>
            <MaterialCheckbox4
              style={styles.materialCheckbox337}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <View style={styles.group2}>
            <MaterialCheckbox5
              style={styles.materialCheckbox338}
            ></MaterialCheckbox5>
          </View>
          <TouchableOpacity style={styles.button74}>
            <MaterialCheckbox2
              style={styles.materialCheckbox339}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button79}>
            <MaterialCheckbox3
              style={styles.materialCheckbox340}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button96}>
            <MaterialCheckbox4
              style={styles.materialCheckbox341}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button106}>
            <MaterialCheckbox5
              style={styles.materialCheckbox342}
            ></MaterialCheckbox5>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button75}>
            <MaterialCheckbox2
              style={styles.materialCheckbox343}
            ></MaterialCheckbox2>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button78}>
            <MaterialCheckbox3
              style={styles.materialCheckbox344}
            ></MaterialCheckbox3>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button97}>
            <MaterialCheckbox4
              style={styles.materialCheckbox345}
            ></MaterialCheckbox4>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button107}>
            <MaterialCheckbox5
              style={styles.materialCheckbox346}
            ></MaterialCheckbox5>
          </TouchableOpacity>
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
        <View style={styles.group12}>
          <Text style={styles.meat}>Meat</Text>
          <Text style={styles.pareve}>Pareve</Text>
          <Text style={styles.passover2}>Passover</Text>
          <Text style={styles.dairy}>Dairy</Text>
        </View>
        <Text style={styles.loremIpsum46}>
          Please select in accordance to what you provide guests:
        </Text>
      </View>
      <View style={styles.group6}>
        <Text style={styles.shabbatHolliday}>Shabbat/Holliday Essentials</Text>
        <TouchableOpacity style={styles.button47}>
          <Text style={styles.shabbatLampS}>Shabbat Lamp(s)</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox351}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button48}>
          <Text style={styles.loremIpsum16}>Candlesticks And Candles</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox352}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button49}>
          <Text style={styles.kiddushCup}>Kiddush Cup</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox353}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button50}>
          <Text style={styles.loremIpsum17}>Challah Board/Knife/Cover</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox354}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button51}>
          <Text style={styles.havdalaSet}>Havdala Set</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox356}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <Text style={styles.candleSpices}>Candle &amp; spices</Text>
        <TouchableOpacity style={styles.button52}>
          <Text style={styles.loremIpsum18}>Shabbat Friendly Fridge</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox355}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <Text style={styles.loremIpsum38}>
          Alarm and lights may be disabled
        </Text>
        <TouchableOpacity style={styles.button53}>
          <MaterialCheckbox1
            style={styles.materialCheckbox357}
          ></MaterialCheckbox1>
          <Text style={styles.timeSwitch}>Time Switch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button56}>
          <Text style={styles.shabbatElevator}>Shabbat Elevator</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox360}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button54}>
          <Text style={styles.loremIpsum21}>Shabbat Friendly Parking</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox3582}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button55}>
          <Text style={styles.loremIpsum22}>Shabbat Friendly Entry</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox3592}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button57}>
          <Text style={styles.groundFloor}>Ground Floor</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox361}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button58}>
          <Text style={styles.liquidSoap}>Liquid Soap</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox362}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button59}>
          <Text style={styles.shabbatKettle}>Shabbat Kettle</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox363}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button60}>
          <Text style={styles.loremIpsum23}>Hot Plate/Food Warmer</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox364}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button61}>
          <Text style={styles.sukkah}>Sukkah</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox365}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button62}>
          <Text style={styles.loremIpsum24}>Sukkah Balcony/Garden</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox366}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button63}>
          <Text style={styles.menorah}>Menorah</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox367}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button64}>
          <Text style={styles.kosherForPassover}>Kosher For Passover</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox368}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button65}>
          <Text style={styles.passoverKitchen}>Passover Kitchen</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox369}
          ></MaterialCheckbox1>
        </TouchableOpacity>
        <View style={styles.group10}>
          <Text style={styles.sederPlate}>Seder Plate</Text>
          <MaterialCheckbox1
            style={styles.materialCheckbox370}
          ></MaterialCheckbox1>
        </View>
        <Text style={styles.loremIpsum40}>
          Guests can park nearby without having to move over the weekend
        </Text>
        <Text style={styles.loremIpsum41}>Non-electric entrance key/code</Text>
        <Text style={styles.loremIpsum42}>
          My stay comes with a ready built Sukkah during Sukkot
        </Text>
        <Text style={styles.loremIpsum43}>
          My stay has space where guests can build a kosher {"\n"}sukkah
        </Text>
        <Text style={styles.loremIpsum44}>
          My stay is Kashered and cleaned for Passover
        </Text>
        <Text style={styles.loremIpsum45}>
          My stay has a separated kitchen with Passover-only {"\n"}equipment
        </Text>
      </View>
      <MaterialButtonViolet6
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet6>
      <Icon name="chevron-left" style={styles.icon1}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  rect: {
    top: 0,
    left: -12,
    height: 107,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,88,155,1)",
    shadowOpacity: 0.22
  },
  image1: {
    top: 46,
    width: 96,
    height: 51,
    position: "absolute",
    right: -8
  },
  amenities: {
    top: 53,
    left: 51,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 35,
    fontFamily: "roboto-bold"
  },
  group11: {
    top: 120,
    left: 30,
    width: 368,
    height: 1260,
    position: "absolute"
  },
  loremIpsum: {
    top: 50,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 44,
    fontSize: 14,
    
  },
  whatAmenities: {
    top: 0,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    right: 0,
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  loremIpsum2: {
    top: 50,
    left: 27,
    width: 1,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    justifyContent: "space-between",
    fontSize: 20,
    
  },
  button: {
    top: 90,
    left: 0,
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
  kitchennete: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
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
    
  },
  clothingHangers: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
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
  hotTub: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
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
    
  },
  materialCheckbox29: {
    top: 0,
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
    
  },
  loremIpsum28: {
    top: 224,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum29: {
    top: 274,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
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
    
  },
  text: {
    top: 124,
    left: 10,
    width: "78.27%",
    height: 26,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  group9: {
    top: 1390,
    left: 30,
    height: 270,
    position: "absolute",
    right: 59
  },
  safetyAmenities: {
    top: 0,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  button31: {
    top: 150,
    left: 0,
    width: 182,
    height: 40,
    position: "absolute"
  },
  smokeDetector: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox37: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button32: {
    top: 190,
    left: 0,
    width: 278,
    height: 40,
    position: "absolute"
  },
  loremIpsum7: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox38: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button29: {
    top: 70,
    left: 0,
    width: 188,
    height: 40,
    position: "absolute"
  },
  fireExtinguisher: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox3410: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button30: {
    top: 110,
    left: 0,
    width: 143,
    height: 40,
    position: "absolute"
  },
  fireEscape: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox3593: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button33: {
    top: 230,
    left: 0,
    width: 143,
    height: 40,
    position: "absolute"
  },
  firstAidKit: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox39: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum9: {
    top: 30,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  group8: {
    top: 1670,
    left: 30,
    height: 348,
    position: "absolute",
    right: 71
  },
  jewishHome: {
    top: 0,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  button34: {
    top: 30,
    left: 0,
    width: 115,
    height: 40,
    position: "absolute"
  },
  mezuzot: {
    top: 10,
    left: 38,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox40: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button35: {
    top: 80,
    left: 0,
    width: 141,
    height: 40,
    position: "absolute"
  },
  charityBox: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox42: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button36: {
    top: 120,
    left: 0,
    width: 258,
    height: 40,
    position: "absolute"
  },
  loremIpsum10: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox43: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button37: {
    top: 170,
    left: 1,
    width: 109,
    height: 40,
    position: "absolute"
  },
  seforim: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox44: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button38: {
    top: 220,
    left: 0,
    width: 274,
    height: 40,
    position: "absolute"
  },
  loremIpsum11: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox45: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button39: {
    top: 260,
    left: 0,
    width: 96,
    height: 40,
    position: "absolute"
  },
  siddur: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox46: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button40: {
    top: 300,
    left: 0,
    width: 161,
    height: 40,
    position: "absolute"
  },
  kosherMeals: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox48: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum13: {
    top: 60,
    left: 21,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  loremIpsum32: {
    top: 64,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum33: {
    top: 154,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum34: {
    top: 204,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum36: {
    top: 334,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  group7: {
    top: 2040,
    left: 30,
    height: 290,
    position: "absolute",
    right: 59
  },
  button43: {
    top: 130,
    left: 0,
    width: 214,
    height: 40,
    position: "absolute"
  },
  loremIpsum12: {
    top: 16,
    left: 30,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  kosherRestaurants: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox53: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  walkingDistance: {
    top: 0,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  button42: {
    top: 90,
    left: 0,
    width: 163,
    height: 40,
    position: "absolute"
  },
  synagogueS: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox52: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button41: {
    top: 50,
    left: 0,
    width: 210,
    height: 40,
    position: "absolute"
  },
  jewishCommunity: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox51: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button44: {
    top: 170,
    left: 0,
    width: 163,
    height: 40,
    position: "absolute"
  },
  kosherShops: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox54: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button45: {
    top: 210,
    left: 0,
    width: 189,
    height: 40,
    position: "absolute"
  },
  womensMikvah: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox55: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button46: {
    top: 250,
    left: 0,
    width: 159,
    height: 40,
    position: "absolute"
  },
  mensMikvah2: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox56: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum35: {
    top: 103,
    left: 174,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum37: {
    top: 30,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  group5: {
    top: 2340,
    left: 40,
    width: "87.22%",
    height: 490,
    position: "absolute"
  },
  kosherKitchen: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  countertops: {
    top: 60,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  dishesAndCups: {
    top: 140,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  cutlery: {
    top: 180,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  potsPans: {
    top: 220,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  cookinUtensils: {
    top: 260,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  ovenS: {
    top: 300,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  sinkS: {
    top: 100,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  microwaveS: {
    top: 340,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  crocPotS: {
    top: 380,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  toasterOvenS: {
    top: 420,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  cookStoveTopS: {
    top: 460,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  group4: {
    top: 50,
    width: 160,
    height: 440,
    position: "absolute",
    right: 1
  },
  button66: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox210: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button87: {
    top: 0,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox310: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button88: {
    top: 0,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox49: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button99: {
    top: 0,
    left: "75%",
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox57: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button67: {
    top: 40,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox311: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button86: {
    top: 40,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox312: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button89: {
    top: 41,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox313: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button100: {
    top: 40,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox314: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button68: {
    top: 80,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox315: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button85: {
    top: 80,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox316: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button90: {
    top: 80,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox317: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button101: {
    top: 80,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox318: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button69: {
    top: 120,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox319: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button84: {
    top: 120,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox320: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button91: {
    top: 120,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox321: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button102: {
    top: 120,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox322: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button70: {
    top: 160,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox323: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button83: {
    top: 160,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox324: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button92: {
    top: 160,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox325: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button103: {
    top: 160,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox326: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button71: {
    top: 200,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox327: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button82: {
    top: 200,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox328: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button93: {
    top: 200,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox329: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button104: {
    top: 200,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox330: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button72: {
    top: 240,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox331: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button81: {
    top: 240,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox332: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button94: {
    top: 240,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox333: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button105: {
    top: 240,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox334: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button73: {
    top: 280,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox335: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button80: {
    top: 280,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox336: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button95: {
    top: 280,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox337: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  group2: {
    top: 280,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox338: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button74: {
    top: 320,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox339: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button79: {
    top: 320,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox340: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button96: {
    top: 320,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox341: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button106: {
    top: 320,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox342: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button75: {
    top: 360,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox343: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button78: {
    top: 360,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox344: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button97: {
    top: 360,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox345: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button107: {
    top: 360,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox346: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button76: {
    top: 400,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox347: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button77: {
    top: 400,
    left: 40,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox348: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  button98: {
    top: 400,
    left: 80,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox349: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  group3: {
    top: 400,
    left: 120,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox350: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 10
  },
  group12: {
    top: 40,
    left: 210,
    height: 20,
    position: "absolute",
    right: 0
  },
  meat: {
    top: 0,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 10,
    
  },
  pareve: {
    top: 0,
    left: 75,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 10,
    
  },
  passover2: {
    top: 0,
    left: 110,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 10,
    
  },
  dairy: {
    top: 0,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 9,
    
  },
  loremIpsum46: {
    top: 26,
    left: 0,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 10,
    
  },
  group6: {
    top: 2840,
    left: 30,
    height: 940,
    position: "absolute",
    right: 0
  },
  shabbatHolliday: {
    top: 0,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  button47: {
    top: 30,
    left: 0,
    width: 193,
    height: 40,
    position: "absolute"
  },
  shabbatLampS: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox351: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button48: {
    top: 70,
    left: 0,
    width: 272,
    height: 40,
    position: "absolute"
  },
  loremIpsum16: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox352: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button49: {
    top: 110,
    left: 0,
    width: 153,
    height: 40,
    position: "absolute"
  },
  kiddushCup: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox353: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button50: {
    top: 150,
    left: 0,
    width: 277,
    height: 40,
    position: "absolute"
  },
  loremIpsum17: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox354: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button51: {
    top: 190,
    left: 1,
    width: 145,
    height: 40,
    position: "absolute"
  },
  havdalaSet: {
    top: 10,
    left: 39,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox356: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  candleSpices: {
    top: 224,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  button52: {
    top: 240,
    left: 0,
    width: 249,
    height: 40,
    position: "absolute"
  },
  loremIpsum18: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox355: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum38: {
    top: 274,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  button53: {
    top: 290,
    left: 0,
    width: 150,
    height: 40,
    position: "absolute"
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
    
  },
  button56: {
    top: 440,
    left: 0,
    width: 190,
    height: 40,
    position: "absolute"
  },
  shabbatElevator: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox360: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button54: {
    top: 330,
    left: 0,
    width: 261,
    height: 40,
    position: "absolute"
  },
  loremIpsum21: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox3582: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button55: {
    top: 390,
    left: 0,
    width: 239,
    height: 40,
    position: "absolute"
  },
  loremIpsum22: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox3592: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button57: {
    top: 480,
    left: 0,
    width: 155,
    height: 40,
    position: "absolute"
  },
  groundFloor: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox361: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button58: {
    top: 520,
    left: 0,
    width: 144,
    height: 40,
    position: "absolute"
  },
  liquidSoap: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox362: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button59: {
    top: 560,
    left: 0,
    width: 170,
    height: 40,
    position: "absolute"
  },
  shabbatKettle: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox363: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button60: {
    top: 600,
    left: 0,
    width: 251,
    height: 40,
    position: "absolute"
  },
  loremIpsum23: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox364: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button61: {
    top: 640,
    left: 0,
    width: 105,
    height: 40,
    position: "absolute"
  },
  sukkah: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox365: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button62: {
    top: 690,
    left: 0,
    width: 253,
    height: 40,
    position: "absolute"
  },
  loremIpsum24: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox366: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button63: {
    top: 750,
    left: 0,
    width: 119,
    height: 40,
    position: "absolute"
  },
  menorah: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox367: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button64: {
    top: 790,
    left: 0,
    width: 224,
    height: 40,
    position: "absolute"
  },
  kosherForPassover: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox368: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button65: {
    top: 840,
    left: 0,
    width: 194,
    height: 40,
    position: "absolute"
  },
  passoverKitchen: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox369: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  group10: {
    top: 900,
    left: 0,
    width: 142,
    height: 40,
    position: "absolute"
  },
  sederPlate: {
    top: 10,
    left: 40,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    
  },
  materialCheckbox370: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  loremIpsum40: {
    top: 364,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum41: {
    top: 425,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum42: {
    top: 674,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum43: {
    top: 724,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum44: {
    top: 825,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  loremIpsum45: {
    top: 874,
    left: 10,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    
  },
  materialButtonViolet1: {
    top: 3780,
    width: 112,
    height: 45,
    position: "absolute",
    right: 16,
    shadowOpacity: 0.01
  },
  icon1: {
    top: 50,
    left: 9,
    position: "absolute",
    color: "rgba(0,88,155,1)",
    fontSize: 40
  }
});

export default Untitled5;
