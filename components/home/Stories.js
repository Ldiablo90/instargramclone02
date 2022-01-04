import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {USERS.map((story, index) => (
                    <View key={index}>
                        <Image style={styles.story} source={require(`../../assets/users/${story.image}`)} />
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            {
                                story.user.length > 6 ?
                                    story.user.toLowerCase().slice(0,5) + '...' :
                                    story.user.toLowerCase()
                            }
                        </Text>
                    </View>
                ))}
            </ScrollView>
            <Text style={{ color: 'white' }}>STORES</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501",
        resizeMode: 'contain'
    }
})

export default Stories
