import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonWithVioletText19 from "./MaterialButtonWithVioletText19";
import MaterialButtonWithVioletText20 from "./MaterialButtonWithVioletText20";
import Icon from "react-native-vector-icons/FontAwesome";

function MyStayCardGroupUL(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group8}>
        <View style={styles.rect2}>
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/Cottage1.jpg")}
              resizeMode="stretch"
              style={styles.image2}
            ></Image>
            <View style={styles.theCottageColumn}>
              <Text style={styles.theCottage}>The Cottage</Text>
              <View style={styles.materialButtonWithVioletText19Stack}>
                <MaterialButtonWithVioletText19
                onPress={()=>{props.onUserPress("editMyListings")}}
                tag="Edit Stay"
                  style={styles.materialButtonWithVioletText19}
                ></MaterialButtonWithVioletText19>
                <MaterialButtonWithVioletText20
                tag="Calendar"
                  style={styles.materialButtonWithVioletText20}
                ></MaterialButtonWithVioletText20>
              </View>
            </View>
            <Icon name="trash-o" style={styles.icon3}></Icon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group8: {
    height: 90
  },
  rect2: {
    height: 90,
    backgroundColor: "rgba(230,230,230,0.41)",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    shadowOpacity: 0.01
  },
  image2: {
    width: 100,
    height: 75,
    borderRadius: 10
  },
  theCottage: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 32
  },
  materialButtonWithVioletText19: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText20: {
    top: 0,
    left: 93,
    width: 100,
    height: 36,
    position: "absolute"
  },
  materialButtonWithVioletText19Stack: {
    width: 193,
    height: 36,
    marginTop: 5
  },
  theCottageColumn: {
    width: 193,
    marginLeft: 22,
    marginTop: 11
  },
  icon3: {
    color: "rgba(182,182,182,1)",
    fontSize: 20,
    height: 20,
    width: 17,
    marginLeft: 2,
    marginTop: 3
  },
  image2Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 7,
    marginRight: 9
  }
});

export default MyStayCardGroupUL;
