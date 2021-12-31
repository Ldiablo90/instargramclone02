import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native'
import Header from '../components/Header'
import Stores from '../components/Stories'
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stores/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor: 'black',
        flex:1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
})
export default HomeScreen
