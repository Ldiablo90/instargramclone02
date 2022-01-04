import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Stores from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'

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
            <BottomTabs icons={bottomTabIcons} />
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
