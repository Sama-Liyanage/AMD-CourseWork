import { NativeBaseProvider, ScrollView } from 'native-base';
import React from 'react'
import { FlatList, SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import Background from '../components/Background'

export default function WishList(navigation) {

    const cars = [
        {
            registration_no: "SP GHJ6-7889",
            model: "Toyoya Axio",
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

    const oneCar = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.avatarContainer}>
                <Image source={item.image} style={styles.avatar} />
            </View>

            <Text style={styles.model} >{item.model}</Text>
        </View>
    )

    headerComponent = () => {
        return <Text style={styles.listHeadLine} >Cars</Text>
    }

    itemSeparator = () => {
        return <View style={styles.separator} />
    }

    return (
      
            <SafeAreaView>
                    <FlatList
                        ListHeaderComponentStyle={styles.listHeader}
                        ListHeaderComponent={headerComponent}
                        data={cars}
                        renderItem={oneCar}
                        ItemSeparatorComponent={itemSeparator}
                        ListEmptyComponent={<Text>This is a list of Cars Information</Text>}
                    />  
                             
            </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    separator: {
        marginLeft:30,
        width: '100%',
        height: 1,
        width: '80%',
        backgroundColor: '#000000',
    },
    listHeader: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHeadLine: {
        color: 'listHeadLine',
        fontSize: 21,
        fontWeight: 'bold'
    },
    avatarContainer: {
       backgroundColor:'#ffffff',
       borderRadius:100,
       height:89,
       width:89,
       justifyContent:'center',
       alignItems:'center'
    },
    avatar:{
        height:40,
        width:70,
    },
    item: {
        backgroundColor: '#00867d',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 30,
        width: '80%',
    }
})


