import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import MaterialButtonViolet10 from "../components/MaterialButtonViolet10";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import Icon from "react-native-vector-icons/Entypo";
import ImagePicker from 'react-native-image-picker';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const imagePickerOptions = {
  title: 'Select Stay pictures',
  mediaType: "photo",
  maxWidth: 450,
  maxHeight: 450,
  allowsEditing: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function StayPictures(props) {
  const [pictures, setPictures] = useState([]);

  const openImageSelect = () => {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      console.log('Response = ', response);
      if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        const newPictures = pictures;
        newPictures.push({ uri: response.uri })
        setPictures([...newPictures]);
      }
    })
  }
  // useEffect(()=>{
  //   return ()=>{
  //     for(let i = 0; i < pictures.length; i++){
  //       uploadToFireBase(pictures[i].uri,i)
  //     }
  //   }
  // },[])
  const uploadToFireBase = async (uri,index) => {
    const imagePath = `stays/${props.stayUID}/${index}`;
    const reference = storage().ref(imagePath);
    // path to existing file on filesystem
    const pathToFile = uri;
    // uploads file
    const response = await reference.putFile(pathToFile);
    return response;
}

  const deletePicture = (index) => {
    let newPictures = [];
    for(let i = 0; i < pictures.length; i++){
      if(i !== index){
        newPictures.push(pictures[i]);
      }
    }
    setPictures(newPictures);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum4}>
        Show guests what your stay looks like
      </Text>
      <Text style={styles.loremIpsum6}>
        Adding clear and bright pictures will increase chances of stay bookings
      </Text>
      <View style={styles.materialButtonViolet10Stack}>
        <MaterialButtonViolet10
          onPress={() => { openImageSelect() }}
          style={styles.materialButtonViolet10}
        ></MaterialButtonViolet10>
        {pictures.map((picture, index) => {
          return (
            <>
              <Image
                source={{ uri: picture.uri }}
                resizeMode="contain"
                style={index < 4 ? styles.image : styles.image2}
              ></Image>
              <TouchableOpacity
               onPress={()=>{
                deletePicture(index);
              }}>
              <FontAwesomeIcon
                name="close"
              ></FontAwesomeIcon>
              </TouchableOpacity>
            </>
          )
        })
        }
      </View>

      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText11>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet11}
        ></MaterialButtonViolet6>
      </View>

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(2,172,235,1)",
    width: windowWidth,
    height: windowHeight
  },
  loremIpsum4: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    width: '80%',
    fontFamily: "roboto-regular",
    marginTop: 35,
    // marginLeft: 33
  },
  loremIpsum6: {
    color: "rgba(0,88,155,1)",
    width: '80%',
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 33,
    marginRight: 34
  },
  materialButtonViolet10: {
    width: '80%',
    height: 44,
    backgroundColor: "rgba(0,88,155,1)",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 33,
    marginRight: 34
  },
  listView: {
    flex: 1,
    width: '80%',
    // marginLeft: 33,
  },
  materialButtonViolet10Stack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: windowWidth < 500 ? 30 : 10,
    width: '80%',
    // alignItems: 'center',
    justifyContent: "center",
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    marginTop: windowWidth < 500 ? -40 : 10,
    width: (windowWidth / 2) - (windowWidth / 6),
    marginLeft: 10,
    marginRight: 10,
  },
  image2: {
    marginTop: windowWidth < 500 ? -40 : 10,
    height: 150,
    width: (windowWidth / 2) - (windowWidth / 6),
    marginLeft: 10,
    marginRight: 10,
  },
  image3: {
    top: 174,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image4: {
    top: 174,
    left: 192,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image5: {
    top: 309,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image6: {
    top: 309,
    left: 192,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image7: {
    top: 444,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image8: {
    top: 444,
    left: 192,
    width: 150,
    height: 150,
    position: "absolute"
  },
  materialButtonWithVioletText1: {
    height: 36,
    opacity: 0.46,
    flex: 1,
    marginRight: 49,
    marginTop: 4
  },
  materialButtonViolet11: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText1Row: {
    position: "absolute",
    bottom: 60,
    height: 45,
    flexDirection: "row",
    // marginTop: 9,
    // marginLeft: 162,
    right: "20%"
  },
  group1: {
    height: 91,
    marginTop: -864
  },
  rect: {
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
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  pictures: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 126,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 10
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row"
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4RowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  }
});

export default StayPictures;
