import React from 'react';
import {Text,View,StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export default function Products() {
    return (
        <View style={styles.container}>
            <Text>
                Open up App.js to start working on your app
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
});
