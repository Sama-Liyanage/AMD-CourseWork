import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'

const Home = () => {
    return (
        <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: 'white', fontSize: 64 }}>Let's start Coding</Text>
       
        
        </View>
      </Background>
    );
}

export default Home