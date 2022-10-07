import React, { useState } from 'react'
import { useEffect } from 'react';
import { NativeBaseProvider, Text, } from 'native-base'
import { Alert, Image, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Background from '../components/Background';

const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,

  },
}

export default function AddVehicle({ navigation }) {

  const [posts, setPosts] = useState([]);
  const [vehiclename, setvehiclename] = useState('');
  const [price, setprice] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [selectedUri, setSelectedUri] = useState();

  var id = "C001"
  var t = 0;

  useEffect(() => {

    if (selectedImage == null) {
      const exampleImage = require('../assets/images/avatars/suzukicelerio.png')
      setSelectedImage(exampleImage)
    }
    getCars()
  })

  const getCars = () => {
    fetch('http://192.168.8.182:4000/vehicle/')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }

  const setId = () => {

    getCars()

    if (posts.length != 0) {
      var id2 = posts[posts.length - 1].code;

      let temp = parseInt(id2.slice(1))

      if (temp < 1) {
        id = 'C001'
      } else if (temp < 9) {
        id = 'C00' + (temp + 1)
      } else if (temp < 99) {
        id = 'C0' + (temp + 1)
      } else if (temp < 999) {
        id = 'C' + (temp + 1)
      } else {
        id = 'C001'
      }
    }
  }

  const openGallery = async () => {

    const images = await launchImageLibrary(options);

    setSelectedImage(images.assets[0])
    setSelectedUri(images.assets[0].uri)

    const formdata = new FormData()
    formdata.append('file', {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName
    })

    let res = await fetch('http://192.168.8.182:4000/vehicle/image', {
      method: 'post',
      body: formdata,
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    let responsejson = await res.json();
  }

  const saveData = () => {
    setId();

    fetch('http://192.168.8.182:4000/vehicle/', {
      method: 'POST',
      body: JSON.stringify({
        code: id,
        vehiclename: vehiclename,
        vehicleimg: selectedUri,
        price: price,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => { Alert.alert("Save Saved Successfully !"); clearFields() })
      .catch((err) => { Alert.alert("Error occured !") })
  }

  const clearFields = () => {
    setvehiclename(""),
      setprice(""),

      setSelectedImage(require('../assets/icon/love.png'))

  }

  return (
    <NativeBaseProvider>
        <ScrollView>
          <Image style={{ width: 400, height: 200, marginLeft: 10 ,marginTop:40}} source={selectedImage} />
          <Text style={{ color: ' #ffffff', fontSize: 20, marginVertical: 5, marginLeft:'30%'}}>Add Vehicle</Text>
          <TextInput style={styles.input1} placeholder='Registration Number' />
          <TextInput style={styles.input2} placeholder='Current Owner' />
          <TextInput style={styles.input2} placeholder='Address' />
          <TextInput style={styles.input2} placeholder='Model' />
          <TextInput style={styles.input2} placeholder='Color' />
          <TextInput style={styles.input2} placeholder='Year of Manufacture' />
          <TextInput style={styles.input2} placeholder='Fuel' />
          <TextInput style={styles.input2} placeholder='Price' />
          <TextInput style={styles.input2} placeholder='Color' />
          <TextInput style={styles.input2} placeholder='Year of Manufacture' />
          <TextInput style={styles.input2} placeholder='Fuel' />
          <TextInput style={styles.input2} placeholder='Price' />



          <TouchableOpacity style={styles.button} onPress={openGallery}>
            <Text style={{ color: ' #ffffff', fontSize: 20, marginVertical: 5, marginLeft: 15 }}>Open Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={{ color: ' #ffffff', fontSize: 20, marginVertical: 5, marginLeft: 30 }}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  
  input1: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginLeft: 30
  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginLeft: 30
  },
  button: {
    width: '40%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    height: 50,
    marginTop: '7%',
    marginLeft: '25%',
    marginBottom: '7%'

  },
  button1: {
    width: '30%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#1565c0',
    height: 50,
    marginTop: '7%',
    marginLeft: '30%',
    marginBottom: '7%'


  }
})