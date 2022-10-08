import React, { useState } from 'react'
import { useEffect } from 'react';
import { NativeBaseProvider, ScrollView, View, } from 'native-base'
import { Dimensions, StyleSheet, Text, Image, TextInput } from 'react-native';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';



export default function UpdateDeleteVehicle({ route, navigation }) {

  const [posts, setPosts] = useState([]);


  const cars = [
    {
      registration_no: "SP GHJ6-7889",
      model: "Toyota Axio",
      currentOwner: "Mr.Kamal Gunarathna",
      image: require('../assets/images/avatars/toyotaaxio.jpg'),
    },
    {
      registration_no: "WP DJH-5612",
      model: "Mercedes",
      currentOwner: "Mr.Nimal Ekanayaka",
      image: require('../assets/images/avatars/mercedes.png'),
    },
    {
      registration_no: "SP RTHK-8567",
      model: "Suzuki AltoK10",
      currentOwner: "Mr.Gunasekara",
      image: require('../assets/images/avatars/suzuki.png'),
    },
    {
      registration_no: "CP SKH-567",
      model: "Toyota-Prius",
      currentOwner: "Mrs.Indrani",
      image: require('../assets/images/avatars/toyotaPrius.jpg'),
    },
    {
      registration_no: "SP RTHK-8567",
      model: "Toyota Allion",
      currentOwner: "Mr.Gunasekara",
      image: require('../assets/images/avatars/toyotaAllion.png'),

    },
    {
      registration_no: "CP SKH-567",
      model: "Perodua Sedan",
      currentOwner: "Mrs.Indrani",
      image: require('../assets/images/avatars/peroduaSedan.jpg'),
    },


  ];

  useEffect(() => {
    setPosts(route.params.obj)
    console.log(posts);

    cars.forEach(element => {
      // console.log(element);
      // if (posts == element.registration_no) {
      //   console.log(element)
      // }
    });

  })



  return (
    <NativeBaseProvider>
      <ScrollView>
        <Text style={styles.title}>Vehicle Details</Text>
        <View style={styles.cardContainer}>
          <Image style={styles.imageStyle} source={require('../assets/images/avatars/toyotaaxio.jpg')} />

          <Text style={styles.titleStyle}>Toyota Axio</Text>
          <View style={{ height: 500, width: 300, backgroundColor: 'white', borderRadius: 20, marginTop: 10, marginLeft: 40 }}>

            <TextInput style={styles.input1} placeholder='Registration Number' />
            <TextInput style={styles.input2} placeholder='Current Owner' />
            <TextInput style={styles.input2} placeholder='Address' />
            <TextInput style={styles.input2} placeholder='Model' />
            <TextInput style={styles.input2} placeholder='Color' />
            <TextInput style={styles.input2} placeholder='Year of Manufacture' />
            <TextInput style={styles.input2} placeholder='Fuel' />
            <TextInput style={styles.input2} placeholder='Price' />
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}


const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;

const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 25,
    height: 800,
    backgroundColor: '#003d33',
    borderRadius: 20,
    margin: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '30%',
    marginTop: 30,
  },
  imageStyle: {
    height: 220,
    width: deviceWidth - 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: radius,
    opacity: 0.9,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 20,
    marginLeft: 100,
    color: '#ffffff',
  },
  details: {
    fontWeight: '200',
    margin: 40
  },
  input1: {
    margin: 10,
    borderWidth: 1,
    padding: 2,
    width: '80%',
    borderRadius: 5,
    marginLeft: 30
  },
  input2: {
    margin: 10,
    marginTop: '5%',
    borderWidth: 1,
    padding: 2,
    width: '80%',
    borderRadius: 5,
    marginLeft: 30
  },

})
