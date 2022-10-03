import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Field from '../components/Field';
import Background from './Background';
import { darkGreen } from './Constants';
import Btn from "./Btn";

export default function Login(props) {
  return (
    <Background>
      <View
        style={{ alignItems: "center", width: 460 }}>
        <Text style={{ color: "white", fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
        <View style={{ backgroundColor: "white", height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center' }}>
          <Text style={{ fontSize: 40, color: darkGreen }}>Welcome Back</Text>
          <Text style={{ color: "gray", fontSize: 19, fontWeight: "bold", marginBottom: 20 }}>Log in to your account</Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
          />
          <View
            style={{ alignItems: 'center', width: '78%', marginBottom: 200 }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => props.navigation.navigate("Products")}/>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
}
