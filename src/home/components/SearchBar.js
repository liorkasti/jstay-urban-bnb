import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function SearchBar(props) {
  const [search, setSearch] = useState("");
  
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group2}>
        <View style={styles.textInput42Stack}>
          <TextInput
            value={search || props.searchText}
            onChangeText={(text) => { setSearch(text) }}
            onFocus={() => { props.onPress() }}
            placeholder="Location, neighbourhood, or address"
            style={styles.textInput42}
          ></TextInput>
          <TouchableOpacity onPress={() => props.onPress()} style={styles.button1082}>
            <FontAwesomeIcon
              name="sliders"
              style={styles.icon252}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1072}>
            <IoniconsIcon
              name="ios-search"
              style={styles.icon352}
            ></IoniconsIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group2: {
    alignItems: "center",
  },
  textInput42: {
    width: 'auto',
    width: 286,
    height: 39,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 3,
    fontFamily: "roboto-regular",
    fontSize: 12,
    textAlign: "center",
  },
  button1082: {
    top: 8,
    height: 23,
    height: 20,
    position: "absolute",
    right: 10,
    width: 21,
    width: 'auto',
  },
  icon252: {
    color: "rgba(128,128,128,1)",
    fontSize: 21
  },
  button1072: {
    top: 9,
    left: 10,
    width: 22,
    height: 21,
    position: "absolute",
    // left: "13%",
  },
  icon352: {
    color: "rgba(0,88,155,1)",
    fontSize: 24,
    width: 22,
    height: 21
  },
  textInput42Stack: {
    height: 39
  }
});

export default SearchBar;
