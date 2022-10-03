import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = () => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
                <Text style={{ color: 'white', fontSize: 64 ,marginBottom: 40 }}>coding</Text>
                <Btn bgColor={darkGreen} textColor='white' btnLabel="Login"/>
                <Btn bgColor='white' textColor={darkGreen} btnLabel="Sign Up"/>

            </View>
        </Background>
    );
}

export default Home