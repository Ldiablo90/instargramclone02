import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import LoginForm from '../components/loginScreen/LoginForm'

const ISTARGRAM_LOGO = "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png"

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: ISTARGRAM_LOGO, width:70, height:70 }}/>
            </View>
            <LoginForm navigation={navigation} />
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

export default LoginScreen
