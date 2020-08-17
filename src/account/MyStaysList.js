import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import MyStayCardGroupUL from "./components/MyStayCardGroupUL";
import Icon from "react-native-vector-icons/Entypo";


import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth";
const currentUser = auth().currentUser;
let amountOfStays = 10;

function MyStaysList(props) {
  const [loaded, setLoaded] = useState(false);
  const [myStays, setMyStays] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getMyStays();
    }, 200)
  }, []);

  useEffect(() => {
    console.warn(myStays);
  }, [myStays])

  const getMyStays = () => {
    database().ref(`users/generalInfo/${currentUser.uid}`).on("value", res => {
      const snapshot = res.val();
      if (snapshot) {
        setMyStays(snapshot.myStays);
        amountOfStays = snapshot.myStays.length;
      } else {
        amountOfStays = 0;
      }
      setLoaded(true);
    })
  };

  if (!loaded) return (<View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>)

  return (
    <View style={styles.container}>

      <MyStayCardGroupUL
        myStays={myStays}
        onUserPress={(action, stay) => { props.onUserPress(action, stay) }}
        style={styles.myStayCardGroupUl}>
      </MyStayCardGroupUL>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)",
  },
  myStayCardGroupUl: {
    height: 608 + (amountOfStays * 40),
    width: 350,
    marginLeft: 32
  },
  materialButtonShare2: {
    width: 56,
    height: 56,
    marginLeft: 326
  },
  group10: {
    width: 414,
    height: 91,
    marginTop: -869
  },
  rect11: {
    width: 414,
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
    height: 40,
    marginTop: 10
  },
  button5: {
    width: 29,
    height: 40
  },
  icon12: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  myStays: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 121,
    marginTop: 18
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row",
    marginLeft: 90
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4Row: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  }
});

export default MyStaysList;
