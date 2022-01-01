import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native'
import Header from '../components/Header'
import Stores from '../components/Stories'
import Post from '../components/Post'

import { POSTS } from '../data/posts'
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stores />
            <ScrollView>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index}/>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
})
export default HomeScreen
