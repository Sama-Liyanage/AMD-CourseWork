import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView ,Button,Icon} from 'react-native';
import { darkGreen } from '../components/Constants';

export default function AddVehicle() {
    return (
        <View>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.text}>Add Vehicle</Text>
                    <TextInput style={styles.input1} placeholder='Registration Number' variant="subtle" />
                    <TextInput style={styles.input2} placeholder='Current Owner' variant="filled" />
                    <TextInput variant="filled" style={styles.input2} placeholder='Address' />
                    <TextInput variant="filled" style={styles.input2} placeholder='Model' />
                    <TextInput variant="filled" style={styles.input2} placeholder='Color' />
                    <TextInput variant="filled" style={styles.input2} placeholder='Year of Manufacture' />
                    <TextInput variant="filled" style={styles.input2} placeholder='Fuel' />
                    <TextInput variant="filled" style={styles.input2} placeholder='Price' />

                    <TouchableOpacity
                        style={styles.button1}
                    >
                        <Text style={{ color: ' #ffffff', fontSize: 20 }}>Save</Text>
                    </TouchableOpacity>

                  
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{ color: ' #ffffff', fontSize: 20 }}>Open Camera</Text>
                        </TouchableOpacity>

                    
                          
                        
                   


                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: '10%',
        fontSize: 25,
        color: '#000000'
    },
    input1: {
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 5

    },
    input2: {
        marginTop: '5%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 5
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#1565c0',
        height: 50,
        marginTop: '7%',

    }

})
