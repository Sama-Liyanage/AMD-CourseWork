import React from 'react'
import {TouchableOpacity ,Text} from 'react-native';


export default function Btn({bgColor,btnLabel,textColor,Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        paddingVertical: 15,
        marginVertical: 20,
        marginLeft:30
      }}>
      <Text style={{color: textColor, fontSize: 20, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
