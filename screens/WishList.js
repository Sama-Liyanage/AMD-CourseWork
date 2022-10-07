import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useEffect, useState } from 'react';
import Background from '../components/Background';

export default function WishList() {
    const [posts, setPosts] = useState([]);

    const cars = [
        {
            registration_no: "SP GHJ6-7889",
            model: "Toyoya Axio",
            currentOwner: "Mr.Kamal Gunarathna",
        },
        {
            registration_no: "WP DJH-5612",
            model: "Mercedes",
            currentOwner: "Mr.Nimal Ekanayaka",
        },
        {
            registration_no: "SP RTHK-8567",
            model: "Suzuki AltoK10",
            currentOwner: "Mr.Gunasekara",
        },
        {
            registration_no: "CP SKH-567",
            model: "Toyota-Prius",
            currentOwner: "Mrs.Indrani",
        },
        {
            registration_no: "SP RTHK-8567",
            model: "Toyota Allion",
            currentOwner: "Mr.Gunasekara",
            image: require('../assets/images/avatars/toyotaAllion.png'),

        },
        {
            registration_no: "CP SKH-567",
            model: "Perodua Sedan",
            currentOwner: "Mrs.Indrani",
        },
        {
            registration_no: "CP SKH-567",
            model: "Perodua Sedan",
            currentOwner: "Mrs.Indrani",
        },
        {
            registration_no: "CP SKH-567",
            model: "Perodua Sedan",
            currentOwner: "Mrs.Indrani",
        },
        {
            registration_no: "CP SKH-567",
            model: "Perodua Sedan",
            currentOwner: "Mrs.Indrani",
        },

    ];

    useEffect(() => {
        setPosts(cars);
    }, []
    )

    const call = (props) => {
        console.log(props);
    }

    headerComponent = () => {
        return <Text style={styles.listHeadLine} >Vehicles</Text>
    }

    itemSeparator = () => {
        return <View style={styles.separator} />
    }

    return (

        <View style={styles.container}>
            <FlatList
                ListHeaderComponentStyle={styles.listHeader}
                ListHeaderComponent={headerComponent}
                ItemSeparatorComponent={itemSeparator}
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ borderWidth: 1,borderRadius:20, marginBottom: '5%', padding: 30 ,backgroundColor:'#e3f2fd'}} onPress={() => { call(item) }}>
                        <Text style={{ marginBottom: 10, fontWeight: 'bold' }} >{item.model}</Text>
                        <Text style={{ marginBottom: 10 }} >{item.currentOwner}</Text>
                    </TouchableOpacity>
                }
            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    separator: {
        marginLeft: 20,
        marginBottom: 20,
        height: 1,
        width: '100%',
        backgroundColor: '#000000',
    },
    listHeader: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    listHeadLine: {
        color: 'listHeadLine',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
    },
    // avatarContainer: {
    //     backgroundColor: '#ffffff',
    //     borderRadius: 100,
    //     height: 89,
    //     width: 89,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // avatar: {
    //     height: 40,
    //     width: 70,
    // },
    item: {
        backgroundColor: '#4a148c',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 30,
        width: '10%',
        borderRadius: 20
    }
})

