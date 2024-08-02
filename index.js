import { BlurView } from '@react-native-community/blur'
import React from 'react'
import {View, Platform} from 'react-native'
import {Svg, GaussianBlur} from 'react-native-svg'

const Blurzen = ({children, intensity= 10, style, backgroundColor = 'white', aopacity=0.5 })=>{
    if(Platform.OS === 'ios'){
        return(
            <BlurView style={{flex:1}} blurType='light' blurAmount={intensity}>
                {children}
            </BlurView>
        )
    }
return (
    <View style={[{flex:1, backgroundColor:backgroundColor, opacity:aopacity }, style]}>
        <Svg height={'100%'} width={'100%'}>
            <GaussianBlur stdDeviation={intensity}>
                {children}
            </GaussianBlur>
        </Svg>
    </View>
)    
}

export default Blurzen