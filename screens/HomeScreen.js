import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native'

import Header from '../components/home/Header'
import Stores from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { POSTS } from '../data/posts'
import { firebase, db } from '../firebase'


const HomeScreen = ({ navigation }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collectionGroup('posts')
            .orderBy('createAt','desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(post => ({ id: post.id, ...post.data() })))
            })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stores />
            <ScrollView>
                {
                    posts.map((post, index) => (
                        <Post post={post} key={index} />
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
