import { View, Text } from 'react-native'
import React from 'react'
import Background from '../components/Background';
import Btn from '../components/Btn';
import { darkGreen, green } from '../components/Constants';

const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: '#000000', fontSize: 64,marginLeft:20, marginBottom:80 }}>Auto Paradaise</Text>
                <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")}/>
                <Btn bgColor='white' textColor={darkGreen} btnLabel="Sign Up" Press={() => props.navigation.navigate("Signup")}/>

            </View>
        </Background>
    );
}

export default Home