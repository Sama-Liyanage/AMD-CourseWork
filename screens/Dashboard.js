import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Screens
import VehicleDetails from './VehicleDetails';
import WishList from './WishList';
import AddVehicle from './AddVehicle'


const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    // <NavigationContainer>
    <Tab.Navigator headerMode={'none'}>
      <Tab.Screen name="Wish List"
        options={{
          tabBarIcon: () => (<Image source={require("../assets/icon/love.png")} style={{ width: 20, height: 20 }} />), header: () => null
        }}
        component={WishList} />
      <Tab.Screen name="Vehicle Information"
        options={{
          tabBarIcon: () => (<Image source={require("../assets/icon/info.png")} style={{ width: 20, height: 20 }} />), header: () => null
        }}
        component={VehicleDetails} />
         <Tab.Screen name="Add Vehicle"
        options={{
          tabBarIcon: () => (<Image source={require("../assets/icon/plus-sign.png")} style={{ width: 20, height: 20 }} />), header: () => null
        }}
        component={AddVehicle} />



    </Tab.Navigator>
    // </NavigationContainer>

  );
}
