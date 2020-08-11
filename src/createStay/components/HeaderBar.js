import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions,  Image} from "react-native"


  export  const HeaderBar = () => {
      return(
            <View style={styles.icon2Row}>
            <View style={styles.bsD1Stack}>
              <Text style={styles.bsD1}>BS"D</Text>
              <View style={styles.group1}>
                <View style={styles.rect4}>
                  <Text style={styles.bsD12}>BS"D</Text>
                  <View style={styles.button4RowRow}>
                    <View style={styles.button4Row}>
                      <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button4}>
                        <TouchableOpacity onPress={() => { props.onBack() }} style={styles.button5}>
                          <EntypoIcon
                            name="chevron-left"
                            style={styles.icon1}
                          ></EntypoIcon>
                        </TouchableOpacity>
                      </TouchableOpacity>
                      <Text style={styles.createAStay3}>Create A Stay</Text>
                    </View>
                    <View style={styles.button4RowFiller}></View>
                    <TouchableOpacity onPress={props.onHome} style={styles.button3}>
                      <View style={styles.image1Filler}></View>
                      <Image
                        source={require("../assets/images/jstay-icon-inverted8.png")}
                        resizeMode="contain"
                        style={styles.image1}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
      )}
    