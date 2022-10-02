import { View, ImageBackground } from 'react-native'
import React, { Children } from 'react'

const Background = ({ Children }) => {
    return (
        <View>
           <ImageBackground source={require("../images/coverImage.jpg")} style={{height:'100%'}}/>
            <View style={{position:"absolute"}}>
                {Children}
            </View>
        </View>
    )
}

export default Background;