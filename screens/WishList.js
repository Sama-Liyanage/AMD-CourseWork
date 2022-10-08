import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useEffect, useState } from 'react';
import Background from '../components/Background';

export default function WishList(props) {
    const [posts, setPosts] = useState([]);

    const cars = [
        {
            registration_no: "SP GHJ6-7889",
            model: "Toyota Axio",
            currentOwner: "Mr.Kamal Gunarathna",
            image: require('../assets/images/avatars/toyotaaxio.jpg'),
        },
        {
            registration_no: "WP DJH-5612",
            model: "Mercedes",
            currentOwner: "Mr.Nimal Ekanayaka",
            image: require('../assets/images/avatars/mercedes.png'),
        },
        {
            registration_no: "SP RTHK-8567",
            model: "Suzuki AltoK10",
            currentOwner: "Mr.Gunasekara",
            image: require('../assets/images/avatars/suzuki.png'),
        },
        {
            registration_no: "CP SKH-567",
            model: "Toyota-Prius",
            currentOwner: "Mrs.Indrani",
            image: require('../assets/images/avatars/toyotaPrius.jpg'),
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
            image: require('../assets/images/avatars/peroduaSedan.jpg'),
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



    return (

        <View style={styles.container}>
            <FlatList
                ListHeaderComponentStyle={styles.listHeader}
                ListHeaderComponent={headerComponent}
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, marginBottom: '5%', padding: 30, backgroundColor: '#4fb3bf' }}
                        onPress={() => props.navigation.navigate("VehicleDetails", { obj: item.registration_no })} >
                        {/* <View style={{ alignItems: "center", justifyContent: "center", height: 40 }}> */}

                        <Text style={{ marginBottom: 10, fontWeight: 'bold' ,fontSize:20 ,marginLeft:70}} >{item.model}</Text>

                        {/* </View> */}
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
        padding: 0,
        marginVertical: 10,
        marginHorizontal: 30,
        width: '10%',
        borderRadius: 20
    }
})

