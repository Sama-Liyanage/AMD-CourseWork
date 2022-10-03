import React from 'react'
import { Text, View } from 'react-native'
import Background from './Background'

export default function Login() {
  return (
    <Background>
      <View style={{alignItems:"center",width:400}}>
       <Text style={{color:"white",fontSize:64,fontWeight:'bold'}}>Login</Text>
      </View>
    </Background>
  )
}
