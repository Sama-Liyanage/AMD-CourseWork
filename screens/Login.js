import React from 'react'
import { Text, View } from 'react-native'
import Background from './Background';
import { darkGreen } from './Constants';

export default function Login() {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text style={{ color: "white", fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
        <View style={{ backgroundColor: "white", height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center' }}>
          <Text style={{ fontSize: 40, color:darkGreen }}>Welcome Back</Text>
        </View>
      </View>
    </Background>
  )
}
