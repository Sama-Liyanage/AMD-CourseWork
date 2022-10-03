import React from 'react';
import { Text, View, StyleSheet,FlatList} from 'react-native';



export default function Products() {
    const cars = [
        {
            registration_no:"SP GHJ6-7889",
            model:"Acura ZDX",
            currentOwner:"Mr.Kamal Gunarathna"
        },
        {
            registration_no:"WP DJH-5612",
            model:"Toyota Corolla",
            currentOwner:"Mr.Nimal Ekanayaka"
        },
        {
            registration_no:"SP RTHK-8567",
            model:"Hyundai New i10 S 2017",
            currentOwner:"Mr.Gunasekara"
        },
        {
            registration_no:"CP SKH-567",
            model:"Mahindra Marazzo",
            currentOwner:"Mrs.Indrani"
        },
    ];

     const oneCar=({item})=>(
        <Text>{item.model}</Text>
     )


    return (
        <View>
           <FlatList
            data={cars}
            renderItem={oneCar}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
