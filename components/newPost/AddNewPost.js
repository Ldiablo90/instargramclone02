import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <View>
            <Header />
            <FormikPostUploader />
        </View>
    )
}

const Header = () => (
    <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image
                    source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>ADD NEW POST</Text>
            <Text></Text>
        </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontWeight: '600',
        fontSize:20,
        marginRight: 23
    }
})

export default AddNewPost
