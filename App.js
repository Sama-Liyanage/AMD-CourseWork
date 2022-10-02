import React from 'react'
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'

export default function App() {
  return (
   <View style={styles.container}>
    <Text>
      Open up App.js
    </Text>
    <StatusBar style="auto"/>
   </View>

  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})