import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import SignupForm from '../components/signupScreen/SignupForm'

const ISTARGRAM_LOGO = "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png"

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: ISTARGRAM_LOGO, width:70, height:70 }}/>
            </View>
            <SignupForm navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        paddingTop:50,
        paddingHorizontal:12
    },
    logoContainer:{
        alignItems: 'center',
        marginTop:50
    }
})

export default SignupScreen